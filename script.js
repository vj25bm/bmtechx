let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Reset to first slide
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

let currentIndex = 0;
const courseList = document.getElementById("courses");
const totalCourses = document.querySelectorAll(".course").length;

function moveCarousel(n) {
    currentIndex += n;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= totalCourses) currentIndex = totalCourses - 1;

    const offset = -currentIndex * 320; // 320px is width of course + margins
    courseList.style.transform = `translateX(${offset}px)`;
}

function enroll(courseName) {
    alert(`You have enrolled in ${courseName}`);
}
let reviewIndex = 0;
showReviews();

function showReviews() {
    const reviews = document.getElementsByClassName("review");
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none"; // Hide all reviews
    }
    reviewIndex++;
    if (reviewIndex > reviews.length) { reviewIndex = 1 } // Reset to first review
    reviews[reviewIndex - 1].style.display = "block"; // Show current review
    setTimeout(showReviews, 5000); // Change review every 5 seconds
}

function plusSlides(n) {
    reviewIndex += n;
    const reviews = document.getElementsByClassName("review");
    if (reviewIndex > reviews.length) { reviewIndex = 1 }
    if (reviewIndex < 1) { reviewIndex = reviews.length }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none"; // Hide all reviews
    }
    reviews[reviewIndex - 1].style.display = "block"; // Show current review
}
