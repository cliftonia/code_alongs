# class maps to table
# objects map to records
# following 2 lines is we teach activerecord to do that mapping
# NAMING CONVENTIONS
# singular for model name
# plural for table name 
class Dish < ActiveRecord::Base
  validates :title, length: { minimum: 2 }
  # validates :image_url, length: { in: 10..100 }
  has_many :comments
  has_many :likes
  belongs_to :user
  belongs_to :category
end