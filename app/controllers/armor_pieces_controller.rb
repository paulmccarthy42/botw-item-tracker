class ArmorPiecesController < ApplicationController
  def update
    ArmorPiece.find(params[:id]).upgrade
    render json: {ok: true}
  end
end
