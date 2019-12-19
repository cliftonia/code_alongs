     
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'stock_quote' #dependencies

StockQuote::Stock.new(api_key: 'pk_4987d5b18c4043edb0d32313347d529a')

get '/' do
  erb :index
end

get '/quote' do
  @stock_name = params[:stockname]
  stock_info = StockQuote::Stock.quote(@stock_name) # stock_info is a custom object or custom type
  @stock_price = stock_info.latest_price
  @company_name = stock_info.company_name
  erb :stock_details
end

get '/about' do
  @number_of_employees = 5
  # params is always there 

  # binding.pry

  erb :about
end



