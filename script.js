const cardImages = document.querySelectorAll(".card-image");
const cardTitles = document.querySelectorAll(".card-title");
const cardDescriptions = document.querySelectorAll(".card-description");
const cardMediaIcons = document.querySelectorAll(".card-mediaIcons a");
const cardImgs = document.querySelectorAll(".card-image img");
const cardTitleSpans = document.querySelectorAll(".card-title span");
const cardDescSpans = document.querySelectorAll(".card-description span");
const mediaIcons = document.querySelectorAll(".card-mediaIcons a i");

const renderCard = () => {
    //Remove the skeleton loading effect
    cardImages.forEach((cardImage) => {
        cardImage.classList.remove("loading");
    });
    cardTitles.forEach((cardTitle) => {
        cardTitle.classList.remove("loading");
    });
    cardDescriptions.forEach((cardDescription) => {
        cardDescription.classList.remove("loading");
    });
    cardMediaIcons.forEach((cardMediaIcon) => {
        cardMediaIcon.classList.remove("loading");
    });

    //Show the hidden html elements
    cardImgs.forEach((cardImg) => {
        cardImg.style.visibility = "visible";
    });
    cardTitleSpans.forEach((cardTitleSpan) => {
        cardTitleSpan.style.visibility = "visible";
    });
    cardDescSpans.forEach((cardDescSpan) => {
        cardDescSpan.style.visibility = "visible";
    });
    mediaIcons.forEach((mediaIcon) => {
        mediaIcon.style.visibility = "visible";
    });
}

//Execute renderCard on setTimeout
setTimeout(() => {
    renderCard();
}, 1000);

//Execute renderCard after the page loaded
//window.addEventListener("load", () => {
//renderCard();
//});

/**********************/
/*	Client carousel   */
/**********************/
$('.carousel-client').bxSlider({
    auto: true,
    slideWidth: 234,
    minSlides: 2,
    maxSlides: 5,
    controls: false
});

const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
    let letters = /^[a-zA-Z\s]*$/;
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const companyName = companyNameEl.value.trim();
    const message = messageEl.value.trim();
    if (name === "") {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
            "Please fill out this field!";
    } else {
        if (!letters.test(name)) {
            document.querySelector(".name-error").classList.add("error");
            document.querySelector(".name-error").innerText =
                "Please enter only characters!";
        } else {

        }
    }
    if (email === "") {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
            "Please fill out this field!";
    } else {
        if (!letters.test(name)) {
            document.querySelector(".name-error").classList.add("error");
            document.querySelector(".name-error").innerText =
                "Please enter only characters!";
        } else {

        }
    }
}

function reset() {
    nameEl = "";
    emailEl = "";
    companyNameEl = "";
    messageEl = "";
    document.querySelector(".name-error").innerText = "";
}
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});