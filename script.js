const students = [
  {
    firstName: "Lindsey",
    lastName: "Crittendon",
    resumeURL:
      "https://drive.google.com/file/d/1hH9SQBsA51unndvQjhWNm-Bl7_4T-jmZ/view?usp=sharing",
    githubURL: "https://github.com/LindseyKCrittendon",
    photoURL: "images/headshots/Lindsey.jpg",
    linkedInURL: "www.linkedin.com/in/lindsey-crittendon",
    serverSideCapstoneURL: "https://youtu.be/3vZCYdE74Uk",
    interests: "I loved working with SQL!  There is something that really gets me when it comes to putting data in the database but pulling back and manipulating it to display what you want!  I've started reading up on Azure and machine learning.  I love how you can train Azure to do things such as perform facial recognition.  I've been a beekeeper for years, because, like coding, you learn something new all the time.  #saveTheBees",
    autobiography: "The Hitchhiker's Guide to Imposter Syndrome",
    commonPhrases: "Depends on what is happening.  It ranges from, \"How cool is that?\" to, \"I think it's time to put in a debugger...\"",
    lookingFor: "I want to go to work excited for what I'm going to learn next rather than feeling like I'm functioning on autopilot.  I want to pursue data science to track trends and make reliable future predictions in terms of data.  Machine learning and AI definitely plays into this."
  },
  {
    firstName: "Stephen",
    lastName: "Avila",
    resumeURL:
      "https://drive.google.com/file/d/1iNf3hLalEBsB_MZqsskxWhzLfhhJppvb/view?usp=sharing",
    photoURL: "images/headshots/Stephen.jpg",
    githubURL: "https://github.com/StephenAvila2020",
    linkedInURL: "https://www.linkedin.com/in/stephen-avila1/",
    interests: "",
    autobiography: "",
    commonPhrases: "",
    lookingFor: ""
  },
  {
    firstName: "Swathi",
    lastName: "Mukkamala",
    interests: "I'm interested in learning more programming languages with an emphasis in front-end development. I'm also interested in UI/UX Design; I'm passionate about learning and understanding users' needs and implementing them in a way that is relevant to them. On a more lighthearted note, I love watching competitive cooking and baking shows, going on spontaneous adventures around West Virginia, and having a great time making really bad DIY projects.",
    autobiography: "Swath Gone Wild",
    commonPhrases: "Woah, there's a shortcut for that?!",
    lookingFor: "I want to be able to work for a company that I'm passionate about. I want to be able to work with a great team that prioritizes learning and investing in each others' skill sets.",
    resumeURL: "https://drive.google.com/file/d/1d3tU8oW40AYmkt4JR1V6miF3hrx4FFj6/view?usp=sharing",
    photoURL: "images/headshots/Swathi.jpg",
    linkedInURL: "https://www.linkedin.com/in/swathi-mukkamala/",
    githubURL: "https://github.com/swathi862",
    frontEndCapstoneURL: "https://youtu.be/ltoAlkCN4YI",
    serverSideCapstoneURL: "https://youtu.be/WFwzTMeswzg",
  },
  {
    firstName: "Sarah",
    lastName: "Brooks",
    resumeURL:
      "https://drive.google.com/file/d/1iNf3hLalEBsB_MZqsskxWhzLfhhJppvb/view?usp=sharing",
    photoURL: "images/headshots/Sarah.jpg",
    githubURL: "https://github.com/sarahebrooks12",
    linkedInURL: "http://linkedin.com/in/sarah-tredway-brooks/",
    interests: "I love books, true crime, helping other people find bugs in their code, and foggy mornings.",
    autobiography: "Sarah \"why you got to be like that\" Tredway-Brooks: No ragrets",
    commonPhrases: "\"Please work\"",
    lookingFor: "To be apart of a great team. To be able to go to Disney World."
  },
  {
    firstName: "Pat",
    lastName: "Shaver",
    resumeURL:
      "https://drive.google.com/file/d/1n_b9NgCXgkj3qc2C6n3s1VBaMERUSbHO/view?usp=sharing",
    photoURL: "images/headshots/Pat.jpg",
    githubURL: "https://github.com/Shaverp3",
    linkedInURL: "http://www.linkedin.com/in/pls304",
    frontEndCapstoneURL: "https://youtu.be/r7dfDFJky-I",
    interests: "",
    autobiography: "",
    commonPhrases: "",
    lookingFor: ""
  },
  {
    firstName: "Austin",
    lastName: "Preece",
    resumeURL:
      "https://drive.google.com/file/d/1oeJC6VnddbUSFVUnZBlhaK1FDxCItdOA/view?usp=sharing",
    photoURL: "images/headshots/Austin.jpg",
    githubURL: "https://github.com/apreece13",
    linkedInURL: "http://www.linkedin.com/in/austin-preece",
    serverSideCapstoneURL: "https://youtu.be/jcUwGVWmqgM",
    interests: "",
    autobiography: "",
    commonPhrases: "",
    lookingFor: ""
  },
  {
    firstName: "Ashon",
    lastName: "Woodbury",
    resumeURL:
      "https://drive.google.com/file/d/1QB_NQECOw2sNGnELxbwe4YoNTJ5Y21so/view?usp=sharing",
    photoURL: "images/headshots/Ashon.jpg",
    githubURL: "https://github.com/AWoodbury01",
    linkedInURL: "https://www.linkedin.com/in/ashon-woodbury-b77896104/",
    serverSideCapstoneURL: "https://youtu.be/dXnvpsHbf1Q",
    interests: "",
    autobiography: "",
    commonPhrases: "",
    lookingFor: ""
  },
  {
    firstName: "Barry",
    lastName: "Griffith",
    resumeURL:
      "https://drive.google.com/file/d/1n68YJwqqteqQvs0nsng-0hRlwQcVCp9S/view?usp=sharing",
    photoURL: "images/headshots/Barry.jpg",
    linkedInURL: "http://www.linkedin.com/in/barry-griffith",
    githubURL: "https://github.com/barrygriffith84",
    frontEndCapstoneURL: "https://youtu.be/8ITCrvrkRXQ",
    serverSideCapstoneURL: "https://youtu.be/tLEcP_YiU0c",
    interests: "I'm interested in front-end development, SQL, and data analytics.  I really enjoyed working with JavaScript and React.  I also enjoyed writing SQL queries, and playing around with data.  I hope to eventually get a master’s degree in Data Analytics.  ",
    autobiography: "The Chef Boyardee of Code: How to Solve Your Problems with Spaghetti",
    commonPhrases: "Thank goodness for Stack Overflow",
    lookingFor: "I'm looking for an employer that's going to invest in me.  I want to become the best developer I can be, and I want an employer that is focused on developing my knowledge base."
  },
  {
    firstName: "Derek",
    lastName: "Mayse",
    resumeURL:
      "https://drive.google.com/file/d/1jK2zC7QGbyb2oj18jbD3r3l_1gAiKNzh/view?usp=sharing",
    photoURL: "images/headshots/Derek-Mayse.jpg",
    githubURL: "https://github.com/HavokMal3k",
    linkedInURL: "http://www.linkedin.com/in/derek-mayse-4958a61b0",
    frontEndCapstoneURL: "https://youtu.be/PAwUFowvkik",
    serverSideCapstoneURL: "https://youtu.be/4XkcDwQRy1Q",
    interests: "",
    autobiography: "",
    commonPhrases: "",
    lookingFor: ""
  },
  {
    firstName: "Derek",
    lastName: "Stapleton",
    resumeURL:
      "https://drive.google.com/file/d/1d4xdGOWlDeH0aYrRjYigbXeGUlNZ-hAr/view?usp=sharing",
    githubURL: "https://github.com/DerekStapleton21",
    photoURL: "images/headshots/Derek-S.jpg",
    linkedInURL: "https://www.linkedin.com/in/derek-stapleton-859bba1b2/",
    interests: "",
    autobiography: "",
    commonPhrases: "",
    lookingFor: ""
  },
  {
    firstName: "Devin",
    lastName: "Conroy",
    resumeURL:
      "https://drive.google.com/file/d/1nAxP_At0VdkgFcXQIydlkoMeTyHLShxu/view?usp=sharing",
    photoURL: "images/headshots/Devin.jpg",
    githubURL: "https://github.com/dconroy91?tab=repositories",
    linkedInURL: "https://www.linkedin.com/in/devconroy/",
    serverSideCapstoneURL: "https://youtu.be/DoQpNBvwK4U",
    interests: "",
    autobiography: "",
    commonPhrases: "",
    lookingFor: ""
  },
  {
    firstName: "Dylan",
    lastName: "Bishop",
    resumeURL:
      "https://drive.google.com/file/d/1nAxP_At0VdkgFcXQIydlkoMeTyHLShxu/view?usp=sharing",
    photoURL: "images/headshots/Dylan.jpg",
    linkedInURL: "https://www.linkedin.com/in/dylan-bishop/",
    githubURL: "https://github.com/dylbyl",
    serverSideCapstoneURL: "https://youtu.be/tF0Va9HlIc4",
    interests: "Game development! User experience!",
    autobiography: "A Series of Slightly Fortunate Events",
    commonPhrases: "SLOW DOWN AND BREATHE",
    lookingFor: "A fun team with a welcoming atmosphere, a chance to learn and apply many new things!"
  },
  {
    firstName: "Michael",
    lastName: "Hotchkiss",
    resumeURL:
      "https://drive.google.com/file/d/1n_b9NgCXgkj3qc2C6n3s1VBaMERUSbHO/view?usp=sharing",
    photoURL: "images/headshots/Mike.jpg",
    githubURL: "https://github.com/mhotchkiss84",
    linkedInURL: "https://www.linkedin.com/in/michael-hotchkiss/",
    interests: "",
    autobiography: "",
    commonPhrases: "",
    lookingFor: ""
  },
];

