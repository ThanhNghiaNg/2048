document.addEventListener('DOMContentLoaded', () => {
	const gridDisplay = document.querySelector('.grid')
	const scoreDisplay = document.getElementById('score')
	const resultDisplay = document.getElementById('result')		
	const width = 4
	let squares = []
	// Create a playing board 
	
	function createBoard() {
		for (let i = 0; i < width*width; i++){
			square = document.createElement('div')
			square.innerHTML = 0
			gridDisplay.appendChild(square)
			squares.push(square)
		}
		generate();
	}

	createBoard();

	// Generate a number randomly
	function generate(){
		let culmulativePropabilities248 = [0.99, 0.998, 1]
		let randomNumber = Math.random()
		let numberGenerated = -1
		if (randomNumber < culmulativePropabilities248[0]){
			numberGenerated = 2;
		} else if (randomNumber < culmulativePropabilities248[1]){
			numberGenerated = 4;
		} else {
			numberGenerated = 8;
		}
		randomPosition = Math.floor(Math.random()*squares.length)
		if (squares[randomPosition].innerHTML == 0) {
			squares[randomPosition].innerHTML = numberGenerated;
		} else generate();
	}

	// wipe right function
	function MoveRight(){
		for (let i = 0; i < width*width; i++) {
			if (i % 4 == 0) {
				let totalOne = squares[i].innerHTML
				let totalTwo = squares[i+1].innerHTML
				let totalThree = squares[i+2].innerHTML
				let totalFour = squares[i+3].innerHTML
				let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
				let filterRow = row.filter(num => num)
				let missing = 4 - filterRow.length
				let zeros = Array(missing).fill(0)

				let newRow = zeros.concat(filterRow)
				squares[i].innerHTML = newRow[0]
				squares[i+1].innerHTML = newRow[1]
				squares[i+2].innerHTML = newRow[2]
				squares[i+3].innerHTML = newRow[3]
			}
		}
	}

	// combine row Right function
	function CombineRowRight(){ 
		for (let i = 15; i > 0; i--) {
			if (squares[i].innerHTML == squares[i-1].innerHTML) {
				let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i-1].innerHTML)
				squares[i].innerHTML = combineTotal
				squares[i-1].innerHTML = 0
				scoreDisplay.innerHTML = parseInt(scoreDisplay.innerHTML)+combineTotal
			}
		}

	}

	// press Right button
	function KeyRight(){
		let before = []
		let after = []
		for (let i =0; i<squares.length; i++){
			before.push(squares[i].innerHTML)
		}
		MoveRight()
		CombineRowRight()
		MoveRight()
		
		for (let i = 0; i<squares.length; i++) {
			after.push(squares[i].innerHTML)
		}
		if (JSON.stringify(before) != JSON.stringify(after)) {
			generate()
		}
		gameOver()
		gameWin()
	}

	// wipe Left function
	function MoveLeft(){
		for (let i = 0; i < width*width; i++) {
			if (i % 4 == 0) {
				let totalOne = squares[i].innerHTML
				let totalTwo = squares[i+1].innerHTML
				let totalThree = squares[i+2].innerHTML
				let totalFour = squares[i+3].innerHTML
				let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
				let filterRow = row.filter(num => num)
				let missing = 4 - filterRow.length
				let zeros = Array(missing).fill(0)

				let newRow = filterRow.concat(zeros)
				squares[i].innerHTML = newRow[0]
				squares[i+1].innerHTML = newRow[1]
				squares[i+2].innerHTML = newRow[2]
				squares[i+3].innerHTML = newRow[3]
			}
		}
	}

	// combine row Left function
	function CombineRowLeft(){ 
		for (let i = 0; i < 15; i++) {
			if (squares[i].innerHTML == squares[i+1].innerHTML) {
				let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
				squares[i].innerHTML = combineTotal
				squares[i+1].innerHTML = 0
				scoreDisplay.innerHTML = parseInt(scoreDisplay.innerHTML)+combineTotal
			}
		}


	}

	// press Left button
	function KeyLeft(){
		let before = []
		let after = []
		for (let i =0; i<squares.length; i++){
			before.push(squares[i].innerHTML)
		}
		MoveLeft()
		CombineRowLeft()
		MoveLeft()
		
		for (let i = 0; i<squares.length; i++) {
			after.push(squares[i].innerHTML)
		}
		if (JSON.stringify(before) != JSON.stringify(after)) {
			generate()
		}
		gameOver()
		gameWin()
	}

	// wipe Up function
	function MoveUp(){
		for (let i = 0; i < 4; i++) {
			let totalOne = squares[i].innerHTML
			let totalTwo = squares[i+width*1].innerHTML
			let totalThree = squares[i+width*2].innerHTML
			let totalFour = squares[i+width*3].innerHTML
			let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
			let filterRow = row.filter(num => num)
			let missing = 4 - filterRow.length
			let zeros = Array(missing).fill(0)

			let newRow = filterRow.concat(zeros)
			squares[i].innerHTML = newRow[0]
			squares[i+width*1].innerHTML = newRow[1]
			squares[i+width*2].innerHTML = newRow[2]
			squares[i+width*3].innerHTML = newRow[3]
			
		}
	}

	// combine row Left function
	function CombineRowUp(){ 
		for (let i = 0; i < 12; i++) {
			if (squares[i].innerHTML == squares[i+width*1].innerHTML) {
				let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width*1].innerHTML)
				squares[i].innerHTML = combineTotal
				squares[i+width*1].innerHTML = 0
				scoreDisplay.innerHTML = parseInt(scoreDisplay.innerHTML)+combineTotal
			}
		}

	}

	// press Left button
	function KeyUp(){
		let before = []
		let after = []
		for (let i =0; i<squares.length; i++){
			before.push(squares[i].innerHTML)
		}
		MoveUp()
		CombineRowUp()
		MoveUp()
		
		for (let i = 0; i<squares.length; i++) {
			after.push(squares[i].innerHTML)
		}
		if (JSON.stringify(before) != JSON.stringify(after)) {
			generate()
		}
		gameOver()
		gameWin()
	}

	// wipe Down function
	function MoveDown(){
		for (let i = 0; i < 4; i++) {
			let totalOne = squares[i].innerHTML
			let totalTwo = squares[i+width*1].innerHTML
			let totalThree = squares[i+width*2].innerHTML
			let totalFour = squares[i+width*3].innerHTML
			let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
			let filterRow = row.filter(num => num)
			let missing = 4 - filterRow.length
			let zeros = Array(missing).fill(0)

			let newRow = zeros.concat(filterRow)
			squares[i].innerHTML = newRow[0]
			squares[i+width*1].innerHTML = newRow[1]
			squares[i+width*2].innerHTML = newRow[2]
			squares[i+width*3].innerHTML = newRow[3]
			
		}
	}

	// combine row Left function
	function CombineRowDown(){ 
		for (let i = 15; i >= 4; i--) {
			if (squares[i].innerHTML == squares[i-width*1].innerHTML) {
				let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i-width*1].innerHTML)
				squares[i].innerHTML = combineTotal
				squares[i-width*1].innerHTML = 0
				scoreDisplay.innerHTML = parseInt(scoreDisplay.innerHTML)+combineTotal
			}
		}

	}

	// press Left button
	function KeyDown(){
		let before = []
		let after = []
		for (let i =0; i<squares.length; i++){
			before.push(squares[i].innerHTML)
		}
		MoveDown()
		CombineRowDown()
		MoveDown()
		
		for (let i = 0; i<squares.length; i++) {
			after.push(squares[i].innerHTML)
		}
		if (JSON.stringify(before) != JSON.stringify(after)) {
			generate()
		}
		gameOver()
		gameWin()
	}

	// control function.
	function control(e){
		if(e.keyCode == 37 || e.keyCode == 65){
			KeyLeft()
		}
		if(e.keyCode == 38 || e.keyCode == 87){
			KeyUp()
		}
		if(e.keyCode == 39 || e.keyCode == 68){
			KeyRight()
		}
		if(e.keyCode == 40 || e.keyCode == 83){
			KeyDown()
		}

	}

	// check if player can move or not. 
	function canMove(){
		for (let i = 15; i > 0; i--) {
			if (squares[i].innerHTML == squares[i-1].innerHTML) 
				return true
			}
		for (let i = 15; i >= 4; i--) {
			if (squares[i].innerHTML == squares[i-width*1].innerHTML) 
				return true
			}
		return false
	}

	// check if the game is over or not.
	function gameOver(){
		let count = 0
		for (let i = 0; i <squares.length; i++){
			if (squares[i].innerHTML != 0){
				count = count + 1
			}
		}
		if (count == squares.length) 
			if (canMove() == false) {
				resultDisplay.innerHTML = "Game Over!"
			}
	}

	// check if the player win or not.
	function gameWin(){
		for (let i = 0; i <squares.length; i++){
			if (squares[i].innerHTML == 2048){
				resultDisplay.innerHTML = "You won!"
			}
		}
	}

	document.addEventListener('keyup', control)
})