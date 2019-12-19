get '/dishes/new' do
  @dish = Dish.new
  erb :new
end

get '/dishes' do 
  @dishes = Dish.all
  erb :index
end 

get '/api/dishes' do
  content_type :json
  Dish.all.to_json
end 

post '/dishes' do
  @dish = Dish.new
  @dish.title = params[:title]
  @dish.image_url = params[:image_url]
  @dish.user_id = current_user.id
  if @dish.save
    redirect '/'
  else  
    @dish.errors.full_messages
    # not redirecting when the save fails - to stay in the same request
    erb :new
  end
end

get '/dishes/:id' do 
  # redirect '/login' unless session[:user_id]

  @dish = Dish.find(params[:id])
  @comments = @dish.comments
  # @comments = Comment.where(dish_id: params[:id])
  @comment = Comment.new
  erb :show
end

get '/dishes/:id/edit' do 
  @dish = Dish.find(params[:id])
  erb :edit
end

put '/dishes/:id' do
  dish = Dish.find(params[:id])
  dish.title = params[:title]
  dish.image_url = params[:image_url]
  dish.save
  redirect "/dishes/#{dish.id}"
end

delete '/dishes/:id' do
  dish = Dish.find(params[:id])
  dish.delete
  redirect "/"
end