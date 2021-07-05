import MediaPlayer from '@freddyjjcm/videomediaplayer/lib/MediaPlayer'
import AutoPlay from '@freddyjjcm/videomediaplayer/lib/plugins/AutoPlay'
import AutoPause from '@freddyjjcm/videomediaplayer/lib/plugins/AutoPause'
import Ads from '@freddyjjcm/videomediaplayer/lib/plugins/Ads';


const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads(),] 
});

const playButton: HTMLElement = document.getElementById('play')
const muteButton: HTMLElement = document.getElementById('mute');

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.error(error);
    })
}