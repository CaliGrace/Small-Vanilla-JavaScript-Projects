const showcase = document.querySelector(".showcase");
const total = document.querySelector("#price");
const count = document.querySelector("#count");
const movieList = document.querySelector("#movies");
let ticketPrice = +movieList.value;

//selection of the seats
showcase.addEventListener("click",function(e) {
    if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied')) {
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
})

// event listener for the selection of movies
movieList.addEventListener("change",function() {
    ticketPrice = movieList.value;
    updateSelectedCount();
})



// update the selected count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .selected");
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice + "$";
}