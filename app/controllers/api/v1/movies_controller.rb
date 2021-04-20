class Api::V1::MoviesController < ApplicationController
  before_action :set_movie, only: [ :show, :update, :destroy ]

  def index
    @movies = Movie.all
  end

  def show; end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render :show, status: :created
    else
      render_error
    end
  end

  def update
    if @movie.update(movie_params)
      render :show, status: :accepted
    else
      render json: { json: @movie.errors, status: :unprocessable_entity }
    end
  end

  def destroy
    if @movie.destroy
      render json: { status: :ok, message: 'Movie destroyed' }
    else
      render json: { json: @movie.errors, status: :unprocessable_entity }
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :overview, :poster_url, :rating)
  end

  def set_movie
    @movie = Movie.find(params[:id])
  end
end
