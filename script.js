

const students = [
  {
    firstName: "Lindsey",
    lastName: "Crittendon",
    resumeURL: "https://drive.google.com/file/d/1hH9SQBsA51unndvQjhWNm-Bl7_4T-jmZ/view?usp=sharing"
  },
  {
    firstName: "Stephen",
    lastName: "Avila",
    resumeURL: "https://drive.google.com/file/d/1iNf3hLalEBsB_MZqsskxWhzLfhhJppvb/view?usp=sharing"
  },
  {
    firstName: "Swathi",
    lastName: "Mukkamala",
    resumeURL: "https://drive.google.com/file/d/1d3tU8oW40AYmkt4JR1V6miF3hrx4FFj6/view?usp=sharing"
  },
  {
    firstName: "Sarah",
    lastName: "Brooks",
    resumeURL: "https://drive.google.com/file/d/1iNf3hLalEBsB_MZqsskxWhzLfhhJppvb/view?usp=sharing"

  },
  {
    firstName: "Pat",
    lastName: "Shaver",
    resumeURL: "https://drive.google.com/file/d/1n_b9NgCXgkj3qc2C6n3s1VBaMERUSbHO/view?usp=sharing"

  },
  {
    firstName: "Austin",
    lastName: "Preece",
    resumeURL: "https://drive.google.com/file/d/1oeJC6VnddbUSFVUnZBlhaK1FDxCItdOA/view?usp=sharing"
  },
  {
    firstName: "Ashon",
    lastName: "Woodbury",
    resumeURL: "https://drive.google.com/file/d/1QB_NQECOw2sNGnELxbwe4YoNTJ5Y21so/view?usp=sharing"
  },
  {
    firstName: "Barry",
    lastName: "Griffith",
    resumeURL: "https://drive.google.com/file/d/1n68YJwqqteqQvs0nsng-0hRlwQcVCp9S/view?usp=sharing"
  },
  {
    firstName: "Derek",
    lastName: "Mayse",
    resumeURL: "https://drive.google.com/file/d/1jK2zC7QGbyb2oj18jbD3r3l_1gAiKNzh/view?usp=sharing"
  },
  {
    firstName: "Derek",
    lastName: "Stapleton",
    resumeURL: "https://drive.google.com/file/d/1d4xdGOWlDeH0aYrRjYigbXeGUlNZ-hAr/view?usp=sharing"
  },
  {
    firstName: "Devin",
    lastName: "Conroy",
    resumeURL: "https://drive.google.com/file/d/1nAxP_At0VdkgFcXQIydlkoMeTyHLShxu/view?usp=sharing"
  },
  {
    firstName: "Dylan",
    lastName: "Bishop",
    resumeURL: "https://drive.google.com/file/d/1nAxP_At0VdkgFcXQIydlkoMeTyHLShxu/view?usp=sharing"
  },
  {
    firstName: "Michael",
    lastName: "Hotchkiss",
    resumeURL: "https://drive.google.com/file/d/1n_b9NgCXgkj3qc2C6n3s1VBaMERUSbHO/view?usp=sharing"
  },
  {
    firstName: "Michael",
    lastName: "Hotchkiss",
    resumeURL: "https://drive.google.com/file/d/1n_b9NgCXgkj3qc2C6n3s1VBaMERUSbHO/view?usp=sharing"
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
    logo: "data:image/png;base64,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"
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
      <div class="modal-body container-fluid student-info">
        <h4>Before I was a developer I was a ...</h4>
        <p>Fill in the blank</p>
        <h4>I'm interested in... </h4>
        <p>blah blah blah </p>
        <h4>My superpower is...</h4>
        <p>doing stuff</p>
        <a class="btn btn-info" target="_blank" href="${studentObject.resumeURL}">View Resume</a>
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
