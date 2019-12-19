class Account
  
  def initialize(new_balance)
    @balance = new_balance
  end

  # contracts - interface
  def deposit(amount)
    @balance = @balance + amount
  end 

end

sams_account = Account.new(5.5)

require 'pry'
binding.pry