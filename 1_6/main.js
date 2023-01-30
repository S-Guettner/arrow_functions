const optionSelected = document.querySelector("#option-selected")
const mySelect = document.querySelector("#my-select")

mySelect.addEventListener('change', () => {
    optionSelected.textContent = mySelect.value
})
