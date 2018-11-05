require("minitest/autorun")
require("minitest/rg")
require_relative("../testing_task_2")
require_relative("../card")
require("pry")

class TestCardsGame < Minitest::Test

  def setup
    @game = CardGame.new()

    card1 = Card.new("Spades", 1, "Ace of Spades")
    card2 = Card.new("Hearts", 3)

    @cards = [card1, card2]
  end

  def test_checkforAce
    result = @game.checkforAce(@cards[0])
    assert_equal(true, result)
  end

  def test_highest_card
    result = @game.highest_card(@cards[0], @cards[1])
    assert_equal("3 of Hearts", result)
  end

  def test_highest_card__swapped
    result = @game.highest_card(@cards[1], @cards[0])
    assert_equal("3 of Hearts", result)
  end

  def test_highest_card__equal
    result = @game.highest_card(@cards[0], @cards[0])
    assert_equal("Ace of Spades", result)
  end

  def test_selfCardsTotal
    result = CardGame.cards_total(@cards)
    assert_equal("You have a total of 4.", result)
  end

end
