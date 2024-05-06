const answerChoice = [
    {
        question: 'Which of the following are not server-side Javascript objects?',
        answers: {
            a: 'Date',
            b: 'FileUpload',
            c: 'Function',
            d: 'All of the above'
        },
        multi: false,
        correctAnswer: 'd'
    },
    {
        question:
            'What keyword is used to check whether a given property is valid or not?',
        answers: {
            a: 'in',
            b: 'is in',
            c: 'exists',
            d: 'lies'
        },
        multi: false,
        correctAnswer: 'a'
    },
    {
        question:
            'What does the ‘toLocateString()’ method do in JS?',
        answers: {
            a: 'Returns a localised object representation.',
            b: 'Returns a parsed string.',
            c: 'Returns a localized string representation of an object.',
            d: 'None of the above.'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which object in Javascript doesn’t have a prototype?',
        answers: {
            a: 'Base Object',
            b: 'All objects have a prototype',
            c: 'None of the objects have a prototype',
            d: 'None of the above'
        },
        multi: false,
        correctAnswer: 'a'
    }
];

let questionIndex = 0;
let score = 0;
let chooseAnswer = [];

const questionOfTest = document.getElementById('question');
const choicesOfTest = document.getElementById('choices');
const preBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const noteElement = document.getElementById('note');

//This Function show current question and options to user
function showQuestion() {
    const questionTest = answerChoice[questionIndex];
    questionOfTest.textContent = `Question ${questionIndex + 1}: ${questionTest.question}`;
    choicesOfTest.innerHTML = '';

    for (const key in questionTest.answers) {
        if (questionTest.answers.hasOwnProperty(key)) {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'choice';
            radio.value = key;

            radio.addEventListener('click', (event) => {
                const selectedAnswer = event.target.value;
                chooseAnswer[questionIndex] = selectedAnswer;
            });

            label.appendChild(radio);
            label.appendChild(document.createTextNode(`${key}. ${questionTest.answers[key]}`));
            choicesOfTest.appendChild(label);
            //Mark the answer the user has selected if yes
            if (chooseAnswer[questionIndex] === key) {
                radio.checked = true;
            }
        }
    }

    noteElement.textContent = `${questionIndex + 1} out of ${answerChoice.length}`;
    preBtn.style.display = questionIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = questionIndex === answerChoice.length - 1 ? 'none' : 'block';
    submitBtn.style.display = questionIndex === answerChoice.length - 1 ? 'block' : 'none';
}
//Show next question
function showNextQuestion() {
    if (questionIndex < answerChoice.length - 1) {
        questionIndex++;
        showQuestion();
    }
}
//Show previous question
function showPreQuestion() {
    if (questionIndex > 0) {
        questionIndex--;
        showQuestion();
    }
}
//reset Quiz Test
function resetQuiz() {
    questionIndex = 0;
    totalScore = 0;
    chooseAnswer = [];
    showQuestion();
}
//submit question and show correct answer
function submitQuestion() {
    for (let i = 0; i < answerChoice.length; i++) {
        if (chooseAnswer[i] === answerChoice[i].correctAnswer) {
            score++;
        }
    }
    const scoreElement = document.createElement('h3');
    scoreElement.textContent = `Your score is: ${score}`;
    document.body.appendChild(scoreElement);
    nextBtn.style.display = 'none';
    noteElement.style.display = 'none';
    resetQuiz();
}


//display the user's answer and print the correct answer
function showCorrectAnswers() {
    const correctAnswers = document.createElement('div');
    correctAnswers.innerHTML = '<h3>Correct Answers:</h3>';

    for (let i = 0; i < answerChoice.length; i++) {
        const question = answerChoice[i];
        const correctAnswer = question.correctAnswer;
        const chosenAnswer = chooseAnswer[i];

        const answerElement = document.createElement('p');

        const questionText = document.createTextNode(`Question ${i + 1}: `);
    
        const userResult = chosenAnswer === correctAnswer ? '&#10004;' : `&#10006; - Your Answer: ${chosenAnswer} | Correct Answer: ${correctAnswer}`;
        const userResultSpan = document.createElement('span');
        userResultSpan.innerHTML = userResult;
        userResultSpan.style.color = chosenAnswer === correctAnswer ? 'green' : 'red';

        answerElement.appendChild(questionText);
        answerElement.appendChild(userResultSpan);

        answerElement.style.textAlign = 'center';
        correctAnswers.appendChild(answerElement);
    }

    document.body.appendChild(correctAnswers);
}



function submitQuestion() {
    for (let i = 0; i < answerChoice.length; i++) {
        if (chooseAnswer[i] === answerChoice[i].correctAnswer) {
            score++;
        }
    }

    showCorrectAnswers();

    const scoreElement = document.createElement('h3');
    scoreElement.textContent = `Your score is: ${score}`;
    document.body.appendChild(scoreElement);

    nextBtn.style.display = 'none';
    noteElement.style.display = 'none';

    resetQuiz();
}

showQuestion();
