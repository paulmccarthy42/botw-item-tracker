class ItemsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @items = Item.all.sort_by {|item| item.name}
  end

  def create
    Item.find_or_create_by(name: params[:name])
    render json: Item.all.sort_by {|item| item.name}
  end
end
