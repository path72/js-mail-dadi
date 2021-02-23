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
        console.log('Sei nella lista!\nposto: '+(index+1)+'\nemail: '+ emailList[index]);
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
      // form erasing
      usrEmailForm.value       = '';
    }
  }
);

// ** CHECK REDO **
var eraseBtn = document.getElementById('erase_btn');
eraseBtn.addEventListener('click', 
  function() {
    // form erasing
    usrEmailForm.value       = '';
  }
);

//###################################################### 
// DADI

// ** DICE GAME **
var gamblingBtn = document.getElementById('gambling_btn');
gamblingBtn.addEventListener('click', 
  function() {

    // game elements
    var face = [
      '<i class="fas fa-dice-one"></i>',
      '<i class="fas fa-dice-two"></i>',
      '<i class="fas fa-dice-three"></i>',
      '<i class="fas fa-dice-four"></i>',
      '<i class="fas fa-dice-five"></i>',
      '<i class="fas fa-dice-six"></i>',
    ];
    var stat = [
      ['usr',1],
      ['sky',1],
    ];
    console.log(stat);

    var finalMsg = '',
        msg1 = 'Hai vinto!',
        msg2 = 'Ha vinto SkyNet!',
        msg3 = 'Avete pareggiato!';

    // dice launch
    var usrLaunch = Math.floor(Math.random() * 6) + 1;
    var skyLaunch = Math.floor(Math.random() * 6) + 1;
    
    // stat
    stat.push(usrLaunch,skyLaunch);
    // stat.push(skyLaunch);
    console.log(stat);

    // message 
    if      (usrLaunch > skyLaunch) finalMsg = msg1;
    else if (usrLaunch < skyLaunch) finalMsg = msg2;
    else                            finalMsg = msg3;
    console.log('-- dice game ------------------------\n'+
                'user:   '+usrLaunch+'\n'+
                'skynet: '+skyLaunch+'\n'+
                finalMsg);

                
    var diceGame = document.getElementById('dice_game');
    var dieFaceUsr = document.getElementById('die_face_usr');
    var dieFaceSky = document.getElementById('die_face_sky');
    var diceMsg = document.getElementById('dice_msg');
    dieFaceUsr.innerHTML = face[usrLaunch-1];
    dieFaceSky.innerHTML = face[skyLaunch-1];
    diceMsg.innerHTML = finalMsg;
    diceGame.className = 'show';
  }
);
