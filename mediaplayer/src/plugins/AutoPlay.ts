import MediaPlayer from "../MediaPlayer";

// AutoPlay class to start the video automatically muted
class AutoPlay {
  constructor() { }
  run(player: MediaPlayer) {
    if (!player.media.muted)
      player.media.muted = true;
    player.play();
  }
}


export default AutoPlay;