import MediaPlayer from '../MediaPlayer.js'


// Class to run the video when it is being shown on the screen with a 
// threshold of 50%, for this an IntersectionObserver is used. 
// It will also be paused when the user changes the browser tab, 
// in this case a VisibilityChange will be used
class AutoPause {
  private threshold: number;
  player: MediaPlayer;
  
  constructor() {
    this.threshold = 0.5
    this.handlerIntersection = this.handlerIntersection.bind(this)
    this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
  }

  // Method to run the video
  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold
    });

    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handlerVisibilityChange);
  }

  // Private method that handles the intersection
  private handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
  
    const isVisible = entry.intersectionRatio >= this.threshold;

    (isVisible)
    ? this.player.play()
    : this.player.pause()

    console.log(entry);
  };

  // Private method that manages page visibility
  private handlerVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    
    (isVisible)
    ? this.player.play()
    : this.player.pause()

  };
}

export default AutoPause;