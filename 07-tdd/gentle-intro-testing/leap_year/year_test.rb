require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'year'

class YearTest < MiniTest::Test

  def test_years_divisible_by_400_are_leap_years
    assert_equal true, Year.new(1600).leap?
    assert_equal true, Year.new(1200).leap?
    assert_equal true, Year.new(2000).leap?
  end 

  def test_years_divisible_by_100_but_not_400_are_not_leap_years
    expected = false
    actual = Year.new(2001).leap?
    assert_equal expected, actual
  end 

end

# i need to check if the code is divis