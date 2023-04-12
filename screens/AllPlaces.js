import React, { useEffect, useState } from "react";
import PlaceList from "../components/places/PlaceList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused ) {
      async function loadPlaces() {
        const places = await fetchPlaces()
        console.log(places);
        setLoadedPlaces(places)
      }
      // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);

      loadPlaces()
    }
  }, [isFocused, route]);

  return <PlaceList places={loadedPlaces} />;
}

export default AllPlaces;
