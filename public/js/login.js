var clickReg = function() {
  $(".blackBoard").on('click', '#reg_button', function(event){
    event.preventDefault();

    console.log("THEY CLICKED HERE")

    $.ajax({
      type: 'GET',
      url: '/register'
    }).done(function(reg_page){
      // $('.loginBoard').css("animated fadeOutDown")

      // target = document.getElementsByClassName('loginBoard')
      // target.className += "animated fadeOutDown";

      $('.blackBoard').empty();
      $('.blackBoard').load('/register .reg_page')
    })
  })
}

var clickCancel = function() {
  $('.blackBoard').on('click', '#reg_cancel', function(event){
    event.preventDefault();

    console.log("ABORT ABORT")

    $.ajax({
      type: 'GET',
      url: '/login'
    }).done(function(login_page){
      $('.blackBoard').empty();
      $('.blackBoard').load('/login .loginBoard')
    })

  })
}