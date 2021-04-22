json.extract! @bookmark, :id, :comment
json.movie do
  json.id @bookmark.movie.id
  json.title @bookmark.movie.title
  json.poster_url @bookmark.movie.poster_url
end
json.list_id @bookmark.list.id
