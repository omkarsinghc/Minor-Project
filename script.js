const questions = [
    {
        question: " Round robin scheduling falls under the category of ____________",
        optionA: "Non-preemptive scheduling",
        optionB: "Preemptive scheduling",
        optionC: "All of the mentioned",
        optionD: " None of the mentioned",
        correctOption: "optionB"
    },

    {
        question: " With round robin scheduling algorithm in a time shared system ____________",
        optionA: "using very large time slices converts it into First come First served scheduling algorithm",
        optionB: "using very small time slices converts it into First come First served scheduling algorithm",
        optionC: "using extremely small time slices increases performance",
        optionD: "using very small time slices converts it into Shortest Job First algorithm",
        correctOption: "optionA"
    },

    {
        question: "The portion of the process scheduler in an operating system that dispatches processes is concerned with ____________",
        optionA: "assigning ready processes to CPU",
        optionB: "assigning ready processes to waiting queue",
        optionC: "assigning running processes to blocked queue",
        optionD: "all of the mentioned",
        correctOption: "optionA"
    },

    {
        question: "Complex scheduling algorithms ____________",
        optionA: "are very appropriate for very large computers",
        optionB: " use minimal resources",
        optionC: "use many resources",
        optionD: "all of the mentioned",
        correctOption: "optionA"
    },

    {
        question: " What is FIFO algorithm?",
        optionA: "first executes the job that came in last in the queue",
        optionB: "first executes the job that came in first in the queue",
        optionC: "first executes the job that needs minimal processor",
        optionD: "first executes the job that has maximum processor needs",
        correctOption: "optionB"
    },

    {
        question: "The strategy of making processes that are logically runnable to be temporarily suspended is called ____________",
        optionA: "Non preemptive scheduling",
        optionB: "Preemptive scheduling",
        optionC: "Shortest job first",
        optionD: "First come First served",
        correctOption: "optionB"
    },

    {
        question: "What is Scheduling?",
        optionA: "allowing a job to use the processor",
        optionB: "making proper use of processor",
        optionC: "all of the mentioned",
        optionD: " none of the mentioned",
        correctOption: "optionA"
    },

    {
        question: "Orders are processed in the sequence they arrive if _______ rule sequences the jobs.",
        optionA: "earliest due date",
        optionB: "slack time remaining",
        optionC: "first come, first served",
        optionD: "critical ratio",
        correctOption: "optionC"
    },

    {
        question: " Which of the following algorithms tends to minimize the process flow time?",
        optionA: "First come First served",
        optionB: "Shortest Job First",
        optionC: "Earliest Deadline First",
        optionD: "Longest Job First",
        correctOption: "optionB"
    },

    {
        question: "Under multiprogramming, turnaround time for short jobs is usually ________ and that for long jobs is slightly ___________",
        optionA: "Lengthened; Shortened",
        optionB: "Shortened; Lengthened",
        optionC: "Shortened; Shortened",
        optionD: "Shortened; Unchanged",
        correctOption: "optionB"
    },

    {
        question: "Whenever a process needs I/O to or from a disk it issues a ______________Where is the world tallest building located ?",
        optionA: "system call to the CPU",
        optionB: "system call to the operating system",
        optionC: "a special procedure",
        optionD: "all of the mentioned",
        correctOption: "optionB"
    },

    {
        question: "If a process needs I/O to or from a disk, and if the drive or controller is busy then ___________",
        optionA: "the request will be placed in the queue of pending requests for that drive",
        optionB: "the request will not be processed and will be ignored completely",
        optionC: "the request will be not be placed",
        optionD: "none of the mentioned",
        correctOption: "optionA"
    },


    {
        question: "Random access in magnetic tapes is _________ compared to magnetic disks.",
        optionA: "fast",
        optionB: "very fast",
        optionC: "slow",
        optionD: "very slow",
        correctOption: "optionD"
    },

    {
        question: "Magnetic tape drives can write data at a speed ________ disk drives.",
        optionA: "much lesser than",
        optionB: " comparable to",
        optionC: " much faster than",
        optionD: "none of the mentioned",
        correctOption: "optionB"
    },

    {
        question: "In the ______ algorithm, the disk arm starts at one end of the disk and moves toward the other end, servicing requests till the other end of the disk. At the other end, the direction is reversed and servicing continues.",
        optionA: "LOOK",
        optionB: "SCAN",
        optionC: "C-SCAN",
        optionD: "C-LOOK",
        correctOption: "optionB"
    },

    {
        question: "In the _______ algorithm, the disk head moves from one end to the other, servicing requests along the way. When the head reaches the other end, it immediately returns to the beginning of the disk without servicing any requests on the return trip.",
        optionA: "LOOK",
        optionB: "SCAN",
        optionC: "C-SCAN",
        optionD: "C-LOOK",
        correctOption: "optionC"
    },

    {
        question: "In the ______ algorithm, the disk arm goes as far as the final request in each direction, then reverses direction immediately without going to the end of the disk.",
        optionA: "LOOK",
        optionB: "SCAN",
        optionC: "C-SCAN",
        optionD: "C-LOOK",
        correctOption: "optionA"
    },

    
    

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}