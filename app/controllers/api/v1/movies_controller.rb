class Api::V1::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    limit = params[:_limit]

    if limit.present?
      limit = limit.to_i
      @movies = @movies.last(limit)
    end

    render json: @movies.reverse
  end
end
