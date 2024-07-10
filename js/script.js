// YOUR CODE HERE

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const output1 = document.querySelector('#output1')
const output2 = document.querySelector('#output2')
const output3 = document.querySelector('#output3')
const output4 = document.querySelector('#output4')
const output5 = document.querySelector('#output5')
const span = document.createElement('span')

btn1.addEventListener('click', () => {
  output1.style.color = 'red'
})

span.textContent = 'Hello world'
btn2.addEventListener('click', () => {
  output2.append(span)
})

btn3.addEventListener('click', () => {
  output3.firstElementChild.classList.remove('small-text')
})

btn4.addEventListener('click', () => {
  output4.style.color = 'red'
})

btn5.addEventListener('click', () => {
  console.log(output5.firstElementChild.getAttribute('value'))
})