require 'json'
require 'open-uri'

def line
  puts "---------------------------"
end

puts "Cleaning up database..."
Bookmark.destroy_all
List.destroy_all
Movie.destroy_all
puts "Database clean!"

line

url = "http://tmdb.lewagon.com/movie/top_rated?language=en-US&page=1"

movies_serialized = URI.open(url).read
movies = JSON.parse(movies_serialized)

puts "Creating movies..."
movies["results"].each do |movie|
  if movie["original_language"] == "en"
    movie = Movie.create!(
      title: movie["original_title"],
      overview: movie["overview"],
      poster_url: "https://image.tmdb.org/t/p/w500" + movie["poster_path"],
      rating: movie["vote_average"]
    )
    puts movie.title + " created!"
    line
  end
end

puts "Done creating movies!"

list_names = ["action", "adventure", "comedy", "crime and mystery", "fantasy", "historical", "horror", "romance", "satire", "science fiction", "speculative", "thriller", "western"]
comments = ["This was an amazing movie", "Great movie, didn't like the end", "I wish it was a longer movie", "I think this is a real movie", "Can this movie be any better?", "I didn't like this movie that much", "This is an insane cult movie", "I like turtles", "Does anyone read this?", "Not sure who directed this"]


puts "Creating movies..."

list_names.each do |list_name|
  list = List.create!(name: list_name)
  puts list.name + " created!"

  Movie.all.sample(5).each do |movie|
    Bookmark.create!(
      list: list,
      movie: movie,
      comment: comments.sample
    )
  end
  line
end

puts "Done creating lists"

puts "Seeding done!"