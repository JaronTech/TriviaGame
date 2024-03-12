
let questionCard = document.getElementById("questionCard");
//array of answer buttons
let ansBtn = [];
for (let i = 1; i <= 3; i++) {
    ansBtn[i] = document.getElementById("ansCard" + i);
}
let scoreDisplay = document.getElementById("playerScore");
let score = 0;
let triviaNumber = 0;
let askedQuestions = [];


addEventListener('load', randQuestion);

//Select a random question.
function randQuestion() {
let randCategory;
let catColor = 'blueviolet';
let questionNumber;
let randQuestion;
let category = document.getElementById("category");
let repeat = true;
let endDisplay = document.getElementById("endDisplay");
endDisplay.style.display = "none";

/*
I attempted to prevent repeat questions.
None of this works. I tried completely different things for like 3-4 hours to get it to work but it does not.

while(repeat) {
    let isDuplicate = false;
    randCategory = Math.floor(Math.random() * 4);
    questionNumber = Math.floor(Math.random() * 5);

    randQuestion = randCategory + (questionNumber / 10);

    repQuestion[triviaNumber] = randQuestion;
    console.log(repQuestion[triviaNumber]);

    repQuestion.forEach(element => {
        if(element == randQuestion) {
            isDuplicate = true;
        }
    });

    if(!isDuplicate) {
        repeat = false;
    }
}

*/

//Prevent Repeat Questions
do {
    questionNumber = Math.floor(Math.random() * 5);
    randCategory = Math.floor(Math.random() * 4)
    randQuestion = questionNumber + ", " + randCategory;

} while (askedQuestions.includes(randQuestion));

// Add the question number to the askedQuestions array
askedQuestions.push(randQuestion);

//Increases to keep track of the current Trivia Question
triviaNumber++;

//Determines The category and then displays the question
switch (randCategory) {
    case 0: category.textContent = "Category: Math";
        displayQuestion(questionsMath[questionNumber]);
        catColor = '#ff3467';
        break;
    case 1: category.innerHTML = "Category: Structures";
        displayQuestion(questionsStructures[questionNumber]);
        catColor = '#20c0ff';
        break;
    case 2: category.innerHTML = "Category: Planets";
        displayQuestion(questionPlanets[questionNumber]);
        catColor = '#34ff60';
        break;
    case 3: category.innerHTML = "Category: Fruits";
        displayQuestion(questionFruits[questionNumber]);
        catColor = '#955dff';
        break;
    default:
        break;
}

$(document).ready(function(){
    $("body").animate({
        'background-color': catColor
    }, "slow");
});
}


//Displays question and answers on their cards
function displayQuestion(question) {

    //Removes Green/Red Coloring from buttons
    ansBtn.forEach(element => {
        element.removeAttribute('style');
    });

    //Displays the question in the question card
    questionCard.innerHTML = question.question;

    //Add each answer to a button and an event listener
    question.answers.forEach((answer, index)=> {
        let button = ansBtn[index + 1];

        button.innerHTML = answer.text;
        button.dataset.correct = answer.correct;

        button.addEventListener('click', selectAnswer);
    });
}

function selectAnswer(e) {
    const button = e.target;

    //Removes the event listener on the buttons to prevent clicking answers multiple times
    ansBtn.forEach(element => {
        element.removeEventListener('click', selectAnswer);
    });

    //If the selected answer is the correct answer then the play score goes up
    if(button.dataset.correct == "true") {
        score++;
        scoreDisplay.innerHTML = score;
    }

    //Changes colors to reveal correct answer
    ansBtn.forEach(element => {
        if(element.dataset.correct == "true") {
            element.style.backgroundColor = "#00e41e";
        } else {
            element.style.backgroundColor = "#ff0000";
        }
    });


    //Stops the game after 10 questions have been answered
    if (triviaNumber < 10) {
        //Timer between questions
        setTimeout(randQuestion, 2000);
    } else {
        //Displays end screen with score!
        let endScore = document.getElementById("endScore");
        endDisplay.style.display = "block";
        endScore.innerHTML = score * 10 + "%";
    }

}












