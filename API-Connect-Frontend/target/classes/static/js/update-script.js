
//Update form. PUT
//Get URL data
const currentURL = window.location.href;
//Id for form
const idLabel = document.querySelector("#idCust");
idLabel.value = currentURL.toString().substring(29);
//Id to show to user
const idShowLabel = document.querySelector("#idShowCust");
idShowLabel.value = currentURL.toString().substring(29);

//When user press the button, it will call the api without refreshing
const formSave = document.querySelector("#saveCustomer");
formSave.addEventListener('submit', (e) => {
    e.preventDefault();

    const  formData = new FormData(formSave);

    fetch('http://localhost:8080/api/v1/customers', {
        method: "PUT",
        body: formData,
    })
        .then(res => res.json());

    resetForm();
})


function resetForm(){
    document.querySelector("#name").value = "";
    document.querySelector("#genre").value = "";
    document.querySelector("#num_purchases").value = "";
}