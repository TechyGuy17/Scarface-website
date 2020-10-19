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
  
