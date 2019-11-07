$(document).ready(function () {
    //QUIZ below is an object that contains objects of questions, images,
    //and multiple choice answers for each question.
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
            {
                text: 'Question 2 of 5: What is the address of Sirius Black’s family home?',
                img: {
                    src: 'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question2.jpg?raw=true',
                    alt: 'Image of Harry Potter from Harry Potter and the Order of the Phoenix.',
                },
                answers: [
                    { text: '10 Gowrie Place' },
                    { text: '21 Grenadier Place' },
                    { text: '190 Acklam Place' },
                    { text: '12 Grimmauld Place', isCorrect: true },
                ]
            },
            {
                text: 'Question 3 of 5: How many possible Quidditch fouls are there?',
                img: {
                    src: 'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question3.jpg?raw=true',
                    alt: 'Image of movie still from Harry Potter and the Chamber of Secrets.'
                },
                answers: [
                    { text: '600' },
                    { text: '700', isCorrect: true },
                    { text: '800' },
                    { text: '900' },
                ]
            },
            {
                text: 'Question 4 of 5: What is Rita Skeeter’s animagus form?',
                img: {
                    src: 'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question4.jpg?raw=true',
                    alt: 'Image of the character of Rita Skeeter from Harry Potter and the Goblet of Fire.',
                },
                answers: [
                    { text: 'A beetle', isCorrect: true },
                    { text: 'A spider' },
                    { text: 'A fox' },
                    { text: 'An owl' },
                ]
            },
            {
                text: 'Question 5 of 5: What condition gives Tonks the ability to transform her features?',
                img: {
                    src: 'https://github.com/maximus202/harry-potter-quiz/blob/master/images/question5.jpg?raw=true',
                    alt: 'Movie still of the character Tonks from Harry Potter and the Order of the Phoenix.',
                },
                answers: [
                    { text: 'Blood malediction' },
                    { text: 'Somnambulism' },
                    { text: 'Cerebrumous Spattergroit' },
                    { text: 'Metamorphmagism', isCorrect: true },
                ]
            },
        ],
        //The answers array below is to store the answers that the user
        //selects. Starts empty.
        answers: [],
    }

    function displayWelcomeScreen() {
        //User story: Needs to display a page within the .quiz-box that
        //welcomes the user and displays a button to start
        console.log('startQuiz function ran');
        //display welcome image and start quiz button
        $('main').html(`<img src="https://github.com/maximus202/harry-potter-quiz/blob/master/images/startpage.jpg?raw=true" alt="Image of harry potter glasses, wand, and scar.">
        <button name="Start Quiz" type="button" value="Start Quiz">
        Start Quiz
        </button>`
        );
    }

    function startQuiz() {
        //User story: click a button to start the quiz.
        //code below runs displayQuestion function when start quiz button is clicked.
        $('main').on('click', 'button', function (event) {
            displayQuestion();
        });
    }


    function generateAnswers(answers) {
        console.log('generateAnswers() ran');
        //Calls the function below to each item in the answers array being passed
        //from generateQuestion. 
        return answers.map((answer, index) => {
            //returns a numbered list of the available answer choices for the given question in radio buttons.
            return `<li><input id="answer${index}" type="radio" name="answer" value="${index}"><label for="answer${index}">${answer.text}</label></li>`
            //.join() below removes the commas in the array and makes each answer it's own line. 
        }).join("\n")
    }

    function generateQuestion(question) {
        console.log('generateQuestion function ran')
        //Below, we're returning a form to render in displayQuestion() and using
        //the value that was passed from currentQuestion (the number of answers
        //that have been answered so far) to use in the code below to grab the 
        //text of the next question to display, image source, image alt, and the
        //list of answers to display from the QUIZ object. In generateAnswers()
        //we send the array of answers for the given question to generateAnswers().
        return `<form role="form" accept-charset="UTF-8" class="quiz-form">
        <fieldset>
        <legend>${question.text}</legend>
        <img src="${question.img.src}" alt="${question.img.alt}">
        <ol>${generateAnswers(question.answers)}</ol>
        </fieldset>
        <input type="submit" value="Submit">
        Submit Answer
        </input>
        </form>`
    }

    function handleQuestionSubmit() {
        $('main').on("submit", ".quiz-form", function (event) {
            console.log('handleQuestionSubmit() ran');
            event.preventDefault();
            //Below grabs index of selected answer
            const value = $("input[name='answer']:checked").val();
            console.log(value);
            const currentQuestion = QUIZ.questions[QUIZ.answers.length];
            const selectedAnswer = currentQuestion.answers[value];
            console.log(selectedAnswer);
            QUIZ.answers.push(selectedAnswer);
            console.log(QUIZ.answers);
            if (selectedAnswer.isCorrect) {
                showCorrectScreen(currentQuestion, selectedAnswer)
            } else {
                showIncorrectScreen(currentQuestion, selectedAnswer)
            }
        });
    }

    function displayQuestion() {
        //User stories: Present questions, select options from
        //multiple choices, submit answer.
        console.log('displayQuestion function ran')
        //Constant is created called currentQuestion which grabs
        //the length of the QUIZ.answers array and then uses that
        //As the index for figuring out what question to display
        //QUIZ.questions[2] would display the third question.
        const currentQuestion = QUIZ.questions[QUIZ.answers.length];
        console.log(currentQuestion);
        //Inside js-quiz-box, we're displaying the html being returned
        //in the generateQuestion function with the value of currentQuestion
        //being passed in the parameter (the next question to display).
        $('main').html(generateQuestion(currentQuestion));
    }

    function renderCorrectScreenHTML(currentQuestion, selectedAnswer) {
        console.log('renderCorrectScreenHTML() ran');
        return `<img src="${currentQuestion.img.src}" alt="${currentQuestion.img.alt}">
        <h2>
        Yes! That's correct.
        </h2>
        <button name="Next Question" type="button" value="Next question" class="next-question">
        Next question
        </button>`
    }

    function showCorrectScreen(currentQuestion, selectedAnswer) {
        //User story: shows a screen that tells the user their answer was correct.
        console.log('showCorrectScreen() ran.');
        $('main').html(renderCorrectScreenHTML(currentQuestion, selectedAnswer));

    }

    function renderIncorrectScreenHTML(currentQuestion, selectedAnswer) {
        console.log('renderIncorrectScreenHTML() ran');
        return `<img src="${currentQuestion.img.src}" alt="${currentQuestion.img.alt}">
        <h2>
        Sorry, that's wrong...
        </h2>
        <button name="Next question" type="button" value="Next question" class="next-question">
        Next question
        </button>`
    }

    function showIncorrectScreen(currentQuestion, selectedAnswer) {
        //user story: shows a screen that tells user their answer was wrong.
        console.log('showIncorrectScreen() ran');
        $('main').html(renderIncorrectScreenHTML(currentQuestion, selectedAnswer));
    }

    function moveToNextQuestion() {
        //User story: Move to the next question after viewing the answer
        $('main').on('click', '.next-question', function (event) {
            console.log('moveToNextQuestion function ran');
            displayQuestion();
        });
    }

    function getAccumulatedScore() {
        //User story: See accumulated score as user progresses
        console.log('getAccumulatedScore function ran');
    }

    function retakeQuiz() {
        //User story: retake the quiz
        console.log('retakeQuiz function ran');
    }


    function setUpEventHandlers() {
        //when page loads, this callback function will render the quiz
        console.log('setUpEventHandlers function ran')
        displayWelcomeScreen();
        startQuiz();
        handleQuestionSubmit();
        moveToNextQuestion();
        getAccumulatedScore();
        retakeQuiz();
    }

    //when page loads, call `setUpEventHandlers`
    $(setUpEventHandlers);

});