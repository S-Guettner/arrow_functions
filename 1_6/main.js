const optionSelected = document.querySelector("#option-selected")
const mySelect = document.querySelector("#my-select")

mySelect.addEventListener('change', (e) => {
    optionSelected.textContent = "Sie haben ausgewählt " + e.target.value
})
