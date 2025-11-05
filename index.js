const audioFiles = [
    {
        name: 'ApplicationStarted',
        description: 'Sound played when the application starts',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'ApplicationStopped',
        description: 'Sound played when the application stops',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameInstalled',
        description: 'Sound played when a game is installed',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameSelected',
        description: 'Sound played when a game is selected',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameStarted',
        description: 'Sound played when a game starts',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1z" /><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameStarting',
        description: 'Sound played while a game is starting',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameStopped',
        description: 'Sound played when a game stops',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameUninstalled',
        description: 'Sound played when a game is uninstalled',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'LibraryUpdated',
        description: 'Sound played when the game library is updated',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" /></svg>'
    }
];

const fileContainer = document.getElementById('fileContainer');
const downloadAllButton = document.getElementById('downloadAll');
const previewAllButton = document.getElementById('previewAll');
const notificationContainer = document.getElementById('notificationContainer');
const uploadedFiles = {};
const cardElements = {};

const previewAllPlayIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.5 4.5a1 1 0 011-1h2.036a1 1 0 01.832.445l1.3 1.942H15.5a1 1 0 011 1V9h-2V7.887H9.847a1 1 0 01-.832-.445L7.715 5.5H5.5V15h3v2h-3a1 1 0 01-1-1v-11z" clip-rule="evenodd" />
        <path d="M12 12.5a.5.5 0 01.79-.407l2.5 1.833a.5.5 0 010 .814l-2.5 1.833A.5.5 0 0112 16.166V12.5z" />
    </svg>
`;

const previewAllStopIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M6 5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H6z" clip-rule="evenodd" />
    </svg>
`;

function showNotification(message, type = 'info') {
    if (!notificationContainer) {
        alert(message);
        return;
    }

    const notification = document.createElement('div');
    notification.className = 'flex items-start gap-3 px-4 py-3 rounded-xl shadow-lg text-sm backdrop-blur-md border transition-opacity duration-300';

    const typeClasses = {
        info: 'bg-blue-500/20 border-blue-400/40 text-blue-100',
        success: 'bg-emerald-500/20 border-emerald-400/40 text-emerald-100',
        warning: 'bg-amber-500/20 border-amber-400/40 text-amber-100',
        error: 'bg-rose-500/25 border-rose-400/40 text-rose-100'
    };

    notification.classList.add(typeClasses[type] || typeClasses.info);
    notification.setAttribute('role', type === 'error' ? 'alert' : 'status');
    notification.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite');

    notification.innerHTML = `
        <div class="flex-1">${message}</div>
        <button type="button" class="ml-4 text-xs uppercase tracking-wide font-semibold opacity-70 hover:opacity-100 transition" aria-label="Dismiss notification">Dismiss</button>
    `;

    const dismissButton = notification.querySelector('button');
    let removeTimeout = setTimeout(removeNotification, 5000);

    function removeNotification() {
        if (!notification.parentElement) return;
        notification.classList.add('opacity-0');
        setTimeout(() => notification.remove(), 250);
    }

    dismissButton.addEventListener('click', () => {
        clearTimeout(removeTimeout);
        removeNotification();
    });

    notification.addEventListener('mouseenter', () => {
        clearTimeout(removeTimeout);
    });

    notification.addEventListener('mouseleave', () => {
        removeTimeout = setTimeout(removeNotification, 2500);
    });

    notificationContainer.appendChild(notification);
}

const previewAllController = {
    isPlaying: false,
    queue: [],
    currentAudio: null,
    currentUrl: null,
    currentEvent: null,
    resolveCurrent: null
};

function updatePreviewAllAvailability() {
    if (!previewAllButton) return;
    const hasAnyAudio = audioFiles.some(file => uploadedFiles[`D_${file.name}`] || uploadedFiles[`F_${file.name}`]);

    if (!hasAnyAudio && previewAllController.isPlaying) {
        stopPreviewAll();
    }

    previewAllButton.disabled = !hasAnyAudio;
    previewAllButton.setAttribute('aria-disabled', String(!hasAnyAudio));
}

