const buildCapstoneVideo = (videoURL) => {
  if (videoURL) {
    if(videoURL.includes("loom")){
      const videoId = videoURL.slice(27)
      return `<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/${videoId}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`
    } else if (videoURL.includes("youtube")){
      const videoId = videoURL.slice(32)
      console.log("YOUTUBE VIDEO ID", videoId)
      return `<iframe width="400" height="224" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }

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


  if (studentObject.commonPhrases) {
    studentInfoHTMLString += `<h4>When coding, I most often find myself saying:</h4>
      <p>${studentObject.commonPhrases}</p>`;
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
        <img src="scripts/images/${studentObject.firstName.toLowerCase()}-serious.jpg" class="card-img-top" alt="Headshot of ${studentObject.firstName}">
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
        <div class="modal-body container-fluid student-info">
          <button type="button" class="close close-button-container" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="close-button"> &times;</span>
          </button>
        <img src="scripts/images/${
          studentObject.firstName.toLowerCase()
        }-funny.jpg" class="card-img-top modal-image" alt="Headshot of ${studentObject.firstName}">
        <h2 class="modal-title">Hi, I'm ${studentObject.firstName}!</h2>
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
            <img src="scripts/images/github-logo.png" alt="github logo" />
          </a>
          <a class="btn btn-info resume-btn" target="_blank" href="${
            studentObject.resumeURL
          }">View Resume</a>
          <a target="_blank" href="${
            studentObject.linkedInURL
          }" class="logo linkedin-logo">
            <img src="scripts/images/linkedin-logo.png" alt="github logo" />
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};
