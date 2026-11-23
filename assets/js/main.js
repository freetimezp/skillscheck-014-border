/* =========================================
   SKILLS CHECK 014
   BORDER STYLE COLLECTION
========================================= */

/* =========================================
   01. CONFIGURATION
========================================= */

const CONFIG = {
    testId: "014",
    title: "Border Style Collection",
    totalQuestions: 20,

    storageKey: "freetimezp:roadmap:skill-check-results:v1",

    historyLimit: 20,
};

/* =========================================
   02. DOM ELEMENTS
========================================= */

const elements = {
    currentQuestion: document.querySelector("#current-question"),
    totalQuestions: document.querySelector("#total-questions"),
    progressFill: document.querySelector("#progress-fill"),

    questionCard: document.querySelector("#question-card"),
    questionCategory: document.querySelector("#question-category"),
    questionText: document.querySelector("#question-text"),
    questionCodeWrap: document.querySelector("#question-code-wrap"),
    questionCode: document.querySelector("#question-code"),

    answersGrid: document.querySelector("#answers-grid"),

    feedbackBox: document.querySelector("#feedback-box"),
    feedbackIcon: document.querySelector("#feedback-icon"),
    feedbackTitle: document.querySelector("#feedback-title"),
    feedbackText: document.querySelector("#feedback-text"),
    feedbackPoints: document.querySelector("#feedback-points"),

    questionHint: document.querySelector("#question-hint"),
    nextButton: document.querySelector("#next-button"),

    quizSection: document.querySelector("#quiz-section"),
    resultsSection: document.querySelector("#results-section"),

    resultHeading: document.querySelector("#result-heading"),
    scoreCircle: document.querySelector("#score-circle"),
    scorePercentage: document.querySelector("#score-percentage"),

    correctCount: document.querySelector("#correct-count"),
    incorrectCount: document.querySelector("#incorrect-count"),
    resultTotal: document.querySelector("#result-total"),
    resultMessage: document.querySelector("#result-message"),

    restartButton: document.querySelector("#restart-button"),
};

/* =========================================
   03. QUESTION DATABASE
========================================= */

