const grid = document.getElementById('grid')
const block = document.createElement('div')

//add class to div
block.className= 'gridbox'

//create variable div tags
function createDivs(){
    let divs = []
    
    for (i=0; i<5; i++){
        divs[i] = "blocks"
    }
    return divs
}

//for loop to create blocks
for (i=0; i<1; i++){
    let block = document.createElement('div')
    block.className= 'gridbox'
    grid.appendChild(block)
}




console.log(divs)