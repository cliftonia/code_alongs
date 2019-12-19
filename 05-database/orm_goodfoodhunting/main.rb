require 'sinatra'

require 'sinatra/reloader'
also_reload File.expand_path(__dir__, 'models/*')
also_reload File.expand_path(__dir__, 'views/*')
also_reload File.expand_path(__dir__, 'routes/*')
require_relative 'database_config'

require_relative 'models/dish'
require_relative 'models/comment'
require_relative 'models/user'
require_relative 'models/category'
require_relative 'models/like'

enable :sessions

helpers do 
  
  def logged_in? # predicate method - will return a boolean
    # !!current_user or you can use below
    if current_user
     return true
    else  
     return false
    end
  end 

  def current_user
    return User.find_by(id: session[:user_id])
  end

end

after do 
  ActiveRecord::Base.connection.close
end

get '/' do
  # @dishes = Dish.all
  @dishes = Dish.order(created_at: 'desc').limit(3)
  erb :home
end

get '/my_dishes' do 
  @dishes = Dish.where(user_id: current_user.id)
  erb :my_dishes
end 

post '/likes' do
  redirect "/login" unless logged_in?
  # making a like - only logged in users can do this right?
  like = Like.new
  like.dish_id = params[:dish_id]
  like.user_id = current_user.id
  like.save
  redirect "/"
end 

post '/api/likes' do 
  content_type :json
  like = Like.new
  like.dish_id = params[:dish_id]
  like.user_id = current_user.id
  if like.save 
   { likes_count: Like.where(dish_id: like.dish_id).count }.to_json
  else  
    { message: "noooooo" }.to_json
  end 
end 

require_relative 'routes/dishes'
require_relative 'routes/comments'
require_relative 'routes/sessions'
