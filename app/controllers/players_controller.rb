class PlayersController < ApplicationController
  def show
    @player = Player.find(params[:id]).as_json
  end
end