function setPreviewAllButtonState(state) {
    if (!previewAllButton) return;
    if (state === 'playing') {
        previewAllButton.innerHTML = `${previewAllStopIcon}<span>Stop Preview</span>`;
        previewAllButton.classList.add('previewing-active');
        previewAllButton.setAttribute('aria-pressed', 'true');
    } else {
        previewAllButton.innerHTML = `${previewAllPlayIcon}<span>Preview All Sounds</span>`;
        previewAllButton.classList.remove('previewing-active');
        previewAllButton.setAttribute('aria-pressed', 'false');
    }
}

function clearAllCardPreviewing() {
    Object.values(cardElements).forEach(card => {
        card.classList.remove('previewing-all');
        const indicator = card.querySelector('.preview-all-indicator');
        if (indicator) {
            indicator.classList.add('hidden');
        }
        const previewButtonElement = card.querySelector('.preview-button');
        if (previewButtonElement) {
            previewButtonElement.classList.remove('animate-pulse');
        }
    });
}

function setCardPreviewing(eventName, isPreviewing) {
    const card = cardElements[eventName];
    if (!card) return;

    card.classList.toggle('previewing-all', isPreviewing);

    const indicator = card.querySelector('.preview-all-indicator');
    if (indicator) {
        indicator.classList.toggle('hidden', !isPreviewing);
    }

    const previewButtonElement = card.querySelector('.preview-button');
    if (previewButtonElement) {
        previewButtonElement.classList.toggle('animate-pulse', isPreviewing);
    }
}

function buildPreviewQueue() {
    return audioFiles
        .map(file => {
            const candidate = uploadedFiles[`D_${file.name}`] || uploadedFiles[`F_${file.name}`];
            if (!candidate) return null;
            return { eventName: file.name, file: candidate };
        })
        .filter(Boolean);
}

function stopPreviewAll() {
    previewAllController.isPlaying = false;

    if (previewAllController.currentAudio) {
        previewAllController.currentAudio.pause();
        previewAllController.currentAudio.currentTime = 0;
    }

    if (typeof previewAllController.resolveCurrent === 'function') {
        const resolver = previewAllController.resolveCurrent;
        previewAllController.resolveCurrent = null;
        resolver();
    }

    if (previewAllController.currentUrl) {
        URL.revokeObjectURL(previewAllController.currentUrl);
        previewAllController.currentUrl = null;
    }

    previewAllController.currentAudio = null;
    previewAllController.currentEvent = null;
    previewAllController.queue = [];

    clearAllCardPreviewing();
    setPreviewAllButtonState('idle');
    updatePreviewAllAvailability();
}

function playPreviewItem(eventName, file) {
    return new Promise(resolve => {
        if (!previewAllController.isPlaying) {
            resolve();
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        const audio = new Audio(objectUrl);

        previewAllController.currentAudio = audio;
        previewAllController.currentUrl = objectUrl;
        previewAllController.currentEvent = eventName;

        let resolved = false;

        const finish = () => {
            if (resolved) return;
            resolved = true;

            setCardPreviewing(eventName, false);

            audio.pause();
            audio.currentTime = 0;

            URL.revokeObjectURL(objectUrl);

            if (previewAllController.currentAudio === audio) {
                previewAllController.currentAudio = null;
                previewAllController.currentUrl = null;
                previewAllController.currentEvent = null;
            }

            previewAllController.resolveCurrent = null;
            resolve();
        };

        previewAllController.resolveCurrent = finish;

        audio.addEventListener('ended', finish, { once: true });
        audio.addEventListener('error', () => {
            showNotification(`Unable to play preview for ${eventName}.`, 'error');
            finish();
        }, { once: true });

        setCardPreviewing(eventName, true);

        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {
                showNotification(`Unable to play preview for ${eventName}.`, 'error');
                finish();
            });
        }
    });
}

