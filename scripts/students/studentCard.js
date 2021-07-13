const buildCapstoneVideo = (videoURL) => {
  console.log(videoURL);
  if (videoURL) {
    const videoId = videoURL.slice(17);
    const embedURL = `https://www.youtube.com/embed/${videoId}`;
    return `<iframe width="360" height="202" src="${embedURL}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  } else {
    return `<p>Video Coming soon!</p>`;
  }
};

const buildStudentInfoSection = (studentObject) => {
  let studentInfoHTMLString = "";
  if (studentObject.interests) {
    studentInfoHTMLString += `<h4>I'm interested in:</h4>
      <p>${studentObject.interests}</p>`;
  }

  if (studentObject.autobiography) {
    studentInfoHTMLString += `<h4>The title of my future autobiography will be:</h4>
      <p>${studentObject.autobiography}</p>`;
  }

  if (studentObject.commonPhrases) {
    studentInfoHTMLString += `<h4>When coding, I most often find myself saying:</h4>
      <p>"${studentObject.commonPhrases}"</p>`;
  }

  if (studentObject.lookingFor) {
    studentInfoHTMLString += `<h4>Things I'm looking for in a job:</h4>
      <p>${studentObject.lookingFor}</p>`;
  }

  return studentInfoHTMLString;
};

export const buildStudentComponent = (studentObject, i) => {
  return `
    <div class="col-md-4">
      <div class="card mt-4 student-card">
        ${
          studentObject.hired
            ? '  <div class="ribbon ribbon-top-left"><span>Hired</span></div>'
            : ""
        }
        <img src="images/headshots/${
          studentObject.firstName
        }/serious.jpg" class="card-img-top" alt="Headshot of ${studentObject.firstName}">
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
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
    <img src="images/headshots/${
      studentObject.firstName
    }/funny.jpg" class="card-img-top" alt="Headshot of ${studentObject.firstName}">
      <div class="modal-content center-text">
        <div class="modal-header">
          <h2 class="modal-title">Hi, I'm ${studentObject.firstName}!</h2>

        </div>
        <div class="modal-body container-fluid student-info">
        ${buildStudentInfoSection(studentObject)}
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