const questionDatabase = [
    {
        category: "BORDER BASICS",

        question: "Which CSS property controls the visual style of a border?",

        code: `.card {
    border-width: 3px;
    border-color: red;
}`,

        options: [
            "border-style",
            "border-color",
            "border-width",
            "border-radius",
        ],

        correct: "border-style",

        explanation:
            "The border-style property controls how the border looks. It can be solid, dashed, dotted, double, and more.",
    },

    {
        category: "BORDER STYLES",

        question: "Which value creates a continuous, unbroken border line?",

        code: `.box {
    border: 3px _____ black;
}`,

        options: ["dotted", "solid", "dashed", "double"],

        correct: "solid",

        explanation:
            "The solid value creates one continuous line around an element.",
    },

    {
        category: "BORDER STYLES",

        question: "Which border style creates a line made of small dots?",

        code: `.box {
    border: 3px dotted blue;
}`,

        options: ["double", "solid", "dotted", "dashed"],

        correct: "dotted",

        explanation:
            "Dotted borders are made from individual dots. The dotted value is useful for decorative outlines and visual separators.",
    },

    {
        category: "BORDER STYLES",

        question: "What does the dashed value create?",

        code: `.notice {
    border: 2px dashed orange;
}`,

        options: [
            "Two parallel lines",
            "Small individual dots",
            "A continuous line",
            "A line made of longer segments",
        ],

        correct: "A line made of longer segments",

        explanation:
            "Dashed borders consist of repeated line segments separated by gaps. They differ from dotted borders, which use individual dots.",
    },

    {
        category: "BORDER STYLES",

        question: "Which border style displays two parallel lines?",

        code: `.frame {
    border: 5px double purple;
}`,

        options: ["double", "dashed", "solid", "dotted"],

        correct: "double",

        explanation:
            "The double value creates two parallel border lines. The visible effect depends on the border width.",
    },

    {
        category: "BORDER WIDTH",

        question: "Which CSS property changes the thickness of a border?",

        code: `.card {
    border-style: solid;
    border-color: blue;
}`,

        options: [
            "border-height",
            "border-weight",
            "border-width",
            "border-size",
        ],

        correct: "border-width",

        explanation:
            "border-width controls the thickness of a border. Common values include 1px, 2px, and 4px.",
    },

    {
        category: "BORDER COLOR",

        question: "Which declaration changes a border to red?",

        code: `.box {
    border: 3px solid black;
}`,

        options: [
            "color: red;",
            "border-color: red;",
            "background-color: red;",
            "border-style: red;",
        ],

        correct: "border-color: red;",

        explanation:
            "border-color changes the border color without changing its width or style.",
    },

    {
        category: "BORDER SHORTHAND",

        question: "What does this CSS declaration define?",

        code: `.card {
    border: 4px solid #222;
}`,

        options: [
            "Only the border color",
            "Only the border width",
            "Width, style, and color",
            "Width and border radius",
        ],

        correct: "Width, style, and color",

        explanation:
            "The border shorthand combines border-width, border-style, and border-color into one declaration.",
    },

    {
        category: "BORDER SHORTHAND",

        question: "Which declaration is valid CSS for a dashed blue border?",

        code: `.box {
    /* Choose the correct declaration */
}`,

        options: [
            "border: blue dashed 3px;",
            "border: 3px dashed blue;",
            "border: dashed blue;",
            "border: 3px blue dashed;",
        ],

        correct: "border: 3px dashed blue;",

        explanation:
            "The border shorthand accepts width, style, and color. The order of these components can vary, but all three values must be valid.",
    },

    {
        category: "INDIVIDUAL SIDES",

        question: "Which property applies a border only to the top side?",

        code: `.box {
    border-top: 2px solid red;
}`,

        options: ["border-upper", "border-top", "border-y", "border-top-side"],

        correct: "border-top",

        explanation:
            "border-top applies a border to the top edge only. Similar properties exist for right, bottom, and left.",
    },

    {
        category: "INDIVIDUAL SIDES",

        question:
            "Which declaration adds a dotted border to the left side only?",

        code: `.box {
    /* Complete the declaration */
}`,

        options: [
            "border-left: 2px dotted green;",
            "border: left 2px dotted green;",
            "border-left-style: 2px green;",
            "border-side-left: dotted;",
        ],

        correct: "border-left: 2px dotted green;",

        explanation:
            "border-left is the shorthand for the left edge. It can define width, style, and color together.",
    },

    {
        category: "INDIVIDUAL SIDES",

        question: "Which property changes only the bottom border's color?",

        code: `.box {
    border-bottom: 2px solid black;
}`,

        options: [
            "border-bottom-color",
            "border-color-bottom",
            "bottom-border-color",
            "border-color",
        ],

        correct: "border-bottom-color",

        explanation:
            "border-bottom-color changes only the bottom edge's color. The existing width and style remain unchanged.",
    },

    {
        category: "BORDER RADIUS",

        question: "Which CSS property rounds the corners of an element?",

        code: `.card {
    border: 2px solid black;
    border-radius: 12px;
}`,

        options: [
            "corner-radius",
            "border-round",
            "border-radius",
            "border-curve",
        ],

        correct: "border-radius",

        explanation:
            "border-radius rounds the corners of an element. It can be used with or without a visible border.",
    },

    {
        category: "BORDER RADIUS",

        question:
            "What does border-radius: 50% commonly create on a square element?",

        code: `.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}`,

        options: [
            "A square",
            "A circle",
            "A double border",
            "A dotted outline",
        ],

        correct: "A circle",

        explanation:
            "When an element has equal width and height, a 50% border radius creates a circle.",
    },

    {
        category: "BORDER SYNTAX",

        question: "What happens when border-style is not specified?",

        code: `.box {
    border-width: 4px;
    border-color: red;
}`,

        options: [
            "The border is automatically solid",
            "The border is automatically dotted",
            "The border is hidden because the default is none",
            "The browser chooses a random style",
        ],

        correct: "The border is hidden because the default is none",

        explanation:
            "The initial value of border-style is none. A width and color alone do not create a visible border.",
    },

    {
        category: "BORDER SYNTAX",

        question: "Which declaration removes an element's border?",

        code: `.button {
    border: 2px solid black;
}`,

        options: [
            "border: hidden;",
            "border: none;",
            "border: 0 solid;",
            "border: 2px solid;",
        ],

        correct: "border: none;",

        explanation:
            "border: none removes the border. border: 0 solid also produces no visible border because its width is zero.",
    },

    {
        category: "BORDER SIDES",

        question: "How many values can border-width shorthand accept?",

        code: `.box {
    border-width: 1px 2px 3px 4px;
}`,

        options: [
            "Only one",
            "One, two, three, or four",
            "Exactly two",
            "Exactly four",
        ],

        correct: "One, two, three, or four",

        explanation:
            "Border width shorthand supports one to four values: all sides, vertical/horizontal, top/horizontal/bottom, or top/right/bottom/left.",
    },

    {
        category: "BORDER SIDES",

        question:
            "In a four-value border-width shorthand, which side does the second value control?",

        code: `.box {
    border-width: 1px 5px 3px 2px;
}`,

        options: ["Top", "Right", "Bottom", "Left"],

        correct: "Right",

        explanation:
            "Four-value shorthand follows clockwise order: top, right, bottom, left. Here, 5px applies to the right side.",
    },

    {
        category: "PRACTICAL CSS",

        question: "Which declaration creates a thick double border?",

        code: `.panel {
    /* Choose the correct rule */
}`,

        options: [
            "border: 1px double black;",
            "border: 6px double black;",
            "border: 6px dotted black;",
            "border: 6px solid black;",
        ],

        correct: "border: 6px double black;",

        explanation:
            "A double border uses two parallel lines. A larger width gives the two lines room to appear clearly.",
    },

    {
        category: "PRACTICAL CSS",

        question:
            "Which rule creates a green dotted border on every side of an element?",

        code: `.card {
    /* Complete the CSS */
}`,

        options: [
            "border: 3px dotted green;",
            "border: 3px dashed green;",
            "border: green 3px solid;",
            "border-radius: 3px dotted green;",
        ],

        correct: "border: 3px dotted green;",

        explanation:
            "The shorthand sets all four borders. Here, 3px defines the width, dotted defines the style, and green defines the color.",
    },
];

