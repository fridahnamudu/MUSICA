var ap1 = new APlayer({
    container: document.getElementById('player3'),
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
      name: 'Ciggarettes after sex',
      artist: 'Affection',
      url: '/audio.blues/Affection - Cigarettes After Sex.mp4',
      cover: '/images/billie.jpeg'
    },
    {
      name: 'Lonely Bed',
      artist: 'Albert Cummings',
      url: '/audio.blues/Albert Cummings - Lonely Bed.mp4',
      cover: '/'
    },
    {
      name: 'The Bluest Blues',
      artist: 'Alvin Lee',
      url: '/audio.blues/Alvin Lee – The Bluest Blues.mp4',
      cover: '/'
    },
    {
      name: 'Lucille',
      artist: 'B.B King',
      url: '/audio.blues/B.B. King - Lucille.mp4',
      cover: '/'
    },
    {
      name: 'Be Easy',
      artist: 'Chirag Todi',
      url: '/audio.blues/Be Easy _Pushkar Remix_ _ Dance Music Video _ Chirag Todi ft. Yohan Marshall.mp4',
      cover: '/'
    },
    {
      name: 'Your Heart Is As Black As Night',
      artist: 'Joe Bonamassa',
      url: '/audio.blues/Beth Hart _ Joe Bonamassa - Your Heart Is As Black As Night.mp4',
      cover: '/'
    },
    {
      name: 'Run Around',
      artist: 'Blues Traveler',
      url: '/audio.blues/Blues Traveler - Run-Around _Official video_.mp4',
      cover: '/'
    },
    {
      name: 'What KInd of Woman Is This',
      artist: 'Buddy Guy',
      url: '/audio.blues/Buddy Guy - What Kind Of Woman Is This.mp4',
      cover: '/'
    },
    {
      name: 'On The Road Again ',
      artist: 'Canned Heat',
      url: '/audio.blues/Canned Heat - On The Road Again _HQ_.mp4',
      cover: '/'
    },
    {
      name: 'Midnight Special',
      artist: 'CCR',
      url: '/audio.blues/CCR - Midnight Special.mp4',
      cover: '/'
    },
    {
      name: 'Tennessee Whiskey',
      artist: 'Chris Stapleton',
      url: '/audio.blues/Chris Stapleton - Tennessee Whiskey _Official Audio_.mp4',
      cover: '/'
    },
    {
      name: 'I_ll Play the blues for you ',
      artist: 'Daniel Castro',
      url: '/audio.blues/Daniel Castro - I_ll Play The Blues For You.mp4',
      cover: '/'
    },
    {
      name: 'You and your friend',
      artist: 'Dire starits',
      url: '/audio.blues/Dire Straits - You and your friend.mp4',
      cover: '/'
    },
    {
      name: 'What you gonna do ',
      artist: 'Eb Davis',
      url: '/audio.blues/Eb Davis - What You Gonna Do.mp4',
      cover: '/'
    },
    {
      name: ' Make it rain',
      artist: 'Ed sheeran',
      url: '/audio.blues/Ed Sheeran - Make it rain Lyrics.mp4',
      cover: '/'
    },
    {
      name: ' Id rather Go Blind ',
      artist: 'Etta James',
      url: '/audio.blues/Etta James - I_d Rather Go Blind(1).mp4',
      cover: '/'
    },
    {
      name: 'Ive Been Loving too long to stop now',
      artist: 'Etta James',
      url: '/audio.blues/Etta James - I_ve Been Loving You Too Long _to stop now_.mp4',
      cover: '/'
    },
    {
      name: 'This Time im GOne for good',
      artist: 'Freddy Cole ',
      url: '/audio.blues/Freddy Cole - This Time I_m Gone for Good.mp4',
      cover: '/'
    },
    {
      name: 'Gravity ',
      artist: 'John Mayer ',
      url: '/audio.blues/Gravity by John Mayer.mp4',
      cover: '/'
    },
    {
      name: 'Only for you ',
      artist: 'Heartless Bastard',
      url: '/audio.blues/Heartless Bastards - _Only For You_.mp4',
      cover: '/'
    },
    {
      name: 'Sometimes Im Right ',
      artist: 'Hubert Sumlin',
      url: '/audio.blues/Hubert Sumlin - Sometimes I_m Right.mp4',
      cover: '/'
    },
    {
      name: 'Stop',
      artist: 'Joe Bonamassa',
      url: '/audio.blues/Joe Bonamassa - Stop_.mp4',
      cover: '/'
    },
    {
      name: 'She is crazy',
      artist: 'JT Coldfire',
      url: '/audio.blues/JT Coldfire - She_s Crazy.mp4',
      cover: '/'
    },
    {
      name: 'Got My Mojo Working',
      artist: 'Muddy Waters',
      url: '/audio.blues/Muddy Waters - Got My Mojo Workin_.mp4',
      cover: '/'
    },
    {
      name: 'Forget what i said',
      artist: 'Noora Noor',
      url: '/audio.blues/Noora Noor - Forget what I said.mp4',
      cover: '/'
    },
    {
      name: 'Iron Sky ',
      artist: 'Paolo Nutini',
      url: '/audio.blues/Paolo Nutini - Iron Sky _Abbey Road Live Session_.mp4',
      cover: '/'
    },
    {
      name: 'Night time is The right time',
      artist: 'Ray Charles',
      url: '/audio.blues/Ray Charles - _Night time Is_ The Right Time.mp4',
      cover: '/'
    },
    {
      name: 'Lightning Howlin Wolf',
      artist: 'Smokestack',
      url: '/audio.blues/Smokestack Lightning Howlin Wolf.mp4',
      cover: '/'
    },
    {
      name: 'Riding The Blues',
      artist: 'Snowy White',
      url: '/audio.blues/Snowy White - Riding the Blues.mp4',
      cover: '/'
        }]

       
});

ap1.play()