const name= document.getElementById('name');
const email= document.getElementById('email');
const gender= document.getElementById('gender');
const Password= document.getElementById('password');
const confirmPassword= document.getElementById('confirm password');

function clickHandler(){
  let user={
    name: name.value,
    email: email.value,
    gender: gender.value,
    password: Password.value,
    confirmPassword: confirmPassword.value
  }
  console.log(user);
  if(user.password === user.confirmPassword){
    const div= decument.Password.createElement('div');
    const h1= document.createElement('h1');
    h1.innerText=user.name;

    const h2= document.createElement('h2');
    h2.innerText=user.email;

    const h3= document.createElement('h3');
    h3.innrtText=user.contactNumber;

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);

    user.appendChild(div);
  }
}