const buttonSubmit = document.querySelector('.Collaboration');
const nameId = document.getElementById('name');
const emailId = document.getElementById('email');
const commentId = document.getElementById('comment-box');


const formDetails = JSON.parse(localStorage.getItem('contactInfo'));
if (formDetails) {
  nameId.value = formDetails.name;
  emailId.value = formDetails.email;
  commentId.value = formDetails.comment;
}

buttonSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameId.value;
  const email = emailId.value;
  const comment = commentId.value;
 
  if (!name || !email || !comment) {
    return;
  }
  // Store data on array//
  const contactInfo = {
    name,
    email,
    comment,
  };
  localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
});