class ArmorPiece < ActiveRecord::Base
  belongs_to :armor
  belongs_to :player

  def current_level
    armor.levels.find_by(level: self.level)
  end

  def items_to_upgrade
    current_level.level_up_items
  end

  def upgrade
    self.update(level: level + 1)
  end

  def as_json
    {
      id: id,
      name: armor.name,
      level: level,
      items_to_upgrade: items_to_upgrade.as_json
    }
  end
end
