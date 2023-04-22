const buttonSubmit = document.querySelector('.Collaboration');
const nameId = document.getElementById('name');
const emailId = document.getElementById('email');
const commentId = document.getElementById('comment-box');


const Details = JSON.parse(localStorage.getItem('contactInfo'));
if (Details) {
  nameId.value = Details.name;
  emailId.value = Details.email;
  commentId.value = Details.comment;
}

buttonSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameId.value;
  const email = emailId.value;
  const comment = commentId.value;
 
  if (!name || !email || !comment) {
    return;
  }
  
  const contactInfo = {
    name,
    email,
    comment,
  };
  localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
});