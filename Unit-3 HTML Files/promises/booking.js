
function bookTicket(){
    const name = document.getElementById("name").value
    const date = document.getElementById("date").value
    const phoneNo = document.getElementById("phoneNo").value

    if(name === "" || date === "" || phoneNo === ""){
        alert("Please fill the form")
    } 
    else {
        alert("Your ticket is booked")
    }
}
window.addEventListener("load", function(){

    const ticket = document.getElementById("ticket")
    ticket.addEventListener("click",bookTicket)
})