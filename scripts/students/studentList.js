import {getStudents} from "../data/studentData.js"
import {buildStudentComponent} from "./studentCard.js"

export const printStudentList = () => {

  const studentContainer = document.querySelector("#student-container");
    const students = getStudents()
    console.log(students)
  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    let studentHTML = buildStudentComponent(currentStudent, i);
    studentContainer.innerHTML += studentHTML;
  }
};