/* =========================================
   04. QUIZ STATE
========================================= */

let questions = [];
let answerHistory = [];

let currentIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

let hasAnswered = false;
let quizStartedAt = 0;

/* =========================================
   05. SHUFFLE HELPER
========================================= */

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[i],
        ];
    }

    return shuffled;
}

/* =========================================
   06. CREATE RANDOMIZED QUESTIONS
========================================= */

function prepareQuestions() {
    questions = shuffleArray(questionDatabase)
        .slice(0, CONFIG.totalQuestions)
        .map((question) => ({
            ...question,
            options: shuffleArray(question.options),
        }));
}

/* =========================================
   07. RENDER CURRENT QUESTION
========================================= */

function renderQuestion() {
    const question = questions[currentIndex];

    if (!question) return;

    // Clear previous transition states
    elements.questionCard.classList.remove("question-exit", "question-enter");

    hasAnswered = false;

    // Question counter
    elements.currentQuestion.textContent = String(currentIndex + 1).padStart(
        2,
        "0",
    );

    elements.totalQuestions.textContent = questions.length;

    // Progress
    const progress = (currentIndex / questions.length) * 100;

    elements.progressFill.style.width = `${progress}%`;

    // Question content
    elements.questionCategory.textContent = question.category;
    elements.questionText.textContent = question.question;

    // Code snippet
    if (question.code) {
        elements.questionCodeWrap.classList.remove("hidden");
        elements.questionCode.textContent = question.code;
    } else {
        elements.questionCodeWrap.classList.add("hidden");
        elements.questionCode.textContent = "";
    }

    // Reset feedback
    elements.feedbackBox.classList.add("hidden");
    elements.feedbackBox.classList.remove("is-correct", "is-incorrect");

    elements.feedbackTitle.textContent = "";
    elements.feedbackText.textContent = "";
    elements.feedbackPoints.textContent = "";

    // Reset footer
    elements.questionHint.textContent = "Select the best answer";
    elements.nextButton.disabled = true;

    elements.nextButton.querySelector("span:first-child").textContent =
        currentIndex === questions.length - 1 ? "See results" : "Next question";

    // Render answer buttons
    renderAnswers(question);

    // Replay entrance animation
    elements.questionCard.style.animation = "none";

    requestAnimationFrame(() => {
        elements.questionCard.style.animation = "";
    });
}

