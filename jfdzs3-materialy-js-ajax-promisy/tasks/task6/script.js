const promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        fetch('https://randomuser.me/api')
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            resolve(data);
        })
        .catch(function (error) {
            reject(error);
        })
    },1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        fetch('https://randomuser.me/api')
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            resolve(data);
        })
        .catch(function (error) {
            reject(error);
        })
    },2000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        fetch('https://randomuser.me/api')
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            resolve(data);
        })
        .catch(function (error) {
            reject(error);
        })
    },3000)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        fetch('https://randomuser.me/api')
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            resolve(data);
        })
        .catch(function (error) {
            reject(error);
        })
    },4000)
})

Promise.all([promise1, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
        values.forEach((data) => {
            const container = document.createElement('div')
            
            const image = document.createElement('img')
            image.src = data.results[0].picture.large;
    
            const userName = document.createElement('div');
            userName.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
    
            const content1 = container.appendChild(image);
            const content2 = container.appendChild(userName);

            document.querySelector('.fetch0').appendChild(content1);
            document.querySelector('.fetch0').appendChild(content2);
        });
    })
    .catch(reason => {
        console.log(reason)
    })

    