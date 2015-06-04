var logOut = function() {
  $('.topBoard').on('click', '#logout_button', function(event){
    event.preventDefault();
    console.log("GET OUT")

    $.ajax({
      type: 'POST',
      url: '/logout'
    }).done(function(logout_page){
      $('.topBoard').empty();
      $('.blackBoard').empty();
      $('.avatarBoard').empty();
      $('.blackBoard').load('/logout .logoutBoard');
    })
  })
}

var scheduleThings = function() {
  $('.blackBoard').on('click', '#make_apt_button', function(event){
    event.preventDefault();
    
    $.ajax({
      type: 'GET',
      url: '/make_apt'
    }).done(function(make_apt_page){
      $('.topBoard').empty();
      $('.topBoard').load('/make_apt .newTopBoard');
      $('.avatarBoard').empty();
      $('.avatarBoard').load('/make_apt .avatarBoard');
      $('.blackBoard').empty();
      $('.blackBoard').load('/make_apt .makeAptBoard');
    })
  })
}

var makeAppointments = function() {
  $('.topBoard').on('click', '#cancel_button', function(event){
    event.preventDefault();
    console.log("oh god cancel")

    $.ajax({
      type: 'GET',
      url: '/appointments'
    }).done(function(apt_page){
      $('.topBoard').empty();
      $('.topBoard').load('/appointments .topBoard');
      $('.avatarBoard').empty();
      $('.avatarBoard').load('/make_apt .avatarBoard');
      $('.blackBoard').empty();
      $('.blackBoard').load('/appointments .blackBoard');
    })
  })
}
