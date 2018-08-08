class LevelUpItemsController < ApplicationController
  def create
    new_item = LevelUpItem.find_or_create_by({
      level_id: params[:level],
      item_id: Item.find_by(name: params[:item]).id,
      count: params[:count]
    })
    if new_item.valid?
      render json: {item: new_item.as_json}
    else
      render json: {ok: false}
    end
  end
end
