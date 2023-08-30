require "open-uri"
listings=[]
ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Listing.destroy_all
  Amenity.destroy_all
  Reservation.destroy_all
  ListingAmenity.destroy_all
  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('listings')
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
      name: "Frontdesk | Unique Lofted Studio Apt in Old City", 
      description: "All Frontdesk stays are contactless self-check-in and include Scout, our exclusive digital companion to guide you through everything you'll need before and during your time with us. 
      We're also available 24/7 via text or phone and have a local team should you need anything.", 
      city: "Philadelphia", 
      state: "Pennsylvania", 
      country: "United States",
      max_guests: 3,
      num_bedrooms: 1, 
      num_beds: 1,
      num_bathrooms: 1, 
      latitude: 39.9560293,
      longitude: -75.1436489,
      price: 60
      )
      #https://www.airbnb.com/rooms/913769955087907010?adults=1&category_tag=Tag%3A8535&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-08-13&check_out=2023-08-18&source_impression_id=p3_1690903117_dGopmirlR121GHKZ&previous_page_section_name=1000&federated_search_id=3f24848b-13c5-45c3-abb2-8948debf917a
     
      listings << listing1

    listing2 = Listing.create!(
      host_id: 2, 
      name: "Luxurious and Modern Studio with Gym", 
      description: "Enjoy luxury living in one of the city's most desirable locations in the newly constructed and prestigious building. With close proximity to public transit, Center City, Northern Liberties, and Fishtowns' great restaurants. Building amenities include fitness center and two elevators for ease of access! Beautiful grand windows, modern kitchen w/ stainless steel appliances, granite counter tops & top quality wood cabinetry, central air/heat, and hardwood floors.", 
      city: "Philadelphia", 
      state: "Pennsylvania", 
      country: "United States",
      max_guests: 2,
      num_bedrooms: 1,
      num_beds: 1, 
      num_bathrooms: 1, 
      latitude: 39.9739226,
      longitude: -75.1438245,
      price: 40
      )
      #https://www.airbnb.com/rooms/846928799399158467?adults=1&category_tag=Tag%3A8535&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-08-06&check_out=2023-08-11&source_impression_id=p3_1690903117_1GQx0Jzks1R4frwx&previous_page_section_name=1000&federated_search_id=3f24848b-13c5-45c3-abb2-8948debf917a
      listings << listing2
    listing3 = Listing.create!(
      host_id: 3, 
      name: "Hawaiian inn Ocean Front Studio Apartment", 
      description: "Are you ready to relax at the beach and sleep staring at the ocean? We have a studio apartment room on the 3rd floor with 2 queen beds, FREE parking for one car, unstable Wi-Fi after hurricane, private access to the beach, microwave, refrigerator, cooktop, beach chairs, coffee machine, smart TV 55''’, and a balcony with ocean view. Pool is CLOSED. The building is currently under CONSTRUCTION due to the hurricanes last year. We work with self-check-in, which is very easy and comfy for our guests.", 
      city: "Daytona Beach Shores", 
      state: "Florida",
      country: "United States",
      max_guests: 4,
      num_bedrooms: 1, 
      num_beds: 2,
      num_bathrooms: 1, 
      latitude: 29.1945108,
      longitude: -80.9973123,
      price: 64
      )
      #https://www.airbnb.com/rooms/48802278?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-08-06&check_out=2023-08-12&source_impression_id=p3_1690920578_8l%2BpZ0aLgIOspzG8&previous_page_section_name=1000&federated_search_id=77ea0292-f43c-4d5c-a4ae-82c5049b5855
      listings << listing3
    listing4 = Listing.create!(
      host_id: 2, 
      name: "New Modern Lake and Mountain View Cabin.", 
      description: "Brand new bright lake and mountain view 1 bedroom cabin with stunning view which functions as a home. The view is truly incredible as other guests can attest to. Recently, described by a guest as the best Air B and B they have stayed at. The cabins are modern and stylish. They are tucked up on the mountain side: a scenic 10 minute drive from Nelson, 20 mins to White Water ski resort rd. . Enjoy golf, fishing all the beauty, adventure and amenities the Kootenay’s have to offer.", 
      city: "Nelson", 
      state: "British Colombia", 
      country: "Canada",
      max_guests: 2,
      num_bedrooms: 1, 
      num_beds: 1,
      num_bathrooms: 1, 
      latitude: 49.4879426,
      longitude: -117.4524015,
      price: 64,
      )
      #https://www.airbnb.com/rooms/40265001?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-09-10&check_out=2023-09-15&source_impression_id=p3_1690920921_o34PovyGZUqBlnBF&previous_page_section_name=1000&federated_search_id=e5ade49b-073f-4704-a5b6-22bb228b5312
      listings << listing4
    listing5 = Listing.create!(
      host_id: 4, 
      name: "Hot Springs Room!", 
      description: "Situated in in the desert 3-4 miles north of town you can definitely relax here! The star-filled sky and waves crashing on shore will comfort you to sleep each night; each Casita has large windows for fantastic views of the ocean,several you can watch the sunrise without getting out of bed! Completely off-grid and eco-friendly we re-use and recycle everything. No crowds and no cars means No noise! the beautiful new Casitas and Glamping tents are just a 3 minute walk to the beach & Hot Springs!",  
      city: "La Ventana", 
      state: "Baja California Sur",
      country: "Mexico",
      max_guests: 2,
      num_bedrooms: 1, 
      num_beds: 1,
      num_bathrooms: 2, 
      latitude: 24.0522609,
      longitude: -109.9934928,
      price: 60,
      )
      #https://www.airbnb.com/rooms/30070795?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-11-01&check_out=2023-11-06&source_impression_id=p3_1690922366_HDQhWDVnF5PgW649&previous_page_section_name=1000&federated_search_id=38c8f09a-bdc4-4c22-bdaf-2132a10257eb
      listings << listing5

    listing6 = Listing.create!(
        host_id: 1, 
        name: "Breezy Studio In Seogwipo #2.7", 
        description: "Breezy Studio is located at the beautiful south coast of Jeju Island overlooking 'Seogeondo' Island and 'Beomseom' Island.

        It's good for traveling south of Jeju, cause It's close to downtown of Seogwipo
        5 minutes to New Town.
        10-15 minutes to the old town.
        And lots of places to visit like 'Cheonjiyeon Falls' and 'Hwangji Beach'.
        
        All the rooms of breezy studio are brick-lined.
        It might be little unfamiliar, but I wanted to give new inspiration", 
        city: "Seogwipo-si", 
        state: "Jeju Province", 
        country: "South Korea",
        max_guests: 2,
        num_bedrooms: 1, 
        num_beds: 1,
        num_bathrooms: 1, 
        latitude: 33.2347141,
        longitude: 126.4903697,
        price: 67
        )
        #https://www.airbnb.com/rooms/644745974564177265?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-09-03&check_out=2023-09-09&source_impression_id=p3_1690922955_Xkbpr2rT%2FUC3ZCZ9&previous_page_section_name=1000&federated_search_id=87f2dd84-d5f9-4058-a96f-7dfec07890bd
        listings << listing6

      listing7 = Listing.create!(
        host_id: 2, 
        name: "Apartment in Jung-gu", 
        description: "☆Convenient transportation
        Located in the most central location of Dongseong-ro
        5-minute walk from Dongseong-ro Subway Station and 5-minute walk
        from Dongseong-ro Bus Station
        Taxi station in front of Novotel always standby Daegu Station is
        a 10-minute walk away
        
        ☆Facilities
        Fully equipped air purifier, hand sanitizer provided
        Located in the heart of Dongseong-ro,
        security guard is always available
        Smart Door Lock Self-Check-In/", 
        city: "Jung-gu", 
        state: "Daegu", 
        country: "South Korea",
        max_guests: 2,
        num_bedrooms: 1,
        num_beds: 1, 
        num_bathrooms: 1,
        latitude: 35.8708732,
        longitude: 128.5974808,
        price: 52
        )
        #https://www.airbnb.com/rooms/720056184889526588?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-09-13&check_out=2023-09-19&source_impression_id=p3_1690923509_x2G%2BAGcaID30ztq%2B&previous_page_section_name=1000&federated_search_id=de40eda0-81f2-41b0-bfeb-8d33f32c3542
        listings << listing7

      listing8 = Listing.create!(
        host_id: 3, 
        name: "Bright & cozy apartment in Alfama", 
        description: "When you arrive you will find a friendly and cozy apartment, set in a completely refurbished building, where you will feel the atmosphere and the environment to be accommodated in one of the most typical neighborhoods of Lisbon.

        The apartment is equipped with all the facilities for you to relax after a day discovering the city and to spend a few pleasant days, equipped Kitchenette, bright living room with Television and Internet / WIFI totally free, bedroom very intimate and cozy with double bed and wardrobe.
        Towels and linen are included so you can manage your time in discover Lisbon.", 
        city: "Alfama", 
        state: "Lisbon", 
        country: "Portugal",
        max_guests: 2,
        num_bedrooms: 1, 
        num_beds: 1,
        num_bathrooms: 1, 
        latitude: 38.7128312,
        longitude: -9.1293073,
        price: 55
        )
        #https://www.airbnb.com/rooms/487394?adults=1&category_tag=Tag%3A8535&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-01-04&check_out=2024-01-10&source_impression_id=p3_1690924193_ZSj8fJGNldlnWQc8&previous_page_section_name=1000&federated_search_id=ec039359-f8d7-46f2-9f68-b91485facb9e
        listings << listing8

      listing9 = Listing.create!(
        host_id: 2, 
        name: "Central 1bedroom apt by the sea", 
        description: "Central lookated apartment in the city of Rhodes , just across the beach.
        5mins walk from the most central part of the city
        1min walk to bus stop and taxi
        Lots of restaurants/tavernas , bars , pubs in the area
        10min walk from the old town.
        20km from the airport easily accessible with bus or taxi. Taxi drive is around 20minutes",  
        city: "Rhodes", 
        state: "Dodecanese", 
        country: "Greece",
        max_guests: 2,
        num_bedrooms: 2, 
        num_beds: 2,
        num_bathrooms: 1, 
        latitude: 36.4514215,
        longitude: 28.2163861,
        price: 50
        )
        #https://www.airbnb.com/rooms/11449473?adults=1&category_tag=Tag%3A7769&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-11-15&check_out=2023-11-20&source_impression_id=p3_1690925076_xQWFVaAnVjzcJCLC&previous_page_section_name=1000&federated_search_id=b2cd7451-0869-4ba6-a7b1-09a12bb462c5
        listings << listing9

      listing10 = Listing.create!(
        host_id: 4, 
        name: "Exceptional City Flat with a Private Balcony", 
        description: "Decorated in shades of grey, black, and white, this chic home provides a stylish and inviting ambiance. The decor is elevated by the natural wood textures with splashes of color and original contemporary artworks accenting every space.
        Please note that,for your safety, additional care is being taken by an enhanced cleaning and sanitizing routine during this time.
        
        Everything you need in a home away from home. The space is uncluttered and practical yet aesthetically very pleasing. It’s close proximity to the Cape Town CBD, Table Mountain and Atlantic Seaboard beaches makes it a good choice.
        
        The entire flat is for your use. There is a balcony with comfortable seating.
        
        I don’t live on the premises, but I am a phone call away should I be needed. I live a 10 min drive away.
        
        Woodstock is one of the oldest suburbs in Cape Town and it features an incredible mix of diversity and cultures. This has led to a fusion of food, fashion, and design across the area's amazing restaurants, art galleries, and boutiques.
        
        Most guests use Uber to get around. Some rent a car.
        There are also the public minibus taxis for an authentic experience.
        Depending on where you are going you could also walk ...the Woodstock Exchange is one example...", 
        city: "Cape Town", 
        state: "WC",
        country: "South Africa",
        max_guests: 2,
        num_bedrooms: 1, 
        num_beds: 1,
        num_bathrooms: 1, 
        latitude: -33.9286475,
        longitude: 18.4447062,
        price: 36
        )
        #https://www.airbnb.com/rooms/plus/30879145?adults=1&category_tag=Tag%3A8535&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-08-06&check_out=2023-08-11&source_impression_id=p3_1690925608_3aZY114Laeg9K2Nq&previous_page_section_name=1000&federated_search_id=9cc77c38-04c2-48ef-9c27-41c9ba07f8e9
        listings << listing10

        
      listing11 = Listing.create!(
        host_id: 5, 
        name: "Loft da Árvore, facing the sea with access to the beach", 
        description: "TREE LOFT (LOFT 13)
        The tree loft has one bedroom with double bed, in the living room it has two single beds, full kitchen, balcony facing the sea. We do not provide bed linen or towels, there will be a fee for putting linen and towels.", 
        city: "Piúva", 
        state: "São Paulo", 
        country: "Brazil",
        max_guests: 4,
        num_bedrooms: 1, 
        num_beds: 2,
        num_bathrooms: 1, 
        latitude: -23.8212873,
        longitude: -45.3811403,
        price: 30
        )
        #https://www.airbnb.com/rooms/49613871?adults=1&category_tag=Tag%3A789&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-08-02&check_out=2023-08-07&source_impression_id=p3_1690980963_7NfELf6ffpjlU41u&previous_page_section_name=1000&federated_search_id=3d329fcd-1318-4fe5-b2d2-c86c31641f28
        listings << listing11

      listing12 = Listing.create!(
          host_id: 3, 
          name: "Big Palermo", 
          description: "Welcome to our charming and cozy apartment in the heart of Palermo, one of the most vibrant neighborhoods in Buenos Aires. Here you will find the perfect location to enjoy the city's top bars and restaurants, just a few steps away.", 
          city: "Palermo", 
          state: "Buenos Aires", 
          country: "Argentina",
          max_guests: 4,
          num_bedrooms: 1, 
          num_beds: 2,
          num_bathrooms: 1, 
          latitude: -34.5831658,
          longitude: -58.443547,
          price: 34
          )
          #https://www.airbnb.com/rooms/918171400746510733?adults=1&category_tag=Tag%3A8535&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-08-14&check_out=2023-08-21&source_impression_id=p3_1690981705_p%2FAA0umhlbt13zfj&previous_page_section_name=1000&federated_search_id=f86c3f3f-d690-4822-88df-1e49dd600d54
      
          listings << listing12

        listing13 = Listing.create!(
            host_id: 5, 
            name: 'Kumano Nakahechi "MINE-no-Yado" Mine own house', 
            description: '"MINE-no-Yado" Mine own house is a small Japanese style cottage in Mine village where includes Takijiri-oji, the entrance to the sacred mountains of Kumano.
            The house is at an elevation of 300m.
            You can enjoy a panoramic view of Kumano mountains, a wonderful starry night and even sea of clouds.', 
            city: "田辺市", 
            state: "和歌山県", 
            country: "Japan",
            max_guests: 4,
            num_bedrooms: 1, 
            num_beds: 4,
            num_bathrooms: 1, 
            latitude: 33.7772051,
            longitude: 135.498132,
            price: 52
            )
            #https://www.airbnb.com/rooms/26280349?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-09-28&check_out=2023-10-03&source_impression_id=p3_1690982642_MUzs0EW%2FG658jjFr&previous_page_section_name=1000&federated_search_id=37bd0921-56b4-4b0e-9e51-2f3f87de6702
          listings << listing13

            listing14 = Listing.create!(
              host_id: 1, 
              name: 'Gateway Suites: Explore the Rocky Mountains', 
              description: "Have a wonderful time in this beautiful 1 bedroom suite in Harvie Heights right next to Banff! Spend your days visiting local artisans, taking in the sights from the top of Ha-ling Peak, or skiing in knee-deep powder at one of 4 local resorts! This suite is perfect to explore the Rocky Mountains and have a great rest after a fun day of adventure!", 
              city: "Harvie Heights", 
              state: "Alberta", 
              country: "Canada",
              max_guests: 4,
              num_bedrooms: 1, 
              num_beds: 2,
              num_bathrooms: 1, 
              latitude: 51.1241155,
              longitude: -115.3896705,
              price: 42
              )
              #https://www.airbnb.com/rooms/51849640?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-10-16&check_out=2023-10-21&source_impression_id=p3_1690983061_Vou%2Bv9KyTvB9%2BJFf&previous_page_section_name=1000&federated_search_id=ecd40cfb-e02a-40ec-8a7d-2aa27e5a6fc4
            listings << listing14
    
              listing15 = Listing.create!(
                host_id: 2, 
                name: 'Leafy Greens Chiangmai : Mushroom M2', 
                description: "Leafy Greens was built as a retreat center for our family and friends. It is where people would visit to refreshing their souls and mind. We work so hard to make this place to be one of the place that we can live in harmony with nature. That is why the cob houses are the right choice for us. Not only the buildings are eco-friendly but also the garden is organic. Visit here you will be able to take a deep breath and enjoy the fresh air with organic environment. It is a perfect place to getaway!!", 
                city: "Mueang Chiang Mai District", 
                state: "Chiang Mai", 
                country: "Thailand",
                max_guests: 2,
                num_bedrooms: 1, 
                num_beds: 2,
                num_bathrooms: 1, 
                latitude: 18.8346404,
                longitude: 98.9734705,
                price: 21
                )
                #https://www.airbnb.com/rooms/22235004?adults=1&category_tag=Tag%3A8225&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-08-03&check_out=2023-08-08&source_impression_id=p3_1690984175_T6JXbnqJfINOpJG%2B&previous_page_section_name=1000&federated_search_id=696dfa4a-82d3-4111-8910-22c8aa794371
              listings << listing15
        la1_1 = ListingAmenity.create(listing_id: listing1.id, amenity_id: wifi.id)
        la1_2 = ListingAmenity.create(listing_id: listing1.id, amenity_id: kitchen.id)
        la1_4 = ListingAmenity.create(listing_id: listing1.id, amenity_id: air_conditioning.id)
        la1_5 = ListingAmenity.create(listing_id: listing1.id, amenity_id: tv.id)
        la1_6 = ListingAmenity.create(listing_id: listing1.id, amenity_id: free_parking.id)

        la2_1 = ListingAmenity.create(listing_id: listing2.id, amenity_id: wifi.id)
        la2_2 = ListingAmenity.create(listing_id: listing2.id, amenity_id: kitchen.id)
        la2_3 = ListingAmenity.create(listing_id: listing2.id, amenity_id: air_conditioning.id)
        la2_4 = ListingAmenity.create(listing_id: listing2.id, amenity_id: tv.id)
        la2_5 = ListingAmenity.create(listing_id: listing2.id, amenity_id: free_parking.id)
        la2_6 = ListingAmenity.create(listing_id: listing2.id, amenity_id: pets_allowed.id)

        la3_1 = ListingAmenity.create(listing_id: listing3.id, amenity_id: wifi.id)
        la3_2 = ListingAmenity.create(listing_id: listing3.id, amenity_id: kitchen.id)
        la3_3 = ListingAmenity.create(listing_id: listing3.id, amenity_id: air_conditioning.id)
        la3_4 = ListingAmenity.create(listing_id: listing3.id, amenity_id: tv.id)
        la3_5 = ListingAmenity.create(listing_id: listing3.id, amenity_id: free_parking.id)

        la4_1 = ListingAmenity.create(listing_id: listing4.id, amenity_id: wifi.id)
        la4_2 = ListingAmenity.create(listing_id: listing4.id, amenity_id: kitchen.id)
        la4_3 = ListingAmenity.create(listing_id: listing4.id, amenity_id: air_conditioning.id)
        la4_4 = ListingAmenity.create(listing_id: listing4.id, amenity_id: tv.id)
        la4_5 = ListingAmenity.create(listing_id: listing4.id, amenity_id: free_parking.id)

        la5_1 = ListingAmenity.create(listing_id: listing5.id, amenity_id: wifi.id)
        la5_2 = ListingAmenity.create(listing_id: listing5.id, amenity_id: kitchen.id)
        la5_3 = ListingAmenity.create(listing_id: listing5.id, amenity_id: air_conditioning.id)
        la5_4 = ListingAmenity.create(listing_id: listing5.id, amenity_id: tv.id)
        la5_5 = ListingAmenity.create(listing_id: listing5.id, amenity_id: free_parking.id)
        la5_6 = ListingAmenity.create(listing_id: listing5.id, amenity_id: pets_allowed.id)
        la5_7 = ListingAmenity.create(listing_id: listing5.id, amenity_id: pool.id)

        la6_1 = ListingAmenity.create(listing_id: listing6.id, amenity_id: wifi.id)
        la6_2 = ListingAmenity.create(listing_id: listing6.id, amenity_id: kitchen.id)
        la6_3 = ListingAmenity.create(listing_id: listing6.id, amenity_id: air_conditioning.id)
        la6_4 = ListingAmenity.create(listing_id: listing6.id, amenity_id: free_parking.id)

        la7_1 = ListingAmenity.create(listing_id: listing7.id, amenity_id: wifi.id)
        la7_2 = ListingAmenity.create(listing_id: listing7.id, amenity_id: kitchen.id)
        la7_3 = ListingAmenity.create(listing_id: listing7.id, amenity_id: tv.id)
        la7_4 = ListingAmenity.create(listing_id: listing7.id, amenity_id: air_conditioning.id)
        la7_5 = ListingAmenity.create(listing_id: listing7.id, amenity_id: free_parking.id)

        la8_1 = ListingAmenity.create(listing_id: listing8.id, amenity_id: wifi.id)
        la8_2 = ListingAmenity.create(listing_id: listing8.id, amenity_id: kitchen.id)
        la8_3 = ListingAmenity.create(listing_id: listing8.id, amenity_id: tv.id)

        la9_1 = ListingAmenity.create(listing_id: listing9.id, amenity_id: wifi.id)
        la9_2 = ListingAmenity.create(listing_id: listing9.id, amenity_id: kitchen.id)
        la9_3 = ListingAmenity.create(listing_id: listing9.id, amenity_id: air_conditioning.id)
        la9_4 = ListingAmenity.create(listing_id: listing9.id, amenity_id: tv.id)

        la10_1 = ListingAmenity.create(listing_id: listing10.id, amenity_id: wifi.id)
        la10_2 = ListingAmenity.create(listing_id: listing10.id, amenity_id: kitchen.id)
        la10_3 = ListingAmenity.create(listing_id: listing10.id, amenity_id: tv.id)
        la10_4 = ListingAmenity.create(listing_id: listing10.id, amenity_id: free_parking.id)
     
        la11_1 = ListingAmenity.create(listing_id: listing11.id, amenity_id: wifi.id)
        la11_2 = ListingAmenity.create(listing_id: listing11.id, amenity_id: kitchen.id)
        la11_3 = ListingAmenity.create(listing_id: listing11.id, amenity_id: air_conditioning.id)
        la11_4 = ListingAmenity.create(listing_id: listing11.id, amenity_id: tv.id)
        la11_5 = ListingAmenity.create(listing_id: listing11.id, amenity_id: free_parking.id)


        la12_1 = ListingAmenity.create(listing_id: listing12.id, amenity_id: wifi.id)
        la12_2 = ListingAmenity.create(listing_id: listing12.id, amenity_id: kitchen.id)
        la12_3 = ListingAmenity.create(listing_id: listing12.id, amenity_id: air_conditioning.id)
        la12_4 = ListingAmenity.create(listing_id: listing12.id, amenity_id: tv.id)
        la12_5 = ListingAmenity.create(listing_id: listing12.id, amenity_id: free_parking.id)

        la13_1 = ListingAmenity.create(listing_id: listing13.id, amenity_id: wifi.id)
        la13_2 = ListingAmenity.create(listing_id: listing13.id, amenity_id: kitchen.id)
        la13_3 = ListingAmenity.create(listing_id: listing13.id, amenity_id: air_conditioning.id)
        la13_4 = ListingAmenity.create(listing_id: listing13.id, amenity_id: free_parking.id)

        la14_1 = ListingAmenity.create(listing_id: listing14.id, amenity_id: wifi.id)
        la14_2 = ListingAmenity.create(listing_id: listing14.id, amenity_id: tv.id)
        la14_3 = ListingAmenity.create(listing_id: listing14.id, amenity_id: free_parking.id)
        la14_4 = ListingAmenity.create(listing_id: listing14.id, amenity_id: pets_allowed.id)

        la15_1 = ListingAmenity.create(listing_id: listing15.id, amenity_id: wifi.id)
        la15_2 = ListingAmenity.create(listing_id: listing15.id, amenity_id: kitchen.id)
        la15_3 = ListingAmenity.create(listing_id: listing15.id, amenity_id: air_conditioning.id)
        la15_4 = ListingAmenity.create(listing_id: listing15.id, amenity_id: tv.id)
        la15_5 = ListingAmenity.create(listing_id: listing15.id, amenity_id: free_parking.id)

        # r1 = Reservation.create(
        #   listing_id: listing10.id, 
        #   reserver_id: 1, 
        #   start_date: Date.new(2023, 8, 12),
        #   end_date: Date.new(2023, 8, 14),
        #    num_guests: 2, 
        #    total_price: 200
        # )

        # r2 = Reservation.create(
        #   listing_id: listing9.id, 
        #   reserver_id: 2, 
        #   start_date: Date.new(2023, 9, 12),
        #   end_date: Date.new(2023, 9, 13),
        #   num_guests: 1, 
        #   total_price: 90
        # )
        # r3 = Reservation.create(
        #   listing_id: listing8.id, 
        #   reserver_id: 3, 
        #   start_date: Date.new(2023, 8, 12),
        #   end_date: Date.new(2023, 8, 16),
        #   num_guests: 4, 
        #   total_price: 320
        # )

        # r4 = Reservation.create(
        #   listing_id: listing8.id, 
        #   reserver_id: 4, 
        #   start_date: Date.new(2023, 8, 22),
        #   end_date: Date.new(2023, 8, 25),
        #   num_guests: 3, 
        #   total_price: 240
        # )

        # r5 = Reservation.create(
        #   listing_id: listing5.id, 
        #   reserver_id: 5, 
        #   start_date: Date.new(2023, 9, 10),
        #   end_date: Date.new(2023, 9, 14),
        #   num_guests: 4, 
        #   total_price: 200
        # )

        # r6 = Reservation.create(
        #   listing_id: listing4.id, 
        #   reserver_id: 12, 
        #   start_date: Date.new(2023, 10, 22),
        #   end_date: Date.new(2023, 10, 23),
        #   num_guests: 1, 
        #   total_price: 40
        # )

        # r7 = Reservation.create(
        #   listing_id: listing2.id, 
        #   reserver_id: 7, 
        #   start_date: Date.new(2023, 11, 21),
        #   end_date: Date.new(2023, 11, 24),
        #   num_guests: 3, 
        #   total_price: 60
        # )

        # r8 = Reservation.create(
        #   listing_id: listing7.id, 
        #   reserver_id: 8, 
        #   start_date: Date.new(2023, 12, 12),
        #   end_date: Date.new(2023, 12, 14),
        #   num_guests: 2, 
        #   total_price: 140
        # )

        # r9 = Reservation.create(
        #   listing_id: listing3.id, 
        #   reserver_id: 6, 
        #   start_date: Date.new(2023, 12, 13),
        #   end_date: Date.new(2023, 12, 19),
        #   num_guests: 6, 
        #   total_price: 180

        # )

        # r10 = Reservation.create(
        #   listing_id: listing4.id, 
        #   reserver_id: 11, 
        #   start_date: Date.new(2023, 9, 15),
        #   end_date: Date.new(2023, 9, 17),
        #   num_guests: 2, 
        #   total_price: 80
        #   )

        # def attach_thumbnail(restaurants, category)
        #   restaurants.each_with_index do |restaurant, index|
        #     restaurant.picture.attach(io:
        #       URI.open("https://my-fsp-seeds.s3.amazonaws.com/#{category}_#{index+1}.jpg"),
        #       filename: "#{category}_#{index+1}.jpg")
        #   end
        # end
      # end
    end
    listings.each_with_index do |listing, i|
      puts listing
      listing.photos.attach([
        { io: URI.open("https://my-fsp-seeds.s3.amazonaws.com/listing#{i + 1}_#{1}.webp"), filename: "listing#{i + 1}_#{1}.webp" },
        { io: URI.open("https://my-fsp-seeds.s3.amazonaws.com/listing#{i + 1}_#{2}.webp"), filename: "listing#{i + 1}_#{2}.webp" },
        { io: URI.open("https://my-fsp-seeds.s3.amazonaws.com/listing#{i + 1}_#{3}.webp"), filename: "listing#{i + 1}_#{3}.webp" },
        { io: URI.open("https://my-fsp-seeds.s3.amazonaws.com/listing#{i + 1}_#{4}.webp"), filename: "listing#{i + 1}_#{4}.webp" },
        { io: URI.open("https://my-fsp-seeds.s3.amazonaws.com/listing#{i + 1}_#{5}.webp"), filename: "listing#{i + 1}_#{5}.webp" }
      ])
      puts "https://my-fsp-seeds.s3.amazonaws.com/listing#{i + 1}_#{1}.webp"
    end