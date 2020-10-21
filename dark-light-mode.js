var isDarkMode = getCookie('darkmode');
const buttonFunction = (function setup () { 
  // const prevents from reassigning
    const coolDown = 200 // 5s cooldown
    let lastClick = Date.now() - coolDown // to start fresh
  
    function startCoolDown () {
      lastClick = Date.now()
    }
    function checkCoolDown () {
      const notOver = Date.now() - lastClick < coolDown
      if (notOver) alert('stop spamming the button!')
      // using an alert it will block javascript loops
      return !notOver
    }
  
    return function (darklightmode) {
      if (checkCoolDown()) {
        startCoolDown()
  
        var element = document.body;
        element.classList.toggle("dark-mode");
       
      }
    }
  })() 

   function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }   
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}