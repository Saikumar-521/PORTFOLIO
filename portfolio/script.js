AOS.init({
    duration: 1500,
    offset: 100,
    delay:40,
    once: false,  
  });

const pr = document.getElementById('project');
let myProjects = [
    {
        name: 'Weather Forecasting Website',
        gitHubLink: 'https://github.com/Saikumar-521/weather-app',
        img: 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png',
        description: 'A simple weather app using OpenWeather API that shows temperature, humidity, and weather conditions of any city.',
        deployLink:'https://saikumar-521.github.io/weather-app/'
    },
    {
        name: 'MEAL FINDER',
        gitHubLink: 'https://github.com/Saikumar-521/MEAL-FINDER',
        img: 'https://cdn-icons-png.flaticon.com/512/857/857681.png',
        description: 'A meal search application that helps users discover delicious recipes by ingredient or meal name. It uses TheMealDB API to display meal images, instructions, and ingredients in a clean Bootstrap layout.',
        deployLink: 'https://saikumar-521.github.io/MEAL-FINDER/'
    },
    {
        name: 'Vitasi: Real-Time Contactless Vital Sign Estimation System',
        gitHubLink: 'https://github.com/Saikumar-521/VITASI-A-REAL-TIME-CONTACTLESS-VITAL-SIGNS-ESTIMATION-SYSTEM',
        img: 'https://cdn-icons-png.flaticon.com/512/2966/2966485.png',
        description: 'A Real-Time Contactless Vital Signs Estimation System measures vital signs like heart rate and breath rate without physical contact using ML and PVMP algorithms.',
        deployLink:'https://github.com/Saikumar-521/VITASI-A-REAL-TIME-CONTACTLESS-VITAL-SIGNS-ESTIMATION-SYSTEM'
    },
    {
        name: 'Real-Time Object Detection using CNN Based Image Classification',
        gitHubLink: 'https://github.com/Saikumar-521/REAL-TIME-OBJECT-DETECTION-USING-CNN-BASED-IMAGE-CLASSIFICATION',
        img: 'https://cdn-icons-png.flaticon.com/512/3176/3176362.png',
        description: 'This project uses Convolutional Neural Networks (CNNs) to detect and classify objects in real time using a webcam feed.',
        deployLink:'https://github.com/Saikumar-521/REAL-TIME-OBJECT-DETECTION-USING-CNN-BASED-IMAGE-CLASSIFICATION'
    },
    {
        name: 'Profile-Card',
        gitHubLink: 'https://github.com/Saikumar-521/profilecard',
        img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        description: 'A simple and responsive profile card built using HTML, CSS, and JavaScript. It displays a user’s image, name, and social links in a clean and elegant design — perfect for portfolios and personal websites.',
        deployLink: 'https://saikumar-521.github.io/profilecard/'
    },
    {
        name: 'Villa Website',
        gitHubLink: 'https://github.com/Saikumar-521/VILLAS-PROJECT',
        img: 'https://cdn-icons-png.flaticon.com/512/1670/1670568.png',
        description: 'A responsive real estate website showcasing villas and properties with a modern, clean UI built using HTML, CSS, and Bootstrap.',
        deployLink:'https://github.com/Saikumar-521/VILLAS-PROJECT'
    }
];

function loadProjects() {
    let output = '';

    myProjects.forEach((project) => {
        output += `
      <div class=" col-md-7 col-lg-5  mb-4" data-aos='zoom-out' >
        <div class="ps card text-info h-100 shadow border-0 rounded-6" onclick="window.open('${project.deployLink}', '_blank')">
          <img src="${project.img}" class="psimg card-img-top" alt="${project.name}" width='100px'>
          <div class="card-body">
            <h5 class="card-title text-info">${project.name}</h5>
            <p class="card-text">${project.description}</p>
            ${project.gitHubLink ?
                `<a href="${project.gitHubLink}" target="_blank" class="btn btn-outline-info">View on GitHub</a>`
                : `<button class="btn btn-secondary" disabled>No Link</button>`}
          </div>
        </div>
      </div>
    `;
    });

    pr.innerHTML = output;
}

loadProjects();


const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const response = await fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    alert(' Message sent successfully!');
    form.reset();
  } else {
    alert(' Something went wrong. Please try again.');
  }
});