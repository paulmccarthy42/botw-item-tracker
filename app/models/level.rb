class Level < ActiveRecord::Base
  belongs_to :armor
  has_many :level_up_items

  def as_json
    {
      id: id,
      level: level,
      level_up_items: level_up_items.as_json
    }
  end
end
