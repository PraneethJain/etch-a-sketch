const grid = document.querySelector('.grid');

let N = 16;

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
            e.target.classList.remove("active")
        })
        row.appendChild(cell);
    }
    grid.appendChild(row);
}