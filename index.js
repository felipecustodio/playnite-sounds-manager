const audioFiles = [
    { name: 'ApplicationStarted', description: 'Sound played when the application starts' },
    { name: 'ApplicationStopped', description: 'Sound played when the application stops' },
    { name: 'GameInstalled', description: 'Sound played when a game is installed' },
    { name: 'GameSelected', description: 'Sound played when a game is selected' },
    { name: 'GameStarted', description: 'Sound played when a game starts' },
    { name: 'GameStarting', description: 'Sound played while a game is starting' },
    { name: 'GameStopped', description: 'Sound played when a game stops' },
    { name: 'GameUninstalled', description: 'Sound played when a game is uninstalled' },
    { name: 'LibraryUpdated', description: 'Sound played when the game library is updated' }
];

const fileContainer = document.getElementById('fileContainer');
const downloadAllButton = document.getElementById('downloadAll');
const uploadedFiles = {};

audioFiles.forEach(file => {
    const fileBox = document.createElement('div');
    fileBox.className = 'bg-white p-6 rounded-lg shadow-md';
    fileBox.innerHTML = `
        <h3 class="text-xl font-semibold mb-2 text-gray-700">${file.name}</h3>
        <p class="text-gray-600 mb-4">${file.description}</p>
        <div id="fileInputs_${file.name}" class="space-y-4">
            <div id="singleInput_${file.name}" class="hidden">
                <label for="file_${file.name}" class="block text-sm font-medium text-gray-700">Upload Audio (for both Desktop and Fullscreen)</label>
                <input type="file" accept="audio/*" id="file_${file.name}" class="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100">
            </div>
            <div id="doubleInput_${file.name}">
                <div class="mb-4">
                    <label for="file_D_${file.name}" class="block text-sm font-medium text-gray-700">Upload Audio (Desktop Version)</label>
                    <input type="file" accept="audio/*" id="file_D_${file.name}" class="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100">
                </div>
                <div>
                    <label for="file_F_${file.name}" class="block text-sm font-medium text-gray-700">Upload Audio (Fullscreen Version)</label>
                    <input type="file" accept="audio/*" id="file_F_${file.name}" class="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100">
                </div>
            </div>
        </div>
        <div class="mt-4">
            <label class="inline-flex items-center">
                <input type="checkbox" id="same_${file.name}" class="form-checkbox h-5 w-5 text-blue-600">
                <span class="ml-2 text-gray-700">Use same audio for both Desktop and Fullscreen</span>
            </label>
        </div>
    `;
    fileContainer.appendChild(fileBox);

    const sameAudioCheckbox = fileBox.querySelector(`#same_${file.name}`);
    const singleInput = fileBox.querySelector(`#singleInput_${file.name}`);
    const doubleInput = fileBox.querySelector(`#doubleInput_${file.name}`);
    const fileInput = fileBox.querySelector(`#file_${file.name}`);
    const fileInputD = fileBox.querySelector(`#file_D_${file.name}`);
    const fileInputF = fileBox.querySelector(`#file_F_${file.name}`);

    sameAudioCheckbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            singleInput.classList.remove('hidden');
            doubleInput.classList.add('hidden');
        } else {
            singleInput.classList.add('hidden');
            doubleInput.classList.remove('hidden');
        }
    });

    fileInput.addEventListener('change', (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            uploadedFiles[`D_${file.name}`] = uploadedFile;
            uploadedFiles[`F_${file.name}`] = uploadedFile;
        }
    });

    fileInputD.addEventListener('change', (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            uploadedFiles[`D_${file.name}`] = uploadedFile;
        }
    });

    fileInputF.addEventListener('change', (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            uploadedFiles[`F_${file.name}`] = uploadedFile;
        }
    });
});

downloadAllButton.addEventListener('click', () => {
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