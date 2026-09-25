// ==========================================
// SIMPLE PORTFOLIO JAVASCRIPT
// Beginner-friendly: no libraries required.
// ==========================================

// 1. ROTATING HERO WORD
const roleElement = document.getElementById("role");

const roles = [
  "visuals",
  "photographs",
  "designs",
  "stories",
  "websites"
];

let roleIndex = 0;

setInterval(() => {
  roleElement.style.opacity = "0";

  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
    roleElement.style.opacity = "1";
  }, 250);

}, 2200);


// 2. PHOTOGRAPHY CATEGORY FILTER
const filterButtons = document.querySelectorAll(".filter");
const photoItems = document.querySelectorAll(".photo-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active state from every button
    filterButtons.forEach(item => {
      item.classList.remove("active");
    });

    // Make clicked button active
    button.classList.add("active");

    const selectedCategory = button.dataset.filter;

    photoItems.forEach(photo => {
      const category = photo.dataset.category;

      if (selectedCategory === "all" || category === selectedCategory) {
        photo.classList.remove("hidden");
      } else {
        photo.classList.add("hidden");
      }
    });
  });
});


// 3. PROJECT MODAL
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalDescription = document.getElementById("modalDescription");

const workCards = document.querySelectorAll(".work-card");

workCards.forEach(card => {
  card.addEventListener("click", () => {

    modalTitle.textContent = card.dataset.title;
    modalType.textContent = card.dataset.type;
    modalDescription.textContent = card.dataset.description;
    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.title;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

// Close when clicking the dark background
modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});
// ==========================================
// NAVBAR COLOR CHANGE
// ==========================================

const header = document.querySelector(".site-header");

// Sections that have dark backgrounds
const darkSections = document.querySelectorAll(".work-section");

const navObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        header.classList.add("light-nav");
      } else {
        header.classList.remove("light-nav");
      }

    });

  },
  {
    threshold: 0.25
  }
);

darkSections.forEach((section) => {
  navObserver.observe(section);
});

// Close with Escape key
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});


// 4. SIMPLE MOUSE FOLLOWER
const cursor = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", event => {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});


// 5. PHOTO CLICK -> SIMPLE LIGHTBOX
photoItems.forEach(photo => {
  photo.addEventListener("click", () => {
    const image = photo.querySelector("img");

    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalTitle.textContent = photo.querySelector("figcaption").textContent;
    modalType.textContent = "Photography";
    modalDescription.textContent =
      "A selected photograph from the portfolio.";

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});
