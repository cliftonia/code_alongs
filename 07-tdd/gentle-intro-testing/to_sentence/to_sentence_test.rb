# ["dessert", "brunch", "dinner"]
# dessert, brunch and dinner 
# brunch and dinner 
# lunch, dessert, brunch and dinner

require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'to_sentence'

class ToSentenceTest < MiniTest::Test 

  # test cases in here 

  # test case number 1
  # method name starts with test_
  def test_2_words
                # expected, actual
    assert_equal "dessert and brunch" , to_sentence(["dessert", "brunch"])
  end 

  def test_1_word
    assert_equal "dinner", to_sentence(["dinner"])
  end 

  def test_3_words
    words = ["dinner", "lunch", "supper"]
    assert_equal "dinner, lunch and supper", to_sentence(words)
  end 

  def test_4_words
    expected = "a, b, c and d"
    actual = to_sentence(["a", "b", "c", "d"])
    assert_equal expected, actual
  end 

  def test_numbers 
    expected = "1, 2 and 3"
    actual = to_sentence([1, 2, 3])
    assert_equal expected, actual
  end 

  def test_no_words
    expected = ""
    actual = to_sentence([])
    assert_equal expected, actual
  end

end
