/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (event) => {

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    cursorRing.style.left = `${event.clientX}px`;
    cursorRing.style.top = `${event.clientY}px`;

});


/* =========================================
   CURSOR HOVER EFFECT
========================================= */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .project-card, .hobby, .circle-button, .contact-button"
    );


interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursorRing.classList.add("hover");

    });

    element.addEventListener("mouseleave", () => {

        cursorRing.classList.remove("hover");

    });

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("no-scroll");

    menuButton.textContent =
        mobileMenu.classList.contains("active")
            ? "CLOSE"
            : "MENU";

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("no-scroll");

        menuButton.textContent = "MENU";

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const triggerPoint =
            window.innerHeight - 100;

        if (elementTop < triggerPoint) {

            element.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================================
   ROTATING HERO TEXT
========================================= */

const changingText =
    document.getElementById("changingText");


const words = [
    "WEB",
    "AI",
    "CODE",
    "IDEAS",
    "DIGITAL"
];


let wordIndex = 0;


setInterval(() => {

    wordIndex++;

    if (wordIndex >= words.length) {

        wordIndex = 0;

    }

    changingText.style.animation = "none";

    changingText.offsetHeight;

    changingText.textContent =
        words[wordIndex];

    changingText.style.animation =
        "textFade .5s ease";

}, 1600);


/* =========================================
   HERO PARALLAX
========================================= */

const heroSymbol =
    document.querySelector(".hero-symbol");

const circles =
    document.querySelectorAll(".art-circle");


window.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);


    if (heroSymbol) {

        heroSymbol.style.transform =
            `translate(${x * 25}px, ${y * 25}px) rotate(25deg)`;

    }


    circles.forEach((circle, index) => {

        const multiplier =
            index === 0 ? 20 : -15;

        circle.style.transform =
            `translate(
                ${x * multiplier}px,
                ${y * multiplier}px
            )`;

    });

});


/* =========================================
   PROJECT CARD MAGNETIC EFFECT
========================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const rotateY =
            ((x / rect.width) - 0.5) * 4;

        const rotateX =
            ((y / rect.height) - 0.5) * -4;


        card.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateX(10px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================
   HOBBY MOVEMENT
========================================= */

const hobbies =
    document.querySelectorAll(".hobby");


hobbies.forEach(hobby => {

    hobby.addEventListener("mouseenter", () => {

        hobby.style.zIndex = "10";

    });

    hobby.addEventListener("mouseleave", () => {

        hobby.style.zIndex = "";

    });

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "%c Raj's Portfolio ",
    "background:#111;color:#fff;padding:10px;font-size:18px;"
);

console.log(
    "Built with HTML, CSS & JavaScript."
);
