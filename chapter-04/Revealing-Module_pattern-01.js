var musicModule = (function () {
    // Let's make sure no one can directly access our songList
    var songList = ['California Girls', 'California Dreaming', 'Hotel California'];  
  
    // We'll expose all these functions to the user
    function play () {
      console.log('Im playing the next song!');
    }
  
    function pause () {
      console.log('Im paused!');
    }
  
    function addTrackToMusicQueue (track) {
      songList.push(track);
      console.log('I added a song');
    }
  
    function showNextTrack () {
      console.log('My next track is', songList[0]);
    }
  
    // Let's hide this function
    function loadSong() {
      filesystem.loadNextSong();
    }
  
    return {
      playMusic: play,
      pauseMusic: pause,
      showUpNext: showNextTrack,
      addTrack: addTrackToMusicQueue
    };
  })(); // our IIFE function (surrounded with parens) is invoked here
  
  musicModule.playMusic(); // 'Im playing the next song!'
  musicModule.pauseMusic(); // 'I'm paused!'
  musicModule.showUpNext(); // 'The next track is California Girls'
//   musicModule.loadSong(); // error: not a function
//   musicModule.songList.push('White Rabbit'); // undefined

//  reference : zcaceres/Revealing-Module-Pattern.md