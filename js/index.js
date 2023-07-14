const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = ` Oksana Feterovskaya &copy ${thisYear}`;
footer.appendChild(copyright);

// add sticky header
window.onscroll = function() {myFunction()};
let header = document.getElementById("header");
let sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//add skills section
const skills = ['HTML', 'CSS', 'JavaScript','Git Hub', 'UI/UX','Wordpress','Adobe Visual', 'Adobe Photoshop', 'Adobe Illustrator', ];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}

// Thanks Matt to this part explaining me
//const header = document.getElementById("header"); 
 const navbar = document.getElementById("navbar");
 navbar.addEventListener("click", (e) => {
     const isNavLink = navbar.contains(e.target);
     if (isNavLink) {
         e.preventDefault();//doesnt add # and doesnt scroll window
         const id = e.target.hash.replace("#", '');
         const selectedElementHeight = document.getElementById(id).offsetTop;//250px
         window.scrollTo(0, selectedElementHeight - header.offsetHeight);
         window.history.pushState({}, '', e.target.hash);//add the hash at the end of URL
     }
 });
//create Message Form Submit
const messageForm = document.querySelector('form[name = "leave_message"]');
messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.usersName.value;
    const email = e.target.usersEmail.value;
    const messages = e.target.usersMessage.value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", messages);   
      
//Display Messages in List
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector('ul');
const newMessage= document.createElement ('li');
newMessage.innerHTML = `<a href = "mailto:${email}"> ${name} </a>
    <span>wrote: ${messages}</span>`;
//create Remove button
const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        entry.remove();
    });
  
//create Edit button
const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    editButton.addEventListener('click', (e) => {
        const updatedMessage = prompt('Please edit your message');
        let editedMessage = newMessage.querySelector ('span');
    editedMessage.textContent = `wrote: ${updatedMessage}`;
});
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
})
