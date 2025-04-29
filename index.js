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
const uploadedFiles = {};

// Function to create the HTML element for a single audio event
function createAudioEventElement(file) {
    const fileBox = document.createElement('div');
    fileBox.className = 'card-glass rounded-xl p-5 flex flex-col justify-between backdrop-blur-xl';
    let audioPlayer = null; // To hold the audio element for preview
    let currentPreviewFile = null; // To track which file is loaded in the player

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
    fileInputSingle.addEventListener('change', (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            uploadedFiles[`D_${file.name}`] = uploadedFile;
            uploadedFiles[`F_${file.name}`] = uploadedFile;
        } else {
            // Clear if the user cancels file selection
            delete uploadedFiles[`D_${file.name}`];
            delete uploadedFiles[`F_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays(); // Update filename display
    });

    // Event listener for the desktop file input
    fileInputDesktop.addEventListener('change', (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            uploadedFiles[`D_${file.name}`] = uploadedFile;
        } else {
            delete uploadedFiles[`D_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays(); // Update filename display
    });

    // Event listener for the fullscreen file input
    fileInputFullscreen.addEventListener('change', (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            uploadedFiles[`F_${file.name}`] = uploadedFile;
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
            audioPlayer.play();
            previewButton.innerHTML = pauseIconSvg;
        } else {
            audioPlayer.pause();
            audioPlayer.currentTime = 0; // Reset playback to start
            previewButton.innerHTML = playIconSvg;
        }
    });

    // Initial setup for filename display
    updateFileNameDisplays();

    return fileBox;
}

// Generate UI elements for each audio file
audioFiles.forEach(file => {
    const fileElement = createAudioEventElement(file);
    fileContainer.appendChild(fileElement);
});

// Event listener for the download button
downloadAllButton.addEventListener('click', () => {
    // Get pack name from input or use default
    const packNameInput = document.getElementById('packName');
    const packName = packNameInput.value.trim() || 'PlayniteSoundPack';
    
    // Generate zip filename
    const zipFileName = `${packName}.zip`;
    
    Object.entries(uploadedFiles).forEach(([fileName, file]) => {
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName + '.' + file.name.split('.').pop(); // Keep the original file extension
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
});