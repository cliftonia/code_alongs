class Year
  def initialize(year)
    @leap_year = year
    
  end

  def leap?
    @leap_year % 4 == 0 || @leap_year % 100 == 0 && @leap_year % 400 != 0
  end 

end
