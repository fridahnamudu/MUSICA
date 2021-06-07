var ap1 = new APlayer({
    container: document.getElementById('player13'),
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
    theme: 'brown',
    
    
    audio: [{
      name: 'SORRY_BLAME ME ',
      artist: 'AKON',
      url: '/audio.rnb/AKON   SORRY_ BLAME ME AUDIO OFFICIAL HQ(2).mp4',
      cover: '/images/akon.jpeg'
    },
   
        {
      name: 'i want it that way',
      artist: 'Backstreet Boys',
      url: '/audio.rnb/Backstreet Boys - I Want It That Way _Official HD Video_(3).mp4',
      cover: '/images/street.jpeg'
    },
    {
      name: 'Come Through',
      artist: 'Chris Brown',
      url: '/audio.rnb/H.E.R. - Come Through _Visualizer_ ft. Chris Brown.mp4',
      cover: '/images/brown.jpeg'
    },

   
    {
      name: 'Make you feel love',
      artist: 'ADELE',
      url: '/audio.rnb/ADELE - _Make You Feel My Love_.mp4',
      cover: '/images/images.jpeg'
    },
    {
      name: 'If i were a boy',
      artist: 'Beyonce',
      url: '/audio.rnb/Beyoncé - If I Were A Boy.mp4',
      cover: '/images/bey.jpg'
    },
    {
      name: 'Show me the meaning',
      artist: 'Backstreet Boys',
      url: '/audio.rnb/Backstreet Boys - Show Me The Meaning Of Being Lonely(1).mp4',
      cover: '/images/street.jpeg'
    },
   
   
    {
      name: 'bad boy',
      artist: 'Beyonce',
      url: '/audio.rnb/Beyoncé - Baby Boy _Video_ ft. Sean Paul.mp4',
      cover: '/images/bey.jpg'
    }, 
    {
      name: 'With you',
      artist: 'Chris Brown',
      url: '/audio.rnb/Chris Brown - With You _Official Video_.mp4',
      cover: '/images/brown.jpeg'
    },

    {
      name: 'incomplete',
      artist: 'Backstreet Boys',
      url: '/audio.rnb/Backstreet Boys - Incomplete _Official HD Video_.mp4',
      cover: '/images/street.jpeg'
    },
    
    {
      name: 'Take a bow',
      artist: 'Rihanna',
      url: '/audio.rnb/Rihanna - Take A Bow _Official Music Video_.mp4',
      cover: '/images/rihanna.jpeg'
    },

    
    {
      name: 'Irreplaceable',
      artist: 'Beyonce',
      url: '/audio.rnb/Beyoncé - Irreplaceable.mp4',
      cover: '/images/bey.jpg'
    },
    {
      name: 'On Bended knee',
      artist: 'Boyz II men',
      url: '/audio.rnb/Boyz II Men - On Bended Knee.mp4',
      cover: '/images/flower.jpg'

    },
    {
      name: 'BELIEVE IT',
      artist: 'PARTYNEXTDOOR x Rihanna',
      url: '/audio.rnb/PARTYNEXTDOOR _ Rihanna - BELIEVE IT _Official Lyrics Video_.mp4',
      cover: '/images/rihanna.jpeg'
    },
    {
      name: 'Dont matter',
      artist: 'Akon',
      url: '/audio.rnb/Akon - Don_t Matter _Official Music Video_.mp4',
      cover: '/images/akon.jpeg'
    },
    {
      name: 'Shape of my heart',
      artist: 'Backstreet Boys',
      url: '/audio.rnb/Backstreet Boys - Shape Of My Heart _Official HD Video_(1).mp4',
      cover: '/images/street.jpeg'
    },
    {
      name: 'KIss Kiss',
      artist:'Chris Brown',
      url: '/audio.rnb/Chris Brown - Kiss Kiss ft. T-Pain.mp4',
      cover: '/images/brown.jpeg'
    },
    {
      name: 'Impossible',
      artist: 'Shontelle',
      url: '/audio.rnb/Shontelle - Impossible _Official Video_.mp4',
      cover: '/images/images (2).jpeg'
    },
    {
      name: 'Run It ',
      artist: 'Chris Brown',
      url: '/audio.rnb/Chris Brown - Run It_ _Official HD Video_ ft. Juelz Santana.mp4',
      cover: '/images/brown.jpeg'
    },
    {
      name: 'Superhuman',
      artist: 'Chris Brown',
      url: '/audio.rnb/Chris Brown - Superhuman _Official HD Video_ ft. Keri Hilson.mp4',
      cover: '/images/brown.jpeg'
    },
        {
      name: 'Say My Name',
      artist: 'Destinys Child',
      url: '/audio.rnb/Destiny_s Child - Say My Name _Official Video_.mp4',
      cover: '/images/destiny.jpeg'
    },
    {
      name: 'Party Up',
      artist: 'DMX',
      url: '/audio.rnb/DMX - Party Up _Up In Here_.mp4',
      cover: '/images/flower.jpg'
    },
    {
      name: 'clumsy',
      artist: 'Fergie',
      url: '/audio.rnb/Fergie - Clumsy _Official Music Video_(1).mp4',
      cover: '/images/edm4.jpeg'
    },
    {
      name: 'Tonight',
      artist: 'JOhn Legend',
      url: '/audio.rnb/John Legend - Tonight _Best You Ever Had_ _Official Video_ ft. Ludacris(4).mp4',
      cover: '/images/legend.jpeg'
    },
    {
      name: 'Fool Again',
      artist: 'Westlife',
      url: '/audio.rnb/Westlife - Fool Again _Official Video_.mp4',
      cover: '/images/west.jpeg'
    },
    {
      name: 'Too little Too Late',
      artist: 'Jojo',
      url: '/audio.rnb/JoJo - Too Little_ Too Late Official Music Video.mp4',
      cover: '/images/light.png'
    },
    {
      name: 'As long As you Love me',
      artist: 'Backstreet Boys',
      url: '/audio.rnb/Backstreet Boys - As Long As You Love Me _Official HD Video_.mp4',
      cover: '/images/street.jpeg'
    },

    {
      name: 'One step at a time',
      artist: 'Jordin Sparks',
      url: '/audio.rnb/Jordin Sparks - One Step At A Time _Official Video_.mp4',
      cover: '/images/unnamed.jpg'
    },
    {
      name: 'Cry Me a river',
      artist: 'Justine Timberlake',
      url: '/audio.rnb/Justin Timberlake - Cry Me A River _Official_.mp4',
      cover: '/images/timberlake.jpeg'
    },
    {
      name: 'Rock your body',
      artist: 'JUstine Timberlake',
      url: '/audio.rnb/Justin Timberlake - Rock Your Body _Video_.mp4',
      cover: '/images/timberlake.jpeg'
    },
    {
      name: 'SexyBack',
      artist: 'JUstine Timberlake',
      url: '/audio.rnb/Justin Timberlake - SexyBack _Director_s Cut_ ft. Timbaland.mp4',
      cover: '/images/timberlake.jpeg'
    },
    {
      name: 'Touch my body',
      artist: 'Mariah Carey',
      url: '/audio.rnb/Mariah Carey - Touch My Body _Official Music Video_.mp4',
      cover: '/images/images (2).png'
    },
    {
      name: 'Because of you',
      artist: 'Ne-Yo',
      url: '/audio.rnb/Ne-Yo - Because Of You _Official Music Video_.mp4',
      cover: '/images/images (4).jpeg'
    },
    {
      name: 'Pon de Replay',
      artist: 'RIhanna',
      url: '/audio.rnb/Rihanna - Pon de Replay _Internet Version_.mp4',
      cover: '/images/rihanna.jpeg'
    },
    {
      name: 'FLying without wings',
      artist: 'Westlife',
      url: '/audio.rnb/Westlife - Flying Without Wings _Official Video_.mp4',
      cover: '/images/west.jpeg'
    },

    {
      name: 'Rehab',
      artist: 'Rihanna',
      url: '/audio.rnb/Rihanna - Rehab _Official Music Video_ ft. Justin Timberlake(2).mp4',
      cover: '/images/rihanna.jpeg'
    },
        
    {
      name: 'Soledad',
      artist: 'Westlife',
      url: '/audio.rnb/Soledad- Westlife _w_ lyrics_.mp4',
      cover: '/images/west.jpeg'
    },
       {
      name: 'Igotta a feeling',
      artist: 'The Black Eyed Peas',
      url: '/audio.rnb/The Black Eyed Peas - I Gotta Feeling _Official Music Video_.mp4',
      cover: '/images/blackeyed.jpeg'
    },
    {
      name: 'Queen of my heart',
      artist: 'Westlife',
      url: '/audio.rnb/Westlife - Queen Of My Heart _Official Video_(4).mp4',
      cover: '/images/west.jpeg'
    },
    {
      name: 'Meet me halfway',
      artist: 'The Black Eyed Peas',
      url: '/audio.rnb/The Black Eyed Peas - Meet Me Halfway _Official Music Video_.mp4',
      cover: '/images/blackeyed.jpeg'
    },
    {
      name: 'Apologize',
      artist: 'Timbaland',
      url: '/audio.rnb/Timbaland - Apologize ft. OneRepublic.mp4',
      cover: '/images/images 10.jpeg'
    },
    {
      name: 'All to me',
      artist: 'GIveon',
      url: '/audio.rnb/Giveon - All To Me _Official Audio_.mp4',
      cover: '/images/giveon.jpeg'
    },

    {
      name: 'LOve in this club',
      artist: 'Usher',
      url: '/audio.rnb/Usher - Love in This Club _Official Music Video_ ft. Young Jeezy.mp4',
      cover: '/images/images (3).jpeg'
    },
      
    {
      name: 'My Love',
      artist: 'Westlife',
      url: '/audio.rnb/Westlife - My Love _Official Video_.mp4',
      cover: '/images/west.jpeg'
    },
    
    {
      name: 'LIve your life',
      artist: 'Rihana',
      url: '/audio.rnb/T.I. - Live Your Life ft. Rihanna _Official Video_.mp4',
      cover: '/images/rihanna.jpeg'
    },

    {
      name: 'Ride for me',
      artist: 'Anne Marie',
      url: '/audio.rnb/Ann Marie - Ride For Me ft Yung Bleu _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: 'Underdog',
      artist: 'Alicia Keys',
      url: '/audio.rnb/Alicia Keys - Underdog _Official Video_.mp4',
      cover: '/images/alicia.jpeg'
    },
    {
      name: 'Off the table',
      artist: 'Ariana Grande',
      url: '/audio.rnb/Ariana Grande_ The Weeknd - off the table _audio_.mp4',
      cover: '/images/grande.jpeg'
    },
    {
      name: 'Young_Alive',
      artist: 'Bazzi',
      url: '/audio.rnb/Bazzi - Young _ Alive _Official Music Video_.mp4',
      cover: '/images/bazzii.jpeg'
    },
    {
      name: 'Leave the door open',
      artist: 'Silk Sonic',
      url: '/audio.rnb/Bruno Mars_ Anderson .Paak_ Silk Sonic - Leave the Door Open _Official Video_.mp4',
      cover: '/images/silck.jpeg'
    },
    {
      name: 'Do It',
      artist: 'Chloe x Halle',
      url: '/audio.rnb/Chloe x Halle - Do It _Official Video_.mp4',
      cover: '/images/chloexhalle.jpeg'
    },
    {
      name: 'Say So',
      artist: 'Doja Cat',
      url: '/audio.rnb/Doja Cat - Say So _Official Video_.mp4',
      cover: '/images/doja.jpeg'
    },
    {
      name: 'Trip',
      artist: 'Ella Mai',
      url: '/audio.rnb/Ella Mai - Trip _Audio_.mp4',
      cover: '/images/mai.jpeg'
    },
        {
      name: 'Heartbreak Annoiversary',
      artist: 'Giveon',
      url: '/audio.rnb/Giveon - Heartbreak Anniversary _Official Music Video_.mp4',
      cover: '/images/giveon.jpeg'
    },
       {
      name: 'B.S',
      artist: 'Jhene Aiko',
      url: '/audio.rnb/Jhené Aiko - B.S. ft. H.E.R. _Official Audio_.mp4',
      cover: '/images/aiko.jpeg'
    },
    {
      name: 'Born Tired',
      artist: 'Jhene Aiko',
      url: '/audio.rnb/Jhené Aiko - Born Tired _Official Video_.mp4',
      cover: '/images/aiko.jpeg'
    },
    {
      name: 'Peaches',
      artist: 'Justine Bieber',
      url: '/audio.rnb/Justin Bieber - Peaches ft. Daniel Caesar_ Giveon.mp4',
      cover: '/images/beiber.jpeg'
    },
    
    {
      name: 'at MY worst',
      artist: 'Pink sweat',
      url: '/audio.rnb/Pink Sweat_ - At My Worst _feat. Kehlani_ _Official Video_.mp4',
      cover: '/'
    },
    {
      name: 'Good Days',
      artist: 'SZA',
      url: '/audio.rnb/SZA - Good Days _Official Video_.mp4',
      cover: '/images/sza.jpeg'
    },
    {
      name: 'The Other Side',
      artist: 'Justine Timberlake',
      url: '/audio.rnb/SZA_ Justin Timberlake - The Other Side _From Trolls World Tour_.mp4',
      cover: '/images/timberlake.jpeg'
    },
    {
      name: '',
      artist: '',
      url: '/',
      cover: '/'
    



    }]

       
});

ap1.play()