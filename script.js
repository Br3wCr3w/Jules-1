document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const backgroundMap = document.getElementById('background-map');
    const mapUpload = document.getElementById('map-upload');
    const cellSize = 30; // 30px per cell

    function generateGrid(width, height) {
        gridContainer.innerHTML = ''; // Clear existing grid
        const cols = Math.floor(width / cellSize);
        const rows = Math.floor(height / cellSize);

        gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;

        for (let i = 0; i < rows * cols; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            gridContainer.appendChild(cell);
        }
    }

    backgroundMap.onload = () => {
        generateGrid(backgroundMap.width, backgroundMap.height);
    };

    // Handle the case where the image is already cached and the onload event doesn't fire
    if (backgroundMap.complete) {
        backgroundMap.onload();
    }

    mapUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                backgroundMap.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
