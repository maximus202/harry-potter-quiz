function startQuiz() {
    //User story: click a button to start the quiz
    //needs to display a page within the .quiz-box that
    //welcomes the user and displays a button to start
    console.log('startQuiz function ran');
    //display welcome image
    $('.js-quiz-box').html('<img src="https://github.com/maximus202/harry-potter-quiz/blob/master/images/startpage.jpg?raw=true" alt="Image of harry potter glasses, wand, and scar."></br><button class=".js-start-quiz-button">Start Quiz</button>');
    //display button
}

function getQuestion() {
    //User stories: Present questions, select options from
    //multiple choices, submit answer.
    console.log('displayQuestion function ran');
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