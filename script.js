document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const rows = 20;
    const cols = 20;

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        gridContainer.appendChild(cell);
    }
});
