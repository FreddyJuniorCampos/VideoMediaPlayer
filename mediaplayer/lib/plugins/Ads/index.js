"use strict";
exports.__esModule = true;
var Ads_1 = require("./Ads");
// Class to show a banner every 30 seconds, 
// for this a container of the same size of 
// the video is created and a banner is displayed within it.
var AdsPlugin = /** @class */ (function () {
    function AdsPlugin() {
        this.ads = Ads_1["default"].getInstance();
        this.adsContainer = document.createElement('div');
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    AdsPlugin.prototype.run = function (player) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    };
    AdsPlugin.prototype.handleTimeUpdate = function () {
        var currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0)
            this.renderAd();
    };
    AdsPlugin.prototype.renderAd = function () {
        var _this = this;
        if (this.currentAd)
            return;
        var ad = this.ads.getAd();
        this.currentAd = ad;
        this.adsContainer.innerHTML = "\n\t\t\t<div class=\"ads\">\n\t\t\t\t<a class=\"ads__link\" href=\"" + this.currentAd.url + "\" target=\"_blank\">\n\t\t\t\t\t<img class=\"ads__img\" src=\"" + this.currentAd.imageUrl + "\" />\n\t\t\t\t\t<div class=\"ads__info\">\n\t\t\t\t\t\t<h5 class=\"ads__title\">" + this.currentAd.title + "</h5>\n\t\t\t\t\t\t<p class=\"ads__body\">" + this.currentAd.body + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t";
        setTimeout(function () {
            _this.currentAd = null;
            _this.adsContainer.innerHTML = '';
        }, 10000);
    };
    return AdsPlugin;
}());
exports["default"] = AdsPlugin;
