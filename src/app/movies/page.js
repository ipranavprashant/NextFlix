import React from "react";
import MovieCard from "./MovieCard";

const page = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/season/episodes/?ids=80077209%2C80117715&offset=0&limit=25&lang=en";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d850573cc9msh3e3e3e6eb0d6b88p1e33c7jsnbb05956df032",
      "x-rapidapi-host": "netflix54.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return (
    <>
      {data.map((season) =>
        season.episodes.map((episode) => {
          return (
            <MovieCard
              key={episode.episodeId}
              seasonId={season.seasonId}
              {...episode}
            />
          );
        })
      )}
    </>
  );
};

export default page;
