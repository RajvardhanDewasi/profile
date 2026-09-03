document.addEventListener("DOMContentLoaded", () => {

```
/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");

        const isOpen = nav.classList.contains("active");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });


    document.querySelectorAll(".navbar nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });

}


/* =========================
   CUSTOM CURSOR
========================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

const isTouchDevice =
    window.matchMedia("(pointer: coarse)").matches;

if (!isTouchDevice && cursorDot && cursorOutline) {

    window.addEventListener("mousemove", (event) => {

        cursorDot.style.left = `${event.clientX}px`;
        cursorDot.style.top = `${event.clientY}px`;

        cursorOutline.animate(
            {
                left: `${event.clientX}px`,
                top: `${event.clientY}px`
            },
            {
                duration: 180,
                fill: "forwards"
            }
        );

    });


    const interactiveElements = document.querySelectorAll(
        "a, button, .project-card, .skill-tags span"
    );

    interactiveElements.forEach(element => {

        element.addEventListener("mouseenter", () => {
            cursorOutline.classList.add("active");
        });

        element.addEventListener("mouseleave", () => {
            cursorOutline.classList.remove("active");
        });

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-content, .contact-section"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const id = entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.remove("active-link");

                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active-link");
                    }

                });

            }

        });

    },
    {
        rootMargin: "-40% 0px -50% 0px"
    }
);


sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================
   RESUME PLACEHOLDER
========================= */

const resumeButton =
    document.querySelector(".resume-placeholder");

if (resumeButton) {

    resumeButton.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "Resume will be available here soon!"
        );

    });

}
```

});
