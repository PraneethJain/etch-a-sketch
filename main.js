const grid = document.querySelector('.grid');
const sizeButton = document.querySelector('#size')
const clearButton = document.querySelector('#clear')

window.N = 10;
sizeButton.addEventListener('click', e => {
    let input = parseInt(prompt("Creating an n by n grid. Enter the value of n"));
    if (input > 100 || input < 0) {
        alert("Please give a value of N 1 and 100 (both included)");
    } else {
        window.N = input;
    }
    generateNewGrid(window.N);
})

clearButton.addEventListener('click', e => {
    generateNewGrid(window.N);
})

let color = "#0000ff";
generateNewGrid(window.N);
function generateNewGrid(n) {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }
    for (let i=0; i<n; i++) {
        const row = document.createElement('div')
        row.classList.add('row');
        for (let j=0; j<n;j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener("mouseenter", e => {
                e.target.classList.add('active');
            });
            cell.addEventListener("mouseleave", e=> {
                e.target.classList.remove("active");
            })
            cell.addEventListener("mousedown", e=> {
                if (e.buttons == 1) {
                    e.target.style.backgroundColor = color;  
                     
                } else if (e.buttons == 4) {
                    e.target.style.backgroundColor = null;
                }
            })
            cell.addEventListener("mousemove", (e)=> {
                if (e.buttons == 1) {
                    e.target.style.backgroundColor = color;
                } else if (e.buttons == 4) {
                    e.target.style.backgroundColor = null;
                }
            })
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}