// import React from 'react';
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// const MyMapComponent = ({ listings }) => {
//   const history = useHistory()
//   const containerStyle = {
//     width: '100%',
//     height: '100vh', 
//   };

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyARaJd3oqki95QufDSafd0JWEXaVL_zMiw",
//   });

//   const center = {
//     lat: 0, 
//     lng: 0, 
//   };

//   const handleMarkerClick = (listingId) => {
//     history.push(`/listings/${listingId}`)
//   }
//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={2.7}
//     >
//       {listings.map((listing) => (
//         <Marker 
//           key={listing.id} 
//           position={{ lat: listing.latitude, lng: listing.longitude }} 
//           onClick={() => handleMarkerClick(listing.id)}
//         />
//       ))}
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// };

// export default MyMapComponent;


import React from 'react';
import { GoogleMap, InfoWindow, OverlayView, useJsApiLoader } from '@react-google-maps/api';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const MyMapComponent = ({ listings }) => {

  const history = useHistory();
  const containerStyle = {
    width: '100%',
    height: '100vh',
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyARaJd3oqki95QufDSafd0JWEXaVL_zMiw', // Replace with your API key
  });

  const center = {
    lat: 0,
    lng: 0,
  };

  const handleMarkerClick = (listingId) => {
    history.push(`/listings/${listingId}`);
  };

  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
  });

  const [hoveredMarkerId, setHoveredMarkerId] = useState(null);



  const handleMarkerMouseEnter = (listingId) => {
    setHoveredMarkerId(listingId);
  };

  const handleMarkerMouseLeave = () => {
    setHoveredMarkerId(null);
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2.7}>
      {listings.map((listing) => (
        <>
        
        <OverlayView
          key={listing.id}
          position={{ lat: listing.latitude, lng: listing.longitude }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          // getPixelPositionOffset={getPixelPositionOffset}
        >
          <div
            onClick={() => handleMarkerClick(listing.id)}
            onMouseEnter={() => handleMarkerMouseEnter(listing.id)}
            onMouseLeave={handleMarkerMouseLeave}
            style={{
              // background: 'white',
              borderRadius: '24px',
              padding: '10px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              fontSize: '14px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '27px',
              height: '9px',
              cursor: 'pointer',
              // transform: hoveredMarkerId === listing.id ? 'scale(1.1)' : 'scale(1)',
              background: hoveredMarkerId === listing.id ? 'black' : 'white',
              color: hoveredMarkerId === listing.id ? 'white' : 'black',
              transition: 'transform 0.3s ease',
            }}
          >

            ${listing.price}
          </div>
        </OverlayView>
        </>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MyMapComponent;