/* =========================================
   08. RENDER ANSWER OPTIONS
========================================= */

function renderAnswers(question) {
    elements.answersGrid.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-option";

        const letter = document.createElement("span");
        letter.className = "answer-letter";
        letter.textContent = letters[index];

        const text = document.createElement("span");
        text.className = "answer-text";
        text.textContent = option;

        button.append(letter, text);

        button.addEventListener("click", () => {
            selectAnswer(option, button);
        });

        elements.answersGrid.appendChild(button);
    });
}

/* =========================================
   09. SELECT ANSWER
========================================= */

function selectAnswer(selectedAnswer, selectedButton) {
    if (hasAnswered) return;

    hasAnswered = true;

    const question = questions[currentIndex];

    const isCorrect = selectedAnswer === question.correct;

    const answerButtons =
        elements.answersGrid.querySelectorAll(".answer-option");

    // Disable all answers
    answerButtons.forEach((button) => {
        button.disabled = true;

        const answerText = button.querySelector(".answer-text").textContent;

        if (answerText === question.correct) {
            button.classList.add("correct");
        }
    });

    // Mark selected answer
    if (isCorrect) {
        correctAnswers++;
        selectedButton.classList.add("selected", "correct");
    } else {
        incorrectAnswers++;
        selectedButton.classList.add("selected", "incorrect");
    }

    // Display feedback
    showFeedback(question, isCorrect);

    // Save answer for the final review
    answerHistory.push({
        question: question.question,
        selectedAnswer: selectedAnswer,
        correctAnswer: question.correct,
        explanation: question.explanation,
        isCorrect: isCorrect,
    });

    // Enable next button
    elements.nextButton.disabled = false;

    elements.questionHint.textContent = isCorrect
        ? "Great work! Ready for the next question?"
        : "Take a moment to understand the explanation.";
}

/* =========================================
   10. DISPLAY FEEDBACK
========================================= */

function showFeedback(question, isCorrect) {
    elements.feedbackBox.classList.remove("hidden");

    elements.feedbackBox.classList.add(
        isCorrect ? "is-correct" : "is-incorrect",
    );

    elements.feedbackIcon.textContent = isCorrect ? "✓" : "!";
    elements.feedbackTitle.textContent = isCorrect
        ? "Excellent! Correct answer."
        : "Not quite. Let's learn!";

    elements.feedbackText.textContent = question.explanation;

    elements.feedbackPoints.textContent = isCorrect ? "+1 POINT" : "0 POINTS";
}

/* =========================================
   10.1. ANSWER REVIEW
========================================= */

function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
        };

        return entities[char];
    });
}

function renderAnswerReview() {
    const reviewList = document.querySelector("#review-list");
    const reviewCount = document.querySelector("#review-count");

    if (!reviewList || !reviewCount) return;

    reviewCount.textContent = `${answerHistory.length} questions`;

    reviewList.innerHTML = answerHistory
        .map((item, index) => {
            const statusClass = item.isCorrect
                ? "review-correct"
                : "review-incorrect";

            const statusText = item.isCorrect ? "Correct" : "Incorrect";

            return `
            <article class="review-item ${statusClass}">
                <div class="review-item-header">
                    <span class="review-number">
                        QUESTION ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span class="review-status">${statusText}</span>
                </div>

                <p class="review-question">
                    ${escapeHTML(item.question)}
                </p>

                <div class="review-answer">
                    <p>
                        <strong>Your answer:</strong>
                        ${escapeHTML(item.selectedAnswer)}
                    </p>

                    <p>
                        <strong>Correct answer:</strong>
                        ${escapeHTML(item.correctAnswer)}
                    </p>
                </div>

                <div class="review-explanation">
                    <strong>Why?</strong>
                    ${escapeHTML(item.explanation)}
                </div>
            </article>
        `;
        })
        .join("");
}

/* =========================================
   11. NEXT QUESTION
========================================= */

