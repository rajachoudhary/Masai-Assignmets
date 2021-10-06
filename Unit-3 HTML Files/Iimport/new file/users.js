import NavBar  from "./navbar.js";

const navBar = NavBar({title:"Users Page"})
const container = document.getElementById("navbar_container")
container.innerHTML = navBar