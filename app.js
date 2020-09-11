document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let width = 10
  let squares = []
  let bombAmount = 20

  // Create Board
  function createBoard(){
    //get shuffled game array with random bombs
    const bombsArray = Array(bombAmount).fill('bomb') // The Bombs
    const emptyArray = Array(width*width - bombAmount).fill('valid') //Which ones are empty

    const gameArray = emptyArray.concat(bombsArray) //Result in 2 arrays being joined

    const shuffledArray = gameArray.sort(() => Math.random() -0.5)





    for(let i = 0; i < width*width; i++){
      const square = document.createElement('div')
      square.setAttribute('id', i)
      square.classList.add(shuffledArray[i])
      grid.appendChild(square)
      squares.push(square)

    }
  }

  createBoard()

})
