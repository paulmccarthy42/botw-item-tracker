class LevelUpItem < ActiveRecord::Base
  belongs_to :level
  belongs_to :item

  def as_json
    {
      count: count,
      name: item.name
    }
  end
end
