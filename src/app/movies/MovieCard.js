import React from "react";
import Link from "next/link";

const MovieCard = (props) => {
  return (
    <>
      <div className="mt-5">
        <p>{props.episodeId}</p>
        <p>{props.contextualSynopsis.text}</p>
        <Link href={`/movies/${props.seasonId}/${props.episodeId}`}>
          <button className="bg-slate-400 text-slate-900 h-9 w-56 mt-2 mb-8 cursor-pointer">
            Know More!
          </button>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
