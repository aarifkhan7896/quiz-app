const questions = [{
    id:1,
    question: "The script tag must be placed in",
    answer:"head and body",
    options:[
        "head",
        "head and body",
        "title and head",
        "all of the mentioned"
    ]
},{
    id:2,
    question: "Javascript code can be called using",
    answer: "Function/Method",
    options:[
        "RMI",
        "Triggering Event",
        "Preprocessor",
        "Function/Method"
    ]
},{
    id:3,
    question: "Javascript can be written",
    answer:"directly into js file and included in HTML",
    options:[
        "directly into js file and included in HTML",
        "directly on the server page",
        "directly into HTML page",
        "all of the mentioned"
    ]
},{
    id:4,
    question: "A proper scripting language is called",
    answer:"High level programming language",
    options:[
        "High level programming language",
        "Machine level programming language",
        "Low level programming language",
        "Assembly level programming language"
    ]
},{
    id:5,
    question: "The type of variable that is volatile is",
    answer:"Mutable variable",
    options:[
        "Volatile variable",
        "Immutable variable",
        "Mutable variable",
        "Dynamic variable"
    ]
},{
    id: 6,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    id: 7,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    id: 8,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    id: 9,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    id: 10,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  }]

const startBtn = document.querySelector('#startBtn');
const exitBtn = document.querySelector('#exitBtn');
const continueBtn =document.querySelector('#continueBtn');
const instructionModal = document.querySelector('.instructionModal');
const questionModal = document.querySelector('.questionModal');
const submitBtn = document.querySelector("#submitBtn");
let count=0;
let que_count=0;

startBtn.addEventListener('click',()=>{
    if(instructionModal.classList.contains('instructionModal')){
        instructionModal.classList.add('instructionActive');
        startBtn.style.display="none";
    }
})
exitBtn.addEventListener('click',()=>{
    if(instructionModal.classList.contains('instructionModal')){
        instructionModal.classList.remove('instructionActive');
        startBtn.style.display="flex";
    }
})
continueBtn.addEventListener('click',()=>{
    if(questionModal.classList.contains('questionModal')){
        questionModal.classList.add('questionModalActive');
        instructionModal.classList.remove("instructionActive");
    }
    showQuestions(count);
})

function showQuestions(index){
    const heading = document.querySelector('#heading');
    const options = document.querySelector('#options');

    const ques = `<h1>${questions[index].question}</h1>`;
    const option = `<li class="list" id="option1">${questions[index].options[0]}</li>
                    <li class="list" id="option2">${questions[index].options[1]}</li>
                    <li class="list" id="option3">${questions[index].options[2]}</li>
                    <li class="list" id="option4">${questions[index].options[3]}</li>`;

    heading.innerHTML = ques;
    options.innerHTML = option;

    const opt = options.querySelectorAll(".list");
    for(i=0; i < opt.length; i++){
        opt[i].setAttribute("onclick", "optionSelected(this)");
    }
}

submitBtn.addEventListener('click',()=>{
    if(count<questions.length-1){
        count++;
        showQuestions(count);
    }
    if(que_count<questions.length-1){
        que_count++;
    }
})

function optionSelected(answer){
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array

    if(userAns == correcAns){
        answer.style.backgroundColor = '#ace1af'; 
        console.log("Correct answers ");
    }else{
        answer.style.backgroundColor = '#ff7070'; 
        console.log("Wrong Answer");
    }
}