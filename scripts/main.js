// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/1.png') {
    myImage.setAttribute ('src','images/2.png');
  } else if (mySrc === 'images/2.png') {
    myImage.setAttribute ('src','images/3.png');
  } else if (mySrc === 'images/3.png') {
    myImage.setAttribute ('src','images/4.png');
  } else if (mySrc === 'images/4.png') {
    myImage.setAttribute ('src','images/5.png');
  } else if (mySrc === 'images/5.png') {
    myImage.setAttribute ('src','images/6.png');
  } else if (mySrc === 'images/6.png') {
    myImage.setAttribute ('src','images/7.png');
  } else if (mySrc === 'images/7.png') {
    myImage.setAttribute ('src','images/8.png');
  } else {
    myImage.setAttribute ('src','images/1.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Web developer newbie, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Web developer newbie, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
