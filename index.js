$(document).ready(function () {
    //Questions array below
    const QUIZ = {
        questions: [
            {
                text: 'Question 1 of 5: In the Hall of Prophecy there are rows and rows of glowing orbs. Which row contains the prophecy about Harry and Voldemort?',
                img: {
                    src: 'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question1.jpg?raw=true',
                    alt: 'Image of Harry Potter from Harry Potter and the Order of the Phoenix.',
                },
                answers: [
                    { text: 'Row 79' },
                    { text: 'Row 97', isCorrect: true },
                    { text: 'Row 67' },
                    { text: 'Row 96' },
                ]
            },
            { text: 'Question 2 of 5: What is the address of Sirius Black’s family home?', img: 'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question2.jpg?raw=true' },
            { text: 'Question 3 of 5: How many possible Quidditch fouls are there?', img: 'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question3.jpg?raw=true' },
            { text: 'Question 4 of 5: What is Rita Skeeter’s animagus form?', img: 'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question4.jpg?raw=true' },
            { text: 'Question 5 of 5: What condition gives Tonks the ability to transform her features?', img: 'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question5.jpg?raw=true' },
        ],
        answers: []
    }

    function startQuiz() {
        //User story: click a button to start the quiz
        //needs to display a page within the .quiz-box that
        //welcomes the user and displays a button to start
        console.log('startQuiz function ran');
        //display welcome image and start quiz button
        $('.js-quiz-box').html('<img src="https://github.com/maximus202/harry-potter-quiz/blob/master/images/startpage.jpg?raw=true" alt="Image of harry potter glasses, wand, and scar."></br><button class="js-start-quiz-button">Start Quiz</button>');
        //code below runs displayQuestion function when start quiz button is clicked.
        $('.js-quiz-box').on('click', '.js-start-quiz-button', function () {
            displayQuestion();
        });
    }

    function generateAnswers(answers) {
        return answers.map((answer, index) => {
            return `<li><input id="answer${index}" type="radio" name="answer" value="${index}"><label for="answer${index}">${answer.text}</label></li>`
        }).join("\n")
    }

    function generateQuestion(question) {
        return `<form role="form" accept-charset="UTF-8" class="quiz-form">
        <fieldset>
        <legend>${question.text}</legend>
        <img src="${question.img.src}" alt="${question.img.alt}">
        <ol>${generateAnswers(question.answers)}</ol>
        </fieldset>
        </form>`
    }

    function displayQuestion() {
        //User stories: Present questions, select options from
        //multiple choices, submit answer.
        console.log('displayQuestion function ran')
        //Code needed below that figures out which array item to use in the variables below.
        //If Question 1 has been submitted and validated, increment by 1 to move on to the next question.
        //{CODE NEEDED HERE}
        const currentQuestion = QUIZ.questions[QUIZ.answers.length];
        //The variables below are used in the form to display the question and multiple choice that they're on.
        $('.js-quiz-box').html(generateQuestion(currentQuestion));
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