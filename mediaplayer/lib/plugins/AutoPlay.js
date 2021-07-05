"use strict";
exports.__esModule = true;
// AutoPlay class to start the video automatically muted
var AutoPlay = /** @class */ (function () {
    function AutoPlay() {
    }
    AutoPlay.prototype.run = function (player) {
        if (!player.media.muted)
            player.media.muted = true;
        player.play();
    };
    return AutoPlay;
}());
exports["default"] = AutoPlay;
