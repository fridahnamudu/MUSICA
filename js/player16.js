var ap1 = new APlayer({
    container: document.getElementById('player16'),
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
      name: 'Good Day',
      artist: 'Brett Eldredge',
      url: '/audio.country/Brett Eldredge - Good Day _Official Music Video_.mp4',
      cover: '/images/light.png'
    },
      {
        name: 'Lady',
        artist: 'Brett Young',
        url: '/audio.country/Brett Young - Lady.mp4',
        cover: '/images/light.png'
      },
      {
        name: 'Brian Kelley',
        artist: 'Beach Cowboy',
        url: '/audio.country/Brian Kelley - Beach Cowboy _Official Music Video_.mp4',
        cover: '/images/light.png'
      },
      {
        name: 'Starting over',
        artist: 'Chris Stapleton',
        url: '/audio.country/Chris Stapleton - Starting Over _Official Music Video_.mp4',
        cover: '/images/light.png'
      },
      {
        name: 'Famous Friends',
        artist: 'Chris Young ',
        url: '/audio.country/Chris Young_ Kane Brown - Famous Friends _Official Video_.mp4',
        cover: '/images/light.png'
      },
      {
        name: 'Dear Rodeo',
        artist: 'Cody Johnson',
        url: '/audio.country/Cody Johnson _ Reba McEntire - Dear Rodeo _Official Music Video_.mp4',
        cover: '/images/light.png'
      },
      {
        name: 'Single Sartuday Night',
        artist: 'Cole Swindell',
        url: '/audio.country/Cole Swindell - Single Saturday Night _Official Music Video_.mp4',
        cover: '/images/light.png'
      },
      {
        name: 'Glad You exists',
        artist: 'Dan _ shay',
        url: '/audio.country/Dan _ Shay - Glad You Exist _Lyric Video_.mp4',
        cover: '/images/light.png'
      },
      {
        name: 'He loved her',
        artist: 'Devin Dawson',
        url: '/audio.country/Devin Dawson - He Loved Her _Official Music Video_.mp4',
        cover: '/images/light.png'
      },
      {
        name: 'Broke and Lonely',
        artist: 'Dustin Bird',
        url: '/audio.country/Dustin Bird - Broke and Lonely _Unplugged_.mp4',
        cover: '/images/light.png'
      },
      {
        name: 'Drunk and I Dont want to Go home',
        artist: 'Elle King',
        url: '/audio.country/Elle King_ Miranda Lambert - Drunk _And I Don_t Wanna Go Home_ _Official Video_.webm',
        cover: '/images/light.png'
      },
      {
        name: 'Hell of A View',
        artist: 'Eric Church',
        url: '/audio.country/Eric Church - Hell Of A View _In Studio Performance_.mp4',
        cover: '/images/light.png'
      },
      {
        name: 'Life Rolls On',
        artist: 'Florida Georgia Line',
        url: '/audio.country/Florida Georgia Line - Life Rolls On _Audio_.mp4',
        cover: '/images/light.png'
      },{
        name: 'The Good Ones',
        artist: 'Gabby Barrett',
        url: '/audio.country/Gabby Barrett - _The Good Ones_ _Official Music Video_.mp4',
        cover: '/images/whiteflow.jpeg'
      },
      {
        name: 'Bad',
        artist: 'Gabrielle Mooney',
        url: '/audio.country/Gabrielle Mooney - Bad _Official Music Video_.mp4',
        cover: '/images/whiteflow.jpeg'
      },
      {
        name: 'Been A Minute',
        artist: 'Hunter Brothers',
        url: '/audio.country/Hunter Brothers - Been A Minute _Lyric Video_.mp4',
        cover: '/images/images 5.jpeg'
      },
      {
        name: 'Lady Like',
        artist: 'Ingrid Andress',
        url: '/audio.country/Ingrid Andress - Lady Like _Official Music Video_.mp4',
        cover: '/images/whiteflow.jpeg'
      },
      {
        name: 'Luke Combs',
        artist: 'Jameson Rodgers',
        url: '/audio.country/Jameson Rodgers_ Luke Combs - Cold Beer Calling My Name _Official Video_.mp4',
        cover: '/images/images 5.jpeg'
      },
      {
        name: 'Almost Maybes',
        artist: 'Jordan Davis',
        url: '/audio.country/Jordan Davis - Almost Maybes _Official Music Video_.mp4',
        cover: '/images/headphones.jpg'
      },
      {
        name: 'Worship you',
        artist: 'Kane Brown',
        url: '/audio.country/Kane Brown - Worship You _Official Music Video_.mp4',
        cover: '/images/images 5.jpeg'
      },
      {
        name: 'One too many with P_nk',
        artist: 'Keith Urban',
        url: '/audio.country/Keith Urban - One Too Many with P_nk _Official Music Video_.mp4',
        cover: '/images/images (1).png'
      },
      {
        name: '',
        artist: '',
        url: '/audio.country/Kenny Chesney - Knowing You _Official Music Video_.mp4',
        cover: '/images/images (1).png'
      },
      {
        name: 'Villain',
        artist: 'LIly Rose',
        url: '/audio.country/Lily Rose – Villain _Official Music Video_.mp4',
        cover: '/images/image7.jpeg'
      },
      {
        name: 'Down To me',
        artist: 'Luke Bryan',
        url: '/audio.country/Luke Bryan - Down To One _Official Music Video_.mp4',
        cover: '/images/headphones.jpg'
      },
      {
        name: 'Forever After All',
        artist: 'Luke Combs',
        url: '/audio.country/Luke Combs - Forever After All _Audio_.mp4',
        cover: '/images/images (3).jpeg'
      },
      {
        name: ' Aint met us yet',
        artist: 'Matt Cooper',
        url: '/audio.country/Matt Cooper - Ain_t Met Us Yet _Official Music Video_.mp4',
        cover: '/images/images (1).png'
      },
      {
        name: 'Whiskey And Rain',
        artist: 'Michael Ray',
        url: '/audio.country/Michael Ray _ Whiskey And Rain _Official Music Video_.mp4',
        cover: '/images/images (3).jpeg'
      },
      {
        name: 'Settling Down',
        artist: 'Miranda Lambert',
        url: '/audio.country/Miranda Lambert - Settling Down _Official Video_.mp4',
        cover: '/images/images (2).jpeg'
      },
      {
        name: 'Sand in my boots',
        artist: 'Morgan Wallen',
        url: '/audio.country/Morgan Wallen - Sand In My Boots _Official Lyric Video_.mp4',
        cover: '/images/headphones.jpg'
      },{
        name: 'Chasing after you',
        artist: 'Ryan Hurdd',
        url: '/audio.country/Ryan Hurd_ Maren Morris - Chasing After You _Official Video_.mp4',
        cover: '/images/image7.jpeg'
      },
      {
        name: 'Breaking up was easy in the 90s',
        artist: 'Sam Hunt',
        url: '/audio.country/Sam Hunt - Breaking Up Was Easy In The 90_s _Official Music Video_.mp4',
        cover: '/images/images (1).png'
      },
      {
        name: 'Hello you up',
        artist: 'Sean Stemaly',
        url: '/audio.country/Sean Stemaly - Hello_ You Up _Official Music Video_.mp4',
        cover: '/images/images (2).jpeg'
      },
      {
        name: 'You all over me',
        artist: 'Taylor Swift',
        url: '/audio.country/Taylor Swift ft. Maren Morris - You All Over Me _From The Vault_ _Official Lyric Video_.mp4',
        cover: '/images/image7.jpeg'
}]
});

ap1.play()