//Start of question Arrays 

const questionsMath = [
    {
        question: "What is 10 - 1?",
        answers: [
            { text: "8", correct: false},
            { text: "9", correct: true},
            { text: "7", correct: false}
        ]
    },
    {
        question: "What is 3 + 5?",
        answers: [
            { text: "8", correct: true},
            { text: "6", correct: false},
            { text: "9", correct: false}
        ]
    },
    {
        question: "What is 3 * 2?",
        answers: [
            { text: "4", correct: false},
            { text: "8", correct: false},
            { text: "6", correct: true}
        ]
    },
    {
        question: "What is 100 - 50?",
        answers: [
            { text: "50", correct: true},
            { text: "45", correct: false},
            { text: "82", correct: false}
        ]
    },
    {
        question: "What is 80 + 40?",
        answers: [
            { text: "110", correct: false},
            { text: "130", correct: false},
            { text: "120", correct: true}
        ]
    }
];

const questionsStructures = [
    {
        question: "Where is the Eiffel Tower located?",
        answers: [
            { text: "Canada", correct: false},
            { text: "Mexico", correct: false},
            { text: "France", correct: true}
        ]
    },
    {
        question: "Which country is the Statue of Liberty located in?",
        answers: [
            { text: "Ireland", correct: false},
            { text: "United States", correct: true},
            { text: "Spain", correct: false}
        ]
    },
    {
        question: "Where is the Pyramids of Giza located?",
        answers: [
            { text: "Germany", correct: false},
            { text: "France", correct: false},
            { text: "Egypt", correct: true}
        ]
    },
    {
        question: "Where is the Acropolis of Athens located?",
        answers: [
            { text: "Russia", correct: false},
            { text: "Greece", correct: true},
            { text: "Finland", correct: false}
        ]
    },
    {
        question: "Where is the Gateway Arch located?",
        answers: [
            { text: "Missouri", correct: true},
            { text: "Utah", correct: false},
            { text: "New York", correct: false}
        ]
    }
];

const questionPlanets = [
    {
        question: "What planet do humans live on?",
        answers: [
            { text: "Earth", correct: true},
            { text: "Mars", correct: false},
            { text: "Venus", correct: false}
        ]
    },
    {
        question: "Which planet is closest to the sun?",
        answers: [
            { text: "Earth", correct: false},
            { text: "Mercury", correct: true},
            { text: "Mars", correct: false}
        ]
    },
    {
        question: "How many rings does neptune have?",
        answers: [
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true}
        ]
    },
    {
        question: "Approximately how many earth years is one pluto year?",
        answers: [
            { text: "5", correct: false},
            { text: "247.94", correct: true},
            { text: "24", correct: false}
        ]
    },
    {
        question: "What two elements make up most of Saturn and Jupiter?",
        answers: [
            { text: "Nitrogen and Helium", correct: false},
            { text: "Carbon and Helium", correct: false},
            { text: "Hydrogen and Helium", correct: true}
        ]
    }
];


const questionFruits = [
    {
        question: "Which fruit is the color orange?",
        answers: [
            { text: "Banana", correct: false},
            { text: "Apple", correct: false},
            { text: "Orange", correct: true}
        ]
    },
    {
        question: "Which fruit is the color yellow?",
        answers: [
            { text: "Banana", correct: true},
            { text: "Strawberry", correct: false},
            { text: "Orange", correct: false}
        ]
    },
    {
        question: "Where are oranges typically grown in the US?",
        answers: [
            { text: "Florida", correct: true},
            { text: "Kansas", correct: false},
            { text: "Nebraska", correct: false}
        ]
    },
    {
        question: "What do Oranges grow on?",
        answers: [
            { text: "Trees", correct: true},
            { text: "Bushes", correct: false},
            { text: "In the ground", correct: false}
        ]
    },
    {
        question: "What do Strawberries grow on?",
        answers: [
            { text: "Trees", correct: false},
            { text: "Bushes", correct: true},
            { text: "In the ground", correct: false}
        ]
    }
];