import React from "react";
import { BsSpotify } from "react-icons/bs";
import useSWR from "swr";

const SpotifyWidget = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("api/spotify", fetcher);

  return (
    <a
      href={data?.isPlaying ? data.songUrl : "https://open.spotify.com/user/l2oyalty?si=8fcd67c4299f4913"}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-row items-center justify-between p-2 dark:bg-zinc-800 rounded-lg">
        <div className="justify-center items-center">
          {data?.isPlaying ? (
            <div className="flex flex-row justify-center px-1 text-xl">
              <BsSpotify />
              <div className="flex flex-row items-start text-sm ml-3">
                <h1 className="font-bold mr-1">{data.title}</h1> <h1>{` by ${data.artist}`}</h1>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center justify-start px-1 text-xl">
              <BsSpotify />
              <div className="flex flex-col items-start text-sm ml-3">Not Playing</div>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default SpotifyWidget;
