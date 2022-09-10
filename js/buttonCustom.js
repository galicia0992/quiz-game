//boton por Nour Saud
//https://codepen.io/nourabusoud/pen/ypZzMM?__cf_chl_tk=DwNgCxpcqptPCKvUaWIWAiOm.wTCT4s9bvmQYnjjaTM-1662054143-0-gaNycGzNC-U
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }