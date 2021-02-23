//###################################################### 
// MAIL

// init
var usrEmailValue, 
    checkOK = 0,
    emailList = [
      'frida.kahlo@vivalavida.org',
      'ludwig.beethoven@komponist.de',
      'tina.modotti@resistenza.net',
      'ipazia@logos.org',
      'charles.chaplin@actor.us',
      'sebastiao.salgado@perspectiva.br',
      'rudolf.nuriev@ballet.ru',
    ];

// list in console
console.log('-- email list -----------------------');
for (var i = 0; i < emailList.length; i++) {
  console.log('#'+(i+1)+' '+emailList[i]);
}

// form sources
var usrEmailForm = document.getElementById('usr_email');

// info display hooks
var msgHtml       = document.getElementById('msg');
var checkMsgHtml  = document.getElementById('check_msg');

// ** EMAIL CHECK **
var checkBtn = document.getElementById('check_btn');
checkBtn.addEventListener('click', 
  function() {

    // data retrieving
    usrEmailValue = usrEmailForm.value;
    console.log('usrEmailValue = ' + usrEmailValue );

    // consistency check
    if (usrEmailValue == '') {
      msgHtml.className = 'show';
      checkMsgHtml.innerHTML = 'Compila e-mail!';
    } else {
      // checking user email 
      var index = null;
      for (var i = 0; i < emailList.length; i++) {
        if (usrEmailValue == emailList[i]) index = i;
      }
      // message
      if (index != null) {
        checkOK = 1;
        checkMsgHtml.innerHTML = 'Sei nella lista! <br>Posizione #'+(index+1)+'<br>E-Mail: '+ emailList[index];
        console.log('Sei nella lista!\nposto: '+index+'\nemail: '+ emailList[index]);
      } else {
        checkOK = 0;
        checkMsgHtml.innerHTML = usrEmailValue + ' non è nella lista!';
        console.log(usrEmailValue + ' non è nella lista!');
      }
      // msg display
      msgHtml.className = 'show';
    }
  }
);

// ** CHECK RESUME **
var resumeBtn = document.getElementById('resume_btn');
resumeBtn.addEventListener('click', 
  function() {
    // msg hiding
    msgHtml.className = 'hide';
    checkMsgHtml.innerHTML = '';
    if (checkOK == 1) {
      // data erasing
      usrEmailForm.value       = '';
    }
  }
);

// ** CHECK REDO **
var eraseBtn = document.getElementById('erase_btn');
eraseBtn.addEventListener('click', 
  function() {
    // msg hiding
    msgHtml.className = 'hide';
    checkMsgHtml.innerHTML = '';
    // data erasing
    usrEmailForm.value       = '';
  }
);

//###################################################### 
// DADI

// ** DICE GAME **
var gamblingBtn = document.getElementById('gambling_btn');
gamblingBtn.addEventListener('click', 
  function() {
    alert('ancora devo fare la UI!\nguarda in console...');

    var usrLaunch = Math.floor(Math.random() * 6) + 1;
    var skyLaunch = Math.floor(Math.random() * 6) + 1;
    console.log('-- dice game ------------------------\nuser:   '+usrLaunch+'\nskynet: '+skyLaunch);
    
    if (usrLaunch > skyLaunch) {
      console.log('vince user!');
    } else if (usrLaunch < skyLaunch) {
      console.log('vince skynet!');
    } else {
      console.log('pareggio!');
    }

  }
);
