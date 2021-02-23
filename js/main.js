//###################################################### 
// MAIL

var emailList = [
  'frida.kahlo@vivalavida.org',
  'ludwig.beethoven@komponist.de',
  'tina.modotti@resistenza.net',
  'ipazia@logos.org',
  'charles.chaplin@actor.us',
  'sebastiao.salgado@perspectiva.br',
  'rudolf.nuriev@ballet.ru',
];

var usrEmail = prompt('inserisci la tua email');

var index = null;
for (var i = 0; i < emailList.length; i++) {
  if (usrEmail == emailList[i]) {
    index = i;
  }
}

if (index != null) {
  console.log('Sei nella lista!\nposto: '+index+'\nemail: '+ emailList[index]);
} else {
  console.log('Non sei nella lista!');
}


//###################################################### 
// DADI

var usrLaunch = Math.floor(Math.random() * 6) + 1;
var skyLaunch = Math.floor(Math.random() * 6) + 1;
console.log('user:   '+usrLaunch+'\nskynet: '+skyLaunch);

if (usrLaunch > skyLaunch) {
  console.log('vince user!');
} else if (usrLaunch < skyLaunch) {
  console.log('vince skynet!');
} else {
  console.log('pareggio!');
}
