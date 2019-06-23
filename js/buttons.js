
// buttons fonctions pour les buttons du nombre du produit 

function add1() {
		var button1 = document.getElementById("button1");
	if (parseInt(button1.innerHTML) < 10) {
		button1.innerHTML = parseInt(button1.innerHTML)+1
	}
	}


function remove1() {
		var button1 = document.getElementById("button1");
	if (parseInt(button1.innerHTML) > 0) {
		button1.innerHTML = parseInt(button1.innerHTML)-1
	}
	}

	function add2() {
		var button1 = document.getElementById("button2");
	if (parseInt(button1.innerHTML) < 10) {
		button1.innerHTML = parseInt(button1.innerHTML)+1
	}
	}

function remove2() {
		var button1 = document.getElementById("button2");
	if (parseInt(button1.innerHTML) > 0) {
		button1.innerHTML = parseInt(button1.innerHTML)-1
	}
	}

	function add3() {
		var button1 = document.getElementById("button3");
	if (parseInt(button1.innerHTML) < 10) {
		button1.innerHTML = parseInt(button1.innerHTML)+1
	}
	}

function remove3() {
		var button1 = document.getElementById("button3");
	if (parseInt(button1.innerHTML) > 0) {
		button1.innerHTML = parseInt(button1.innerHTML)-1
	}
	}

	// hamburger function

	function add4() {
		var button1 = document.getElementById("button4");
	if (parseInt(button1.innerHTML) < 10) {
		button1.innerHTML = parseInt(button1.innerHTML)+1
	}
	}

function remove4() {
		var button1 = document.getElementById("button4");
	if (parseInt(button1.innerHTML) > 0) {
		button1.innerHTML = parseInt(button1.innerHTML)-1
	}
	}

	function add5() {
		var button1 = document.getElementById("button5");
	if (parseInt(button1.innerHTML) < 10) {
		button1.innerHTML = parseInt(button1.innerHTML)+1
	}
	}

function remove5() {
		var button1 = document.getElementById("button5");
	if (parseInt(button1.innerHTML) > 0) {
		button1.innerHTML = parseInt(button1.innerHTML)-1
	}
	}

	function add6() {
		var button1 = document.getElementById("button6");
	if (parseInt(button1.innerHTML) < 10) {
		button1.innerHTML = parseInt(button1.innerHTML)+1
	}
	}

function remove6() {
		var button1 = document.getElementById("button6");
	if (parseInt(button1.innerHTML) > 0) {
		button1.innerHTML = parseInt(button1.innerHTML)-1
	}
	}

	// tacus fonctions 

	function add7() {
		var button1 = document.getElementById("button7");
	if (parseInt(button1.innerHTML) < 10) {
		button1.innerHTML = parseInt(button1.innerHTML)+1
	}
	}

function remove7() {
		var button1 = document.getElementById("button7");
	if (parseInt(button1.innerHTML) > 0) {
		button1.innerHTML = parseInt(button1.innerHTML)-1
	}
	}

	function add8() {
		var button1 = document.getElementById("button8");
	if (parseInt(button1.innerHTML) < 10) {
		button1.innerHTML = parseInt(button1.innerHTML)+1
	}
	}

function remove8() {
		var button1 = document.getElementById("button8");
	if (parseInt(button1.innerHTML) > 0) {
		button1.innerHTML = parseInt(button1.innerHTML)-1
	}
	}

	function add9() {
		var button1 = document.getElementById("button9");
	if (parseInt(button1.innerHTML) < 10) {
		button1.innerHTML = parseInt(button1.innerHTML)+1
	}
	}

