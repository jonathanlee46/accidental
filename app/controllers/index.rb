
get '/' do
  if current_user
    redirect '/appointments'
  else
    redirect '/login'
  end
end

get '/login' do
  erb :login
end

post '/login' do
  user = User.find_by(email: params[:email])
  if user.nil?
    erb :login_fail
  else
    if user.password == params[:password]
      session[:user_id] = user.id
      redirect '/appointments'
    else
      erb :login_fail
    end
  end
end

get '/register' do
  erb :register
end

post '/register' do
  user = User.new(
    name:  params[:name],
    email: params[:email],
    phone: params[:phone],
    )
  user.password = params[:password]

  #get gravatar
  email = params[:email].downcase
  hash = Digest::MD5.hexdigest(email)
  image_src = "http://www.gravatar.com/avatar/#{hash}"
  user.avatar = image_src

  user.save!

  session[:user_id] = user.id

  # maybe redirect to user page?
  redirect '/'
end

get '/logout' do
  erb :logout
end

post '/logout' do
  session[:user_id] = nil
  redirect '/logout'
end

get '/appointments' do
  if session[:user_id] == nil
    redirect '/'
  end
  erb :show_appointments
end

get '/make_apt' do
  if session[:user_id] == nil
    redirect '/'
  end
  erb :make_appointments
end

post '/make_apt' do
  p current_user.id
  apt = Appointment.new(
    user_id:      current_user.id,
    procedure:    params[:procedure],
    date:         params[:date],
    time_start:   params[:time_start],
    time_end:     params[:time_end],
    doctor_name:  params[:doctor_name]
    )
  apt.save!

  redirect '/appointments'
end
