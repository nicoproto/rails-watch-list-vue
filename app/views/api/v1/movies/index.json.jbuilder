json.array! @movies.each do |movie|
  json.id movie.id
  json.title movie.title
  json.overview movie.overview
  json.poster_url movie.poster_url
  json.rating movie.rating
end