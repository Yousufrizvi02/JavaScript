function myHeading(){
    var newHeading = document.querySelector('h1');
    var callHeading = newHeading.textContent = "Yousuf You are doing good job";
    return callHeading;
}

var imgChange = document.querySelector('img');
//console.log(imgChange);
imgChange.onclick = function(){
   var imgSrc = imgChange.src;
   var b = imgSrc.split("/");
   var c = b[b.length - 2];
   console.log(c);
    if(c === 'firefox-icon.png'){
        imgChange.src = 'images/img2.jpg';
    }
    else{
        imgChange.src = 'images/img1.jpg';
    }
} 


var myButton = document.querySelector('button');
var myheading = document.querySelector('h1');
function setUserName(){
    var myName = prompt('Enter Your name', 'Rizvi');
    localStorage.setItem('name', myName);
    myheading.textContent = 'Awesome ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
} else{
    var storedName = localStorage.getItem('name');
    myheading.textContent = 'Good ' + storedName;
}


