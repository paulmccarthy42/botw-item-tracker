class ArmorsController < ApplicationController
  def index
    @armors = Armor.all.as_json
    @items = Item.all.sort_by {|x| x.name}.as_json
  end

  def new
    @armors = Armor.all.sort_by {|armor| armor.name}.as_json
  end

  def create
    Armor.find_or_create_by(name: params[:name])
    render json: Armor.all.sort_by {|armor| armor.name}.as_json
  end
end
