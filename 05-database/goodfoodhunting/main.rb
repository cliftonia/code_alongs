     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

def run_sql(sql)
  conn = PG.connect(dbname: 'goodfoodhunting')
  results = conn.exec(sql)

  # sql = 'SELECT * FROM dishes WHERE id = ?'

  # conn.prepare(name, sql)
  # conn.exec_prepare(name, params[:id])

  conn.close
  return results 
end

def run_prepared_sql(name, sql, params)
  conn = PG.connect(dbname: 'goodfoodhunting')
  conn.prepare(name,sql)
  results = conn.exec_prepared(name,params)
  conn.close
  results
end

# READ
get '/' do
  @results = run_sql("SELECT * FROM dishes ORDER BY title;")
  erb :index
end

# get '/about-us' do 

# end

# CREATE
post '/dishes' do
  # ok i will create a new record for you 
  # params[:title]
  # params[:image_url]
 

  # would reccomend checking that this is correct before proceeding
  # sql
  
  # redirect are get requests
  sql = "INSERT INTO dishes (title, image_url) VALUES ('#{params[:title]}', '#{params[:image_url]}')"
  run_sql(sql)
  redirect '/'
end

# READ
get '/dishes/new' do 
 erb :new
end 

# READ
get '/dishes/:id' do
  # params[:id] never trust your users

  # params[:id]
  # conn = PG.connect(dbname: 'goodfoodhunting')
  # whats in @results???? an array of a hash
  # in this case just 1 hash
  # because we ask for 1 record
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  results = run_sql(sql)
  @dish = results[0]
  erb :show
end

# delete
delete '/dishes/:id' do
  # conn = PG.connect(dbname: 'goodfoodhunting')
  # sql = "DELETE FROM dishes WHERE id = #{ params[:id] };"
  # conn.exec(sql)
  # conn.close
  run_sql("DELETE FROM dishes WHERE id = #{ params[:id] };")
  redirect "/"
end

# READ
get '/dishes/:id/edit' do
  # conn = PG.connect(dbname: 'goodfoodhunting')
  # sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  # results = conn.exec(sql)
  # @dish = results[0]
  # conn.close

  results = run_sql("SELECT * FROM dishes WHERE id = #{ params[:id] };")
  @dish = results[0]
  erb :edit
end

# UPDATE
put '/dishes/:id' do
  # conn = PG.connect(dbname: 'goodfoodhunting')
  # sql = "UPDATE dishes SET title = '#{ params[:title] }', image_url = '#{ params[:image_url] }' WHERE id = #{ params[:id] };"
  # conn.exec(sql)
  # conn.close
  
  sql = "UPDATE dishes SET title = '#{ params[:title] }', image_url = '#{ params[:image_url] }' WHERE id = #{ params[:id] };"
  run_sql(sql)
  redirect "/dishes/#{ params[:id] }"
end

