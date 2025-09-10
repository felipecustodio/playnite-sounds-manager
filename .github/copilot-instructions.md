# Playnite Sounds Manager

Playnite Sounds Manager is a static web application that helps users create sound packs for the Playnite Sounds extension. It allows users to upload audio files for different game events, converts them to WAV format, and packages them into a ZIP file for easy installation.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

- **Run the application**:
  - `cd /home/runner/work/playnite-sounds-manager/playnite-sounds-manager`
  - `python3 -m http.server 3000` (starts web server on port 3000)
  - Navigate to `http://localhost:3000/index.html` in browser
  - NEVER CANCEL the web server - let it run while testing

- **Test application functionality**:
  - Always manually validate the web application after making changes
  - Test file upload functionality by clicking "Audio (Desktop & Fullscreen)" buttons
  - Test form validation by clicking "Download Sound Pack" without files (should show alert)
  - Test pack naming by entering text in "Enter sound pack name" field
  - Test checkbox functionality for "Use separate desktop/fullscreen audio"

## Validation

- **ALWAYS manually validate changes via browser testing** - this is the primary validation method
- Create and test complete user scenarios: upload audio file → enter pack name → download ZIP
- Verify that JavaScript functionality works without errors in browser console
- Test that external CDN dependencies load properly (TailwindCSS, JSZip, Google Fonts)
- If CDNs are blocked, the app should still function with degraded styling
- **NO BUILD PROCESS EXISTS** - changes to HTML/CSS/JS are immediately reflected

## Repository Structure

```
.
├── README.md                    # Basic project description
├── index.html                   # Main application HTML with embedded CSS
├── index.js                     # Core JavaScript functionality
├── assets/                      # Static assets
│   ├── bg-optimized.jpg        # Background image
│   ├── playnite-optimized.png  # Playnite logo
│   └── ...                     # Other image assets
├── .vscode/
│   └── launch.json             # VS Code debug config for Chrome at localhost:3000
├── .gitignore                  # Standard Node.js gitignore (though no Node.js used)
└── favicon.ico                 # Site favicon
```

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: TailwindCSS (loaded from CDN)
- **Dependencies**: JSZip (for ZIP file creation, loaded from CDN)
- **No Build Process**: Static files served directly
- **No Package Manager**: No npm, yarn, or package.json
- **No Testing Framework**: Manual browser testing only
- **No Linting**: No ESLint, Prettier, or other code quality tools configured

## Key Files

### index.html
- Contains the complete UI structure and styling
- Includes embedded CSS for custom styling and animations
- Loads external dependencies: TailwindCSS, JSZip, Google Fonts
- Contains JavaScript configuration for TailwindCSS
- Includes collapsible instruction card and main application interface

### index.js
- Core application logic (27KB+ of JavaScript)
- Audio conversion utilities (WAV format conversion)
- File upload handling and validation
- ZIP generation and download functionality
- UI event handlers and state management

### assets/
- Static images used in the application
- Background image for visual styling
- Playnite logo for branding

## Common Development Tasks

### Making UI Changes
- Edit `index.html` directly for structure and styling changes
- Refresh browser to see changes immediately
- Test responsiveness across different screen sizes
- Verify that TailwindCSS classes work as expected

### Making JavaScript Changes
- Edit `index.js` directly for functionality changes
- Refresh browser and test affected features immediately
- Check browser console for any JavaScript errors
- Test audio file upload and conversion features thoroughly

### Testing Audio Functionality
- Create or find test audio files (MP3, WAV, OGG, etc.)
- Upload files using the file input buttons
- Verify audio conversion to WAV format works
- Test ZIP generation and download with actual files
- Verify file naming conventions match Playnite requirements

### Debugging
- Use browser Developer Tools Console for JavaScript errors
- Use Network tab to verify external CDN resources load
- Use VS Code with the provided launch.json configuration
- Start web server: `python3 -m http.server 3000`
- Launch VS Code debugger to connect to Chrome

## Application Features

### Sound Event Management
The application manages 9 different Playnite sound events:
- ApplicationStarted
- ApplicationStopped  
- GameInstalled
- GameSelected
- GameStarted
- GameStarting
- GameStopped
- GameUninstalled
- LibraryUpdated

### File Upload Options
- Single file mode: Same audio for desktop and fullscreen
- Separate file mode: Different audio for desktop vs fullscreen
- Audio format conversion: Automatically converts to WAV format
- File preview: Play uploaded audio files before downloading

### ZIP Package Generation
- Generates ZIP file with proper Playnite naming convention
- Includes custom pack naming functionality
- Handles WAV conversion during package creation
- Provides download with user-specified filename

## Validation Scenarios

After making any changes, always test these scenarios:

1. **Basic Upload Flow**:
   - Upload an audio file to any sound event
   - Enter a pack name
   - Click "Download Sound Pack"
   - Verify ZIP file downloads with correct name

2. **Dual Mode Testing**:
   - Check "Use separate desktop/fullscreen audio" for any event
   - Upload different files for desktop and fullscreen
   - Verify both files are included in ZIP package

3. **Audio Conversion Testing**:
   - Upload non-WAV audio files (MP3, OGG, M4A)
   - Verify automatic conversion to WAV format
   - Test that converted files play correctly

4. **Error Handling**:
   - Try to download without uploading any files
   - Verify appropriate error messages appear
   - Test with invalid or corrupted audio files

## Common Issues and Solutions

### External Dependencies Not Loading
- CDNs may be blocked in development environments
- Application core functionality still works without styling
- TailwindCSS failure results in unstyled but functional interface
- JSZip failure prevents ZIP generation - this is critical functionality

### Audio Conversion Issues  
- Browser audio decoding may fail on some file formats
- Original file is used if conversion fails (graceful degradation)
- Test with common formats: MP3, WAV, OGG, M4A

### File Upload Problems
- Modern browsers require HTTPS for some audio features
- File size limits may apply in browser
- Test with various audio file sizes and formats

## Development Environment Setup

### Required Tools
- Python 3 (for simple HTTP server)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended with provided config)

### Optional Tools
- Live reload extensions for faster development
- Browser developer tools for debugging
- Audio editing software for creating test files

## Performance Considerations

- Audio conversion happens in browser using Web Audio API
- Large audio files may cause performance issues
- ZIP generation is client-side and may be slow for many/large files
- No server-side processing or storage required

## Security Considerations

- All processing happens client-side (no server data exposure)
- Audio files never leave the user's browser
- External CDN dependencies introduce some security considerations
- File uploads are handled entirely in JavaScript (no server upload)