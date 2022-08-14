window.onload = function() {
  show(0);
}

function submitFrom(event) {
  event.preventDefault(); // change natural behavior
  let name = document.forms["form"]["name"].value;
  sessionStorage.setItem("name", name);

  location.href = "Quiz.html";

}

let questions = [
  {
    id: 1,
    question: "The Sum of ages of two siblings Akshat and Anubhav is 56 years. After the time span of 4 years the age of the Akshat will be three times that of the Anubhav. What is the present age of the Anubhav?",
    answer: "12",
    options: [
      "12",
      "13",
      "14",
      "16"
    ]
  },


  {
    id: 2,
    question: "If the price of Aashirvaad Atta is increased by 10% and the sales are decreased by 5% then what will be the effect on income.?",
    answer: "increased by 4.5%",
    options: [
      "decreased by 4.5%",
      "increased by 2.5%",
      "decreased by 5% ",
      "increased by 4.5%"
    ]
  },

  {
    id: 3,
    question: "The Price of Chetak and TVS Shakti are in the ratio of 9:5. If Chetak costs Rs 4200 more than TVS Shakti, find the price of TVS Shakti.",
    answer: "5250",
    options: [
      "2563",
      "8250",
      "7054",
      "5250"
    ]
  },
  {
    id: 4,
    question: "In a party, every person does a hand shake sign with every other person. If there were in total of 210 hand shake done at the party. Find the number of persons present in the party.",
    answer: "21",
    options: [
      "20",
      "22",
      "25",
      "21"
    ]
  },
  {
    id: 5,
    question: " The length, breadth, and height of a room are in the ratio 3:2:1. If the breadth and height are halved while the length is doubled, then the total area of the four walls of the room will:",
    answer: "decreased by 30%",
    options: [
       "dcereased by 15%",
      "decreased by 18.23%",
      "decreased by 30%",
      "decreased by 24%"
    ]
  },
  {
    id: 6,
    question: " The 260th term of the series a,b,b,c,c,c,d,d,d,d,e,e,e,e,e,f,f,f,f,f,f,….is:",
    answer: "W",
    options: [
       "U",
      "W",
      "T",
      "F"
    ]
  },
  {
    id: 7,
    question: " The Rs. 3000 is distributed among A, B, and C such that A gets 2/3rd of what B and C together get and C gets ½ of what A and B together get. Find C’s share.",
    answer: "1000",
    options: [
       "10000",
      "100",
      "1000",
      "0.1000"
    ]
  },
  {
    id: 8,
    question: " Shush and Komal can do a job together in 7 days. Shush is 7/4 times as efficient as Komal. The same job can be done by Shush alone in ",
    answer: "11 Days",
    options: [
       "49/2 Days",
      "28/3 Days",
      "11 Days",
      "15 Days"
    ]
  },
  {
    id: 9,
    question: " George can do some work in 8 hours. Paul can do the same work in 10 hours while Hari can do the same work in 12 hours. All the three of them start working at 9 AM. while George stops work at 11 am, the remaining two complete the work, approximately when will the work be finished?",
    answer: "1 PM",
    options: [
       "11:30 AM",
      "12 Noon",
      "12:30",
      "1 PM"
    ]
  },
  {
    id: 10,
    question: "1,7 ,8 ,49 ,50 ,56 ,57 ,343 ,344 ,350 ,351 ,392 ,393 ,399 ,400 ,The above sequence contains sums of distinct powers of 7 in the increasing order (7^0, 7^1, 7^1 + 7^0, 7^2, etc). What is the value of term number 36?",
    answer: "16857",
    options: [
       "16857",
      "16450",
      "16850",
      "16780"
    ]
  }
];

let marks = 0;
let Qcount = 0;
function next() {
  if (Qcount == questions.length - 1) {

  sessionStorage.setItem("time",` ${minutes} miutes and ${seconds} seconds`);
  clearInterval(interval);
  location.href = "end.html";

  }
  let Uanswer = document.querySelector("li.option.active").innerHTML;
  if (Uanswer == questions[Qcount].answer) {
    marks += 4;
    sessionStorage.setItem("marks", marks);
  }
  Qcount++;
  show(Qcount);

}


// to show // QUESTION:
function show(count) {
  let question = document.getElementById("questions");

  // question.innerHTML= "<h2>"+ questions[count].question +"</h2>";
  // using templet literals ---- back tics syntax
  question.innerHTML = `<h2>Q${Qcount+1}. ${ questions[count].question} </h2>
  <ul class="optgrp">
    <li class="option ">${ questions[count].options[0]}</li>
    <li class="option">${ questions[count].options[1]}</li>
    <li class="option">${ questions[count].options[2]}</li>
    <li class="option">${ questions[count].options[3]}</li>
  </ul>  `;
  toggleActive();
}


function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active"); //active event
    }
  }
}
