const newPromise = new Promise((resolve, reject) => {

    fetch('https://randomuser.me/api')
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            resolve(data);

            const userImage = document.querySelector('.user-data__image');
            userImage.src = data.results[0].picture.large;

            const userName = document.querySelector('.user-data__info-container');
            userName.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`


        })
        .catch(function (error) {
            reject(error);
        });

})

    .then(function (data) {
        console.log(data);

    })

    .catch(function (error) {
        console.log(error);
    })

