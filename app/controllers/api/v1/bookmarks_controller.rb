class API::V1::BookmarksController < ApplicationController
  before_action :set_list, only: [:index, :create]
  before_action :set_bookmark, only: [:destroy]

  def index
    @bookmarks = Bookmark.where(list: @list)
  end

  def create
    @bookmark = Bookmark.new(bookmark_params)
    if @bookmark.save
      render :show, status: :created
    else
      render json: { json: @list.errors, status: :unprocessable_entity }
    end
  end

  def destroy
    if @bookmark.destroy
      render json: { status: :ok, message: 'Bookmark destroyed' }
    else
      render json: { json: @bookmark.errors, status: :unprocessable_entity }
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:comment, :movie_id, :list_id)
  end

  def set_list
    @list = List.find(params[:list_id])
  end

  def set_bookmark
    @bookmark = Bookmark.find(params[:id])
  end
end