async function handlePreviewAllClick(event) {
    if (event) event.preventDefault();
    if (!previewAllButton || previewAllButton.disabled) {
        return;
    }

    if (previewAllController.isPlaying) {
        stopPreviewAll();
        return;
    }

    const queue = buildPreviewQueue();
    if (queue.length === 0) {
        showNotification('Add at least one sound file to preview.', 'warning');
        return;
    }

    previewAllController.isPlaying = true;
    previewAllController.queue = queue;
    setPreviewAllButtonState('playing');
    clearAllCardPreviewing();

    for (const item of queue) {
        if (!previewAllController.isPlaying) {
            break;
        }
        await playPreviewItem(item.eventName, item.file);
    }

    if (previewAllController.isPlaying) {
        previewAllController.isPlaying = false;
    }

    stopPreviewAll();
}

// Audio conversion utilities
const audioUtils = {
    // Function to convert audio file to WAV
    convertToWAV: async function(audioFile) {
        // If it's already a WAV file, just return the file
        if (audioFile.name.toLowerCase().endsWith('.wav')) {
            return audioFile;
        }

        try {
            // Get audio data as ArrayBuffer
            const arrayBuffer = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.onerror = reject;
                reader.readAsArrayBuffer(audioFile);
            });

            // Create audio context
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Decode audio data
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

            // Convert to WAV
            const wavBlob = await this.audioBufferToWAV(audioBuffer);

            // Create a new file object with the WAV data
            const wavFile = new File([wavBlob],
                audioFile.name.replace(/\.[^/.]+$/, '.wav'),
                { type: 'audio/wav' }
            );

            return wavFile;
        } catch (error) {
            console.error('Error converting audio to WAV:', error);
            // Return original file if conversion fails
            return audioFile;
        }
    },

    // Function to convert AudioBuffer to WAV Blob
    audioBufferToWAV: function(buffer) {
        return new Promise(resolve => {
            const numOfChannels = buffer.numberOfChannels;
            const sampleRate = buffer.sampleRate;
            const format = 1; // PCM
            const bitDepth = 16;

            let result;
            if (numOfChannels === 2) {
                result = this.interleave(buffer.getChannelData(0), buffer.getChannelData(1));
            } else {
                result = buffer.getChannelData(0);
            }

            // Convert float32 to int16
            const volume = 0.8; // Prevent clipping
            const dataLength = result.length * 2; // 16-bit = 2 bytes
            const buffer16 = new Int16Array(result.length);

            for (let i = 0; i < result.length; i++) {
                const s = Math.max(-1, Math.min(1, result[i]));
                buffer16[i] = s < 0 ? s * 0x8000 * volume : s * 0x7FFF * volume;
            }

            const dataView = this.writeWAVBytes(buffer16, numOfChannels, sampleRate, format, bitDepth);
            const blob = new Blob([dataView], { type: 'audio/wav' });

            resolve(blob);
        });
    },

    // Function to interleave audio channels
    interleave: function(leftChannel, rightChannel) {
        const length = leftChannel.length + rightChannel.length;
        const result = new Float32Array(length);

        let index = 0;
        let inputIndex = 0;

        while (index < length) {
            result[index++] = leftChannel[inputIndex];
            result[index++] = rightChannel[inputIndex];
            inputIndex++;
        }

        return result;
    },

    // Function to write WAV header and data
    writeWAVBytes: function(samples, numChannels, sampleRate, format, bitDepth) {
        const bytesPerSample = bitDepth / 8;
        const blockAlign = numChannels * bytesPerSample;

        const buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
        const view = new DataView(buffer);

        // Write WAV header
        // "RIFF" chunk descriptor
        this.writeString(view, 0, 'RIFF');
        view.setUint32(4, 36 + samples.length * bytesPerSample, true);
        this.writeString(view, 8, 'WAVE');

        // "fmt " sub-chunk
        this.writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true); // fmt chunk size
        view.setUint16(20, format, true);
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * blockAlign, true); // byte rate
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, bitDepth, true);

        // "data" sub-chunk
        this.writeString(view, 36, 'data');
        view.setUint32(40, samples.length * bytesPerSample, true);

        // Write PCM data
        if (bitDepth === 16) {
            for (let i = 0; i < samples.length; i++) {
                view.setInt16(44 + i * bytesPerSample, samples[i], true);
            }
        }

        return view;
    },

    // Function to write a string to a DataView
    writeString: function(view, offset, string) {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    }
};

