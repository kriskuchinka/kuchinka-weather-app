"use client";
import { useState } from "react";
import data from "../data/city.list.json";
import Link from "next/link";

export default function LocationSearchBar() {
  const [locationInput, setLocationInput] = useState("");
  const [locationMatches, setLocationMatches] = useState([]);

  const handleLocationChange = (e) => {
    setLocationInput(e.target.value);
    let matchingCities = [];
    for (let city of data) {
      const match = city.name
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase());
      if (match) {
        matchingCities.push(city);
      }
      setLocationMatches(matchingCities);
    }
  };

  console.log(locationMatches);

  return (
    <>
      <input
        type="text"
        placeholder="Enter a City"
        name="location-search-bar"
        value={locationInput}
        onChange={(e) => handleLocationChange(e)}
      />
      {locationInput.length > 2 ? (
        <ul>
          {locationMatches.length > 0 ? (
            locationMatches.map((city) => {
              return (
                <Link href={`/location/${city.name.toLowerCase()}-${city.id}`}>
                  <li>{`${city.name}, ${city.state ? city.state : ""} (${
                    city.country
                  })`}</li>
                </Link>
              );
            })
          ) : (
            <p>That City Was Not Found!</p>
          )}
        </ul>
      ) : null}
    </>
  );
}
