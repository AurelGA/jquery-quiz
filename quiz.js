let score = 0; 
let quesNum = 0;
let userAnswers = [];

//object array containing quiz q and a. 
var questionSets = [{
	
	answerIt: "Which South Park character said this line? \'RESPECK MY AUTHORITAH!\' ",
	choices: ['Cartman', "Stan", "Mr. Hanky"],
	rightOne: 0, 
	},

{
	
	answerIt: " Who yell this line? 'KEEP SUMMER SAFE!' ",
	choices: ['Morty', 'Rick', 'Rick\'s Ship'],
	rightOne: 2, 
	},
	{
	
	answerIt: "What is the name of Randy Marsh\'s farm? ",
	choices: ['Skywalker Farm', 'Tegridy Farms', 'Greg Louganis Farm'],
	rightOne: 1, 
	},
	{
	
	answerIt: "What is the name of the sword in South Park\'s WoW episode?",
	choices: ['Sword of a Thousand Truths', 'Blazing Sword of Justice', 'Cartman\'s Fart Blade'],
	rightOne: 0, 
	},

	{
	
	answerIt: "In office space, what is milton\'s favorite item?",
	choices: ['Pimp of the Year Cup', 'Redline Stapler', 'Rubber Chicken'],
	rightOne: 1, 
	}



]

const quiz = () => {

}
//submit button
 $('.submit').click(function() {
 	let radio = $('.radio')
 	let test = false;
    for (let i =0; i < radio.length; i++) {
 		if (radio[i].checked) {
 			test = true
 		} 
 	}

 	//checks to see if an option has been chosen
	if (test == false) {
 		console.log('check item')
 		return;
 	}

 	//updates question number
 	if (quesNum < 4) {
 	quesNum++;
 	console.log(quesNum)
 	update();
 	}
 	else {
 		showScore();
 	}


})

 
//returns a new question --mechanics 
 const update = () => {
 	
// gives current question but generates next one as well 
 	let questionCurrent = $('#Questions')

//binds current choice to help select and update 
 	let choiceCurrent = $('.spanChoice')



 	
 	

 	questionCurrent.text(questionSets[quesNum].answerIt)

// tests console.log for code debug 
//console.log(choiceCurrent[0]); only reveals div result but we need individual asnwers 
//console.log(choiceCurrent[0]);




// for loop goes through current div choices 


 	for (i = 0; i < choiceCurrent.length; i++) {
 		$(choiceCurrent[i]).text(questionSets[quesNum].choices[i])
 	}
 	

 }

//show final score
const showScore = () => {
	console.log("Yes")
}

//testing code of update 
 update();

 	/*for (let j = 0; j < questionSets.length; j++) {
 		console.log(questionSets[j])
 	}*/























