dishes = ['cake', 'pudding', 'tomato', 'ribs', 'potato']
vegies = ['tomato', 'potato']

lunch_box = []

# dishes.each do |dish|
#   if vegies.include?(dish) == false
#     lunch_box.push(dish)
#   end
# end

lunch_box = dishes.select do |dish| 
  !vegies.include?(dish)
end

p lunch_box


lunch_box = []
dishes.each do |dish|
  lunch_box.push(dish.upcase)
end

lunch_box = dishes.map { |dish| dish.upcase }

# no tomato for lunch
lunch_box = []

dishes.each do |dish|
  if dish != "tomato"
    lunch_box.push(dish)
  end
end

lunch_box = dishes.select do |dish| 
  dish != "tomato"
end