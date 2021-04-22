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

puts "Creating lists"

list_names = ["action", "adventure", "comedy", "crime and mystery", "fantasy", "historical", "horror", "romance", "satire", "science fiction", "speculative", "thriller", "western"]
comments = ["This was an amazing movie", "Great movie, didn't like the end", "I wish it was a longer movie", "I think this is a real movie", "Can this movie be any better?", "I didn't like this movie that much", "This is an insane cult movie", "I like turtles", "Does anyone read this?", "Not sure who directed this"]

list_names.each do |list_name|
  list = List.create!(name: list_name)
  puts list.name + " created!"
end

puts "Done creating lists"


(1..40).to_a.each do |page_number|
  puts "Searching on page #{page_number}"
  url = "http://tmdb.lewagon.com/movie/top_rated?language=en-US&page=#{page_number}"

  movies_serialized = URI.open(url).read
  movies = JSON.parse(movies_serialized)

  puts "Creating movies..."

  movies["results"].each do |movie|
    overview = movie["overview"].present? ? movie["overview"] : "No overview provided"
    puts overview

    if movie["original_language"] == "en"
      newMovie = Movie.find_or_create_by!(title: movie["original_title"]) do |m|
        m.overview = overview
        m.poster_url = "https://image.tmdb.org/t/p/w500" + movie["poster_path"]
        m.rating = movie["vote_average"]
      end
      puts newMovie.title + " created!"
      line
    end
  end
  line
end

puts "Done creating movies!"


puts "Creating bookmarks..."

bookmarks_to_create = (1..4).to_a.sample

List.all.each do |list|
  Movie.all.sample(bookmarks_to_create).each do |movie|
    Bookmark.create!(
      list: list,
      movie: movie,
      comment: comments.sample
    )
  end
end

puts "Done creating bookmarks"

puts "Seeding done!"
puts "Total movies #{Movie.count}"
puts "Total lists #{List.count}"
puts "Total bookmarks #{Bookmark.count}"