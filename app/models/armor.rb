class Armor < ActiveRecord::Base
  has_many :armor_pieces
  has_many :levels

  def as_json
    {
      id: id,
      name: name,
      location: location,
      cost: cost,
      levels: levels.as_json,
      pieces: armor_pieces.count,
      owned: armor_pieces.count > 0
    }
  end
end
