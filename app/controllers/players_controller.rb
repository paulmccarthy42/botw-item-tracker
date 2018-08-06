class PlayersController < ApplicationController
  def show
    @player = Player.find(params[:id]).as_json
    @armors = Armor.all.sort_by {|armor| armor.name}.as_json
  end

  def piece_manager
    armor = Armor.find(params[:id])
    if params[:owned]
      ArmorPiece.where(armor_id: params[:id], player_id: 1).delete_all
    else
      ArmorPiece.create(
        armor_id: params[:id],
        level: 1,
        player_id: 1
      )
    end
    render json: {ok: true}
  end
end
