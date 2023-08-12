  import Player from '@vimeo/player';
  import throttle from 'lodash.throttle';

const KEY_FOR_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeupdate), 1000);

function onTimeupdate(evt) {
    const currentTime = evt.seconds;
    
    localStorage.setItem(KEY_FOR_STORAGE , JSON.stringify(currentTime));
}

 player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_FOR_STORAGE)) ?? 0);



