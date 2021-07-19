'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//map loop (user Id)
const userId = function (accounts) {
  accounts.forEach(function (user) {
      user.userName = user.owner.toLowerCase().split(' ').map(function (uid) {
        return uid[0];
      }).join('');
  });
}
userId(accounts);

//filter loop (withdraw-deposit)
// const filter = function (accs) {

//   accs.forEach(function (acc) {

//     acc.deposit = acc.movements.filter(function (mov) {
//       return mov>0;
//     });

//     acc.withdrawal = acc.movements.filter( function (mov) {
//       return mov<0;
//     });
//   })
  
// }
// filter(accounts);


//reduce loop (balance)
const reduce = function (acc) {
    acc.balance =acc.movements.reduce(function (
      accumulator,
      element,
    ) {
      return accumulator + element;
    },
    0);
    
    labelBalance.innerHTML = `${acc.balance} $`;
}

//summary
const summary = function (acc) {
  
  //deposit
  labelSumIn.innerHTML = `${
    acc.movements
      .filter(function (mov) {
        return mov > 0;
      })
      .reduce(function (sum, dep) {
        return sum + dep;
      }, 0)
  }$`; 

  //withdraw
  labelSumOut.innerHTML = `${Math.abs(
    acc.movements
      .filter(function (mov) {
        return mov < 0;
      })
      .reduce(function (sum, dep) {
        return sum + dep;
      }, 0)
  )}$`;
  
  //interest
  labelSumInterest.innerHTML = `${
    acc.movements
      .filter(function (mov) {
        return mov > 0;
      })
      .map(function (deposit) {
        return (deposit * acc.interestRate) / 100;
      })
      .filter(function (filter) {
        return filter > 1;
      })
      .reduce(function (sum, interest) {
        return sum + interest;
      })
  }$`;
  
}

/*--------------------------------------------------------------------------------------------------*/

//verify login
const verify= function(userName,userPin){
  return accounts.find( acc => 
       acc.userName === userName && acc.pin === userPin 
  );
}

//show each transaction
const transaction = function (movements, sort = false){
  
  const sorting = sort ? movements.slice().sort((a, b) => a - b) : movements;
  containerMovements.innerHTML = '';
  containerApp.style.opacity = 1;
  sorting.forEach(function (element, index) {
    const type = element > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${element} $</div>
      </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

let userDetails;

btnLogin.addEventListener('click', function(e){
  e.preventDefault();
  
  const userLoginName = inputLoginUsername.value;
  const userLoginPin = Number(inputLoginPin.value);

  userDetails = verify(userLoginName, userLoginPin);
  if ( userDetails != undefined){

    const ownerName = userDetails.owner.split(' ');
    labelWelcome.textContent = `Welcome ${ownerName[0]}`;
    inputLoginUsername.value = inputLoginPin.value = '';

    transaction(userDetails.movements);

    reduce(userDetails);

    summary(userDetails);
  }else{
    alert("wrong input");
  }
});


//transfer money

btnTransfer.addEventListener('click',function (e) {
  e.preventDefault();

  const transferAmount = Number(inputTransferAmount.value);
  const transferTo = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  if (
    transferAmount > 0 &&
    transferAmount <= userDetails.balance &&
    transferTo?.userName !== userDetails.userName
  ) {
    userDetails.movements.push(transferAmount * -1);
    transferTo.movements.push(transferAmount);

    inputTransferAmount.value = inputTransferTo.value = '';

    transaction(userDetails.movements);

    reduce(userDetails);

    summary(userDetails);
  }else{
    alert ('Wrong Input');
  }
  
});

//request Loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loan = Number(inputLoanAmount.value);

  if(loan>0 && userDetails.movements.some(mov => mov >= loan*.1)){
    
    userDetails.movements.push(loan);

    transaction(userDetails.movements);

    reduce(userDetails);

    summary(userDetails);    
  }

})

//close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const closingPin = Number(inputClosePin.value);
  const closingUser = inputCloseUsername.value;

  if (userDetails.userName === closingUser && userDetails.pin === closingPin){
    accounts.forEach(function(acc, i){
      if(acc.userName === closingUser){
        accounts.splice(i, 1);

        labelWelcome.textContent = `login to get started`;
        inputLoginUsername.value = inputLoginPin.value = '';
        containerApp.style.opacity = 0;
      }
    });
  }
    

  

  
  
})

//sort
let sorted= false;
btnSort.addEventListener('click',function (e) {
  e.preventDefault();


  transaction(userDetails.movements,!sorted);
  sorted = !sorted;

})

console.log(accounts);












// const min = account1.movements.reduce(function (acc, val) {
//   return acc < val ? val : acc;
// },account1.movements[0]);
// // if no starting value is  defined it will start from the beginning

// console.log(min);