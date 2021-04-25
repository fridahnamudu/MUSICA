var ap1 = new APlayer({
    container: document.getElementById('player2'),
    fixed: false,                   //Turn on the bottom suction mode
    mini: false,                    //Turn on mini mode
    autoplay: false,                //Audio autoplay
    theme: 'black',               //Theme color
    loop: 'all',                    //Audio loop, Optional values: 'all', 'one', 'none'
    order: 'list',                  //Audio cycle order, Optional values: 'list', 'random'
    preload:'auto',
    listFolded: false,              //List default collapse
    listMaxHeight: 900,             //    Maximum height of list
    storageName: 'aplayer-setting', //Store player settings localStorage key
    
    
    audio: [{
      name: 'New levels',
      artist: 'Alfie Cridland',
      url: '/audio.pop/ Alfie Cridland - New Levels _.mp4',
      cover: '/images/images 4.jpeg '
    },
    {
      name: 'My Oh My',
      artist: 'Camila Cabello',
      url: '/audio.pop/ Cabello - My Oh My .mp4',
      cover: '/images/camila.jpeg'
    },
    {
      name: 'Watermelon Sugar',
      artist: 'Harry Styles',
      url: 'audio.pop/ Styles - Watermelon Sugar .mp4',
      cover: '/images/images 6.jpeg'
    },
    {
      name: 'You Cant stop the girl',
      artist: 'Bebe Rhexa',
      url: '/audio.pop/ You Can_t Stop The Girl _rhexa.mp4',
      cover: '/images/headphones.jpg'
    },
    {
      name: '7rings',
      artist: 'Ariana Grande',
      url: '/audio.pop/7 rings.mp4',
      cover: '/images/grande.jpeg'
    },
    {
      name: 'Bad Guy',
      artist: 'Billie Ellish',
      url: '/audio.pop/Billie -bad guy.mp4',
      cover: '/images/billie.jpeg'
    },
    {
      name: 'Ocean Eyes',
      artist: 'Billie Ellish',
      url: '/audio.pop/billie.mp4',
      cover: '/images/billie.jpeg'
    },
    {
      name: 'Love Sick Girls',
      artist: 'BLACKPINK',
      url: '/audio.pop/BLACKPINK – Lovesick Girls’.webm',
      cover: '/images/images 5.jpeg'
    },
    {
      name: 'Boyfriend',
      artist: 'Ariana Grande',
      url: '/audio.pop/boyfriend-grande.mp4',
      cover: '/images/grande.jpeg'
    },
    {
      name: 'Hold On',
      artist: 'Chord Overstreet',
      url: '/audio.pop/chord.mp4',
      cover: '/images/chord.jpeg'
    },
    {
      name: 'No Guidance',
      artist: 'Chris Brown',
      url: '/audio.pop/Chris Brown - No Guidance.mp4',
      cover: '/images/images (1).jpeg'
    },
    {
      name: 'Dance Monkey',
      artist: 'Tones & I',
      url: '/audio.pop/dancemokey-tones&i.mp4',
      cover: '/images/tones.jpeg'
    },
    {
      name: 'Outnumbered',
      artist: 'Dermot Kennedy',
      url: '/audio.pop/Dermot Kennedy - Outnumbered.mp4',
      cover: '/images/images4.jpeg'
    },
    
    {
      name: 'Break Your Heart',
      artist: 'Dua Lipa',
      url: '/audio.pop/Dua Lipa - Break My Heart _Official Video_.mp4',
      cover: '/images/lipa.jpeg'
    },
    {
      name: 'Dynamite',
      artist: 'BTS',
      url: '/audio.pop/dynamiteBTS.mp4',
      cover: '/images/images6.jpeg'
    },
    {
      name: 'Shape Of You',
      artist: 'Ed Sheeran',
      url: '/audio.pop/Ed  - Shape of You.mp4',
      cover: '/images/sheeran.jpeg'
    },
    {
      name: 'Ocean Eyes',
      artist: 'Billie Ellish',
      url: '/audio.pop/billie.mp4',
      cover: '/images/billie.jpeg'
    },
    
    {
      name: 'Beautiful People',
      artist: 'Ed Sheeran',
      url: '/audio.pop/Ed- Beautiful People .mp4',
      cover: '/images/sheeran.jpeg'
    },
    {
      name: 'Sorry',
      artist: 'Halsey',
      url: '/audio.pop/halsey-sorry.mp4',
      cover: '/images/halsey.jpeg'
    },
    {
      name: 'Here With Me ',
      artist: 'Marshmello',
      url: '/audio.pop/here with me-marshmello.mp4',
      cover: '/images/marsh.jpeg'
    },
    {
      name: 'Hollow',
      artist: 'JANNEY',
      url: '/audio.pop/JANNEY - hollow .mp4',
      cover: '/images/images(4).jpeg'
    },
    {
      name: 'Sucker for you',
      artist: 'Jonas Brothers',
      url: '/audio.pop/Jonas Brothers - Sucker .mp4',
      cover: '/images/images(5).jpeg'
    },
    {
      name: 'Intentions',
      artist: 'Justin Beiber',
      url: '/audio.pop/Justin Bieber - Hold On.mp4',
      cover: '/images/beiber.jpeg'
    },
    {
      name: 'Peaches',
      artist: 'Justine Beiber',
      url: '/audio.pop/Justin Bieber - Peaches .mp4',
      cover: '/images/beiber.jpeg'
    },
    {
      name: 'Leave the door open',
      artist: 'Bruno Mars',
      url: '/audio.pop/leavethedooropen.mars.webm',
      cover: '/'
    },
    {
      name: 'MONTERO',
      artist: 'Lil Nas X',
      url: '/audio.pop/Lil Nas X - MONTERO .mp4',
      cover: '/images/nas.jpeg'
    },
    {
      name: 'Old Town Road',
      artist: 'Lil Nas X',
      url: '/audio.pop/Lil Nas X - Old Town Road .mp4',
      cover: '/images/nas.jpeg'
    },
    {
      name: 'Panini',
      artist: 'Lil Nas X',
      url: '/audio.pop/lilnas-panini.mp4',
      cover: '/images/nas.jpeg'
    },
    {
      name: 'Gravity',
      artist: 'M-22',
      url: '/audio.pop/M-22 - Gravity .mp4',
      cover: '/Images/headphones.jpeg'
    },
    {
      name: 'Dont Call me up',
      artist: 'Mabel',
      url: '/audio.pop/Mabel - Dont Call Me U.mp4',
      cover: '/images/Music-Note-Coloring-Pages-For-Kids.jpg'
    },
    {
      name: 'Memories',
      artist: 'Maroon 5',
      url: '/audio.pop/Maroon 5 - Memories.mp4',
      cover: '/images/Music-Note-Coloring-Pages-For-Kids.jpg'
    },
    {
      name: 'Astronaut In the Ocean',
      artist: 'Masked Wolf',
      url: '/audio.pop/Masked Wolf - Astronaut In The Ocean .mp4',
      cover: '/images/headphones.jpeg'
    },
    {
      name: 'Drivers Licence',
      artist: 'Olivia Rodrigo',
      url: '/audio.pop/Olivia Rodrigo - drivers license_.mp4',
      cover: '/images/images 5.jpeg'
    },
    {
      name: 'Goodbyes',
      artist: 'Post Malone',
      url: '/audio.pop/Post Malone - Goodbyes .mp4',
      cover: '/images/images 6.jpeg'
    },
    {
      name: 'Mother',
      artist: 'Charlie Puth',
      url: '/audio.pop/Puth - Mother.webm',
      cover: '/images/images 10.jpeg'
    },
    {
      name: 'Tombstone',
      artist: 'Rod Wave',
      url: '/audio.pop/Rod Wave - Tombstone.mp4',
      cover: '/images/images.jpeg'
    },
    {
      name: 'Box',
      artist: 'Roddy Rich',
      url: '/audio.pop/roddy.box.mp4',
      cover: '/images/roddy.jpeg'
    },
    {
      name: 'On The Ground',
      artist: 'ROSE',
      url: '/audio.pop/ROSÉ - _On The Ground_ M_V.mp4',
      cover: '/'
    },
    {
      name: 'How Do You Sleep',
      artist: 'Sam Smith',
      url: '/audio.pop/Sam Smith - How Do You Sleep.mp4',
      cover: '/images/samsmith.jpeg'
    },
    {
      name: 'Lose To Love You',
      artist: 'Selena Gomez',
      url: '/audio.pop/Selena Gomez - Lose You To Love Me .mp4',
      cover: '/images/selena.jpeg'
    },
    {
      name: 'SELF CONTROL',
      artist: 'Vinly Disciples',
      url: '/audio.pop/SELF CONTROL - Vinyl Disciples.mp4',
      cover: '/images/images 5.jpeg'
    },
    {
      name: 'Senorita',
      artist: 'Shawn mendes x Camila Cabello',
      url: '/audio.pop/Shawn Mendes_ Camila Cabello - Señorita.mp4',
      cover: '/images/mendes.jpeg'
    },
    {
      name: 'Stay',
      artist: 'zedd',
      url: '/audio.pop/zedd-stay.mp4',
      cover: '/images/zedd.jpeg'
    },
    {
      name: 'Good thing',
      artist: 'Zedd_khelani',
      url: '/audio.pop/Zedd _ Kehlani - Good Thing .mp4',
      cover: '/images/zedd.jpeg'
    },
    {
      name: 'original me',
      artist: 'YUNGBLUD',
      url: '/audio.pop/YUNGBLUD - original me .mp4',
      cover: '/images/musicbrain-610x390.jpg'
    },
    {
      name: 'Time',
      artist: 'NF',
      url: '/audio.pop/time.mp4',
      cover: '/images/Time.jpeg'
    },
    {
      name: 'The Business',
      artist: 'Tiesto',
      url: '/audio.pop/Tiësto - The Business.mp4',
      cover: '/images/photo-1505740420928-5e560c06d30e.jpeg'
    },
    {
      name: 'Save Your Tears',
      artist: 'The Weeknd',
      url: '/audio.pop/The Weeknd - Save Your Tears.mp4',
      cover: '/images/weeknd.jpeg'
    },
    {
      name: 'Takeaway',
      artist: 'The Chainsmokers',
      url: '/audio.pop/The Chainsmokers- Takeaway.mp4',
      cover: '/images/unnamed.jpg'
    },
    {
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      url: '/audio.pop/The Weeknd - Blinding Lights .mp4',
      cover: '/images/weeknd.jpeg'
    },
    {
      name: 'The man',
      artist: 'Taylor Swift',
      url: '/audio.pop/Taylor Swift - The Man.mp4',
      cover: '/images/taylor.jpeg'
    },
    {
      name: 'Broke Me first',
      artist: 'Tate Mc Rae',
      url: '/audio.pop/tate.mp4',
      cover: '/images/tate.jpeg'
    },
    {
      name: 'The Dragon',
      artist: 'Sheyda',
      url: '/audio.pop/sheyda - The Dragon.mp4',
      cover: '/images/whiteflow.jpeg'
    },
    {
      name: '',
      artist: '',
      url: '/',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/',
      cover: '/'
    
    
      }]

       
});

ap1.play()