import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ListingShow from "./components/ListingShowPage/ListingShow";
import ListingIndex from "./components/ListingIndexPage/ListingIndex";
import ReservationIndex from "./components/Reservations/ReservationIndex";
import ReservationUpdatePage from "./components/Reservations/ReservationUpdatePage";
function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/listings/:listingId" exact>

            <ListingShow/>  
          </Route>
          <Route path="/" exact>
            <ListingIndex/>
          </Route>
          <Route path="/reservations/" exact>
            <ReservationIndex />
          </Route>
          <Route path="/reservations/1">
            
            <ReservationUpdatePage/>
          </Route>
        </Switch>
    </>
  );
}

export default App;