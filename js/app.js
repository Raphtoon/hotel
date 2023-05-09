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
// Stockage de la valeur name
let input_name = document.querySelector("#name");
// Stockage de la valeur input_lastname
let input_lastname = document.querySelector("#surname");
// Stockage de la valeur numnight
let input_numnight = document.querySelector("#numNight");
// Stockage des valeurs typeOfRoom
// let input_typeRoom = document.querySelector("#typeOfRoom");
// Stockage des valeurs breakfast_true
let input_dej = document.querySelector("#breakfast_true");
// Stockage des valeurs breakfast_false
let input_dej_false = document.querySelector("#breakfast_false");
// Stockage des valeurs firstname_search
// let input_name_search = document.querySelector("#firstname_search");
// Stockage des valeurs lastname_search
// let input_lastname_search = document.querySelector("#lastname_search");
// variable avec l'id du bouton enregistement
let clickForRegister = document.querySelector("#valueRegister");
// variable avec l'id du bouton rechercher
let clickForSearch = document.querySelector("#valueSearch");
//Affichage dans le footer
let displayHtml = document.querySelector("#printJs");
// Valeur pas défaut du selected suite a des pb d'ajout de la valeur si le menu n'est pas ouvert.
let selectedValue = 189;


function roomPrice(typeRoom, time) {
    // Calculer la durée du séjour (prix de la chambre* nombre de nuit)
    const pricettl = typeRoom * time;
    return pricettl;
};

// Affichage du prix sous format €
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
    const nameOfCustomer = input_name.value.toLowerCase();//valeur d'input name
    const lastnameOfCustomer = input_lastname.value.toLowerCase();//valeur d'input lastname
    const number_night = input_numnight.value;//valeur d'input nombre de nuit
    const typeOfRoom = selectedValue;//valeur d'input type de chambre ??
    const breakfast = input_dej.value;//valeur d'input petit déjeuner ? 

    // print des valeurs actuelles
    alert(`Résérvation au nom : ${input_name.value} ${input_lastname.value} \n pour ${input_numnight.value} nuit(s) \n au prix de : ${typeOfRoom}€ \n Petit déjeuner :  ${input_dej.value} `)

    // Création d'un nouveau client
    const customers_add = new Customer(nameOfCustomer, lastnameOfCustomer, number_night, typeOfRoom, breakfast);
    customerDirectory.push(customers_add);
    console.table(customerDirectory)
    return customers_add
});



clickForSearch.addEventListener("click", (e) => {
    // Annuler le reload de la page
    e.preventDefault();

    // Stockage des valeurs firstname_search
    let input_name_search = document.querySelector("#firstname_search").value;
    // Stockage des valeurs lastname_search
    let input_lastname_search = document.querySelector("#lastname_search").value;
    
    let customerFound = false;
    for (let i = 0; i < customerDirectory.length; i++) {
        let customers_actual = customerDirectory[i];
        // On recherche le client dans le tableau via son nom / prenom
        if (customers_actual.name === input_name_search && customers_actual.lastname === input_lastname_search) {
            customerFound = true;
            // client trouvé, on calcul son nombre de nuit * son prix de chambre
            alert("Personne trouvée.")
            const price = roomPrice(customers_actual.typeOfRoom, customers_actual.nbr_night);
            alert(`Le prix à payer est de ${displayPrice(price)}`);
            // On récupère son ID dans l'array pour le supprimer par la suite
            const index = customerDirectory.indexOf(customers_actual);
            // Suppression du client parti
            customerDirectory.splice(index, 1);
            console.table(customerDirectory);
            break; // on sort de la boucle puisque nous avons trouvé le client recherché
        }
    }
    if (!customerFound) {
        // si aucun client trouvé
        displayHtml.textContent = "Client non trouvé";
    }
});