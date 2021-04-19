class Api::V1::MoviesController < ApplicationController
  before_action :set_movie, only: [ :show ]

  def index
    # TODO: Update this to actually render with jbuilder
    @movies = Movie.all
    limit = params[:_limit]

    if limit.present?
      limit = limit.to_i
      @movies = @movies.last(limit)
    end

    render json: @movies.reverse
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

  private

  def movie_params
    params.require(:movie).permit(:title, :overview, :poster_url, :rating)
  end

  def set_movie
    @movie = Movie.find(params[:id])
  end
end
