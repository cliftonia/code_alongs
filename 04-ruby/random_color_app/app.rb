require 'sinatra'
require 'sinatra/reloader'

# route order matters!!!! - start from the top

# home route
get '/' do 
  erb :home
end

get '/gimme_a_color' do
  @colors = ['yellow','green','blue','tomato','turqouise']
  @random_color = @colors.sample

  erb :color
  # "the best random color is #{color}"
end

get '/donate' do
  erb :donate
end 

get '/about' do
  erb :about
end 