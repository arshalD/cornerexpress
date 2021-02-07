
//function for inserting
var insertHtml = function (selector, html) {
    $(document).ready(function(){
   
        $(selector).load(html);
     
     });
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };
var database;  
// ---------------------------------------------------------------------------------------------------------------------------------
// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     database=JSON.parse(req.responseText);
//     console.log(database.email);
    
//   }
// };

// req.open("GET", "https://api.jsonbin.io/b/5fb8a42804be4f05c928658d", true);
// req.send()
// ---------------------------------------------------------------------------------------------------------------------------------
// let requ = new XMLHttpRequest();

// requ.onreadystatechange = () => {
//   if (requ.readyState == XMLHttpRequest.DONE) {
//     console.log(requ.responseText);
//   }
// };
// requ.open("PUT", "https://api.jsonbin.io/b/5fb8a42804be4f05c928658d", true);
// requ.setRequestHeader("Content-Type", "application/json");
// requ.send('{"arshal":"developer"}');
// ----------------------------------------------------------------------------------------------------------------------------------

var nullhtml="<div></div>";
var sliderHtml="snippets/slider.html";//url of slider html
var menuitems="snippets/menuItems.html";
var items="snippets/items.html";
var loginurl="snippets/login.html";
var deliverytrue="snippets/deliverytrue.html";
var customercare="snippets/customercare.html";
var faq="snippets/faq.html";
var term="snippets/term.html";
var returnhtml="snippets/return.html";
var contact="snippets/contact.html";
var categories="snippets/items.html";
var email="arshaldmathew@gmail.com";
var name="Arshal";
var address="street 02 Kochi";
var pswd="RealDev";
var ricec=0,foodc=0,flourc=0,applec=0,strawbc=0,tangerc=0,potatoc=0,onionc=0,tomatoc=0;
var paneerc=0,parmesanc=0,milkc=0,saltc=0,pepperc=0,chillie=0,cookiec=0,cakec=0,sweetc=0,coffeec=0,drinkc=0;
var sugarc=0,cashewc=0,walnutc=0,almondc=0;


// ---------------------------------------------------------------------------------------------------------------------------------
window.addEventListener("load",main);
function main(){
  insertHtml("#main",sliderHtml);
  insertHtml("#main2",menuitems);


        var provider = new firebase.auth.GoogleAuthProvider();
        var id_token = googleUser.getAuthResponse().id_token;

        var firebaseConfig = {
                    apiKey: "AIzaSyAMlCkdxGf6MUTtbsPowojQrrx_tCLLQU4",
                    authDomain: "cornerdb-2e3c9.firebaseapp.com",
                    databaseURL: "https://cornerdb-2e3c9-default-rtdb.firebaseio.com",
                    projectId: "cornerdb-2e3c9",
                    storageBucket: "cornerdb-2e3c9.appspot.com",
                    messagingSenderId: "232434670622",
                    appId: "1:232434670622:web:3efee61ffd70deef48620f"
                  };
                  // Initialize Firebase
                  firebase.initializeApp(firebaseConfig);

        firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            console.log(credential);
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

          googleBuildAndSignIn(id_token);

          function googleBuildAndSignIn(id_token) {
            // [START auth_google_build_signin]
            // Build Firebase credential with the Google ID token.
            var credential = firebase.auth.GoogleAuthProvider.credential(id_token);
          
            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential).catch((error) => {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
            // [END auth_google_build_signin]
          }
      
  // firebase authentication
  // Initialize the FirebaseUI Widget using Firebase.
  // var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // ui.start('#firebaseui-auth-container', {
  //   signInOptions: [
  //     // List of OAuth providers supported.
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //     firebase.auth.GithubAuthProvider.PROVIDER_ID
  //   ],
  //   // Other config options...
  // });
}
function login(){
  insertHtml("#main",loginurl);
  insertHtml("#main2",nullhtml);
}
function deliveryTrue(){
  insertHtml("#main",deliverytrue);
  insertHtml("#main2",nullhtml);
}
function care(){
  insertHtml("#main",customercare);
  insertHtml("#main2",faq);
}
function termsandcond(){
  insertHtml("#main",term);
  insertHtml("#main2",nullhtml);
}
function retrn(){
  insertHtml("#main",returnhtml);
  insertHtml("#main2",nullhtml);
}
function faqfn(){
  insertHtml("#main",faq);
  insertHtml("#main2",nullhtml);
}
function contactfn(){
  insertHtml("#main",contact);
  insertHtml("#main2",nullhtml)
}
function categoriesfn(){
  insertHtml("#main",categories);
  insertHtml("#main2",nullhtml);
}
//-------------------------------------------------------------------------------------------------------------------------------------
function increment(id){
  if (document.getElementById(id).value>=0 && document.getElementById(id).value<10)
  document.getElementById(id).innerHTML= ++document.getElementById(id).value;
}

function decrement(id){
  if (document.getElementById(id).value>0 && document.getElementById(id).value<=10){
    document.getElementById(id).innerHTML= --document.getElementById(id).value;}
}


// --------------------------------------------------------------------------------------------------------------------------------------
// code to connect to database and fetch data and will check the password using jsonbin.io
// XMLHttpRequest is async so cant put in a function 
// https://api.jsonbin.io/b/5fd2fda381ec296ae71c73dd 

var userdata;
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    userdata=JSON.parse(req.responseText);
  }
};

req.open("GET", "https://api.jsonbin.io/b/5fd2fda381ec296ae71c73dd/2", true);
req.send();
// ------------------------------------------------------------------------------------------------------------------------------------
loginfn = () => {
  var flag=0,flag1=0,pos=0;
  var userName=document.getElementById("InputUsername").value;
  for (let i=0; i<5;i++){
   if (userName ==userdata.names[i]){
     flag=1;
     pos=i;
   }
  };
  console.log(flag,pos);
  if (flag==1){
    var password=document.getElementById("InputPassword").value;
    if (password==userdata.pswd[pos]){
       flag1=1;
     }
  }
  else{
    alert("Please check your username and password");
  }
  if (flag1==1){
    alert("Welcome");
  }
}