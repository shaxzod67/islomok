btn.addEventListener('click', function () {
	let h1 = document.getElementById('h1')
	let btn = document.getElementById('btn')
	let min1 = parseInt(document.getElementById('input1').value)
	let max1 = parseInt(document.getElementById('input2').value)
	function getRndInteger(min, max) {
		return Math.floor( min + Math.random() * (max - min + 1))
	}
	h1.innerHTML = getRndInteger(min1, max1)
})
