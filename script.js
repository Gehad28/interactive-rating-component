const btn = document.getElementById("submit-btn");
const ratingContainer = document.querySelector(".rating-state-container");
const thankyouContainer = document.querySelector(".thankyou-state-container");
const rating = document.getElementById("rating");

btn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
    const selectRadio = document.querySelector('input[name="btnradio"]:checked');

    if (selectRadio) {
        ratingContainer.classList.add("hide-container");
        thankyouContainer.classList.add("show-container");
        rating.innerHTML = selectRadio.value;
    }
}