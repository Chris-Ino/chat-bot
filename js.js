var arrPerguntas = ['Seja bem vindo! Qual seu nome?', ', qual sua idade?', 'Como podemos te ajudar?'];
var arrRespostas = ['Meu nome é ', ' anos', ''];
var textIn, inputEnter, pAtual = 0, registro = [];
var chatFrag = document.createDocumentFragment();
var y=0;

setTimeout(setChat,1000);

function setChat() {
	for ( i=0 ; i<arrPerguntas.length ; i++) {
		var chatBox = document.getElementById("chatBox");
		var idPR = i;
		var divChat = document.createElement('div');
		divChat.id = 'pergunta' + idPR;
		chatFrag.appendChild(divChat);
		chatBox.appendChild(chatFrag);
	}
	inputEnter = document.getElementById("chatMensagem");
	inputEnter.addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) {
		event.preventDefault();
		getChat();
	  }
	}); 
	line();
};

function line() {
	var divLine = document.getElementById("pergunta" + pAtual);
	if (pAtual === 1) { //Pergunta para idade ---- É preciso dinamizar array do registro
		var divWrite = 'Olá ' + registro[pAtual-1] +  arrPerguntas[pAtual];
		divLine.innerHTML = '<div class="contentFala"><div class="contentUser fLeft"><img src="imgs/chat02.png" /></div><div class="bolhaEsq"><div class="talktext"><p>  </p></div></div></div>' + '<div id="enviada' + pAtual + '" class="contentFala">';
		var descendants = divLine.getElementsByTagName('p');
		typeWriter(divWrite, descendants, pAtual);
	} else {
		var divWrite = arrPerguntas[pAtual];
		divLine.innerHTML = '<div class="contentFala"><div class="contentUser fLeft"><img src="imgs/chat02.png" /></div><div class="bolhaEsq"><div class="talktext"><p>  </p></div></div></div>' + '<div id="enviada' + pAtual + '" class="contentFala">';
		var descendants = divLine.getElementsByTagName('p');
		typeWriter(divWrite, descendants, pAtual);
	}
	setTimeout(getDown,10);	
};

function imprimeDiv(textIn){
	var enviada = document.getElementById("enviada" + pAtual);
	if (pAtual === 1) { //Resposta para idade
		enviada.innerHTML = '<div class="contentUser fRight"><img src="imgs/chat01.png" /></div> <div class="bolhaDir"><div class="talktext"><p>Tenho ' + textIn + arrRespostas[pAtual] + '</p></div></div> <div class="contentFala" id="perguntada"></div>';
	} else {
		enviada.innerHTML = '<div class="contentUser fRight"><img src="imgs/chat01.png" /></div> <div class="bolhaDir"><div class="talktext"><p>' + arrRespostas[pAtual] + textIn + '</p></div></div> <div class="contentFala" id="perguntada"></div>';
	}
	document.getElementById("chatMensagem").value='';
	pAtual++
	setTimeout(line,500);	
}

function getChat() {
	textIn = document.getElementById("chatMensagem").value;
	registro[pAtual] = textIn;
	setTimeout(getDown,10);	
	imprimeDiv(textIn);
}

function getDown() {
	window.scrollTo(0,document.body.scrollHeight);
}

function typeWriter(divWrite, descendants, pAtual) {
	if (y < divWrite.length) {
		
		descendants[0].innerHTML += divWrite.charAt(y);
		y++;
		setTimeout(typeWriter.bind(null, divWrite, descendants, pAtual), 30);
	}
	else { y = 0 }
}