const techStack = [
  {
    name: "HTML",
    logo: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
  },
  {
    name: "CSS",
    logo: "https://seeklogo.com/images/C/css3-logo-FD8D698B77-seeklogo.com.png",
  },
  {
    name: "JavaScript",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png",
  },
  {
    name: "React",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
  },
  {
    name: "C#",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg",
  },
  {
    name: ".NET Core",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
  },
  {
    name: "ASP.NET Core",
    logo: "https://www.natmarchand.fr/wp-content/uploads/2018/05/asp.net_.jpg",
  },
  {
    name: "ADO.NET",
    logo:
      "https://saihasoft.com/uploads/technology/qpmyUPIaL4-ZzUgaBnVOve7padZhP5Nm.jpg",
  },
  {
    name: "SQL Server",
    logo: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg",
  },
  {
    name: "Entity Framework",
    logo:
      "https://www.koskila.net/wp-content/uploads/2016/05/entity-framework-logo1.jpg",
  },
  {
    name: "Postman",
    logo:
      "https://396241.smushcdn.com/1598754/wp-content/uploads/2020/03/postman-logo-vert-2018.jpg?lossy=1&strip=1&webp=1",
  },
  {
    name: "Visual Studio",
    logo:
      "https://1000logos.net/wp-content/uploads/2020/08/Visual-Studio-Logo.png",
  },
  {
    name: "Visual Studio Code",
    logo:
      "https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png",
  },
];