// Function to create the HTML element for a single audio event
function createAudioEventElement(file) {
    const fileBox = document.createElement('div');
    fileBox.className = 'card-glass rounded-xl p-5 flex flex-col justify-between backdrop-blur-xl';
    let audioPlayer = null; // To hold the audio element for preview
    let currentPreviewFile = null; // To track which file is loaded in the player

    fileBox.dataset.eventName = file.name;

    fileBox.innerHTML = `
        <div>
            <div class="flex justify-between items-center mb-3">
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full text-blue-400">
                        ${file.icon}
                    </div>
                    <h3 class="text-lg font-semibold title-gradient">${file.name}</h3>
                </div>
                <button title="Preview Sound" class="preview-button hidden w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-200 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <p class="text-sm text-gray-300 mb-4 opacity-80">${file.description}</p>
            <div id="fileInputsContainer_${file.name}" class="min-h-[120px]">
                <div id="fileInputs_${file.name}" class="space-y-3">
                    <div id="singleInput_${file.name}">
                        <label for="file_${file.name}" class="block text-xs font-medium text-gray-300 mb-1">Audio (Desktop & Fullscreen)</label>
                        <div class="flex items-center space-x-2">
                            <input type="file" accept="audio/*" id="file_${file.name}" class="input-file-style flex-grow">
                            <span id="fileName_single_${file.name}" class="text-xs text-gray-400 truncate max-w-[100px]" title=""></span>
                        </div>
                    </div>
                    <div id="doubleInput_${file.name}" class="hidden">
                        <div class="mb-3">
                            <label for="file_D_${file.name}" class="block text-xs font-medium text-gray-300 mb-1">Audio (Desktop)</label>
                            <div class="flex items-center space-x-2">
                                <input type="file" accept="audio/*" id="file_D_${file.name}" class="input-file-style flex-grow">
                                <span id="fileName_D_${file.name}" class="text-xs text-gray-400 truncate max-w-[100px]" title=""></span>
                            </div>
                        </div>
                        <div>
                            <label for="file_F_${file.name}" class="block text-xs font-medium text-gray-300 mb-1">Audio (Fullscreen)</label>
                            <div class="flex items-center space-x-2">
                                <input type="file" accept="audio/*" id="file_F_${file.name}" class="input-file-style flex-grow">
                                <span id="fileName_F_${file.name}" class="text-xs text-gray-400 truncate max-w-[100px]" title=""></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 pt-3 border-t border-white/10">
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" id="same_${file.name}" class="form-checkbox h-4 w-4 text-blue-500 rounded-md bg-white/10 border-none focus:ring-blue-400 focus:ring-offset-gray-900">
                <span class="ml-2 text-sm text-gray-300">Use separate desktop/fullscreen audio</span>
            </label>
        </div>
    `;

    // Add shared file input styles dynamically to avoid repetition in innerHTML
    fileBox.querySelectorAll('input[type="file"]').forEach(input => {
        input.className = 'input-file-style block w-full text-xs text-gray-300 cursor-pointer';
    });

    const previewIndicator = document.createElement('div');
    previewIndicator.className = 'preview-all-indicator hidden absolute top-4 right-4 px-2 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wide text-blue-100 backdrop-blur-sm';
    previewIndicator.setAttribute('aria-label', 'Currently previewing sound');
    previewIndicator.setAttribute('role', 'status');
    previewIndicator.setAttribute('aria-live', 'polite');
    previewIndicator.innerHTML = `
        <div class="flex items-center gap-1.5">
            <span class="flex items-center gap-[3px]">
                <span class="preview-wave"></span>
                <span class="preview-wave"></span>
                <span class="preview-wave"></span>
            </span>
            <span>Previewing</span>
        </div>
    `;
    fileBox.appendChild(previewIndicator);

    // Get references to elements
    const sameAudioCheckbox = fileBox.querySelector(`#same_${file.name}`);
    const singleInputContainer = fileBox.querySelector(`#singleInput_${file.name}`);
    const doubleInputContainer = fileBox.querySelector(`#doubleInput_${file.name}`);
    const fileInputSingle = fileBox.querySelector(`#file_${file.name}`);
    const fileInputDesktop = fileBox.querySelector(`#file_D_${file.name}`);
    const fileInputFullscreen = fileBox.querySelector(`#file_F_${file.name}`);
    const fileNameSingleSpan = fileBox.querySelector(`#fileName_single_${file.name}`);
    const fileNameDesktopSpan = fileBox.querySelector(`#fileName_D_${file.name}`);
    const fileNameFullscreenSpan = fileBox.querySelector(`#fileName_F_${file.name}`);
    const previewButton = fileBox.querySelector('.preview-button');
    const playIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
    </svg>`;
    const pauseIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M5.75 4.75a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-1.5zm6.5 0a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-1.5z" /></svg>`;

    // Function to update the displayed filename spans
    function updateFileNameDisplays() {
        const desktopFile = uploadedFiles[`D_${file.name}`];
        const fullscreenFile = uploadedFiles[`F_${file.name}`];
        const isChecked = sameAudioCheckbox.checked;

        // Update text and title attribute for potential truncation
        const singleFileName = desktopFile ? desktopFile.name : '';
        fileNameSingleSpan.textContent = singleFileName;
        fileNameSingleSpan.title = singleFileName;

        const desktopFileName = desktopFile ? desktopFile.name : '';
        fileNameDesktopSpan.textContent = desktopFileName;
        fileNameDesktopSpan.title = desktopFileName;

        const fullscreenFileName = fullscreenFile ? fullscreenFile.name : '';
        fileNameFullscreenSpan.textContent = fullscreenFileName;
        fileNameFullscreenSpan.title = fullscreenFileName;

        // Adjust visibility based on checkbox state - inverted now
        fileNameSingleSpan.classList.toggle('hidden', isChecked || !singleFileName);
        fileNameDesktopSpan.classList.toggle('hidden', !isChecked || !desktopFileName);
        fileNameFullscreenSpan.classList.toggle('hidden', !isChecked || !fullscreenFileName);
    }

    // Function to update preview button visibility and state
    function updatePreviewButton() {
        const fileToPreview = uploadedFiles[`D_${file.name}`] || uploadedFiles[`F_${file.name}`];
        if (fileToPreview) {
            previewButton.classList.remove('hidden');
            if (currentPreviewFile !== fileToPreview) {
                // Load new file if it changed
                if (audioPlayer) audioPlayer.pause();
                audioPlayer = new Audio(URL.createObjectURL(fileToPreview));
                currentPreviewFile = fileToPreview;
                previewButton.innerHTML = playIconSvg;
                audioPlayer.onended = () => { previewButton.innerHTML = playIconSvg; }; // Reset icon when finished
            }
        } else {
            previewButton.classList.add('hidden');
            if (audioPlayer) audioPlayer.pause();
            audioPlayer = null;
            currentPreviewFile = null;
        }

        updatePreviewAllAvailability();
    }

    // Event listener for the checkbox - INVERTED LOGIC
    sameAudioCheckbox.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        const desktopFileKey = `D_${file.name}`;
        const fullscreenFileKey = `F_${file.name}`;

        if (isChecked) {
            // Switching TO double input mode (now when checked)
            singleInputContainer.classList.add('hidden');
            doubleInputContainer.classList.remove('hidden');
            fileInputDesktop.value = ''; // Clear file inputs visually
            fileInputFullscreen.value = '';

            // Get the shared file to use as desktop file
            const fileFromSingle = uploadedFiles[desktopFileKey];
            if (fileFromSingle) {
                uploadedFiles[desktopFileKey] = fileFromSingle;
                // Clear the fullscreen file when separating
                delete uploadedFiles[fullscreenFileKey];
            } else {
                delete uploadedFiles[desktopFileKey];
                delete uploadedFiles[fullscreenFileKey];
            }
        } else {
            // Switching TO single input mode (now when unchecked)
            // Keep any file that was assigned to desktop
            const fileToKeep = uploadedFiles[desktopFileKey] || uploadedFiles[fullscreenFileKey];
            singleInputContainer.classList.remove('hidden');
            doubleInputContainer.classList.add('hidden');
            fileInputSingle.value = ''; // Clear file input visually

            if (fileToKeep) {
                uploadedFiles[desktopFileKey] = fileToKeep;
                uploadedFiles[fullscreenFileKey] = fileToKeep; // Both point to the same file
            } else {
                delete uploadedFiles[desktopFileKey];
                delete uploadedFiles[fullscreenFileKey];
            }
        }
        updatePreviewButton(); // Update preview state
        updateFileNameDisplays(); // Update filename display
    });

    // Event listener for the single file input
    fileInputSingle.addEventListener('change', async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            const wavFile = await audioUtils.convertToWAV(uploadedFile);
            uploadedFiles[`D_${file.name}`] = wavFile;
            uploadedFiles[`F_${file.name}`] = wavFile;
        } else {
            // Clear if the user cancels file selection
            delete uploadedFiles[`D_${file.name}`];
            delete uploadedFiles[`F_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays(); // Update filename display
    });

    // Event listener for the desktop file input
    fileInputDesktop.addEventListener('change', async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            const wavFile = await audioUtils.convertToWAV(uploadedFile);
            uploadedFiles[`D_${file.name}`] = wavFile;
        } else {
            delete uploadedFiles[`D_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays(); // Update filename display
    });

    // Event listener for the fullscreen file input
    fileInputFullscreen.addEventListener('change', async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            const wavFile = await audioUtils.convertToWAV(uploadedFile);
            uploadedFiles[`F_${file.name}`] = wavFile;
        } else {
            delete uploadedFiles[`F_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays(); // Update filename display
    });

    // Event listener for the preview button
    previewButton.addEventListener('click', () => {
        if (!audioPlayer) return;
        if (audioPlayer.paused) {
            const playResult = audioPlayer.play();
            if (playResult && typeof playResult.catch === 'function') {
                playResult.catch(() => {
                    previewButton.innerHTML = playIconSvg;
                    showNotification(`Unable to play preview for ${file.name}.`, 'error');
                });
            }
            previewButton.innerHTML = pauseIconSvg;
        } else {
            audioPlayer.pause();
            audioPlayer.currentTime = 0; // Reset playback to start
            previewButton.innerHTML = playIconSvg;
        }
    });

    // Initial setup for filename display
    updateFileNameDisplays();
    updatePreviewAllAvailability();

    return fileBox;
}

// Generate UI elements for each audio file
audioFiles.forEach(file => {
    const fileElement = createAudioEventElement(file);
    fileContainer.appendChild(fileElement);
    cardElements[file.name] = fileElement;
});

setPreviewAllButtonState('idle');
updatePreviewAllAvailability();

if (previewAllButton) {
    previewAllButton.addEventListener('click', handlePreviewAllClick);
}

// Event listener for the download button
downloadAllButton.addEventListener('click', async () => {
    console.log('Download button clicked - starting process');

    // Get pack name from input or use default
    const packNameInput = document.getElementById('packName');
    const packName = packNameInput.value.trim() || 'PlayniteSoundPack';
    console.log(`Using pack name: "${packName}"`);

    // Check if there are any files to download
    if (Object.keys(uploadedFiles).length === 0) {
        console.log('No files to download - showing alert');
        showNotification('No sound files have been added. Please add at least one sound file before downloading.', 'warning');
        return;
    }

    console.log(`Processing ${Object.keys(uploadedFiles).length} audio files...`);

    // Show spinner in the button
    const originalButtonContent = downloadAllButton.innerHTML;
    downloadAllButton.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="ml-2">Processing...</span>
    `;
    downloadAllButton.disabled = true;
    downloadAllButton.classList.add('opacity-80', 'cursor-not-allowed');
    console.log('Download button updated with spinner');

    // Create a processing message
    const processingDiv = document.createElement('div');
    processingDiv.className = 'fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50';
    processingDiv.innerHTML = `
        <div class="bg-white/10 rounded-xl p-6 max-w-md text-center">
            <svg class="animate-spin h-10 w-10 text-blue-400 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="text-white text-lg font-medium">Processing audio files...</p>
            <p class="text-gray-300 mt-2">Converting all files to WAV format.</p>
        </div>
    `;
    document.body.appendChild(processingDiv);
    console.log('Added processing overlay to the UI');

    try {
        console.log('Creating new JSZip instance');
        // Create a new zip file
        const zip = new JSZip();

        console.log('Starting to process audio files for the zip');
        // Add each file to the zip with the correct filename
        const promises = Object.entries(uploadedFiles).map(async ([fileKey, file], index) => {
            console.log(`Processing file ${index + 1}/${Object.keys(uploadedFiles).length}: ${fileKey}`);

            // Ensure the file is in WAV format
            console.log(`Converting ${fileKey} to WAV format (if needed)`);
            const wavFile = await audioUtils.convertToWAV(file);
            console.log(`Conversion for ${fileKey} complete`);

            return new Promise((resolve) => {
                console.log(`Reading file contents for ${fileKey}`);
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Create the correct filename for Playnite Sounds Mod with .wav extension
                    const zipFilename = `${fileKey}.wav`;
                    console.log(`Adding ${zipFilename} to the zip file`);
                    // Add the file to the zip
                    zip.file(zipFilename, e.target.result);
                    resolve();
                };
                reader.readAsArrayBuffer(wavFile);
            });
        });

        // Wait for all files to be added to the zip
        console.log('Waiting for all files to be processed and added to the zip');
        await Promise.all(promises);
        console.log('All files have been added to the zip');

        // Generate the zip file
        console.log('Generating final zip file...');
        const content = await zip.generateAsync({ type: 'blob' });
        console.log(`Zip file generated (${(content.size / 1024).toFixed(2)} KB)`);

        // Create download link and trigger download
        const zipFileName = `${packName}.zip`;
        console.log(`Creating download link for ${zipFileName}`);
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = zipFileName;
        document.body.appendChild(a);

        console.log('Triggering download');
        a.click();

        // Clean up
        console.log('Cleaning up temporary objects');
        setTimeout(() => {
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
            console.log('Download cleanup complete');
        }, 100);

    } catch (error) {
        console.error('Error creating zip file:', error);
        showNotification('An error occurred while creating the zip file. Please try again.', 'error');
    } finally {
        console.log('Removing processing overlay');
        document.body.removeChild(processingDiv);

        // Restore the button to its original state
        console.log('Restoring download button to original state');
        downloadAllButton.innerHTML = originalButtonContent;
        downloadAllButton.disabled = false;
        downloadAllButton.classList.remove('opacity-80', 'cursor-not-allowed');

        console.log('Download process complete');
    }
});