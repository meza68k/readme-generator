// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  
  switch (license) {
    case "GNU AGPLv3":
      badge = { name: "GNU+AGPLv3", color: "orange" };
      break;
    case "GNU GPLv3":
      badge = { name: "GNU+GPLv3", color: "red" };
      break;
    case "GNU LGPLv3":
      badge = { name: "GNU+LGPLv3", color: "blue" };
      break;
    case "Mozilla Public License 2.0":
      badge = { name: "Mozilla+2.0", color: "yellow" };
      break;
    case "Apache License 2.0":
      badge = { name: "Apache+2.0", color: "green" };
      break;
    case "MIT License":
      badge = { name: "MIT", color: "brightgreen" };
      break;
    case "Boost Software License 1.0":
      badge = { name: "Boost+Software+1.0", color: "yellowgreen" };
      break;
    case "The Unlicense":
      badge = { name: "The+Unlicense", color: "blueviolet" };
      break;
  }

  return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;
}


// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  let path;
  
  switch (license) {
    
    case "Mozilla":
      path = "mpl-2.0";
      break;
    case "Apache":
      path = "apache-2.0";
      break;
    case "MIT License":
      path = "mit";
      break;
    case "Boost Software License 1.0":
      path = "bsl-1.0";
      break;
  }
 return license? `https://choosealicense.com/licenses/${path}/`: '';
}

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  return license ? `## License
  This project is licensed under the ${license}` : '';

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Collaboration](#collaboration)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ============================================================
  ## Installation
  ${data.install}
  ============================================================
  ## Usage
  ${data.usage}
  ============================================================
  ## Collaboration
  ${data.collaborate}
  ============================================================
  ${renderLicenseSection(data.license)}
  ============================================================
  ## Tests
  ${data.tests}
  ============================================================  
  ## Questions
  * Github username: https://github.com/${data.github}. ${data.github}
  
  Reach out to me if you have any questions!
  
  * E-mail address: ${data.email}
`;
}


module.exports = generateMarkdown;
