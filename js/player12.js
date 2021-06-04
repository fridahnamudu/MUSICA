var ap1 = new APlayer({
    container: document.getElementById('player12'),
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
      name: 'Lockdown',
      artist: 'Koffee',
      url: '/audio.reggae/Koffee - Lockdown _Official Video_.mp4',
      cover: '/'
    },

    {
      name: 'Babylon Feel Dis one',
      artist: 'Bob Marley',
      url: '/audio.reggae/Bob Marley - Babylon Feel Dis One _Take 2_.mp4',
      cover: '/'
    },
    {
      name: 'Dreams of brighter days',
      artist: 'Busy Signal',
      url: '/audio.reggae/Busy Signal _ RC - Dreams Of Brighter Days _Official Video_ - Prod. by Silly Walks Discotheque.mp4',
      cover: '/'
    },

    
    {
      name: 'Ntty Dread',
      artist: 'BOb Marley',
      url: '/audio.reggae/Bob Marley - Natty Dread.mp4',
      cover: '/'
    },
    {
      name: 'Weekend love',
      artist: 'Christopher Martin',
      url: '/audio.reggae/Christopher Martin - Weekend Love _Official Video_.mp4',
      cover: '/'
    },
    {
      name: 'Skanking SWeet',
      artist: 'Chronixx',
      url: '/audio.reggae/Chronixx - _Skankin_ Sweet_ _Official Video_ _ Chronology.mp4',
      cover: '/'
    },

    {
      name: 'Zimbabwe',
      artist: 'Bob Marley',
      url: '/audio.reggae/Bob Marley - Zimbabwe.mp4',
      cover: '/'
    },
    {
      name: 'Pimpers Paradise',
      artist: 'Bob Marley',
      url: '/audio.reggae/Bob Marley Pimpers Paradise.mp4',
      cover: '/'
    },
    {
      name: 'Hills and valleys',
      artist: 'Buju Banton',
      url: '/audio.reggae/Buju Banton - Hills and valleys.mp4',
      cover: '/'
    },
    {
      name: 'JHey Dready',
      artist: 'Burning Spear',
      url: '/audio.reggae/Burning Spear - Hey Dready.mp4',
      cover: '/'
    },
       {
      name: 'Come over(missing you)',
      artist: 'Busy Signal',
      url: '/audio.reggae/Busy Signal - Come Over _Missing You_ _ Official Music Video.mp4',
      cover: '/'
    },
    {
      name: 'I wish you were here',
      artist: 'Alpha Blondy',
      url: '/audio.reggae/Alpha Blondy - I Wish You Were Here.mp4',
      cover: '/'
    },

    {
      name: 'ONe more night',
      artist: 'Busy Signal',
      url: '/audio.reggae/Busy Signal - Nightshift _ One More Night _ Official Music Video.mp4',
      cover: '/'
    },
        {
      name: 'Here comes Trouble',
      artist: 'Chronixx',
      url: '/audio.reggae/Chronixx - Here Comes Trouble _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: 'Smile Jamaica',
      artist: 'Chronixx',
      url: '/audio.reggae/Chronixx - Smile Jamaica _Official Video_ - prod. by Silly Walks Discotheque.mp4',
      cover: '/'
    },
    {
      name: 'Spanish Town Rockin',
      artist: 'Chronixx',
      url: '/audio.reggae/Chronixx - Spanish Town Rockin_ _OFFICIAL AUDIO_ _ Chronology.mp4',
      cover: '/'
    },
    {
      name: '18 and over',
      artist: 'Cocoa tea',
      url: '/audio.reggae/cocoa tea - 18 and over.mp4',
      cover: '/'
    },
    {
      name: 'LOve reggae',
      artist: 'Collie Buddz',
      url: '/audio.reggae/Collie Buddz - Love _ Reggae _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: 'They dont know',
      artist: 'Chronixx',
      url: '/audio.reggae/Chronixx - They Dont Know _Official Video_.mp4',
      cover: '/'
    },
   
    {
      name: 'Blood A go run',
      artist: 'culture',
      url: '/audio.reggae/Culture - Blood A Go Run.mp4',
      cover: '/'
    },
    {
      name: 'Let love in',
      artist: 'Dennis Brown',
      url: '/audio.reggae/Dennis Brown  -  Let Love In.mp4',
      cover: '/'
    },
    {
      name: 'Zum Galli',
      artist: 'Eek A Mouse',
      url: '/audio.reggae/Eek-A-Mouse - Zum Galli(1).mp4',
      cover: '/'
    },
    {
      name: 'Cherry oh Baby',
      artist: 'Eric Donaldson',
      url: '/audio.reggae/Eric Donaldson - Cherry Oh Baby.mp4',
      cover: '/'
    },
    {
      name: 'True Rastaman',
      artist: 'Fred Locks',
      url: '/audio.reggae/Fred Locks - True Rastaman.mp4',
      cover: '/'
    },
    {
      name: 'Rockers Nu Crackers',
      artist: 'Glen Washington',
      url: '/audio.reggae/Glen Washington   Rockers Nu Crackers Inc Dub   Revival Dancehall.mp4',
      cover: '/'
    },
    {
      name: 'Feeling Kinda High',
      artist: 'Gregory Isaac',
      url: '/audio.reggae/Gregory Isaac - Feeling Kinda High.mp4',
      cover: '/'
    },
    {
      name: 'Night Nurse',
      artist: 'Gregory Isaac',
      url: '/audio.reggae/Gregory Isaacs - Night Nurse(8).mp4',
      cover: '/'
    },
    {
      name: 'African Child',
      artist: 'Heptones',
      url: '/audio.reggae/Heptones - African Child.mp4',
      cover: '/'
    },
    {
      name: 'Skylaking',
      artist: 'Horace Andy',
      url: '/audio.reggae/Horace Andy _Skylarking_.mp4',
      cover: '/'
    },
    {
      name: 'Ambush',
      artist: 'Israel Vibration',
      url: '/audio.reggae/Israel Vibration - Ambush.mp4',
      cover: '/'
    },
    {
      name: 'Jet plane',
      artist: 'Sonia Spence',
      url: '/audio.reggae/JET PLANE - SONIA SPENCE.mp4',
      cover: '/'
    },
  
    {
      name: 'Vultures',
      artist: 'Israel Vibration',
      url: '/audio.reggae/Israel Vibration - Vultures.mp4',
      cover: '/'
    },
    
   
    {
      name: 'Toast',
      artist: 'Koffee',
      url: '/audio.reggae/Koffee - Toast _Official Video_.mp4',
      cover: '/'
    },
    {
      name: 'Cant believe',
      artist: 'Kranium',
      url: '/audio.reggae/Kranium - Can_t Believe ft. Ty Dolla _ign _ WizKid _Dance Video_.mp4',
      cover: '/'
    },
    {
      name: 'Natty Burial',
      artist: 'Lone Ranger',
      url: '/audio.reggae/Lone Ranger - Natty Burial.mp4',
      cover: '/'
    },
    {
      name: 'Who knows',
      artist: 'Protoje',
      url: '/audio.reggae/Protoje - Who Knows ft. Chronixx _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: 'Soul Provider',
      artist: 'Romain Virgo',
      url: '/audio.reggae/Romain Virgo - Soul Provider _Brighter Days Riddim_ - prod. by Silly Walks Discotheque.mp4',
      cover: '/'
    },
    {
      name: 'Unseen Guest',
      artist: 'steel pulse',
      url: '/audio.reggae/Steel Pulse - Unseen Guest.mp4',
      cover: '/'
    },
    {
      name: 'Love song',
      artist: 'Etana',
      url: '/audio.reggae/Etana - Love Song _Official Album Audio_.mp4',
      cover: '/'
    },

    {
      name: 'Cant cross the border',
      artist: 'Sugar Minott',
      url: '/audio.reggae/Sugar Minott - Can_t Cross The Border.mp4',
      cover: '/'
    },
    {
      name: 'Gimme likkle one drop',
      artist: 'Tarrus Riley',
      url: '/audio.reggae/Tarrus Riley - Gimme Likkle One Drop _Official Video_.mp4',
      cover: '/'
    },
    {
      name: 'Just the way you are',
      artist: 'Tarrus Riley',
      url: '/audio.reggae/Tarrus Riley - Just The Way You Are _Official Video_.mp4',
      cover: '/'
    },
    {
      name: 'Lighter',
      artist: 'Tarrus Riley',
      url: '/audio.reggae/Tarrus Riley - Lighter _Official Video_ ft. Shenseea_ Rvssian.mp4',
      cover: '/'
    },
    {
      name: 'Think Twice',
      artist: 'Warriors Musick',
      url: '/audio.reggae/Think Twice Riddim Video Medley_Studio Vibes_. Warriors Musick Prod..mp4',
      cover: '/'
    },
    {
      name: 'Colouring this life',
      artist: 'Vybz Kartel',
      url: '/audio.reggae/Vybz Kartel - Colouring This Life _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: 'STEP UP',
      artist: 'IRIE LOVE',
      url: '/audio.reggae/STEP UP - IRIE LOVE _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: 'Love song',
      artist: 'Etana',
      url: '/audio.reggae/Etana - Love Song _Official Album Audio_.mp4',
      cover: '/'
    },
    {
      name: 'Weakness in me',
      artist: 'Etana',
      url: '/audio.reggae/Etana - Weakness In Me.mp4',
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
    },

    {
      name: '',
      artist: '',
      url: '/',
      cover: '/'
}]

       
});

ap1.play()