async function nextQuestion() {
    if (!hasAnswered || elements.nextButton.disabled) return;

    elements.nextButton.disabled = true;

    elements.questionCard.classList.remove("question-enter");
    elements.questionCard.classList.add("question-exit");

    await new Promise((resolve) => setTimeout(resolve, 200));

    currentIndex++;

    if (currentIndex < questions.length) {
        renderQuestion();

        elements.questionCard.classList.remove("question-exit");
        elements.questionCard.classList.add("question-enter");

        elements.questionText.setAttribute("tabindex", "-1");
        elements.questionText.focus({ preventScroll: true });
    } else {
        finishQuiz();
    }
}

/* =========================================
   12. FINISH QUIZ
========================================= */

function finishQuiz() {
    elements.progressFill.style.width = "100%";

    const total = questions.length;
    const percentage = Math.round((correctAnswers / total) * 100);

    // Update results
    elements.correctCount.textContent = correctAnswers;
    elements.incorrectCount.textContent = incorrectAnswers;
    elements.resultTotal.textContent = total;

    elements.scorePercentage.textContent = `${percentage}%`;

    // Performance title and message
    let heading;
    let message;

    if (percentage >= 90) {
        heading = "Outstanding work!";
        message =
            "You've mastered the fundamentals of CSS borders. Keep building creative interfaces!";
    } else if (percentage >= 75) {
        heading = "Great progress!";
        message =
            "You have a strong understanding of border styles. A little more practice will make you even better.";
    } else if (percentage >= 50) {
        heading = "Good effort!";
        message =
            "You're getting there! Review the explanations and try again to strengthen your CSS knowledge.";
    } else {
        heading = "Keep exploring!";
        message =
            "Every attempt is a learning opportunity. Review the basics and give the challenge another try.";
    }

    elements.resultHeading.textContent = heading;
    elements.resultMessage.textContent = message;

    // Circular score visualization
    const scoreDegrees = percentage * 3.6;

    elements.scoreCircle.style.background = `
        conic-gradient(
            var(--coral) 0deg ${scoreDegrees}deg,
            #EEECE5 ${scoreDegrees}deg 360deg
        )
    `;

    // Show results
    elements.quizSection.classList.add("hidden");
    elements.resultsSection.classList.remove("hidden");

    // Render answer review
    renderAnswerReview();

    // Focus result heading
    elements.resultHeading.setAttribute("tabindex", "-1");
    elements.resultHeading.focus({ preventScroll: true });

    // Reset previous result effects
    const resultCard = elements.resultsSection.querySelector(".results-card");

    if (resultCard) {
        resultCard.classList.remove("result-perfect", "result-low");
    }

    // Special result effects
    if (percentage === 100 && resultCard) {
        resultCard.classList.add("result-perfect");
        createCelebration();
    } else if (percentage < 50 && resultCard) {
        resultCard.classList.add("result-low");
    }

    // Save result
    saveQuizResult(correctAnswers, total, percentage);

    // Return to top of result screen
    elements.resultsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

/* =========================================
   13. SAVE RESULTS TO ROADMAP
========================================= */

function saveQuizResult(score, total, percentage) {
    const duration = Math.round((Date.now() - quizStartedAt) / 1000);

    const completedAt = new Date().toISOString();

    const attempt = {
        score,
        total,
        percentage,
        duration,
        completedAt,
    };

    try {
        const storedData = localStorage.getItem(CONFIG.storageKey);

        const data = storedData ? JSON.parse(storedData) : {};

        // Preserve existing roadmap tests
        if (!data.tests || typeof data.tests !== "object") {
            data.tests = {};
        }

        const previousTest = data.tests[CONFIG.testId] || {};

        const history = Array.isArray(previousTest.history)
            ? previousTest.history
            : [];

        history.push(attempt);

        const bestPercentage = Math.max(
            previousTest.best?.percentage ?? 0,
            percentage,
        );

        const bestAttempt =
            percentage >= (previousTest.best?.percentage ?? -1)
                ? attempt
                : previousTest.best;

        data.schemaVersion = 1;
        data.updatedAt = completedAt;

        data.tests[CONFIG.testId] = {
            testId: CONFIG.testId,
            title: CONFIG.title,

            attempts: (previousTest.attempts || 0) + 1,

            latest: attempt,

            best: {
                ...bestAttempt,
                percentage: bestPercentage,
            },

            history: history.slice(-CONFIG.historyLimit),
        };

        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
    } catch (error) {
        console.warn("Could not save quiz results:", error);
    }
}

/* =========================================
   14. RESTART QUIZ
========================================= */

function restartQuiz() {
    // Reset quiz state
    currentIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    hasAnswered = false;
    answerHistory = [];

    quizStartedAt = Date.now();

    // Clear previous answer review
    const reviewList = document.querySelector("#review-list");
    const reviewCount = document.querySelector("#review-count");

    if (reviewList) reviewList.innerHTML = "";
    if (reviewCount) reviewCount.textContent = "0 questions";

    // IMPORTANT: Remove previous question animations
    elements.questionCard.classList.remove("question-exit", "question-enter");

    elements.questionCard.style.animation = "none";

    // Prepare a fresh randomized test
    prepareQuestions();

    // Reset progress
    elements.progressFill.style.width = "0%";

    // Switch screens
    elements.resultsSection.classList.add("hidden");
    elements.quizSection.classList.remove("hidden");

    // Render the first question
    renderQuestion();

    // Restore question animation after removing old state
    requestAnimationFrame(() => {
        elements.questionCard.style.animation = "";
        elements.questionCard.classList.remove("question-exit");
        elements.questionCard.classList.add("question-enter");
    });

    // Scroll to the quiz
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    // Focus the first question
    elements.questionText.setAttribute("tabindex", "-1");
    elements.questionText.focus({ preventScroll: true });
}

/* =========================================
   15. EVENT LISTENERS
========================================= */

elements.nextButton.addEventListener("click", nextQuestion);

elements.restartButton.addEventListener("click", restartQuiz);

/* =========================================
   16. INITIALIZE QUIZ
========================================= */

function initializeQuiz() {
    quizStartedAt = Date.now();

    prepareQuestions();

    renderQuestion();
}

initializeQuiz();

/* =========================================
   17. KEYBOARD NAVIGATION
========================================= */

document.addEventListener("keydown", (event) => {
    // Ignore keyboard shortcuts while typing in inputs
    if (
        event.target.matches("input, textarea, select") ||
        event.target.isContentEditable
    ) {
        return;
    }

    // Don't interact with hidden quiz
    if (elements.quizSection.classList.contains("hidden")) {
        return;
    }

    // Number keys select answers
    if (["1", "2", "3", "4"].includes(event.key)) {
        if (hasAnswered) return;

        const index = Number(event.key) - 1;

        const buttons = elements.answersGrid.querySelectorAll(".answer-option");

        const button = buttons[index];

        if (button) {
            button.click();
        }
    }

    // Enter continues after answering
    if (
        event.key === "Enter" &&
        hasAnswered &&
        !elements.nextButton.disabled &&
        event.target !== elements.nextButton
    ) {
        event.preventDefault();
        elements.nextButton.click();
    }
});

/* =========================================
   18. IMPROVED QUESTION TRANSITIONS
========================================= */

/* =========================================
   19. RESULT CELEBRATION
========================================= */

function createCelebration() {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const canvas = document.createElement("canvas");

    canvas.className = "celebration-canvas";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.scale(dpr, dpr);

    const particles = [];

    const colors = ["#FF6B4A", "#4779FF", "#B8F34A", "#F6CE55", "#A78BFA"];

    for (let i = 0; i < 110; i++) {
        particles.push({
            x: Math.random() * width,
            y: -Math.random() * height,
            size: Math.random() * 7 + 3,
            speed: Math.random() * 3 + 2,
            drift: Math.random() * 2 - 1,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 8 - 4,
            color: colors[Math.floor(Math.random() * colors.length)],
        });
    }

    let animationFrame;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;

        ctx.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
            particle.y += particle.speed;
            particle.x += particle.drift;
            particle.rotation += particle.rotationSpeed;

            ctx.save();

            ctx.translate(particle.x, particle.y);
            ctx.rotate((particle.rotation * Math.PI) / 180);

            ctx.fillStyle = particle.color;

            ctx.fillRect(
                -particle.size / 2,
                -particle.size / 2,
                particle.size,
                particle.size * 0.65,
            );

            ctx.restore();
        });

        if (elapsed < 2800) {
            animationFrame = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(animationFrame);
            canvas.remove();
        }
    }

    animationFrame = requestAnimationFrame(animate);
}
