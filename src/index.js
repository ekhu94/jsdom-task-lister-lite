const form = document.querySelector('#create-task-form')
const list = document.querySelector('ul#tasks')

const createLI = val => {
  let li = document.createElement('li')
  list.appendChild(li)
  li.innerText = val
  
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = document.querySelector('input#new-task-description').value
    createLI(input)
  })
  list.addEventListener('click', (e) => {
    if (e.target.tagName.toUpperCase() === 'LI') {
      e.target.parentElement.removeChild(e.target)
    }
  })
});
