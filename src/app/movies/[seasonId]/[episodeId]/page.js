import React from "react";

const Page = async ({ params }) => {
  const { seasonId, episodeId } = params; // Destructure params for seasonId and episodeId

  const url = `https://netflix54.p.rapidapi.com/season/episodes/?ids=${seasonId}&offset=0&limit=25&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d850573cc9msh3e3e3e6eb0d6b88p1e33c7jsnbb05956df032",
      "x-rapidapi-host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  // Map over the episodes and find the one with the matching episodeId
  const episode = data[0]?.episodes.find((ep) => ep.episodeId === episodeId);

  if (!episode) {
    console.log("Episode not found");
    return <p>Episode not found</p>;
  }

  return (
    <>
      <h1>{episode.title}</h1>
      <p>{episode.contextualSynopsis.text}</p>
    </>
  );
};

export default Page;

//error
// import React from "react";

// const Page = async ({ params }) => {
//   const seasonId = params.seasonId; // Use season ID for query
//   const episodeId = params.episodeId;

//   // Fetch all episodes for the season
//   const url = `https://netflix54.p.rapidapi.com/season/episodes/?ids=${seasonId}&offset=0&limit=25&lang=en`;
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "d850573cc9msh3e3e3e6eb0d6b88p1e33c7jsnbb05956df032",
//       "x-rapidapi-host": "netflix54.p.rapidapi.com",
//     },
//   };

//   const response = await fetch(url, options);
//   const data = await response.json();

//   // Filter the specific episode from the data using episodeId
//   const episode = data.find((ep) => ep.episodeId === episodeId);

//   if (!episode) {
//     console.log("Episode not found");
//     return <p>Episode not found</p>;
//   }

//   return (
//     <>
//       <h1>{episode.title}</h1>
//       <p>{episode.contextualSynopsis.text}</p>
//       {/* <img
//         src={episode.interestingMoment._342x192.webp.value.url}
//         alt="Episode Moment"
//       /> */}
//     </>
//   );
// };

// export default Page;
