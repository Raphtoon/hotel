// Creation class
class Customer {
    constructor(firstname, lastname, nbr_night, typeOfRoom, breakfast) {
        this.firstname = firstname,
            this.lastname = lastname,
            this.nbr_night = Number(nbr_night),
            this.typeOfRoom = Number(typeOfRoom),
            this.breakfast = breakfast;
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
// Stockage des valeurs breakfast_true
let input_dej = document.querySelector("#breakfast_true");
// Stockage des valeurs breakfast_false
let input_dej_false = document.querySelector("#breakfast_false");
// variable avec l'id du bouton enregistement
let clickForRegister = document.querySelector("#valueRegister");
// variable avec l'id du bouton rechercher
let clickForSearch = document.querySelector("#valueSearch");
//Affichage dans le footer
let displayHtml = document.querySelector("#printJs");
// Valeur pas défaut du selected suite a des pb d'ajout de la valeur si le menu n'est pas ouvert.
let selectedValue = 189;
console.log(localStorage);
deleteContent()
console.log(localStorage);


function deleteContent() { // Supprime le contenue du localStorage
    let dlt = confirm("Voulez vous supprimer l'entièreté du stockage permanent ?")
    if (dlt) {
        localStorage.clear()
    }
}

function checkOrNot() {
    if (input_dej.checked) {
        answer = true;
    } else {
        answer = false;
    } return answer;
};

function roomPrice(typeRoom, time) {
    if (checkOrNot()) {
        let price_dej = time * 7
        pricettl = (typeRoom * time) + price_dej;
    } else {
        // Calculer la durée du séjour (prix de la chambre* nombre de nuit)
        pricettl = typeRoom * time;
    }
    return pricettl;
};

// Affichage du prix sous format €
function displayPrice(prix) {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(prix);
};

// Sélectionner l'élément select par son ID
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
    let breakfast = checkOrNot();

    // print des valeurs actuelles
    alert(`Résérvation au nom : ${nameOfCustomer} ${lastnameOfCustomer} \n pour ${number_night} nuit(s) \n au prix de : ${typeOfRoom}€ \n Petit déjeuner :  ${breakfast} `)

    // Création d'un nouveau client
    let customers_add = new Customer(nameOfCustomer, lastnameOfCustomer, number_night, typeOfRoom, breakfast);
    customerDirectory.push(customers_add);

    //Stockage permanent dans un array sous format JSON
    //1ère phase d'enregistrement dans le localStorage ; Problème : Je n'enregistrais qu'une valeur car je bouclais pas + code brouillon et pas opti.
    // let grabStorage = (JSON.stringify(customerDirectory));
    // localStorage.setItem('add_customer', grabStorage);
    // const grabStorage_Json = JSON.parse(grabStorage); // Cast sous format json
    // console.log(grabStorage_Json);
    // console.table(customerDirectory);

    // On itère le nombre 
    for (let i = 0; i < customerDirectory.length; i++) {
        localStorage.setItem(`add_customer${i}`, JSON.stringify(customerDirectory[i]));
    }
    console.log(localStorage);
});

clickForSearch.addEventListener("click", (e) => {
    // Annuler le reload de la page
    e.preventDefault();
    // Stockage des valeurs firstname_search
    let input_name_search = document.querySelector("#firstname_search");
    // Stockage des valeurs lastname_search
    let input_lastname_search = document.querySelector("#lastname_search");

    let customerFound = false;

    for (let i = 0; i < customerDirectory.length; i++) {
        let customers_actual = customerDirectory[i];

        // On recherche le client dans le tableau via son nom / prenom
        if (customers_actual.firstname === input_name_search.value.toLowerCase() && customers_actual.lastname === input_lastname_search.value.toLowerCase()) {
            customerFound = true;
            console.table(customerDirectory)
            // client trouvé, on calcul son nombre de nuit * son prix de chambre
            const price = roomPrice(customers_actual.typeOfRoom, customers_actual.nbr_night);
            displayHtml.textContent = (`Le prix à payer pour le séjour de ${customers_actual.firstname} ${customers_actual.lastname} est de ${displayPrice(price)}`);
            // On récupère son ID dans l'array pour le supprimer par la suite
            const index = customerDirectory.indexOf(customers_actual);
            // Suppression du client parti
            customerDirectory.splice(index, 1);
        }
        if (!customerFound) {
            // si aucun client trouvé
            displayHtml.textContent = "Client Introuvable";
        }
    }
});


