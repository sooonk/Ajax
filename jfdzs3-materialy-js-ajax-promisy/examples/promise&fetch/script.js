// simple fetch use

fetch('https://randomuser.me/api')
.then(
  response => response.json(),
)
.then(data => {
  console.log('Fetch', data)
})
.catch(error => {
  console.log('Fetch error', error)
});


// fetch and then returns a promise - so we can assign it to variables!
const responseFromApiPromise = fetch('https://randomuser.me/api');
const parsedJsonPromise = responseFromApiPromise.then(response => response.json());

parsedJsonPromise
.then(data => new Promise(resolve => resolve(data)))
.then(data => {
  console.log('Another fetch', data)
})
.catch(error => {
  console.log('Another fetch error', error)
});

// Using Promise.resolve(data) instead returning new Promise();

const responseFromApiPromise2 = fetch('https://randomusadasdser.me/api');
const parsedJsonPromise2 = responseFromApiPromise2.then(response => response.json());

parsedJsonPromise2
.then(
  data => Promise.resolve(data),
  error => Promise.reject('shiiitt ' + error)
)
.then(data => {
  console.log('Another fetch 2', data)
})
.catch(error => {
  console.log('Another fetch error 2', error)
});

console.log('Promisy są asynchroniczne :)');