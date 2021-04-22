var ap1 = new APlayer({
    container: document.getElementById('player17'),
    fixed: false,                   //Turn on the bottom suction mode
    mimi: false,                    //Turn on mini mode
    autoplay: false,                //Audio autoplay
    theme: '#b7daff',               //Theme color
    loop: 'all',                    //Audio loop, Optional values: 'all', 'one', 'none'
    order: 'list',                  //Audio cycle order, Optional values: 'list', 'random'
    preload: 'auto',
    listFolded: false,              //List default collapse
    listMaxHeight: 900,             //    Maximum height of list
    storageName: 'aplayer-setting', //Store player settings localStorage key
    
    
    audio: [{
      name: 'Ocean Eyes',
      artist: 'Billie Ellish',
      url: '/audio/billie.mp4',
      cover: '/images/billie.jpeg'
    }]

       
});

ap1.play()