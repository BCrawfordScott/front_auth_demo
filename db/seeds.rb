# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Generate Users
puts 'Destroying Users...'
User.destroy_all

User.create!(username: 'Bman86', email: 'bman@appacademy.io', password: 'starwars')

5.times do
    name = Faker::TvShows::ParksAndRec.character
    User.create!(
        username: name,
        email: Faker::Internet.email(name: name.gsub(/\s+/, "")),
        password: Faker::Internet.password
    )
end