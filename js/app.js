// Creation class
class Customer {
    constructor(firstname, lastname, nbr_night, typeOfRoom, breakfast) {
        this.firstname = firstname,
            this.lastname = lastname,
            this.nbr_night = Number(nbr_night),
            this.typeOfRoom = Number(typeOfRoom),
            this.breakfast = breakfast
    }
};

//Creation du tableau de stockage des clients
let customerDirectory = [];
// Stockage des valeurs des inputs
let storage_input = document.querySelectorAll("input");
// variable avec l'id du bouton enregistement
let clickForRegister = document.querySelector("#valueRegister");
// variable avec l'id du bouton rechercher
let clickForSearch = document.querySelector("#valueSearch");
//Affichage dans le footer
let displayHtml = document.querySelector("#printJs");
// Valeur pas défaut du selected suite a des pb d'ajout de la valeur si le menu n'est pas ouvert.
let selectedValue = 189;

function roomPrice(typeRoom, time) {
    // Calculer la durée en minutes
    const pricettl = typeRoom * time;
    return pricettl;
};

function displayPrice(price) {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price);
};



// Sélectionner l'élément select par son ID // PROBLEME DE STOCKAGE A REGLER
let selectRoom = document.querySelector("#typeOfRoom");
selectRoom.addEventListener("change", () => {
    // Assignation a selected value
    selectedValue = selectRoom.value;
});

clickForRegister.addEventListener("click", (e) => {
    e.preventDefault();
    // Obtenir les informations d'enregistrements
    const nameOfCustomer = storage_input[0].value.toLowerCase();//valeur d'input name
    const lastnameOfCustomer = storage_input[1].value.toLowerCase();//valeur d'input lastname
    const number_night = storage_input[2].value;//valeur d'input nombre de nuit
    const typeOfRoom = selectedValue;//valeur d'input type de chambre ??
    const breakfast = storage_input[3].value;//valeur d'input petit déjeuner ? 

    // print des valeurs actuelles
    alert(`Résérvation au nom : ${storage_input[0].value} ${storage_input[1].value} \n pour ${storage_input[2].value} nuit(s) \n au prix de : ${typeOfRoom}€ \n Petit déjeuner :  ${storage_input[3].value} `)

    // Création d'un nouveau client
    const customers = new Customer(nameOfCustomer, lastnameOfCustomer, number_night, typeOfRoom, breakfast);
    customerDirectory.push(customers);
    console.table(customerDirectory)
});



clickForSearch.addEventListener("click", (e) => {
    e.preventDefault()
    const customers = customerDirectory.find(customers => customers.firstname.toLowerCase() === storage_input[4].value && customers.lastname.toLowerCase() === storage_input[5].value);
    if (customers) {
        alert("Personne trouvé.")
        const price = roomPrice(customers.typeOfRoom, customers.nbr_night)
        alert(`Le prix à payer est de ${displayPrice(price)}`);

        const index = customerDirectory.indexOf(customers);
        customerDirectory.splice(index, 1);
        console.table(customerDirectory);
        return;
    } else {
        alert("Client non trouvé")
        return;
    }
});