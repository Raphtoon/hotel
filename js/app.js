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


function createCustomer() {
    // Obtenir les informations d'enregistrements
    const nameOfCustomer = storage_input[0];//valeur d'input name
    const lastnameOfCustomer = storage_input[1];//valeur d'input lastname
    const number_night = storage_input[2];//valeur d'input nombre de nuit
    const typeOfRoom = storage_input[3];//valeur d'input type de chambre
    const breakfast = storage_input[4];//valeur d'input petit déjeuner ? 

    // Création d'un nouveau client
    const customers = new Customer(nameOfCustomer, lastnameOfCustomer, number_night, typeOfRoom, breakfast);

    return customers;
};

// Stockage des valeurs des inputs
let storage_input = document.querySelectorAll("input");
// variable avec l'id du bouton enregistement
let clickForRegister = document.querySelector("#valueRegister");
// variable avec l'id du bouton rechercher
let clickForSearch = document.querySelector("#valueSearch");

// storage_input.addEventListener("click" () =>{
// })


clickForRegister.addEventListener("click", () => {
    if (storage_input[0,1,2,3].value) {
        alert(`Saisie utilisateur : ${storage_input[0].value} ${storage_input[1].value} ${storage_input[2].value} ${storage_input[3].value} `)// la 4eme valeur print un Y // Recuperation de la valuer de l'input
    } else {`Merci de remplir tout les champs`}
}
);

console.log(storage_input)
