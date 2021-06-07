var ap1 = new APlayer({
    container: document.getElementById('player6'),
    fixed: false,                   //Turn on the bottom suction mode
    mimi: false,                    //Turn on mini mode
    autoplay: false,                //Audio autoplay
    //theme: '#b7daff',               //Theme color
    loop: 'all',                    //Audio loop, Optional values: 'all', 'one', 'none'
    order: 'list',                  //Audio cycle order, Optional values: 'list', 'random'
    preload: 'auto',
    listFolded: false,              //List default collapse
    listMaxHeight: 900,             //    Maximum height of list
    storageName: 'aplayer-setting', //Store player settings localStorage key
    theme:'brown',
    
    audio: [{
      name: 'Naomba',
      artist: 'Adawnage Band',
      url: '/audio.gospel/Adawnage Band - Naomba _Official Video_.mp4',
      cover: '/images/gos2.jpeg'
    },
    {
      name: 'Uwezo',
      artist: 'Adawnage Band',
      url: '/audio.gospel/Adawnage Band - Uwezo _Official Video_.mp4',
      cover: '/images/gos2.jpeg'
    },
    {
      name: 'siteketei',
      artist: 'Angel Benard',
      url: '/audio.gospel/Angel Benard - Siteketei _Official Video_.mp4',
      cover: 'images/gos3.jpeg/'
    },
    {
      name: 'Niombee',
      artist: 'Bensoul',
      url: '/audio.gospel/Bensoul - Niombee _Official Music Video_ For Skiza Dial _811_548_.mp4',
      cover: '/images/gos4.png'
    },
    {
      name: 'ONGOZA HATUA ZANGU',
      artist: 'CHRISTINA SHUSHO',
      url: '/audio.gospel/CHRISTINA SHUSHO _ ONGOZA HATUA ZANGU _Official Video_.mp4',
      cover: '/images/gos5.jpeg'
    },
    
    {
      name: 'Bwana Umenichunguza',
      artist: 'CHRISTINA SHUSHO',
      url: '/audio.gospel/Christina Shusho - Bwana Umenichunguza _Official Video_.mp4',
      cover: '/images/gos5.jpeg'
    },
    {
      name: 'WEWE NI MUNGU',
      artist: 'DADDY OWEN',
      url: '/audio.gospel/DADDY OWEN feat. RIGAN SARKOZI - WEWE NI MUNGU _Official Video_.mp4',
      cover: '/images/gos5.png'
    },
    {
      name: 'Story yangu',
      artist: 'Bahati',
      url: '/audio.gospel/Denno _ Bahati - Story Yangu _Official Video_.mp4',
      cover: '/images/gos6.jpeg'
    },
    {
      name: 'Dominion',
      artist: 'Jason Nelson',
      url: '/audio.gospel/Dominion - Jason Nelson _HD_.mp4',
      cover: '/images/gos7.jpeg'
    },
    {
      name: 'Ebenezer',
      artist: 'Angela Chibalonza',
      url: '/audio.gospel/Ebenezer- Angela Chibalonza.mp4',
      cover: '/images/gos8.jpeg'
    },
    {
      name: 'Ni Kwa Neema Na Rehema',
      artist: 'Edson Mwasabwite ',
      url: '/audio.gospel/Edson Mwasabwite - Ni Kwa Neema Na Rehema _gospel song_.mp4',
      cover: '/images/gos9.jpeg'
    },
    {
      name: 'EL SHADDAI',
      artist: 'H_ART THE BAND',
      url: '/audio.gospel/EL SHADDAI - H_ART THE BAND ft. CEDO _OFFICIAL VIDEO_ _SMS SKIZA 7636925 TO 811_.mp4',
      cover: '/images/gos10.jpeg'
    },
    {
      name: 'Enda Nasi',
      artist: 'Reuben Kigame',
      url: '/audio.gospel/Enda Nasi By Reuben Kigame and Sifa Voices- official video _Skiza Code_ 7010078_.mp4',
      cover: '/images/gos11.png'
    },
    {
      name: 'Mungu Mkuu',
      artist: 'Evelyn Wanjiru',
      url: '/audio.gospel/Evelyn Wanjiru -Mungu Mkuu _official video_  SMS Skiza 71121904 To 811.mp4',
      cover: '/images/gos12.jpeg'
    },
    {
      name: 'Excess love',
      artist: 'Mercy Chinwo',
      url: '/audio.gospel/Excess Love - Mercy Chinwo _Official Video_.mp4',
      cover: '/images/gos13.jpeg'
    },
    {
      name: 'KIBALI',
      artist: 'Florence Andenyi',
      url: '/audio.gospel/Florence Andenyi - KIBALI_FAVOUR_ SMS  SKIZA 9040522 TO 811.mp4',
      cover: '/images/gos14.jpeg'
    },
    {
      name: ' NAONA MBALI',
      artist: 'FLORENCE ANDENYI',
      url: '/audio.gospel/FLORENCE ANDENYI - NAONA MBALI _OFFICIAL VIDEO_ SMS SKIZA 9042395 TO 811.mp4',
      cover: '/images/gos14.jpeg'
    },
    {
      name: 'Glory to Your Name',
      artist: 'Byron Cage',
      url: '/audio.gospel/Glory to Your Name - Byron Cage.mp4',
      cover: '/images/gos15.jpeg'
    },
    {
      name: 'There Is Nothing Better',
      artist: 'Naomi Raine',
      url: '/audio.gospel/I Am Loved _ There Is Nothing Better  _feat. Naomi Raine_ - Maverick City Music _ TRIBL Music.mp4',
      cover: '/images/gos14.png'
    },
    {
      name: 'I Surrender',
      artist: 'Hillsong Worship',
      url: '/audio.gospel/I Surrender - Hillsong Worship.mp4',
      cover: '/images/gos15.png'
    },
    {
      name: 'Napokea kwako',
      artist: 'Janet Otieno Ft. Christina Shusho',
      url: '/audio.gospel/Janet Otieno Ft. Christina Shusho _SMS Skiza 7195627 TO 811.mp4',
      cover: '/images/gos16.jpeg'
    },
    {
      name: 'Jesus I Need You',
      artist: 'Hillsong Worship',
      url: '/audio.gospel/Jesus I Need You - Hillsong Worship(1).mp4',
      cover: '/images/gos15.png'
    },
    {
      name: 'jina la yesu ',
      artist: 'pst Ruth Matete',
      url: '/audio.gospel/jina la yesu cover by pst Ruth Matete.mp4',
      cover: '/images/gos17.jpeg'
    },
    {
      name: 'Sitabaki Nilivyo',
      artist: 'JOEL LWAGA',
      url: '/audio.gospel/JOEL LWAGA - Sitabaki Nilivyo _Official Video_.mp4',
      cover: '/images/gos18.jpeg'
    },
    {
      name: 'I Believe',
      artist: 'Jonathan Nelson',
      url: '/audio.gospel/Jonathan Nelson - I Believe _Island Medley_ _LIVE_.mp4',
      cover: '/images/gos19.jpeg'
    },
    {
      name: 'Usiku na Mchana',
      artist: 'Kambua',
      url: '/audio.gospel/Kambua - Usiku Na Mchana _Official Video_.mp4',
      cover: '/images/gos20.jpeg'
    },
    {
      name: 'King of Kings ',
      artist: 'Hillsong Worship',
      url: '/audio.gospel/King of Kings _Live_ - Hillsong Worship(1).mp4',
      cover: '/images/gos15.png'
    },
    {
      name: 'Kutembea Nawe',
      artist: 'Rebekah Dawn',
      url: '/audio.gospel/Kutembea Nawe - Rebekah Dawn _OFFICIAL MUSIC VIDEO_ For SKIZA Dial _811_146_.mp4',
      cover: '/images/gos21`.jpeg'
    },
    {
      name: ' Chinedum ',
      artist: 'Mercy Chinwo',
      url: '/audio.gospel/Mercy Chinwo - Chinedum _Official Video_.mp4',
      cover: '/images/gos13.jpeg'
    },
    {
      name: 'Mwema ',
      artist: 'Mercy Masika',
      url: '/audio.gospel/Mercy Masika - Mwema _Official Video_.mp4',
      cover: '/images/gos22.jpeg'
    },
    {
      name: 'NIKUPENDEZE',
      artist: 'MERCY MASIKA',
      url: '/audio.gospel/MERCY MASIKA - NIKUPENDEZE _OFFICIAL VIDEO_.mp4',
      cover: '/images/gos22.jpeg'
    },
    {
      name: 'MIGHTY MAN OF WAR',
      artist: 'JIMMY D PSALMIST',
      url: '/audio.gospel/MIGHTY MAN OF WAR - JIMMY D PSALMIST _OFFICIAL VIDEO_.mp4',
      cover: '/images/gos23.jpeg'
    },
    {
      name: ' All that matters',
      artist: 'MInister GUC',
      url: '/audio.gospel/Minister GUC - All That Matters _LIVE_.mp4',
      cover: '/images/gospel1.jpeg'
    },
    {
      name: 'Moyo wangu',
      artist: 'Patrick Kubuya',
      url: '/audio.gospel/Moyo Wangu by Patrick Kubuya dial _811_406_ to download this song.mp4',
      cover: '/images/gos3.jpeg'
    },
    {
      name: 'Mungu Ni Mungu Tu',
      artist: 'Christopher Mwahangila',
      url: '/audio.gospel/Mungu Ni Mungu Tu _ Christopher Mwahangila _ Official Version Video.mp4',
      cover: '/images/gos2.jpeg'
    },
    {
      name: ' beautifier',
      artist: 'Chris shalom',
      url: '/audio.gospel/my beautifier-chris shalom -SKIZA-7611001 to 811.mp4',
      cover: '/images/gos20.jpeg'
    },
    {
      name: 'Nimekupata Yesu_',
      artist: ' Ambassadors of Christ Choir',
      url: '/audio.gospel/Nimekupata Yesu_ Ambassadors of Christ Choir Official video Album 11_ 2015 __250788790149_.mp4',
      cover: '/images/gos23.jpeg'
    },
    {
      name: 'No Longer Slaves',
      artist: 'Jonathan David and Melissa Helser',
      url: '/audio.gospel/No Longer Slaves _Official Lyric Video_ - Jonathan David and Melissa Helser _ We Will Not Be Shaken.mp4',
      cover: '/images/gos2.jpeg'
    },
    {
      name: 'Oceans',
      artist: 'Hillsong UNITED',
      url: '/audio.gospel/Oceans _Where Feet May Fail_ - Hillsong UNITED - Live in Israel.mp4',
      cover: '/images/gos15.png'
    },
    {
      name: 'Promises',
      artist: 'Maverick City',
      url: '/audio.gospel/Promises _feat. Joe L Barnes _ Naomi Raine_ - Maverick City _ TRIBL.mp4',
      cover: '/images/gos14.jpeg'
    },
    {
      name: ' Ekwueme',
      artist: 'Prospa Ochimana',
      url: '/audio.gospel/Prospa Ochimana - Ekwueme feat. Osinachi _Live Ministration_.mp4',
      cover: '/images/gos13.jpeg'
    },
    {
      name: ' Liseme',
      artist: 'Sarah K',
      url: '/audio.gospel/Sarah K -  Liseme _Official Video_ SKIZA _71123876_.mp4',
      cover: '/images/gos11.png'
    },
    {
      name: 'Nara',
      artist: 'Tim Godfrey ft Travis Greene',
      url: '/audio.gospel/Tim Godfrey ft Travis Greene - Nara _Official Video_.mp4',
      cover: '/images/gos14.jpeg'
    },
    {
      name: ' Everything _Amen_',
      artist: 'Timi Dakolo',
      url: '/audio.gospel/Timi Dakolo - Everything _Amen_ _Official Video_.mp4',
      cover: '/images/gos13.jpeg'
    },
    {
      name: 'UMETUKUKA',
      artist: 'ISRAEL EZEKIA',
      url: '/audio.gospel/UMETUKUKA BY ISRAEL EZEKIA _OFFICIAL VIDEO_ sms SKIZA 5327083 to 811.mp4',
      cover: '/images/gos11.png'
    },
    {
      name: 'Usikiaye Maombi',
      artist: 'Kathy Praise',
      url: '/audio.gospel/Usikiaye Maombi - Kathy Praise _New Official Video_ SKIZA 7617244.mp4',
      cover: '/images/gos6.jpeg'
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