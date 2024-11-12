// Закриття блоків
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    });
});

// Активація комірок таблиці
const cells = document.querySelectorAll('.table-cell');
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// Підрахунок суми активованих комірок
document.getElementById('calculate-sum').addEventListener('click', function() {
    let sum = 0;
    document.querySelectorAll('.table-cell.active').forEach(activeCell => {
        sum += parseInt(activeCell.textContent);
    });
    document.getElementById('sum-output').textContent = sum;
});

// Скидання активованих комірок
document.getElementById('reset-cells').addEventListener('click', function() {
    document.querySelectorAll('.table-cell.active').forEach(activeCell => {
        activeCell.classList.remove('active');
    });
    document.getElementById('sum-output').textContent = 0;
});