import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ListingShow from "./components/ListingShowPage/ListingShow";
import ListingIndex from "./components/ListingIndexPage/ListingIndex";

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
        </Switch>
    </>
  );
}

export default App;