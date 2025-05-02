const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons").children;
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");

const quizData = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlink Text Markup Language"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is the correct HTML element for inserting a line break?",
        answers: ["<break>", "<lb>", "<br>", "<line>"],
        correctAnswer: 2
    },
    {
        question: "What is the correct syntax for linking an external CSS file in an HTML document?",
        answers: ["<css src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<stylesheet src='style.css'>"],
        correctAnswer: 1
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: ["color", "font-color", "text-color", "background-color"],
        correctAnswer: 0
    },
    {
        question: "Which property is used to change the background color in CSS?",
        answers: ["bg-color", "background-color", "color", "bg"],
        correctAnswer: 1
    },
    {
        question: "How do you select an element with the id 'header' in CSS?",
        answers: ["#header", ".header", "header", "$header"],
        correctAnswer: 0
    },
    {
        question: "In JavaScript, which of the following is used to declare a variable?",
        answers: ["let", "var", "const", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is used to add an event listener in JavaScript?",
        answers: ["addEventListener()", "onEvent()", "attachEvent()", "event()"],
        correctAnswer: 0
    },
    {
        question: "What does 'DOM' stand for in JavaScript?",
        answers: ["Document Object Model", "Document Online Model", "Document Oriented Model", "Document Open Model"],
        correctAnswer: 0
    },
    {
        question: "Which JavaScript function is used to parse a string and convert it into an integer?",
        answers: ["parseInt()", "parse()", "convert()", "toInt()"],
        correctAnswer: 0
    },
    // Additional questions
    {
        question: "Which tag is used to define a table in HTML?",
        answers: ["<table>", "<tr>", "<td>", "<th>"],
        correctAnswer: 0
    },
    {
        question: "How do you make a list that lists items with bullet points in HTML?",
        answers: ["<ul>", "<ol>", "<li>", "<dl>"],
        correctAnswer: 0
    },
    {
        question: "Which CSS property is used to change the font of an element?",
        answers: ["font-family", "font-style", "font-weight", "text-font"],
        correctAnswer: 0
    },
    {
        question: "What is the correct HTML element for playing audio files?",
        answers: ["<audio>", "<music>", "<sound>", "<media>"],
        correctAnswer: 0
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
        answers: ["alt", "src", "title", "href"],
        correctAnswer: 0
    },
    {
        question: "How do you make an element in CSS invisible but still take up space on the page?",
        answers: ["display: none;", "visibility: hidden;", "opacity: 0;", "position: absolute;"],
        correctAnswer: 1
    },
    {
        question: "What is the default value of the `position` property in CSS?",
        answers: ["static", "absolute", "relative", "fixed"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: ["String", "Boolean", "Integer", "Object"],
        correctAnswer: 2
    },
    {
        question: "In JavaScript, which operator is used to compare both value and type of two variables?",
        answers: ["==", "===", "!=", "!=="],
        correctAnswer: 1
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        answers: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "// comment"],
        correctAnswer: 0
    },
    {
        question: "How do you add a background image in CSS?",
        answers: ["background-image: url('image.jpg');", "background: image('image.jpg');", "image-background: url('image.jpg');", "bg-image: url('image.jpg');"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is used to apply styles to a single element using CSS?",
        answers: [".class", "#id", "div", "a"],
        correctAnswer: 1
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1
    },
    {
        question: "What is the use of the `z-index` property in CSS?",
        answers: ["To control the visibility of elements", "To change the order of stacked elements", "To set the font size", "To adjust the transparency of elements"],
        correctAnswer: 1
    },
    {
        question: "In JavaScript, how can you convert a string into a number?",
        answers: ["parseInt()", "Number()", "parseFloat()", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of the `viewport` meta tag in HTML?",
        answers: ["To set the title of the webpage", "To control the layout on mobile devices", "To add background images", "To link external resources"],
        correctAnswer: 1
    },
    {
        question: "How can you make a text field in HTML?",
        answers: ["<text>", "<input type='text'>", "<input type='field'>", "<textarea>"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is used to create a dropdown list in HTML?",
        answers: ["<input>", "<select>", "<option>", "<dropdown>"],
        correctAnswer: 1
    },
    {
        question: "Which method in JavaScript is used to add an element to the end of an array?",
        answers: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is used to read an element in an array in JavaScript?",
        answers: ["get()", "[]", "index()", "read()"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = currentQuestion.answers[i];
        answerButtons[i].disabled = false; // Enable buttons
        answerButtons[i].classList.remove('correct', 'incorrect'); // Remove previous classes
    }
    nextButton.style.display = 'none'; // Hide Next button initially
}

function checkAnswer(selectedAnswerIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswerIndex === currentQuestion.correctAnswer) {
        score++;
        answerButtons[selectedAnswerIndex].classList.add('correct'); // Add green for correct
    } else {
        answerButtons[selectedAnswerIndex].classList.add('incorrect'); // Add red for incorrect
        answerButtons[currentQuestion.correctAnswer].classList.add('correct'); // Highlight correct answer
    }
    // Disable all answer buttons after one click
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].disabled = true;
    }
    nextButton.style.display = 'inline'; // Show Next button
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        scoreDisplay.textContent = `You scored ${score} out of ${quizData.length}`;
        nextButton.disabled = true; // Disable Next button after quiz is over

        // Show You Win message/button if score is perfect or meets a certain condition
        if (score === quizData.length) {
            document.getElementById("win-button").style.display = "inline"; // Show button
        }
    }
}

function exitQuiz() {
    const exitConfirmation = confirm("Are you sure you want to exit the quiz?");
    if (exitConfirmation) {
        // Reset quiz and load first question
        currentQuestionIndex = 0;
        score = 0;
        scoreDisplay.textContent = ''; // Clear score
        nextButton.disabled = false; // Enable Next button again
        nextButton.style.display = 'none'; // Hide Next button initially
        loadQuestion(); // Load the first question

        // Hide the win button after restart
        document.getElementById("win-button").style.display = "none"; // Hide You Win button
    }
}

function youWin() {
    alert("Congratulations, you won the quiz!"); // You can replace this with any action like restarting the quiz or showing a modal.
    
    // Reset the quiz
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = ''; // Clear score
    nextButton.disabled = false; // Enable Next button again
    nextButton.style.display = 'none'; // Hide Next button initially
    loadQuestion(); // Load the first question

    // Hide the win button after restart
    document.getElementById("win-button").style.display = "none"; // Hide You Win button
}

loadQuestion(); // Initial load
