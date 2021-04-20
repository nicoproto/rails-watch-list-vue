json.array! @lists.each do |list|
  json.id list.id
  json.title list.name
end