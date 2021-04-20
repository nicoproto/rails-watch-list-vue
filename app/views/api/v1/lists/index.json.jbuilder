json.array! @lists.each do |movie|
  json.id list.id
  json.title list.name
end