const buildCapstoneVideo = (videoURL) => {
  console.log(videoURL);
  if (videoURL == undefined) {
    return `<p>Video Coming soon!</p>`;
  } else {
    console.log(videoURL)
    const videoId = videoURL.slice(17);
    const embedURL = `https://www.youtube.com/embed/${videoId}`;
    console.log("videoId", videoId);
    console.log("embedURL", embedURL);
    return `<iframe width="360" height="202" src="${embedURL}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
};
const buildStudentComponent = (studentObject, i) => {
  console.log(studentObject.frontEndCapstoneURL);
  return `
  <div class="col-md-3">
    <div class="card mt-4 student-card">
      <img src="${
        studentObject.photoURL
      }" class="card-img-top" alt="Headshot of ${studentObject.firstName}">
      <div class="card-body center-text">
      <h5 class="card-title">${studentObject.firstName} ${
    studentObject.lastName
  }</h5>
      <button type="button"  data-toggle="modal" data-target="#modal-${i}">
        Meet ${studentObject.firstName}
      </button>
      </div>
    </div>
  </div>
  <div class="modal fade" id="modal-${i}" tabindex="-1" aria-labelledby="${
    studentObject.firstName
  }Modal" aria-hidden="true">
  <div class="modal-dialog student-modal">
    <div class="modal-content center-text">
      <div class="modal-header">
        <h2 class="modal-title">Hi, I'm ${studentObject.firstName}!</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body container-fluid student-info">
      <h4>I'm interested in:</h4>
      <p>${studentObject.interests}</p>
      <h4>The title of my future autobiography will be:</h4>
      <p>${studentObject.autobiography}</p>
      <h4>When coding, I most often find myself saying:</h4>
      <p>${studentObject.commonPhrases}</p>
      <h4>Things I'm looking for in a job:</h4>
      <p>${studentObject.lookingFor}</p>
      <h4 class="video-heading">Front End Capstone</h4>
      ${buildCapstoneVideo(studentObject.frontEndCapstoneURL)}
      <h4 class="video-heading">Server Side Capstone</h4>
      ${buildCapstoneVideo(studentObject.serverSideCapstoneURL)}

      </div>
      <div class="student-modal-footer">
      <h4>Learn More:</h4>
      <div class="social-icons center-wrapper">
        <a target="_blank" href="${
          studentObject.githubURL
        }" class="logo github-logo">
          <img src="images/icons/github-icon-gray.png" alt="github logo" />
        </a>
        <a class="btn btn-info resume-btn" target="_blank" href="${
          studentObject.resumeURL
        }">View Resume</a>
        <a target="_blank" href="${
          studentObject.linkedInURL
        }" class="logo linkedin-logo">
          <img src="images/icons/linkedin-icon-gray.png" alt="github logo" />
        </a>
        </div>
      </div>
    </div>
  </div>
</div>`;
};

buildTechStackLogo = (techStackObject) => {
  return `
  <div class="col-md-2 tech-stack-logo">
    <img
      src="${techStackObject.logo}"
      alt="${techStackObject.name} logo"
    />
  </div>`;
};

const studentContainer = document.querySelector("#student-container");
students.sort((a, b) => a.lastName.localeCompare(b.lastName));
for (let i = 0; i < students.length; i++) {
  let currentStudent = students[i];
  let studentHTML = buildStudentComponent(currentStudent, i);

  studentContainer.innerHTML += studentHTML;
}

let techStackContainer = document.querySelector("#tech-stack-container");
for (let i = 0; i < techStack.length; i++) {
  const logoHTML = buildTechStackLogo(techStack[i]);
  techStackContainer.innerHTML += logoHTML;
}
