# pin needs to be 4 digit
# pin can't be all the same number
# I want a method to validate pin

require 'minitest/autorun'
require 'minitest/reporters'

require_relative 'valid_pin'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

class ValidPinTest < MiniTest::Test 

  def test_not_all_same_number
    expected = false
    actual = valid_pin?("1111")
    assert_equal expected, actual
  end 

  def test_valid_with_4_digit
    expected = true
    actual = valid_pin?("1234")
    assert_equal expected, actual 
  end 

  def test_with_4_different_numbers
    expected = true
    actual = valid_pin?("4567")
    assert_equal expected, actual
  end 

  def test_invalid_when_3_digit
    expected = false
    actual = valid_pin?("123")
    assert_equal expected, actual
  end

  def test_invalid_with_letter
    expected = false
    actual = valid_pin?("abcd")
    assert_equal expected, actual
  end 
end 

# 1. we write tests to PROVE your code does what you THINK it does

# 2. tests (TDD) help define the problem you are trying to solve

# 3. tests help you verify that new changes or refactors don't break the rest of your code 