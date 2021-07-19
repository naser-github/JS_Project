'use strict';

const poll = {
  question: "Who is your character",
  option: ["0:Luffy", "1:Naruto", "2:Gon", "3:Midoriya"],
  answers: new Array(4).fill(0),

  registerAnswer() {
    let response = Number(
      prompt(`${this.question} \n${this.option.join("\n")} `)
    );
    
    typeof response === 'number' && response < this.answers.length && this.answers[response]++ && console.log(this.answers)|| alert("wrong input");

    //my way
    // switch (response) {
    //   case 0:
    //     this.answers[0] = this.answers[0] + 1;
    //     console.log(this.answers);
    //     break;
    //   case 1:
    //     this.answers[1] = this.answers[1] + 1;
    //     console.log(this.answers);
    //     break;
    //   case 2:
    //     this.answers[2] = this.answers[2] + 1;
    //     console.log(this.answers);
    //     break;
    //   case 3:
    //     this.answers[3] = this.answers[3] + 1;
    //     console.log(this.answers);
    //     break;
    //   default:
    //     alert("Wrong Input");
    //     break;
    // }
  },
};

document.querySelector('.poll').addEventListener('click',poll.registerAnswer.bind(poll) );