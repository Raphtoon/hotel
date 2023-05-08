//Creation du tableau de stockage des clients
let customerDirectory = [];

// Creation class
class Customer {
    constructor(firstname, lastname, nbr_night, typeOfRoom, breakfast) {
        this.firstname = firstname,
            this.lastname = lastname,
            this.nbr_night = nbr_night,
            this.typeOfRoom = typeOfRoom,
            this.breakfast = breakfast
    }
};

// Stockage des valeurs des inputs
let storage_input = document.querySelectorAll("input");
// variable avec l'id du bouton enregistement
let clickForRegister = document.querySelector("#valueRegister");
// variable avec l'id du bouton rechercher
let clickForSearch = document.querySelector("#valueSearch");
let selectedValue;


function showAlert() {
    // Automatically close the alert message after 5 seconds
    let timeoutId = setTimeout(() => {
        alert('Création du fichier client ...');
    }, 5000);

    // Cancel the timeout if the user closes the alert message manually
    window.addEventListener('click', () => {
        clearTimeout(timeoutId);
    });
}

// Sélectionner l'élément select par son ID // PROBLEME DE STOCKAGE A REGLER
let selectRoom = document.querySelector("#typeOfRoom");
selectRoom.addEventListener("change", () => {
    // Assignation a selected value
    selectedValue = selectRoom.value;
});


clickForRegister.addEventListener("click", (e) => {
    e.preventDefault();
    // Obtenir les informations d'enregistrements
    const nameOfCustomer = storage_input[0].value;//valeur d'input name
    const lastnameOfCustomer = storage_input[1].value;//valeur d'input lastname
    const number_night = storage_input[2].value;//valeur d'input nombre de nuit
    const typeOfRoom = selectedValue;//valeur d'input type de chambre ??
    const breakfast = storage_input[3].value;//valeur d'input petit déjeuner ? 

    // print des valeurs actuelles
    alert(`Résérvation au nom : ${storage_input[0].value} ${storage_input[1].value} \n pour ${storage_input[2].value} nuit(s) \n au prix de : ${typeOfRoom}€ \n Petit déjeuner :  ${storage_input[3].value} `)

    // showAlert(); Tentative d'affichage d'un message pdt 3 sec
    // Création d'un nouveau client
    const customers = new Customer(nameOfCustomer, lastnameOfCustomer, number_night, typeOfRoom, breakfast);
    customerDirectory.push(customers);
    console.table(customerDirectory)
});

console.table(customerDirectory)
