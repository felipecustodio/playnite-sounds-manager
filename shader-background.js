// Vanilla WebGL Shader Background Implementation
// Black and Orange themed shader animation for Playnite

class ShaderBackground {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.gl = null;
        this.program = null;
        this.positionBuffer = null;
        this.startTime = Date.now();
        
        this.init();
        this.animate();
        this.handleResize();
    }

    init() {
        // Get WebGL context
        this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
        if (!this.gl) {
            console.error('WebGL not supported');
            return;
        }

        // Set canvas size
        this.handleResize();

        // Create shader program
        this.createShaderProgram();
        
        // Create geometry (full screen quad)
        this.createGeometry();

        // Add event listeners
        window.addEventListener('resize', () => this.handleResize());
    }

    createShaderProgram() {
        const vertexShaderSource = `
            attribute vec2 a_position;
            varying vec2 vUv;
            
            void main() {
                vUv = a_position * 0.5 + 0.5;
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

        // Simplified fragment shader with black/orange theme
        const fragmentShaderSource = `
            precision mediump float;
            uniform float iTime;
            uniform vec2 iResolution;
            varying vec2 vUv;
            
            // Noise functions
            float random(vec2 st) {
                return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
            }
            
            float noise(vec2 st) {
                vec2 i = floor(st);
                vec2 f = fract(st);
                
                float a = random(i);
                float b = random(i + vec2(1.0, 0.0));
                float c = random(i + vec2(0.0, 1.0));
                float d = random(i + vec2(1.0, 1.0));
                
                vec2 u = f * f * (3.0 - 2.0 * f);
                
                return mix(a, b, u.x) + 
                       (c - a) * u.y * (1.0 - u.x) + 
                       (d - b) * u.x * u.y;
            }
            
            float fbm(vec2 st) {
                float value = 0.0;
                float amplitude = 0.5;
                float frequency = 0.0;
                
                for (int i = 0; i < 6; i++) {
                    value += amplitude * noise(st);
                    st *= 2.0;
                    amplitude *= 0.5;
                }
                return value;
            }
            
            void main() {
                vec2 uv = vUv;
                vec2 st = uv * 3.0;
                
                // Animate the noise
                vec2 q = vec2(fbm(st + 0.0 * iTime),
                             fbm(st + vec2(1.0)));
                
                vec2 r = vec2(fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * iTime),
                             fbm(st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * iTime));
                
                float f = fbm(st + r);
                
                // Create dynamic movement
                f += 0.1 * sin(10.0 * uv.x + iTime * 2.0);
                f += 0.1 * cos(8.0 * uv.y + iTime * 1.5);
                
                // Black to orange color scheme
                vec3 blackColor = vec3(0.02, 0.02, 0.02);  // Very dark black
                vec3 darkOrange = vec3(0.8, 0.3, 0.0);     // Dark orange
                vec3 brightOrange = vec3(1.0, 0.5, 0.1);   // Bright orange
                
                // Create color mixing based on noise
                vec3 color = mix(blackColor, darkOrange, smoothstep(0.0, 0.6, f));
                color = mix(color, brightOrange, smoothstep(0.6, 1.0, f));
                
                // Add some variation
                color += 0.1 * sin(f * 10.0 + iTime);
                
                // Darken overall for background effect
                color *= 0.7;
                
                gl_FragColor = vec4(color, 1.0);
            }
        `;

        // Create shaders
        const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentShaderSource);

        // Create program
        this.program = this.gl.createProgram();
        this.gl.attachShader(this.program, vertexShader);
        this.gl.attachShader(this.program, fragmentShader);
        this.gl.linkProgram(this.program);

        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            console.error('Unable to initialize the shader program: ' + this.gl.getProgramInfoLog(this.program));
        }

        // Get uniform locations
        this.timeUniformLocation = this.gl.getUniformLocation(this.program, 'iTime');
        this.resolutionUniformLocation = this.gl.getUniformLocation(this.program, 'iResolution');
        this.positionAttributeLocation = this.gl.getAttribLocation(this.program, 'a_position');
    }

    createShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('An error occurred compiling the shaders: ' + this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    createGeometry() {
        // Create a full screen quad
        const positions = [
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1,
        ];

        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        // Clear and setup viewport
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        this.gl.clearColor(0.02, 0.02, 0.02, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        // Use shader program
        this.gl.useProgram(this.program);

        // Set uniforms
        const elapsed = (Date.now() - this.startTime) * 0.001;
        this.gl.uniform1f(this.timeUniformLocation, elapsed);
        this.gl.uniform2f(this.resolutionUniformLocation, this.canvas.width, this.canvas.height);

        // Bind position buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.enableVertexAttribArray(this.positionAttributeLocation);
        this.gl.vertexAttribPointer(this.positionAttributeLocation, 2, this.gl.FLOAT, false, 0, 0);

        // Draw
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }

    handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';

        if (this.gl) {
            this.gl.viewport(0, 0, width, height);
        }
    }
}

// Initialize shader background when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new ShaderBackground('shader-canvas');
});