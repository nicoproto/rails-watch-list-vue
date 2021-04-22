json.array! @bookmarks.each do |bookmark|
  json.id bookmark.id
  json.comment bookmark.comment
  json.movie_id bookmark.movie.id
  json.list_id bookmark.list.id
end