const jsonData = {}
const feedbackForm = document.querySelector("form")
feedbackForm.addEventListener("submit", (form) => {
    form.preventDefault()
    const formData = new FormData(form.target)
    formData.forEach((value, key) => {
        jsonData[key] = value
    })
    renderInfo(jsonData)
})

function renderInfo(info){
    alert(`Thank you ${info.name} for your feedback.\nYou'll get our response once the feedback is reviewed`)
}
