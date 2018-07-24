class Player < ActiveRecord::Base
  has_many :armor_pieces

  def currently_searching_for
    duplicative_list = armor_pieces.map { |piece| piece.items_to_upgrade.as_json }.flatten

    duplicative_list.each_with_object(Hash.new(0)) do |item, shopping_list|
      shopping_list[item[:name]] += item[:count]
    end
  end

  def as_json
    {
      name: name,
      armor: armor_pieces.as_json,
      currently_searching_for: currently_searching_for
    }
  end
end