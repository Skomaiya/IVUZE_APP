// Auto slide testimonials
let testimonialIndex = 0;
const testimonials = [
  "Every step you take is a step closer to wellness.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
];

function changeTestimonial() {
  const testimonialText = document.getElementById("testimonialText");
  testimonialText.style.opacity = 0;
  testimonialText.style.transform = "translateX(-20px)";

  setTimeout(() => {
    testimonialText.textContent = testimonials[testimonialIndex];
    testimonialText.style.opacity = 1;
    testimonialText.style.transform = "translateX(0)";
  }, 500);

  // Remove active class from all circles
  const circles = document.querySelectorAll(".slide-circles span");
  circles.forEach(circle => circle.classList.remove("active"));

  // Add active class to the corresponding circle
  circles[testimonialIndex].classList.add("active");

  // Increment testimonial index or reset if reached the end
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

let authorIndex = 0;
const authors = [
  "John Doe",
  "Shema Ivan",
  "Morgan Freeman"
];

function changeAuthor() {
  const authorText = document.getElementById("author");
  authorText.style.opacity = 0;
  authorText.style.transform = "translateX(-20px)";

  setTimeout(() => {
    authorText.textContent = authors[authorIndex];
    authorText.style.opacity = 1;
    authorText.style.transform = "translateX(0)";
  }, 500);

  // Remove active class from all circles
  const circles = document.querySelectorAll(".slide-circles span");
  circles.forEach(circle => circle.classList.remove("active"));

  // Add active class to the corresponding circle
  circles[authorIndex].classList.add("active");

  // Increment author index or reset if reached the end
  authorIndex = (authorIndex + 1) % authors.length;
}

// Change testimonial and author every 3 seconds
setInterval(changeTestimonial, 3000);
setInterval(changeAuthor, 3000);