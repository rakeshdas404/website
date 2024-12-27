// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// Sample Projects Array
const projects = [
  // Data Visualization
  { id: 1, category: 'data-viz', size: 'medium', title: 'COVID-19 Workforce Salary Analysis', desc: 'Analyzed salary trends across industries using R.', tools: 'R, ggplot2, dplyr', img: './assets/png/project-1.png', link: './project-1.html' },
  { id: 3, category: 'data-viz', size: 'wide', title: 'Wildfire Analysis in B.C.', desc: 'Analyzed wildfire occurrences with geospatial data.', tools: 'R, ggplot2, GIS', img: './assets/png/project-3.png', link: './project-3.html' },
  { id: 4, category: 'data-viz', size: 'medium', title: 'Environmental Health Dashboard', desc: 'An interactive R Shiny dashboard intended to investigate the connection between environmental factors and public health.', tools: 'R, ggplot2', img: './assets/png/project-4.png', link: './project-4.html' },

  // Creative Coding
  
  { id: 5, category: 'creative-coding', size: 'small', title: 'Optimizing Pathfinding in Pac-Man', desc: 'Maze Navigation with Admissible Heuristics', tools: 'R, ggplot2, GIS', img: './assets/png/project-5.png', link: './project-5.html' },
  { id: 6, category: 'creative-coding', size: 'wide', title: 'Nonogram Puzzle Solver and Generator', desc: 'Constraint-Based Solvers and Image-to-Nonogram Conversion', tools: 'JavaScript, P5.js', img: './assets/png/project-6.png', link: './project-6.html' },
  { id: 7, category: 'creative-coding', size: 'square', title: 'AI-Powered Smart Blind Stick for Enhanced Mobility and Safety', desc: 'Combining Obstacle Detection, Emotion Recognition, and Adaptive Feedback for Visually Impaired Users', tools: 'HTML, CSS', img: './assets/png/project-7.png', link: './project-7.html' },

  // Data Science
  { id: 2, category: 'data-science', size: 'small', title: 'Housing Price Prediction', desc: 'Model to predict housing prices.', tools: 'Python, Pandas', img: './assets/png/project-2.png', link: './project-2.html' },
  { id: 8, category: 'data-science', size: 'square', title: 'Insurance Policy Adoption Prediction', desc: 'Leveraging XGBoost to Analyze Customer Behavior and Optimize Insurance Strategies.', tools: 'Python, Pandas', img: './assets/png/project-8.png', link: './project-8.html' },
  { id: 9, category: 'data-science', size: 'medium', title: 'Movie Rating Prediction', desc: 'A Robust Pipeline for Personalized Recommendations with Random Forest Regressor', tools: 'R, Tidyverse', img: './assets/png/project-9.png', link: './project-9.html' },
];

// DOM Elements
const projectContainer = document.querySelector('.projects-grid');
const categoryTabs = document.querySelectorAll('.category-tab');

// Event Listener for Tabs
categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    categoryTabs.forEach(t => t.classList.remove('active'));

    // Add active class to clicked tab
    tab.classList.add('active');

    // Get selected category
    const category = tab.getAttribute('data-category');
    filterProjects(category);
  });
});

// Filter Projects Function
function filterProjects(category) {
  let filteredProjects = projects;

  // Filter projects based on category
  if (category !== 'all') {
    filteredProjects = projects.filter(project => project.category === category);
  }

  displayProjects(filteredProjects);
}

// Display Projects Function
function displayProjects(filteredProjects) {
  projectContainer.innerHTML = ''; // Clear previous content

  filteredProjects.forEach(project => {
    projectContainer.innerHTML += `
      <div class="project-card ${project.size}">
        <div class="project-card__img-cont">
          <img src="${project.img}" alt="${project.title}" />
        </div>
        <div class="project-card__info">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.desc}</p>
          
          <!-- See More Button -->
          <a href="${project.link}" class="project-card__btn">See More</a>
        </div>
      </div>`;
  });
}

// Initialize with 'all'
filterProjects('all');



document.querySelector('.contact__form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields!');
    e.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address!');
    e.preventDefault();
  }
});


