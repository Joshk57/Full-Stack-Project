# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      first_name: 'Demo', 
      last_name: 'User',
      email: 'demo@gmail.com', 
      password: 'password'
    )
  
    # More users
    5.times do 
      User.create!({
        first_name: Faker::Internet.unique.username,
        last_name: Faker::Internet.unique.username,
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    puts "Done!"


    Listing1 = Listing.create!(
      host_id: 1, 
      name: "Cheap Place", 
      description: "Good cheap place in Brooklyn", 
      address: "7 ST", 
      city: "Brooklyn", 
      state: "New York", 
      num_bedrooms: 4, 
      num_bathrooms: 2, 
      price: 1
      )

    Listing2 = Listing.create!(
      host_id: 2, 
      name: "Expensive Place", 
      description: "Very clean place", 
      address: "12 ST", 
      city: "Queens", 
      state: "New York", 
      num_bedrooms: 2, 
      num_bathrooms: 2, 
      price: 3
      )

      Listing3 = Listing.create!(
      host_id: 3, 
      name: "Beach House", 
      description: "Nice place near beach", 
      address: "122 ST", 
      city: "Miami", 
      state: "Florida", 
      num_bedrooms: 2, 
      num_bathrooms: 2, 
      price: 10
      )

      Listing4 = Listing.create!(
      host_id: 2, 
      name: "Good house", 
      description: "Good place", 
      address: "120 ST", 
      city: "Brooklyn", 
      state: "New York", 
      num_bedrooms: 2, 
      num_bathrooms: 1, 
      price: 3
      )

      Listing5 = Listing.create!(
      host_id: 4, 
      name: "Luxurious Villa", 
      description: "Enjoy your vacation here", 
      address: "1 ST", 
      city: "Los Angeles", 
      state: "California",
      num_bedrooms: 4, 
      num_bathrooms: 3, 
      price: 30
      )
    
  end