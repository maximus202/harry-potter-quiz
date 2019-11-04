$(document).ready(function() {
//Questions array below
const STORE = [
    {for:'question1', question: 'Question 1 of 5: In the Hall of Prophecy there are rows and rows of glowing orbs. Which row contains the prophecy about Harry and Voldemort?', img:'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question1.jpg?raw=true', imgAlt:'Image of Harry Potter from Harry Potter and the Order of the Phoenix.', choiceOne:'Row 79', choiceTwo:'Row 97', choiceThree:'Row 67', choiceFour:'Row 96'},
    {for:'question2', question: 'Question 2 of 5: What is the address of Sirius Black’s family home?', img:'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question2.jpg?raw=true'},
    {for:'question3', question: 'Question 3 of 5: How many possible Quidditch fouls are there?', img:'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question3.jpg?raw=true'},
    {for:'question4', question: 'Question 4 of 5: What is Rita Skeeter’s animagus form?', img:'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question4.jpg?raw=true'},
    {for:'question5', question: 'Question 5 of 5: What condition gives Tonks the ability to transform her features?', img:'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question5.jpg?raw=true'},
]

function startQuiz() {
    //User story: click a button to start the quiz
    //needs to display a page within the .quiz-box that
    //welcomes the user and displays a button to start
    console.log('startQuiz function ran');
    //display welcome image and start quiz button
    $('.js-quiz-box').html('<img src="https://github.com/maximus202/harry-potter-quiz/blob/master/images/startpage.jpg?raw=true" alt="Image of harry potter glasses, wand, and scar."></br><button class="js-start-quiz-button">Start Quiz</button>');
    //code below runs displayQuestion function when start quiz button is clicked.
    $('.js-quiz-box').on('click', '.js-start-quiz-button', function() {
        displayQuestion();
    });
}

function displayQuestion() {
    //User stories: Present questions, select options from
    //multiple choices, submit answer.
    console.log('displayQuestion function ran')
    //Code needed below that figures out which array item to use in the variables below.
    //If Question 1 has been submitted and validated, increment by 1 to move on to the next question.
    //{CODE NEEDED HERE}

    //The variables below are used in the form to display the question and multiple choice that they're on.
    let currentFor = STORE[0].for;
    let currentImg = STORE[0].img;
    let currentImgAlt = STORE[0].imgAlt
    let currentQuestion = STORE[0].question;
    let currentChoiceOne = STORE[0].choiceOne;
    let currentChoiceTwo = STORE[0].choiceTwo;
    let currentChoiceThree = STORE[0].choiceThree;
    let currentChoiceFour = STORE[0].choiceFour;
    $('.js-quiz-box').html('<form role="form" accept-charset="UTF-8" class="quiz-form"><fieldset><legend>Quiz</legend><img src="' + currentImg + '" alt="' + currentImgAlt + '"></br><label for="' + currentFor + '">' + currentQuestion + '</label></br><input type="radio" name="' + currentFor + '" value="' + currentChoiceOne + '" required>' + currentChoiceOne + '</br><input type="radio" name="' + currentFor + '" value="' + currentChoiceTwo + '">' + currentChoiceTwo + '</br><input type="radio" name="' + currentFor + '" value="' + currentChoiceThree + '">' + currentChoiceThree + '</br><input type="radio" name="' + currentFor + '" value="' + currentChoiceFour + '">' + currentChoiceFour + '<br><button type="button" class="js-submit-answer">Submit Answer</button></fieldset></form>');
}

function validateAnswer() {
    //User story: Display whether they got the right or wrong answer
    console.log('validateAnswer function ran');
}

function getAccumulatedScore() {
    //User story: See accumulated score as user progresses
    console.log('getAccumulatedScore function ran');
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

});