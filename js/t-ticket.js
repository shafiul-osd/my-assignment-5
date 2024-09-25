// Scroll to vegal section
function scroolSection() {
  const vegalSection = document.getElementById("vegal-section");
  vegalSection.scrollIntoView({ behavior: "smooth" });
}

const seats = document.getElementsByClassName("btn");
const seatCountDisplay = document.getElementById("seat-count");
const seatMinusDisplay = document.getElementById("seat-minus");
const seatDetilsContainer = document.getElementById("seat-det-container");
const ticketPrice = document.getElementById("ticket-price");
const grandTotalPrice = document.getElementById("grand-total");
const couponCode = document.getElementById("coupon-code");
const buttonApply = document.getElementById("btn-apply");
const couponContainer = document.getElementById("coupon-container");
const formContainer = document.getElementById("form-container");
const passengerName = document.getElementById("passenger-name");
const passengerNumber = document.getElementById("passenger-number");
const passengerEmail = document.getElementById("passenger-email");
const nextButton = document.getElementById("next-button");

const clickSeat = [];

for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    if (clickSeat.length < 4) {
      if (!clickSeat.includes(e.target.innerText)) {
        e.target.style.backgroundColor = "#1DD100";
        clickSeat.push(e.target.innerText);
      }
    }

    seatCountDisplay.innerText = clickSeat.length;
    seatMinusDisplay.innerText = seats.length - clickSeat.length - 1;

    // Clear the seatDetilsContainer before adding new seats
    seatDetilsContainer.innerHTML = "";

    // Display seat details in the vegal section
    for (const seatName of clickSeat) {
      // Creating element for seat details container
      const seatDetilsItem = document.createElement("div");
      const seatPrice = document.createElement("p");
      const seatClass = document.createElement("p");
      const seatNameElement = document.createElement("p");

      // Styling to the seatDetilsItem
      seatDetilsItem.classList.add("flex", "items-center", "justify-between");

      // Appending element to the container
      seatDetilsContainer.appendChild(seatDetilsItem);
      seatDetilsItem.append(seatNameElement, seatClass, seatPrice);

      // Set values to the elements
      seatNameElement.innerText = seatName;
      seatClass.innerText = "Economy";
      seatPrice.innerText = "550";

      // total price calculation

      const totalSeatPrice = clickSeat.length * 550;
      ticketPrice.innerText = totalSeatPrice;

      const totalPrice = parseFloat(ticketPrice.innerText);
      grandTotalPrice.innerText = totalPrice;
    }
  });
}
couponCode.addEventListener("input", function (event) {
  const couponValue = event.target.value;

  if (couponValue !== "") {
    buttonApply.removeAttribute("disabled");
  } else {
    buttonApply.setAttribute("disabled", true);
  }
  // grand total theke taka minus korebo ay condition theke
  buttonApply.addEventListener("click", function () {
    if (clickSeat.length > 1) {
      if (couponValue === "new15") {
        const totalPrice = parseFloat(ticketPrice.innerText);
        const grandTotal = totalPrice - (totalPrice * 15) / 100;
        grandTotalPrice.innerText = grandTotal;
        couponContainer.style.display = "none";
      } else if (couponValue === "couple20") {
        const totalPrice = parseFloat(ticketPrice.innerText);
        const grandTotal = totalPrice - (totalPrice * 20) / 100;
        grandTotalPrice.innerText = grandTotal;
        couponContainer.style.display = "none";
      }
    } else {
      const totalPrice = parseFloat(ticketPrice.innerText);
      grandTotalPrice.innerText = grandTotal;
    }
  });
});

// next button disable theke anable korar kaj staru hobe akhane theke and this is so important

passengerName.addEventListener("input", inputchange);
passengerNumber.addEventListener("input", inputchange);
passengerEmail.addEventListener("input", inputchange);

let pName = "";
let pNumber = "";
let pEmail = "";

function inputchange(event) {
  if (event.target.name === "name") {
    pName = event.target.value;
  } else if (event.target.name === "number") {
    pNumber = event.target.value;
  } else if (event.target.name === "email") {
    pEmail = event.target.value;
  }

  if (pName !== "" && pNumber !== "" && pEmail !== "") {
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

formContainer.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const number = event.target.number.value;
  const email = event.target.email.value;
  const button = event.target.button;

  if (clickSeat.length > 0) {
    my_modal_4.showModal();
    event.target.reset();
  }
  else{ 
    my_modal_5.showModal();
  }
});








