class LevelUpItem < ActiveRecord::Base
  belongs_to :level
  belongs_to :item

  def as_json
    {
      id: id,
      count: count,
      name: item.name
    }
  end
end
