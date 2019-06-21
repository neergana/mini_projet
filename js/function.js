
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

//trsponsive button top



function responsive() {
	var respo = document.getElementById("mobile-respo")
	var butt_mobile = document.getElementById("menu_button")
	respo.style.display = "flex"
	respo.style.flexDirection = "column"
	butt_mobile.style.display = "none"
}
