let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Loop back to first slide
    }
    slides[slideIndex].classList.add('active');
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Loop back to first slide
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Loop to last slide
    }
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}


const courseList = document.getElementById("courses");
const totalCourses = document.querySelectorAll(".course").length;
let currentIndex = 0;

function moveCarousel(n) {
    currentIndex += n;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= totalCourses) currentIndex = totalCourses - 1;

    const offset = -currentIndex * 320; // 320px is width of course + margins
    courseList.style.transform = `translateX(${offset}px)`;
}
function showNewSlides() {
    const newSlides = document.querySelectorAll('.new-slide');
    newSlides.forEach(slide => slide.style.display = "none"); // Hide all new slides

    newSlideIndex++;
    if (newSlideIndex >= newSlides.length) {
        newSlideIndex = 0; // Loop back to the first new slide
    }

    newSlides[newSlideIndex].style.display = "block"; // Show current new slide
}

function plusNewSlides(n) {
    const newSlides = document.querySelectorAll('.new-slide');
    newSlideIndex += n;

    if (newSlideIndex >= newSlides.length) {
        newSlideIndex = 0; // Loop back to the first new slide
    } else if (newSlideIndex < 0) {
        newSlideIndex = newSlides.length - 1; // Go to the last new slide
    }

    for (let i = 0; i < newSlides.length; i++) {
        newSlides[i].style.display = "none"; // Hide all new slides
    }
    newSlides[newSlideIndex].style.display = "block"; // Show current new slide
}

// Add a timer for the new slideshow to change every 5 seconds
setInterval(showNewSlides, 5000);

function enroll(courseName) {
    alert(`You have enrolled in ${courseName}`);
}
const ctx = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Software Development', 'Database', 'Web Development', 'Digital Marketing', 'Cloud Computing'],
        datasets: [{
            label: 'Course Distribution',
            data: [30, 20, 25, 15, 10], // Sample data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Course Distribution'
            }
        }
    }
});

function showReviews() {
    const reviews = document.getElementsByClassName("review");
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none"; // Hide all reviews
    }
    reviewIndex++;
    if (reviewIndex > reviews.length) { reviewIndex = 1; } // Reset to first review
    reviews[reviewIndex - 1].style.display = "block"; // Show current review
    setTimeout(showReviews, 2000); // Change review every 5 seconds
}

function plusReviewSlides(n) {
    reviewIndex += n;
    const reviews = document.getElementsByClassName("review");
    if (reviewIndex > reviews.length) { reviewIndex = 1; }
    if (reviewIndex < 1) { reviewIndex = reviews.length; }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none"; // Hide all reviews
    }
    reviews[reviewIndex - 1].style.display = "block"; // Show current review
}
