const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
// const myName = "Oksana Feterovskaya"; 
// copyright.innerHTML = ` ${myName} &copy ${thisYear}`;
copyright.innerHTML = ` Oksana Feterovskaya &copy ${thisYear}`;
footer.appendChild(copyright);
const skills = ['HTML', 'CSS', 'JavaScript', 'Adobe Visual', 'AdobePhotoshop', 'AdobeIllustrator', 'UI/UX','Wordpress'];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}
