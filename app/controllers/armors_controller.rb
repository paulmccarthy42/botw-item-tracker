class ArmorsController < ApplicationController
  def index
    @armors = Armor.all.as_json
  end
end
