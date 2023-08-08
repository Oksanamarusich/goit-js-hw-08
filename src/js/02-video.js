import Player from '@vimeo/player';

const player = document.querySelector("#vimeo-player");
console.log(player);

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('timeupdate', onPlay);



// player.on('play', function() {
//     console.log('played the video!');
// });