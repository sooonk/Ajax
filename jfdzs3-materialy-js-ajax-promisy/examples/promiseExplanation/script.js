const isMomHappy = false;
const phone = {
  brand: 'Samsung',
  color: 'black'
};

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    resolve(phone); // fulfilled
  } else {
    reject(new Error('mom is not happy')); // reject
  }
});

// check our promise
let askMom = () => {
  willIGetNewPhone
    .then(fulfilled => {
      // yay, you got a new phone
      console.log(fulfilled);
      // output: { brand: 'Samsung', color: 'black' }
    })
    .catch(error => {
      // oops, mom don't buy it
      console.log(error.message);
      // output: 'mom is not happy'
    });
};

askMom();



//////////////////////

askMom = () => {
  console.log('before asking Mom');
  willIGetNewPhone
    .then(phone => {
      const message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
      return new Promise(resolve => resolve(message));
      // or return Promise.resolve(message);
    })
    .then(fulfilled => {
      console.log(fulfilled);
      // output: 'Hey friend, I have a new black Samsung phone.'
    })
    .catch(error => {
      // oops, mom don't buy it
      console.log('2', error.message);
      // output: 'mom is not happy'
    });
  console.log('after asking mom');
};

askMom();