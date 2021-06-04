var ap1 = new APlayer({
    container: document.getElementById('player4'),
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
      name: 'All falls down',
      artist: 'Alan Walker',
      url: '/audio.edm/Alan Walker - All Falls Down _feat. Noah Cyrus with Digital Farm Animals_.mp4',
      cover: '/'
    },
    {
  
      name: 'Alone',
      artist: 'Alan Walker',
      url: '/audio.edm/Alan Walker - Alone.webm',
      cover: '/'
    },
    {
  
      name: 'Diampond Heart',
      artist: 'Alan Walker',
      url: '/audio.edm/Alan Walker - Diamond Heart _feat. Sophia Somajo_.mp4',
      cover: '/'
    },
    {
  
      name: 'Heroes',
      artist: 'Alesso',
      url: '/audio.edm/Alesso - Heroes _we could be_ ft. Tove Lo.mp4',
      cover: '/'
    },
    {
  
      name: 'Here Me Now',
      artist: 'Alok _Bruno Martini',
      url: '/audio.edm/Alok_ Bruno Martini feat. Zeeba - Hear Me Now _Official Music Video_.mp4',
      cover: '/'
    },
    {
  
      name: 'Wasted',
      artist: 'ALWZ SNNY',
      url: '/audio.edm/ALWZ SNNY - Wasted ft. Krysta Youngs _Official Music Video_.webm',
      cover: '/'
    },
    {
  
      name: 'Mrquette King',
      artist: 'ALWZ SNNY',
      url: '/audio.edm/ALWZ SNNY x Marquette King - SNNYLAND _Official Music Video_.webm',
      cover: '/'
    },
    {
  
      name: 'My time',
      artist: 'ALWZ SNNY',
      url: '/audio.edm/ALWZ SNNY x Prezence - My Time _Official Music Video_.mp4',
      cover: '/'
    },
    {
  
      name: 'Broken Arrows',
      artist: 'Avicii',
      url: '/audio.edm/Avicii - Broken Arrows.mp4',
      cover: '/'
    },
    {
  
      name: ' The Nights',
      artist: 'Avicii',
      url: '/audio.edm/Avicii - The Nights.mp4',
      cover: '/'
    },
    {
  
      name: 'Waiting for love',
      artist: 'Avicii',
      url: '/audio.edm/Avicii - Waiting For Love.webm',
      cover: '/'
    },
    {
  
      name: 'Wake Me up',
      artist: 'Avicii',
      url: '/audio.edm/Avicii - Wake Me Up _Official Video_.webm',
      cover: '/'
    },
    {
  
      name: 'Without YOu',
      artist: 'Avicii',
      url: '/audio.edm/Avicii - Without You _Part 4_ ft. Sandro Cavazza.mp4',
      cover: '/'
    },
    {
  
      name: 'You make me',
      artist: 'Avicii',
      url: '/audio.edm/Avicii - You Make Me _Official_.mp4',
      cover: '/'
    },
    {
  
      name: '',
      artist: '',
      url: '/audio.edm/Calvin Harris - Blame ft. John Newman.mp4',
      cover: '/'
    },
    {
  
      name: 'My Way',
      artist: 'Calvin Harris',
      url: '/audio.edm/Calvin Harris - My Way _Official Video_.mp4',
      cover: '/'
    },
    {
  
      name: 'Summer',
      artist: 'Calvin Harris',
      url: '/audio.edm/Calvin Harris - Summer _Official Video_.webm',
      cover: '/'
    },
    {
  
      name: 'This is what you came for',
      artist: 'Calvin Harris',
      url: '/audio.edm/Calvin Harris - This Is What You Came For _Official Video_ ft. Rihanna.webm',
      cover: '/'
    },
    {
  
      name: 'Giant',
      artist: 'Calvin Harris',
      url: '/audio.edm/Calvin Harris_ Rag_n_Bone Man - Giant _Official Video_.mp4',
      cover: '/'
    },
    {
  
      name: 'No Promises',
      artist: 'Cheat Codes',
      url: '/audio.edm/Cheat Codes - No Promises ft. Demi Lovato _Official Video_.mp4',
      cover: '/'
    },
    {
  
      name: 'Tears',
      artist: 'Clean Bandit',
      url: '/audio.edm/Clean Bandit -  Tears _feat. Louisa Johnson_ _Official Video_.mp4',
      cover: '/'
    },
    {
  
      name: 'Rockabye',
      artist: 'Clean Bandit',
      url: '/audio.edm/Clean Bandit - Rockabye _feat. Sean Paul _ Anne-Marie_ _Official Video_.webm',
      cover: '/'
    },
    {
  
      name: 'Solo',
      artist: 'Clean Bandit',
      url: '/audio.edm/Clean Bandit - Solo _feat. Demi Lovato_ _Official Video_.webm',
      cover: '/'
    },
    {
  
      name: 'Bad',
      artist: 'Dvid Guetta',
      url: '/audio.edm/David Guetta _ Showtek - Bad ft.Vassy _Lyrics Video_.webm',
      cover: '/'
    },
    {
  
      name: 'Hey mama',
      artist: 'David Guetta',
      url: '/audio.edm/David Guetta - Hey Mama _Official Video_ ft Nicki Minaj_ Bebe Rexha _ Afrojack.webm',
      cover: '/'
    },
    {
  
      name: 'LOvers on the sun',
      artist: 'David Guetta',
      url: '/audio.edm/David Guetta - Lovers On The Sun _Official Video_ ft Sam Martin.mp4',
      cover: '/'
    },
    {
  
      name: 'Titanium',
      artist: 'David Guetta',
      url: '/audio.edm/David Guetta - Titanium ft. Sia _Official Video_.webm',
      cover: '/'
    },
    {
  
      name: 'Without You',
      artist: 'David Guetta',
      url: '/audio.edm/David Guetta - Without You ft. Usher _Official Video_.mp4',
      cover: '/'
    },
    {
  
      name: 'This one is for you',
      artist: 'David Guetta',
      url: '/audio.edm/David Guetta ft. Zara Larsson - This One_s For You _Music Video_ _UEFA EURO 2016™ Official Song_.mp4',
      cover: '/'
    },
    {
  
      name: 'Five more hours',
      artist: 'Deorro',
      url: '/audio.edm/Deorro_ Chris Brown - Five More Hours _Official Video_ _Online Version_.mp4',
      cover: '/'
    },
    {
  
      name: 'Let me love you',
      artist: 'DJ Snake',
      url: '/audio.edm/DJ Snake - Let Me Love You ft. Justin Bieber _Official Video_.webm',
      cover: '/'
    },
    {
  
      name: 'MIddle',
      artist: 'DJ Snake',
      url: '/audio.edm/DJ Snake - Middle ft. Bipolar Sunshine.mp4',
      cover: '/'
    },
    {
  
      name: 'You know you like it',
      artist: 'DJ Snake',
      url: '/audio.edm/DJ Snake_ AlunaGeorge - You Know You Like It _Audio_.mp4',
      cover: '/'
    },
    {
  
      name: 'A Different Way',
      artist: 'DJ Snake',
      url: '/audio.edm/DJ Snake_ Lauv - A Different Way _Official Video_.mp4',
      cover: '/'
    },
    {
  
      name: 'All Day and Night',
      artist: 'Europa_Jax Jones',
      url: '/audio.edm/Europa _Jax Jones _ Martin Solveig_ - All Day and Night with Madison Beer _official video_.mp4',
      cover: '/'
    },
    {
  
      name: 'Only One',
      artist: 'Felix Cartal',
      url: '/audio.edm/Felix Cartal - Only One _ft. Karen Harding_ _Official Karaoke Video_.webm',
      cover: '/'
    },
    {
  
      name: 'Aint nobody loves me better',
      artist: 'Felix Jaehn',
      url: '/audio.edm/Felix Jaehn - Ain_t Nobody _Loves Me Better_ _Official Video_ ft. Jasmine Thompson.mp4',
      cover: '/'
    },
    {
      name: 'Most Girls',
      artist: 'Hailee Steinfeld',
      url: '/audio.edm/Hailee Steinfeld - Most Girls _Official Video_.mp4',
      cover: '/'
    },
    {
      name: 'Starving',
      artist: 'Hailee Steinfeld',
      url: '/audio.edm/Hailee Steinfeld_ Grey - Starving ft. Zedd _Official Video_.mp4',
      cover: '/'
    },
    {
      name: 'You should be sad',
      artist: 'Halsey',
      url: '/audio.edm/Halsey - You should be sad _Tiësto Remix_.mp4',
      cover: '/'
    },
    {
      name: 'Beauty And A beast',
      artist: 'Justine Beiber',
      url: '/audio.edm/Justin Bieber - Beauty And A Beat ft. Nicki Minaj _Official Music Video_.webm',
      cover: '/'
    },
    {
      name: 'Die Young',
      artist: 'Ke_ha',
      url: '/audio.edm/Ke_ha - Die Young _Official Video_.mp4',
      cover: '/'
    },
    {
      name: 'Teddy Beats',
      artist: 'Kitty',
      url: '/audio.edm/Kitty - Mami _Teddy Beats Remix_ _Music Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Klingande - Jubel _Official Video HD_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Klingande - Jubel _Official Video HD_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Kungs vs Cookin’ on 3 Burners - This Girl _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Kygo _ Whitney Houston - Higher Love _Official Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Kygo - Happy Now ft. Sandro Cavazza _Official Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Kygo - Stole The Show feat. Parson James _Official Music Video - YTMAs_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Kygo_ Miguel - Remind Me to Forget _Official Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Lost Frequencies - Are You With Me _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Lost Frequencies feat. Janieck Devy - Reality _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Major Lazer - Cold Water _feat. Justin Bieber _ MØ_ _Official Dance Video_.webm',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Major Lazer - Sua Cara _Feat. Anitta _ Pabllo Vittar_ _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Marshmello - Silence Ft. Khalid _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Marshmello ft. Bastille - Happier _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Martin Garrix _ David Guetta - So Far Away _Official Video_ feat. Jamie Scott _ Romy Dya.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Martin Garrix feat. Bonn - High On Life _Official Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Mike Perry - The Ocean ft. Shy Martin.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Mike Posner - I Took A Pill In Ibiza _Seeb Remix_ _Explicit_.webm',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Mirours- Colorful Love _Official Music Video_.webm',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Nicki Minaj - Starships _Explicit_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Njomza - over and done.webm',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Rain Radio _ DJ Craig Gorman - _Talk About_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Rihanna - We Found Love ft. Calvin Harris.webm',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Rita Ora - Anywhere _Official Video_.mp4',
      cover: '/'
    },
    {
      name: '',
      artist: '',
      url: '/audio.edm/Robin Schulz - Sun Goes Down feat. Jasmine Thompson _Official Video_.mp4',
      cover: '/'
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