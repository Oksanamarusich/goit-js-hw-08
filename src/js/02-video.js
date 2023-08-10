import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(handlerTimeupdate, 1000) );

function handlerTimeupdate(evt) {
    const currentTime = evt.seconds;
    
    localStorage.setItem(KEY, JSON.stringify(currentTime));
}

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

            