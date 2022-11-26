let guestPointsTable = document.getElementById("guest-points")
let homePointsTable = document.getElementById("home-points")
let guestPoints = 0
let homePoints = 0
const buttons = document.getElementsByClassName("numbers-btn");

for (i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
    addPoints(e.currentTarget.value, e.currentTarget.name)
})
}

function addPoints (value, team){
    if (team === "guest") {
        guestPoints += parseInt(value)
        refreshResult(team)
     } else
     homePoints += parseInt(value)
     refreshResult(team)
}

function refreshResult(team) {
    if (team === "guest"){
        document.getElementById("guest-points").textContent = guestPoints
    } else {
        document.getElementById("home-points").textContent = homePoints
    }
}