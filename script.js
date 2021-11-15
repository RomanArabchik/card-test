const rows = document.querySelectorAll('.row')
const select = document.querySelector('select')
const totalField = document.querySelector('.total__text_blue')
const planField = document.querySelector('.plan')


for (const row of rows) {
  row.addEventListener('click', () => {
    clearActiveClasses()
    row.classList.add('selected')
    sumTotal()
  })
}

function clearActiveClasses() {
  rows.forEach((row) => {
    row.classList.remove('selected')
  })
}

function sumTotal() {
  let value = select.options[select.selectedIndex].value
  let price
  let plan
  rows.forEach(row => {
    if (row.classList.contains('selected')) {
      price = row.dataset.price
      plan = row.dataset.plan
    } 
  })
  let sum = price*value
  planField.innerHTML = `Selected plan: #${plan}`
  totalField.innerHTML = `&#36 ${sum}`
}

select.addEventListener('change', () => {
  sumTotal()
})
