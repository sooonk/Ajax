$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://loripsum.net/api',
    dataType: 'text',
    success: function(data) {

        console.log(data);

    },
    error: function(err) {
      console.log('Error! ', err);
    }
  });