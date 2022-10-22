let myImage = document. querySelector ('img');

myImage.onclick = function()  {
    const mySrc = myImage.getAttribute ('src');
    if (mySrc ==='image/image4_s.jpg') {
        myImage. setAttribute ('src','image/animal_fox_kitsune.png')
    } else {
           myImage. setAttribute('src','image/image4_s.jpg');
    }
}

let myButton = document. querySelector ('button') ;
let myHeading = document.querySelector('h1') ;

function setUserName ( ) {
    let myName = prompt('あなたの名前を入力してください.');
    if (!myName) {
        setUserName ();
     } else {
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'Mozilla is cool'+ myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName ();
} else {
    const storedName = localStorage.getItem('name');
    myHeading. innerHTML ='Mozilla is cool' + storedName;
}

myButton. onclick = function() {
    setUserName( );
}