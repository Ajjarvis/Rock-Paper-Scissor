function rpsgame(yourChoise){
	humanChoice = yourChoise.id;
	botChoice = rpsBotChoice();

	var yourScore = finalDecition(humanChoice,botChoice);
	var finalmessage = finalMessage(yourScore);

	console.log(humanChoice,botChoice);
	console.log(yourScore);
	console.log(finalmessage);

	rpsFrontEnd(humanChoice,botChoice,finalmessage);

}

function rpsBotChoice(){
	var rps = ['rock','paper','scissor'];
	return rps[Math.floor(Math.random() * 3)]
}

function finalDecition(humanChoice,botChoice){
	var rpsDatabase = {
		'rock':{'rock':0.5, 'paper':0, 'scissor':1},
		'paper':{'rock':1, 'paper':0.5, 'scissor':0},
		'scissor':{'rock':0, 'paper':1, 'scissor':0.5},
	}

	var humanScore = rpsDatabase[humanChoice][botChoice];
	var botScore = rpsDatabase[botChoice][humanChoice];

	return [humanScore,botScore]
}

function finalMessage(yourScore){
	if (yourScore[0] == 1){
		return {'message':'You Won!!!','color':'green'}
	}
	else if(yourScore[0] == 0){
		return {'message':'You Lost!!','color':'red'}
	}
	else{
		return {'message':'There is Tie!','color':'yellow'}
	}
}

function rpsFrontEnd(humanChoice,botChoice,finalmessage){

	var imageDataset = {
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissor': document.getElementById('scissor').src
	}

	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissor').remove();

	var humanDiv = document.createElement('div');
	var botDiv = document.createElement('div');
	var messageDiv = document.createElement('div');

	humanDiv.innerHTML = "<img src='"+imageDataset[humanChoice]+"' hight=150 width=150 style='box-shadow:0px 10px 50px blue;'>";
	botDiv.innerHTML = "<img src='"+imageDataset[botChoice]+"' hight=150 width=150 style='box-shadow:0px 10px 50px red;'>";
	messageDiv.innerHTML = "<h1 style='color:"+finalmessage['color']+";'>"+finalmessage.message+"</h1>";

	document.getElementById('flex-box-rps-id').appendChild(humanDiv);
	document.getElementById('flex-box-rps-id').appendChild(messageDiv);
	document.getElementById('flex-box-rps-id').appendChild(botDiv);

}