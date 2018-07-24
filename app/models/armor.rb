class Armor < ActiveRecord::Base
  has_many :armor_pieces
  has_many :levels

  def as_json
    {
      id: id,
      name: name,
      location: location,
      cost: cost,
      levels: levels.as_json
    }
  end
end
