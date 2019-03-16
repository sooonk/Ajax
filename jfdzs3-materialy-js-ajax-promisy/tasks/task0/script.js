$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {

        console.log(data);
        const userImage = document.querySelector(".user-data__image");
        const userInfoContainer = document.querySelector(".user-data__info-container");
        const userMail = document.querySelector(".usermail");


        userImage.src = data.results[0].picture.large;
        //userInfoContainer.innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
        userInfoContainer.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
        userMail.innerHTML = data.results[0].email;


    },
    error: function(err) {
      console.log('Error! ', err);
    }
  });