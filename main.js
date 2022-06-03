const grid = document.querySelector('.grid');
const sizeButton = document.querySelector('.size')

sizeButton.addEventListener('click', e => {
    const N = parseInt(prompt("Creating an n by n grid. Enter the value of n"))
    generateNewGrid(N)
})

let color = "#0000ff"
generateNewGrid(16)
function generateNewGrid(N) {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }
    for (let i=0; i<N; i++) {
        const row = document.createElement('div')
        row.classList.add('row');
        for (let j=0; j<N;j++) {
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