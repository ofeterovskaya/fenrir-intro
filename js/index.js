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
  
// //create Edit button
// const editButton = document.createElement('button');
//     editButton.innerText = 'edit';
//     editButton.type = 'button';
//     editButton.addEventListener('click', (e) => {
//         const entry = editButton.parentNode;
//         entry.edit();
// });

    newMessage.appendChild(removeButton);
    //newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
})
