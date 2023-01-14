/**
 * Upon clicking on a tile, it will compare the current number clicked and the number it is asking for
 * @param {click} event - 
 * @returns A victory screen when the current number clicked is 25
 */
const clickTile = (event) => {
  const currentNumber = document.querySelector('.currentNumber');
  if (event.target.innerHTML === currentNumber.innerHTML){
      event.target.classList.add('clicked');
      if (currentNumber.innerText == 25){
          currentNumber.previousElementSibling.innerText = 'You Win!';
          currentNumber.innerText = '';
          return;
      }
      currentNumber.innerText = Number(currentNumber.innerText) + 1;
  }
}

/**
* Upon an event, will reset the display text, remove the 'clicked' class, display a randomized set of numbers for every tile, and reset the current number to 1
* @param {click} event 
*/
const newGame = (event) => {
  tileCollection = document.querySelectorAll('.tile');
  document.querySelector(".display").innerText = 'Select Number: '
  for (const tile of tileCollection){
      tile.classList.remove('clicked')
  }
  sortTiles(tileCollection);
  document.querySelector('.currentNumber').innerText = 1
  document.querySelector('')
}

/**
* Takes An Array of Random Numbers from 1-25 And Inserts Them Into The Tiles
* @param {Node List} tileCollection - Insert A Node List Which Will Have Their Inner Text Changed
*/
const sortTiles = (tileCollection) => {
  const numbersCopy = randomNumbers();
  let temp = 0;
  for (const tile of tileCollection){
      tile.innerText = numbersCopy[temp]; //Temporary Way To Get Index Values, Find A Way to Get Current Index Value of tile in Node List
      temp++;
  }
}

/**
* 
* @returns An array of random numbers from 1-25
*/
const randomNumbers = () => {
  const numbers = []; //Array of Random Numbers
  let temp = 0; //Temporary Value Used For Comparison
  while (numbers.length != 25){ //Continue Loop While Numbers Array Is Not 25 Index Entries Long
      temp = Math.floor(Math.random() * 25) + 1; //Assigns Temporary Value An Integer From 1-25
      if (!numbers.includes(temp)){  //If Numbers Array Doesn't Have The Random Value...
          numbers.push(temp); //Push Into The Numbers Array
      }
  }
  return numbers;
}
/**
* This function will add event listeners to all tiles and buttons
*/
const addEventListeners = () => {
  const tileButtons = document.querySelectorAll('.tile');
  const startButton = document.querySelector('.start');

  for (const tile of tileButtons){
      tile.addEventListener('click', clickTile);
  }
  startButton.addEventListener('click', newGame);
}
addEventListeners();