# setup app enviroment

require_relative 'database_config'
require_relative 'models/dish'
require_relative 'models/comment'
require_relative 'models/user'
require_relative 'models/category'

Category.delete_all
Comment.delete_all
Dish.delete_all
User.delete_all

user = User.new
user.email = "test@test.com"
user.password = "test"
user.save


titles = ['cake', 'pudding', 'muffin', 'ribs','jelly', 'lobster', 'cakey', 'steak']

# titles = %w(cake pudding muffin ribs jelly lobster cakey steak)

# cat = Category.new
# cat.name = "dessert"
# cat.save

Category.create name: "dessert"
Category.create name: "brunch"
Category.create name: "dinner"


10.times do 

  dish = Dish.new
  dish.title = "#{titles.sample} #{titles.sample}"
  dish.user_id = user.id
  dish.category_id = Category.all.sample.id
  dish.save

end 