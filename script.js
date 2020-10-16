

const students = [
  {
    firstName: "Lindsey",
    lastName: "Clagg",
    specialty: "UI/ UX, Data Visualizations"
  },
  {
    firstName: "Swathi",
    lastName: "Mukkamala",
    specialty: "Game Logic"
  },
  {
    firstName: "Sarah",
    lastName: "Brooks",
    specialty: "Team Building"
  },
  {
    firstName: "Pat",
    lastName: "Shaver",
    specialty: "SQL"
  }
];

const techStack = [
  {
    name: "HTML",
    logo: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
  },
  {
    name: "CSS",
    logo: "https://seeklogo.com/images/C/css3-logo-FD8D698B77-seeklogo.com.png"
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
  },
  {
    name: "C#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg"
  },
  {
    name: ".NET Core",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"
  },
  {
    name: "ASP.NET Core",
    logo: "https://www.natmarchand.fr/wp-content/uploads/2018/05/asp.net_.jpg"
  },
  {
    name: "ADO.NET Core",
    logo: "https://static.wikia.nocookie.net/windows/images/4/49/Adonet-300x225.png/revision/latest?cb=20190407170848"
  },
  {
    name: "SQL Server",
    logo: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg"
  },
  {
    name: "Entity Framework",
    logo: "https://www.koskila.net/wp-content/uploads/2016/05/entity-framework-logo1.jpg"
  },
  {
    name: "Postman",
    logo: "https://396241.smushcdn.com/1598754/wp-content/uploads/2020/03/postman-logo-vert-2018.jpg?lossy=1&strip=1&webp=1"
  },
  {
    name: "Visual Studio",
    logo: "https://1000logos.net/wp-content/uploads/2020/08/Visual-Studio-Logo.png"
  },
  {
    name: "Visual Studio Code",
    logo: "https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png"
  },
]

const buildStudentComponent = (studentObject, i) => {
  return `
  <div class="col-md-3">
    <div class="card mt-4 student-card">
      <img src="https://pbs.twimg.com/profile_images/1080855598298611713/lTS-u1Iu.jpg" class="card-img-top" alt="Headshot of ${studentObject.firstName}">
      <div class="card-body center-text">
        <h5 class="card-title">${studentObject.firstName} ${studentObject.lastName}</h5>
        <button type="button"  data-toggle="modal" data-target="#modal-${i}">
          Meet ${studentObject.firstName}
      </button>
      </div>
    </div>
  </div>
  <div class="modal fade" id="modal-${i}" tabindex="-1" aria-labelledby="${studentObject.firstName}Modal" aria-hidden="true">
  <div class="modal-dialog student-modal">
    <div class="modal-content center-text">
      <div class="modal-header">
        <h2 class="modal-title">Hi, I'm ${studentObject.firstName}!</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body student-info">
        <h4>Before I was a developer I was a ...</h4>
        <p>Fill in the blank</p>
        <h4>I'm interested in... </h4>
        <p>blah blah blah </p>
        <h4>My superpower is...</h4>
        <p>doing stuff</p>
        <h4 class="video-heading">Front End Capstone</h4>
        <iframe width="360" height="202" src="https://www.youtube.com/embed/4QprJg5xXqY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4 class="video-heading">Back End Capstone</h4>
        <iframe width="360" height="202" src="https://www.youtube.com/embed/8AdaI-4bCt0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="modal-footer social-icons center-wrapper">
        <a target="_blank" href="#" class="logo github-logo">
          <img src="images/icons/github-icon-gray.png" alt="github logo" />
        </a>
        <a target="_blank" href="#" class="logo linkedin-logo">
          <img src="images/icons/linkedin-icon-gray.png" alt="github logo" />
        </a>
        <a target="_blank" href="#" class="logo email-logo">
          <img src="images/icons/email-icon-gray.png" alt="github logo" />
        </a>
        <a target="_blank" href="#" class="logo resume-logo">
          <img src="images/icons/resume-icon-gray.png" alt="github logo" />
        </a> 
      </div>
    </div>
  </div>
</div>`
 
};

buildTechStackLogo = (techStackObject) => {
  return `
  <div class="col-md-2 tech-stack-logo">
    <img
      src="${techStackObject.logo}"
      alt="${techStackObject.name} logo"
    />
  </div>`
}

const studentContainer = document.querySelector("#student-container");
for (let i = 0; i < students.length; i++) {
  let currentStudent = students[i];
  let studentHTML = buildStudentComponent(currentStudent, i);

  studentContainer.innerHTML += studentHTML;
}

let techStackContainer = document.querySelector("#tech-stack-container");
for(let i = 0; i < techStack.length; i++){
  const logoHTML = buildTechStackLogo(techStack[i])
  techStackContainer.innerHTML += logoHTML
}
