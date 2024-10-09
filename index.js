const gameBoard = document.getElementById('gameBoard');

// יצירת תאי הלוח
for (let i = 0; i < 10; i++) {
    const rows = document.getElementsByClassName('row');
    const row = document.createElement('div');
    row.classList.add('row');
    gameBoard.appendChild(row);

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.id = `${i}${j}`;
        (i === 0 || i === 9 || j === 0 || j === 9) ? cell.classList.add('edge-cell'): cell.classList.add('cell');
        rows[i].appendChild(cell);
    }
}

// 🍪🍭🍬😋
// הפעלת הפונקציה כל 2 שניות
// setInterval(addBall, 2000);

let emojiHead = { x: 1, y: 1 }; // מיקום התחלתי של הנחש
const cell = document.getElementById(`${emojiHead.x}${emojiHead.y}`);
cell.classList.add('emoji');

// פונקציה להוספת אייקון למשבצת
function drawEmoji() {
    const cell = document.getElementById(`${emojiHead.x}${emojiHead.y}`);
    if (cell.className == 'cell')
        cell.classList.add('emoji');
}

// פונקציה להזזת הנחש
function moveEmoji(direction) {
    // הסר את האייקון מהמשבצת הנוכחית
    const currentCell = document.getElementById(`${emojiHead.x}${emojiHead.y}`);
    currentCell.classList.remove('emoji');
    // עדכן את המיקום החדש לפי הכיוון
    switch (direction) {
        case 'up':
            emojiHead.x--;
            break;
        case 'down':
            emojiHead.x++;
            break;
        case 'right':
            emojiHead.y++;
            break;
        case 'left':
            emojiHead.y--;
            break;
    }
    drawEmoji();
}

// אירוע הקשבה ללחיצות מקשים
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            moveEmoji('up');
            break;
        case 'ArrowDown':
            moveEmoji('down');
            break;
        case 'ArrowRight':
            moveEmoji('right');
            break;
        case 'ArrowLeft':
            moveEmoji('left');
            break;
            // ... מקרים נוספים לכיוונים אחרים
    }
});

// התחל את המשחק
drawEmoji();