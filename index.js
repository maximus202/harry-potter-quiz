//Questions array below
const STORE = [
    {question: 'Question 1 of 5: In the Hall of Prophecy there are rows and rows of glowing orbs. Which row contains the prophecy about Harry and Voldemort?', img:'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question1.jpg?raw=true',},
    {question: 'Question 2 of 5: What is the address of Sirius Black’s family home?', img:'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question2.jpg?raw=true'},
    {question: 'Question 3 of 5: How many possible Quidditch fouls are there?', img:'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question3.jpg?raw=true'},
    {question: 'Question 4 of 5: What is Rita Skeeter’s animagus form?', img:'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question4.jpg?raw=true'},
    {question: 'Question 5 of 5: What condition gives Tonks the ability to transform her features?', img:'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question5.jpg?raw=true'},
]

function startQuiz() {
    //User story: click a button to start the quiz
    //needs to display a page within the .quiz-box that
    //welcomes the user and displays a button to start
    console.log('startQuiz function ran');
    //display welcome image and start quiz button
    $('.js-quiz-box').html('<img src="https://github.com/maximus202/harry-potter-quiz/blob/master/images/startpage.jpg?raw=true" alt="Image of harry potter glasses, wand, and scar."></br><button class="js-start-quiz-button">Start Quiz</button>');
    //code below runs getQuestion function when start quiz button is clicked.
    $('.js-quiz-box').on('click', '.js-start-quiz-button', function() {
        getQuestion();
    });
}

function getQuestion() {
    //User stories: Present questions, select options from
    //multiple choices, submit answer.
}

function getAccumulatedScore() {
    //User story: See accumulated score as user progresses
    console.log('getAccumulatedScore function ran');
}

function getAnswer() {
    //User story: Display whether they got the right or wrong answer
    console.log('getAnswer function ran');
}

function moveToNextQuestion() {
    //User story: Move to the next question after viewing the answer
    console.log('moveToNextQuestion function ran');
}

function getResults() {
    //User story: Get to the end of the quiz and see their overall score.
    console.log('getResults function ran');
}

function retakeQuiz() {
    //User story: retake the quiz
    console.log('retakeQuiz function ran');
}

function handleHPQuiz() {
    //when page loads, this callback function will render the quiz
    console.log('handleHPQuiz function ran')
    startQuiz();
}

//when page loads, call `handleHPQuiz`
$(handleHPQuiz);