function remove9() {
		var button1 = document.getElementById("button9");
	if (parseInt(button1.innerHTML) > 0) {
		button1.innerHTML = parseInt(button1.innerHTML)-1
	}
	}


	// affichage fonction 


	function affichage () {

// initialiser les buttons ;

		var button1 = document.getElementById("button1");
		var button2 = document.getElementById("button2");
		var button3 = document.getElementById("button3");
		var button4 = document.getElementById("button4");
		var button5 = document.getElementById("button5");
		var button6 = document.getElementById("button6");
		var button7 = document.getElementById("button7");
		var button8 = document.getElementById("button8");
		var button9 = document.getElementById("button9");
		var name = document.getElementById("name");
		var adresse = document.getElementById("adresse");

// condition  pour aucun element selectionner

var buttons = [button1,button2,button3,button4,button5,button6,button7,button8,button9];
var keyss = []
var price = [9,8.5,8,3.5,4,5,5,6.5,8]
		var result = 0
		var prixTotal = 0
		for (var i = buttons.length - 1; i >= 0; i--) {

				result = result + buttons[i].innerHTML
				if (buttons[i].innerHTML!= 0) {
					keyss.push(i)					
				} 
				
				prixTotal = prixTotal + buttons[i].innerHTML * price[i]
				
				}
				price.push(prixTotal)
				

// condition pour les input de l'utilasateur
						var commande = " "
		for (x of keyss) {
			switch (x) {
					case 8 : commande = commande + "giga tacus" + "<br>" ;
					break;
					case 7 : commande = commande + "double tacus" + "<br>" ;
					break;
					case 6 : commande = commande + "simple tacus" + "<br>" ;
					break;
					case 5 : commande = commande + "hangover hamburger" + "<br>" ;
					break;
					case 4 : commande = commande + "bacon hamburger" + "<br>" ;
					break;
					case 3 : commande = commande + "G'S hamburger" + "<br>" ;
					break;
					case 2 : commande = commande + "margherita pizza" + "<br>" ;
					break;
					case 1 : commande = commande + "pizza royale" + "<br>" ;
					break;
					case 0 : commande = commande + "chicken pizza" + "<br>" ;
					break;

			}

		}
						name_value_len = name.value.length
						adresse_value_len = adresse.value.length

				 if (name_value_len == 0 || adresse_value_len == 0 || result == "0000000000") {
							alert("Please enter your information")
							
						}
				else {
					var  prix_finale = price[9]
					var tablename = document.getElementById("tablename");
				var tableadresse = document.getElementById("tableadresse");
				var tablerequest = document.getElementById("tablerequest");
				var tableprix = document.getElementById("tableprix");
				var tableinfo = document.getElementById("tableinfo");
				tableinfo.style.display = "block";
				tablename.innerHTML = name.value
				tableadresse.innerHTML = adresse.value
				tablerequest.innerHTML = commande
				tableprix.innerHTML = prix_finale + " $"
				}
			}

			//fonstions d affichages les inputs 

var list_here = document.getElementById('liste_here')

function changetopizza () {
	// style button on click
	var button_pizza = document.getElementById('pizza')
	button_pizza.style.backgroundColor = "#ef2a31";
	button_pizza.style.color = "white";
  // conditiondefauts style pour les autres
	var hamburger_button = document.getElementById('hamburger')
	var tacus_button = document.getElementById('tacus')
	hamburger_button.style.backgroundColor = "white";
	hamburger_button.style.color = "#000";
	tacus_button.style.backgroundColor = "white";
	tacus_button.style.color = "#000";



	// style liste apres button
	var pizza_list = document.getElementById('pizza_liste')
	pizza_liste.style.display = "flex"
	hamburger_liste.style.display = "none"
	tacus_liste.style.display = "none"


}

function changetohamburger () {
	// style button on click
	var hamburger_button = document.getElementById('hamburger')
	hamburger_button.style.backgroundColor = "#ef2a31";
	hamburger_button.style.color = "white";
  // conditiondefauts style pour les autres
	var button_pizza = document.getElementById('pizza')
	var tacus_button = document.getElementById('tacus')
	button_pizza.style.backgroundColor = "white";
	button_pizza.style.color = "#000";
	tacus_button.style.backgroundColor = "white";
	tacus_button.style.color = "#000";

	// style liste apres button
	var hamburger_liste = document.getElementById('hamburger_liste')
	hamburger_liste.style.display = "flex"
	pizza_liste.style.display = "none"
	tacus_liste.style.display = "none"
}

function changetotacus () {
	// style button on click
	var tacus_button = document.getElementById('tacus')
	tacus_button.style.backgroundColor = "#ef2a31";
	tacus_button.style.color = "white";
  // conditiondefauts style pour les autres
	var button_pizza = document.getElementById('pizza')
	var hamburger_button = document.getElementById('hamburger')
	hamburger_button.style.backgroundColor = "white";
	hamburger_button.style.color = "#000";
	button_pizza.style.backgroundColor = "white";
	button_pizza.style.color = "#000";

	// style liste apres button
	var tacus_liste = document.getElementById('tacus_liste')
	tacus_liste.style.display = "flex"
	pizza_liste.style.display = "none"
	hamburger_liste.style.display = "none"
}

// responsive nav bar
			function responsives() {
				var respo = document.getElementById("mobile-respo")
				var butt_mobile = document.getElementById("menu_button")
				respo.style.display = "flex"
				respo.style.flexDirection = "column"
				butt_mobile.style.display = "none"
			}
		