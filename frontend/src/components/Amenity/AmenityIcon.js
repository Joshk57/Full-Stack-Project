import React from 'react';

const AmenityIcon = ({amenity}) => {
    const icons = {
        wifi: <i className="fa-solid fa-wifi"></i>,
        tv: <i class='fa-solid fa-tv'></i>,
        kitchen: <i class="fa-solid fa-kitchen-set"></i>,
        pets_allowed: <i class="fa-solid fa-paw"></i>,
        free_parking: <i class="fa-solid fa-car"></i>,
        air_conditioning: <i class="fa-regular fa-snowflake"></i>,
        pool: <i class="fa-solid fa-person-swimming"></i>
    }

    const amenityName = {
        wifi: "Wifi",
        tv: "TV",
        kitchen: "Kitchen",
        pets_allowed: "Pets Allowed",
        free_parking: "Free Parking",
        air_conditioning: "Air Conditioning",
        pool: "Pool"

    }

 
    return (
        <>
        
        {/* {console.log(icons[{amenity}])} */}
        {icons[amenity]}
        <div className="amenity-name">{amenityName[amenity]}</div>
        </>
    )

    
}


export default AmenityIcon