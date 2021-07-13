export const buildTechStackLogo = (techStackObject) => {
    return `
    <div class="col-md-2 tech-stack-logo">
      <img
        src="${techStackObject.logo}"
        alt="${techStackObject.name} logo"
      />
    </div>`;
  };
