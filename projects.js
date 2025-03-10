const slides = document.querySelectorAll(".slides img");
const projectTitle = document.querySelector(".details h1");
const projectDescription = document.querySelector(".details p");
const skillList = document.querySelector(".skill-list");
let slideIndex = 0;
let intervalId = null;

// Project data
const projects = [
  {
    title: "Happy Tails",
    description:
      "A pet adoption website made with HTML, CSS, and Javascript. Utilized Javascript and JSON for displaying various information per animal.",
    skills: [
      { img: "skills/1.png", name: "HTML" },
      { img: "skills/2.png", name: "CSS" },
      { img: "skills/3.png", name: "JS" },
    ],
  },
  {
    title: "Chattr",
    description:
      "A Real Time Messaging Website made with Angular + PHP (Ratchet)",
    skills: [
      { img: "skills/4.png", name: "Angular" },
      { img: "skills/5.png", name: "PHP" },
      { img: "skills/mysql.png", name: "MySQL" },
    ],
  },
  {
    title: "AppointMe",
    description:
      "An Appointment Queueing System for Gordon College CCS Department. A group project where I led my team as a project manager. Aside from having a rich programming experience and learnings, this project also taught me about project management, leadership, and collaboration.",
    skills: [
      { img: "skills/4.png", name: "Angular" },
      { img: "skills/typescript.png", name: "Typescript" },
      { img: "skills/mysql.png", name: "MySQL" },
    ],
  },
  {
    title: "SubTask",
    description:
      "A Task Management Website created using Laravel. Task can have have a list of tasks called subtask. Features include deadline reminder, robust details panel, and analytics. The first website with complexity I did.",
    skills: [
      { img: "skills/6.png", name: "Laravel" },
      { img: "skills/5.png", name: "PHP" },
      { img: "skills/mysql.png", name: "MySQL" },
    ],
  },
  {
    title: "SDO Olongapo ICT Hub",
    description:
      "A Web & Mobile Development Project made for SDO Olongapo ICT Department. Developed the entire mobile application for the project & assisted in optimizing Express.JS backend.",
    skills: [
      { img: "skills/flutter.png", name: "Flutter" },
      { img: "skills/dart.png", name: "Dart" },
      { img: "skills/typescript.png", name: "Typescript" },
      { img: "skills/mysql.png", name: "MySQL" },
    ],
  },
  {
    title: "Payroll Management System",
    description:
      "A Java Swing Application created in NetBeans. The program is a payroll manager that utilizes SQL database to manage the payroll.",
    skills: [
      { img: "skills/7.png", name: "Java" },
      { img: "skills/mysql.png", name: "MySQL" },
    ],
  },
];

// Initialize slider
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    updateProjectDetails(slideIndex);
    startAutoSlide();
  }
}

function startAutoSlide() {
  clearInterval(intervalId); // Clear any existing interval
  intervalId = setInterval(nextSlide, 10000);
}

function updateProjectDetails(index) {
  const project = projects[index];
  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;

  skillList.innerHTML = "";
  project.skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");
    skillDiv.innerHTML = `<img src="${skill.img}" /><h3>${skill.name}</h3>`;
    skillList.appendChild(skillDiv);
  });
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide) => slide.classList.remove("displaySlide"));
  slides[slideIndex].classList.add("displaySlide");

  // Update details when changing slide
  updateProjectDetails(slideIndex);

  // Reset the timer
  startAutoSlide();
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}
