export const setPlaylist = (playlist: any) => {
  return {
    type: "SET_PLAYLIST",
    payload: playlist,
  };
};
export const setCurrentPlaying = (curr_music: any) => {
  return {
    type: "SET_CURR_PLAYING",
    payload: curr_music,
  };
};

export const increaseTimesPlayed = (id: any) => {
  return {
    type: "INC_TIMES_PLAYED",
    payload: id,
  };
};
