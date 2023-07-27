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
    wifi = Amenity.create(name: "wifi")
    kitchen = Amenity.create(name: "kitchen")
    tv = Amenity.create(name: "tv")
    pets_allowed = Amenity.create(name: "pets_allowed")
    free_parking = Amenity.create(name: "free_parking")
    air_conditioning = Amenity.create(name: "air_conditioning")
    pool = Amenity.create(name: "pool")

   
    listing1 = Listing.create!(
      host_id: 1, 
      name: "Cheap Place", 
      description: "Good cheap place in Brooklyn. Good cheap place in Brooklyn.
      Good cheap place in Brooklyn.Good cheap place in Brooklyn.Good cheap place in Brooklyn.
      Good cheap place in Brooklyn. Good cheap place in Brooklyn.Good cheap place in Brooklyn.Good cheap place in Brooklyn.
      Good cheap place in Brooklyn.Good cheap place in Brooklyn. Good cheap place in Brooklyn.", 
      address: "7 ST", 
      city: "Brooklyn", 
      state: "New York", 
      max_guests: 3,
      num_bedrooms: 4, 
      num_beds: 4,
      num_bathrooms: 2, 
      wifi: true, 
      kitchen: true, 
      tv: true, 
      pets_allowed: false, 
      free_parking: true, 
      air_conditioning: true, 
      pool: false,
      price: 1,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/05928ce6-01ff-4829-bcde-9670e2a03c22.jpeg?im_w=720"
      )
      
     

    listing2 = Listing.create!(
      host_id: 2, 
      name: "Expensive Place", 
      description: "Very clean place.Very clean place.Very clean place.Very clean place.Very clean place.
      Very clean place.Very clean place.Very clean place.Very clean place.Very clean place.
      Very clean place.Very clean place.Very clean place.Very clean place.Very clean place.
      Very clean place.Very clean place.Very clean place.Very clean place.Very clean place.", 
      address: "12 ST", 
      city: "Queens", 
      state: "New York", 
      max_guests: 4,
      num_bedrooms: 2,
      num_beds: 3, 
      num_bathrooms: 2, 
      wifi: true, 
      kitchen: true, 
      tv: true, 
      pets_allowed: true, 
      free_parking: true, 
      air_conditioning: true, 
      pool: false,
      price: 3,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-878958470158600275/original/2d7beb5b-5a37-46c9-90cb-c5b004a62a6e.jpeg?im_w=720"
      )

      listing3 = Listing.create!(
      host_id: 3, 
      name: "Beach House", 
      description: "Nice place near beach.Nice place near beachNice place near beachNice place near beachNice place near beachNice place near beach
      Nice place near beach.Nice place near beachNice place near beachNice place near beachNice place near beach", 
      address: "122 ST", 
      city: "Miami", 
      state: "Florida", 
      max_guests: 5,
      num_bedrooms: 2, 
      num_beds: 4,
      num_bathrooms: 2, 
      wifi: true, 
      kitchen: true, 
      tv: true, 
      pets_allowed: false, 
      free_parking: false, 
      air_conditioning: true, 
      pool: true,
      price: 10,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/a0965aa5-3907-466e-b727-0900e2a7e8c7.jpeg?im_w=720"
      )

      listing4 = Listing.create!(
      host_id: 2, 
      name: "Good house", 
      description: "Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.
      Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.", 
      address: "120 ST", 
      city: "Brooklyn", 
      state: "New York", 
      max_guests: 2,
      num_bedrooms: 2, 
      num_beds: 2,
      num_bathrooms: 1, 
      wifi: true, 
      kitchen: true, 
      tv: false, 
      pets_allowed: false, 
      free_parking: true, 
      air_conditioning: true, 
      pool: false,
      price: 3,
      image: "https://a0.muscache.com/im/pictures/d02b6794-2024-491f-a2e3-d8b56e3ef5a4.jpg?im_w=720"
      )

      listing5 = Listing.create!(
      host_id: 4, 
      name: "Luxurious Villa", 
      description: "Enjoy your vacation here. Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.
      Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.
      Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.", 
      address: "1 ST", 
      city: "Los Angeles", 
      state: "California",
      max_guests: 3,
      num_bedrooms: 4, 
      num_beds: 4,
      num_bathrooms: 3, 
      wifi: true, 
      kitchen: true, 
      tv: false, 
      pets_allowed: false, 
      free_parking: true, 
      air_conditioning: true, 
      pool: true,
      price: 30,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-671622319399090627/original/37e0ed75-118f-402e-95c7-2c62512acdd5.jpeg?im_w=720"
      )

      listing6 = Listing.create!(
        host_id: 1, 
        name: "Cheap Place", 
        description: "Good cheap place in Brooklyn. Good cheap place in Brooklyn.
        Good cheap place in Brooklyn.Good cheap place in Brooklyn.Good cheap place in Brooklyn.
        Good cheap place in Brooklyn. Good cheap place in Brooklyn.Good cheap place in Brooklyn.Good cheap place in Brooklyn.
        Good cheap place in Brooklyn.Good cheap place in Brooklyn. Good cheap place in Brooklyn.", 
        address: "7 ave", 
        city: "Bronx", 
        state: "New York", 
        max_guests: 3,
        num_bedrooms: 4, 
        num_beds: 4,
        num_bathrooms: 2, 
        wifi: true, 
        kitchen: true, 
        tv: false, 
        pets_allowed: false, 
        free_parking: true, 
        air_conditioning: true, 
        pool: false,
        price: 1,
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-810871681374370809/original/661a54cb-cb27-4f76-994a-3e731925b736.jpeg?im_w=720"
        )
  
      listing7 = Listing.create!(
        host_id: 2, 
        name: "Expensive Place", 
        description: "Very clean place.Very clean place.Very clean place.Very clean place.Very clean place.
        Very clean place.Very clean place.Very clean place.Very clean place.Very clean place.
        Very clean place.Very clean place.Very clean place.Very clean place.Very clean place.
        Very clean place.Very clean place.Very clean place.Very clean place.Very clean place.", 
        address: "12 AVE", 
        city: "Queens", 
        state: "New York", 
        max_guests: 4,
        num_bedrooms: 2,
        num_beds: 3, 
        num_bathrooms: 2,
        wifi: true, 
        kitchen: true, 
        tv: false, 
        pets_allowed: false, 
        free_parking: true, 
        air_conditioning: true, 
        pool: false,
        price: 3,
        image: "https://a0.muscache.com/im/pictures/71fe4b18-f879-48e4-b2c3-352ebd962259.jpg?im_w=720"
        )
  
        listing8 = Listing.create!(
        host_id: 3, 
        name: "Beach House", 
        description: "Nice place near beach.Nice place near beachNice place near beachNice place near beachNice place near beachNice place near beach
        Nice place near beach.Nice place near beachNice place near beachNice place near beachNice place near beach", 
        address: "1212 ST", 
        city: "Orlando", 
        state: "Florida", 
        max_guests: 5,
        num_bedrooms: 2, 
        num_beds: 4,
        num_bathrooms: 2, 
        wifi: true, 
        kitchen: true, 
        tv: false, 
        pets_allowed: false, 
        free_parking: true, 
        air_conditioning: true, 
        pool: false,
        price: 10,
        image: "https://a0.muscache.com/im/pictures/9faf7623-c2cb-4e11-be5d-aeb3f4f53935.jpg?im_w=720"
        )
  
        listing9 = Listing.create!(
        host_id: 2, 
        name: "Good house", 
        description: "Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.
        Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.Good place.", 
        address: "1220 ST", 
        city: "Staten Island", 
        state: "New York", 
        max_guests: 2,
        num_bedrooms: 2, 
        num_beds: 2,
        num_bathrooms: 1, 
        wifi: true, 
        kitchen: true, 
        tv: false, 
        pets_allowed: false, 
        free_parking: true, 
        air_conditioning: true, 
        pool: false,
        price: 3,
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-874099112129683789/original/6a59e77c-43bf-4b68-9730-cfbc7a168179.jpeg?im_w=720"
        )
  
        listing10 = Listing.create!(
        host_id: 4, 
        name: "Luxurious Villa", 
        description: "Enjoy your vacation here. Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.
        Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.
        Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.Enjoy your vacation here.", 
        address: "12222 ST", 
        city: "Los Angeles", 
        state: "California",
        max_guests: 3,
        num_bedrooms: 4, 
        num_beds: 4,
        num_bathrooms: 3, 
        wifi: true, 
        kitchen: true, 
        tv: false, 
        pets_allowed: false, 
        free_parking: true, 
        air_conditioning: true, 
        pool: false,
        price: 30,
        image: "https://a0.muscache.com/im/pictures/aabc73e7-d2ec-4a3e-8cd2-5261fad11fc0.jpg?im_w=720"
        )
        la1_1 = ListingAmenity.create(listing_id: listing1.id, amenity_id: wifi.id)
        la1_2 = ListingAmenity.create(listing_id: listing1.id, amenity_id: kitchen.id)
        la1_3 = ListingAmenity.create(listing_id: listing1.id, amenity_id: pool.id)
        la1_4 = ListingAmenity.create(listing_id: listing1.id, amenity_id: air_conditioning.id)
        la1_5 = ListingAmenity.create(listing_id: listing1.id, amenity_id: tv.id)
        la1_6 = ListingAmenity.create(listing_id: listing1.id, amenity_id: free_parking.id)
        la1_7 = ListingAmenity.create(listing_id: listing1.id, amenity_id: pets_allowed.id)
        la1_8 = ListingAmenity.create(listing_id: listing1.id, amenity_id: pool.id)
        la2 = ListingAmenity.create(listing_id: listing2.id, amenity_id: pool.id)
        la3 = ListingAmenity.create(listing_id: listing3.id, amenity_id: wifi.id)
        la4 = ListingAmenity.create(listing_id: listing4.id, amenity_id: tv.id)

  end