"use strict";
exports.__esModule = true;
// Class that handles each of the video playback elements.
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlayer = function () {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    };
    // Private method that initializes each plugin
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    // Method to play the video
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    // Method to pause the video
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    // Method to play or pause the video when the button is pressed
    MediaPlayer.prototype.togglePlay = function () {
        (this.media.paused)
            ? this.play()
            : this.pause();
    };
    // Method to mute video
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    // Method to unmute video
    MediaPlayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    // Method to mute or unmute the video when the button is pressed
    MediaPlayer.prototype.toggleMute = function () {
        (this.media.muted)
            ? this.unmute()
            : this.mute();
    };
    return MediaPlayer;
}());
exports["default"] = MediaPlayer;
