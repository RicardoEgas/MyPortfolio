const nameId = document.getElementById('name');
const emailId = document.getElementById('email');
const commentId = document.getElementById('comment-box');

function populateStorage() {
  const formDetails = {
    name: nameId.value,
    email: emailId.value,
    message: commentId.value,

  };

  localStorage.setItem('contactInfo', JSON.stringify(formDetails));
}

nameId.addEventListener('input', populateStorage);
emailId.addEventListener('input', populateStorage);
commentId.addEventListener('input', populateStorage);

const contactInfo = JSON.parse(localStorage.getItem('contactInfo'));

if (contactInfo) {
  nameId.value = contactInfo.name;
  emailId.value = contactInfo.email;
  commentId.value = contactInfo.message;
}