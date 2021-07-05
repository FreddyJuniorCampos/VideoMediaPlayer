
// Class that handles each of the video playback elements.
class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;


  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  // Private method that initializes each plugin
  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  // Method to play the video
  play() {
    this.media.play();
  }

  // Method to pause the video
  pause() {
    this.media.pause();
  }

  // Method to play or pause the video when the button is pressed
  togglePlay() {
    (this.media.paused)
      ? this.play()
      : this.pause();
  }

  // Method to mute video
  mute() {
    this.media.muted = true;
  }

  // Method to unmute video
  unmute() {
    this.media.muted = false;
  }
  
  // Method to mute or unmute the video when the button is pressed
  toggleMute() {
    (this.media.muted)
      ? this.unmute()
      : this.mute();
  }
}
 
export default MediaPlayer;