
//Save form. POST
const formSave = document.querySelector("#saveCustomer");

    formSave.addEventListener('submit', (e) => {
        e.preventDefault();

        const  formData = new FormData(formSave);

        fetch('http://localhost:8080/api/v1/customers', {
        method: "POST",
        body: formData,
        })
        .then(res => res.json())
            .then(listOfAllCustomers);
        resetForm();
    })

//GET. Select the Desired Customer

//By Id
const formSelect = document.querySelector("#formSelect")

formSelect.addEventListener('submit', (e) => {
    e.preventDefault();
    const spanID = document.querySelector("#idSelect");
    let id = spanID.value;

    fetch('http://localhost:8080/api/v1/customers/' + id)
        .then(res => {
            return res.json();
        }).then(data => {
        //Set the values for the html elements using the keys of the json body.
        document.querySelector("#showId").innerHTML = data.id;
        document.querySelector("#showName").innerHTML = data.name;
        document.querySelector("#showGenre").innerHTML = data.genre;
        document.querySelector("#showNumP").innerHTML = data.num_purchases;
    })
        .catch(error => console.log(error));
})

//GET. List of all customers.
let table = document.querySelector("#bodyCustomers");
function listOfAllCustomers(){
    table.innerHTML = "";
    fetch('http://localhost:8080/api/v1/customers')
        .then(res => {
            return res.json();
        }).then(dataList => {
        //For each element of the list of customers:
        dataList.forEach(customer => {
            //Create table elements
            let newTr =document.createElement("tr");
            let tdId = document.createElement("td");
            let tdName = document.createElement("td");
            let tdGenre = document.createElement("td");
            let tdNumP = document.createElement("td");
            let btns = document.createElement("td");
            let btnDelete = document.createElement("a");
            let btnUpdate = document.createElement("a");

            //Set the buttons functions
            btnUpdate.setAttribute("class" , "btn btn-secondary");
            btnUpdate.setAttribute("href" , "/update/" + customer.id);
            btnUpdate.innerHTML = "Edit";

            btnDelete.setAttribute("class" , "btn btn-outline-danger");
            btnDelete.addEventListener("click", (e) =>remove(customer.id, newTr));
            btnDelete.innerHTML = "Delete";

            btns.setAttribute("class", "col-3");
            btns.appendChild(btnUpdate);
            btns.appendChild(btnDelete);



            //Set the <td> values
            tdId.append(customer.id);
            tdId.setAttribute("class", "col-1");
            tdName.append(customer.name);
            tdName.setAttribute("class", "col-3");
            tdGenre.append(customer.genre);
            tdGenre.setAttribute("class", "col-2");
            tdNumP.append(customer.num_purchases);
            tdNumP.setAttribute("class", "col-3");

            //Append the <td> inside of <tr>
            newTr.appendChild(tdId);
            newTr.appendChild(tdName);
            newTr.appendChild(tdGenre);
            newTr.appendChild(tdNumP);
            newTr.appendChild(btns);
            newTr.setAttribute("class", "row");

            //Append the <tr> inside the <tbody>
            table.appendChild(newTr);
        })
    })
        .catch(error => console.log(error));
}

//DELETE form. Refresh instead of redirect
function remove(id, element){
    //We use Fetch to the API to delete the customer from the database
    fetch('http://localhost:8080/api/v1/customers/' + id, {
        method: 'DELETE'
    }).then(() => {
        console.log('removed');
    }).catch(err => {
        console.error(err)
    });
    //Delete the element without refreshing the browser
    let list = document.querySelector("#bodyCustomers");
    list.removeChild(element);
}





//-----------------------------------------------------------------------------------------------------------------------------------------------------



//Clear the form so the user knows it worked and they can fill it again with new data.
function resetForm(){
    document.querySelector("#name").value = "";
    document.querySelector("#genre").value = "";
    document.querySelector("#num_purchases").value = "";
}