import { getTechStackData} from "../data/techStackData.js"
import { buildTechStackLogo } from "./techStackCard.js"

export const printTechStack = () => {
  const techStack = getTechStackData()
  let techStackContainer = document.querySelector("#tech-stack-container");
  for (let i = 0; i < techStack.length; i++) {
    const logoHTML = buildTechStackLogo(techStack[i]);
    techStackContainer.innerHTML += logoHTML;
  }
};
