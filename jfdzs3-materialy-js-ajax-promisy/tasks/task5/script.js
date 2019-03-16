const promise1 = new Promise((resolve, reject) => {

    fetch('https://randomuser.me/api')
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            resolve(data);
            const userImage = document.querySelector('.user-data__image');
            userImage.src = data.results[0].picture.large;

            const userName = document.querySelector('.user-data__info-container');
            userName.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
        })
        .catch(function (error) {
            reject(error);
        });
})
const promise2 = new Promise((resolve, reject) => {

    fetch('https://randomuser.me/api')
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            resolve(data);
            const userImage = document.querySelector('.user-data__image');
            userImage.src = data.results[0].picture.large;

            const userName = document.querySelector('.user-data__info-container');
            userName.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
        })
        .catch(function (error) {
            reject(error);
        });
})


Promise.all([promise1, promise2])
    .then(values => {
        console.log(values)
    })
    .catch(reason => {
        console.log(reason)
    })