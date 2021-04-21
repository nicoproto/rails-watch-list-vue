class Api::V1::ListsController < ApplicationController
  before_action :set_list, only: [ :show, :update, :destroy ]

  def index
    @lists = List.all
  end

  def show;
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render :show, status: :created
    else
      render_error
    end
  end

  def update
    if @list.update(list_params)
      render :show, status: :accepted
    else
      render json: { json: @list.errors, status: :unprocessable_entity }
    end
  end

  def destroy
    if @list.destroy
      render json: { status: :ok, message: 'List destroyed' }
    else
      render json: { json: @list.errors, status: :unprocessable_entity }
    end
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end

  def set_list
    @list = List.find(params[:id])
  end
end
