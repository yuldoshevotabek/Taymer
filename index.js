let res = false
let second = 0,
	minut = 0,
	hours = 0
let timer
const btn = document.querySelector('button')
const oneDiv = document.querySelector('.divcha')
function start() {
	if (!res) {
		timer = setInterval(update, 10)
		document.querySelector('button').innerHTML = 'STOP'
	} else {
		clearInterval(timer)
		document.querySelector('button').textContent = 'START'
		const counter = document.getElementById('timerr').textContent
		const newElement = document.createElement('h3')
		newElement.innerHTML = `${counter}`
		oneDiv.appendChild(newElement)
	}
	res = !res
}
btn.addEventListener('dblclick', () => {
	clearInterval(timer)
	second = 0
	minut = 0
	hours = 0
	const bir = document.querySelectorAll('.divcha h3')
	bir.forEach(item => {
		item.remove()
	})

	document.querySelector('#timerr').innerHTML = '00:00:00'
	document.querySelector('button').textContent = 'START'
})
function update() {
	second++
	if (second == 100) {
		minut++
		second = 0
	} else if (minut == 60) {
		hours++
		minut = 0
	}
	document.querySelector('#timerr').innerHTML =
		(hours < 10 ? '0' : '') +
		hours +
		':' +
		(minut < 10 ? '0' : '') +
		minut +
		':' +
		(second < 10 ? '0' : '') +
		second
}
