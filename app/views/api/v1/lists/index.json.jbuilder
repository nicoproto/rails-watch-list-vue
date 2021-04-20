json.array! @lists.each do |list|
  json.id list.id
  json.name list.name
end