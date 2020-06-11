# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

puts "Cleaning database..."
puts "Cleaning users..."
User.destroy_all
puts "Cleaning members..."
Member.destroy_all
puts "Cleaning notegroups..."
Notegroup.destroy_all
puts "Cleaning notes..."
Note.destroy_all

puts "Creating Users...naeul"
naeul = User.new(email: "naheull@gmail.com", password: "azerty", name: "mathieu")
naeul.photo.attach(io:File.open('db/fixtures/users/mathieu.png'), filename: 'mathieu.png', content_type: 'image/png')
naeul.save!
puts "Creating Users...ophe"
ophe = User.new(email: "ophelie@gmail.com", password: "azerty",name: "ophelie")
ophe.photo.attach(io:File.open('db/fixtures/users/ophelie.jpg'), filename: 'ophelie.jpg', content_type: 'image/jpg')
ophe.save!


puts "Creating Users...naeul"
naeul1 = User.new(email: "naheull1@gmail.com", password: "azerty", name: "mathieu1")
naeul1.photo.attach(io:File.open('db/fixtures/users/mathieu.png'), filename: 'mathieu.png', content_type: 'image/png')
naeul1.save!

puts "Creating Users...naeul"
naeul2 = User.new(email: "naheull2@gmail.com", password: "azerty", name: "mathieu2")
naeul2.photo.attach(io:File.open('db/fixtures/users/mathieu.png'), filename: 'mathieu.png', content_type: 'image/png')
naeul2.save!

puts "Creating Users...naeul"
naeul3 = User.new(email: "naheull3@gmail.com", password: "azerty", name: "mathieu3")
naeul3.photo.attach(io:File.open('db/fixtures/users/mathieu.png'), filename: 'mathieu.png', content_type: 'image/png')
naeul3.save!

puts "Creating Users...naeul"
naeul4 = User.new(email: "naheull4@gmail.com", password: "azerty", name: "mathieu4")
naeul4.photo.attach(io:File.open('db/fixtures/users/mathieu.png'), filename: 'mathieu.png', content_type: 'image/png')
naeul4.save!

puts "Creating Users...naeul"
naeul5 = User.new(email: "naheull5@gmail.com", password: "azerty", name: "mathieu5")
naeul5.photo.attach(io:File.open('db/fixtures/users/mathieu.png'), filename: 'mathieu.png', content_type: 'image/png')
naeul5.save!
