"use strict";
exports.__esModule = true;
// Class to run the video when it is being shown on the screen with a 
// threshold of 50%, for this an IntersectionObserver is used. 
// It will also be paused when the user changes the browser tab, 
// in this case a VisibilityChange will be used
var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.threshold = 0.5;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }
    // Method to run the video
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handlerVisibilityChange);
    };
    // Private method that handles the intersection
    AutoPause.prototype.handlerIntersection = function (entries) {
        var entry = entries[0];
        var isVisible = entry.intersectionRatio >= this.threshold;
        (isVisible)
            ? this.player.play()
            : this.player.pause();
        console.log(entry);
    };
    ;
    // Private method that manages page visibility
    AutoPause.prototype.handlerVisibilityChange = function () {
        var isVisible = document.visibilityState === "visible";
        (isVisible)
            ? this.player.play()
            : this.player.pause();
    };
    ;
    return AutoPause;
}());
exports["default"] = AutoPause;
