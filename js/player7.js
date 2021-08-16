var ap1 = new APlayer({
    container: document.getElementById('player7'),
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
      name: 'Drummer boy',
      artist: 'Pentatonix',
      url: '/audio.holiday/_Official Video_ Little Drummer Boy - Pentatonix(1).mp4',
      cover: '/images/holi1.jpeg'
    },
    {
      name: 'THats christmass to me',
      artist: 'Pentatonix',
      url: '/audio.holiday/_Official Video_ That’s Christmas To Me - Pentatonix.mp4',
      cover: '/images/holi2.jpeg'
    },
    {
      name: 'The first noel',
      artist: 'Pentatonix',
      url: '/audio.holiday/_Official Video_ The First Noel – Pentatonix.mp4',
      cover: '/images/holi3.jpeg'
    },
    {
      name: 'White Winter Hymnal',
      artist: 'Pentatonix',
      url: '/audio.holiday/_Official Video_ White Winter Hymnal - Pentatonix _Fleet Foxes Cover_(5).mp4',
      cover: '/images/holi4.jpeg'
    },
    {
      name: 'Happy Holiday',
      artist: 'Andy Williams',
      url: '/audio.holiday/Andy Williams - Happy Holiday _ The Holiday Season _Official Audio_.mp4',
      cover: '/images/holi5.jpeg'
    },
    {
      name: 'Its the most wonderful time of the year',
      artist: 'Andy Williams',
      url: '/audio.holiday/Andy Williams - It_s the Most Wonderful Time of the Year _Official Music Video_(2).mp4',
      cover: '/images/holi6.jpeg'
    },
    {
      name: 'Away in a manger',
      artist: 'CHristmas carol',
      url: '/audio.holiday/Away in a Manger with Lyrics _ Christmas Carol _ Song(6).mp4',
      cover: '/images/holi7.jpeg'
    },
    {
      name: 'BOney M',
      artist: 'Marys boy child ',
      url: '/audio.holiday/Boney M. - Mary_s Boy Child _ Oh My Lord _Dublin 1978_ _VOD_.mp4',
      cover: '/images/holi8.jpeg'
    },
    {
      name: 'Britney Spears',
      artist: 'My only wish',
      url: '/audio.holiday/Britney Spears - My Only Wish _This Year_ _Official Audio_(2).mp4',
      cover: '/images/holi9.jpeg'
    },
    {
      name: 'Santa Claus is coming to town',
      artist: 'Bruce Springsteen',
      url: '/audio.holiday/Bruce Springsteen - Santa Claus Is Comin_ To Town _Official Audio_(2).mp4',
      cover: '/images/holi10.jpeg'
    },
    {
      name: 'This Christmas',
      artist: 'Christina Aguilera',
      url: '/audio.holiday/Christina Aguilera - This Christmas _Official Audio_(3).mp4',
      cover: '/images/holi11.jpeg'
    },
    {
      name: 'Baby please come home',
      artist: 'Darlene love',
      url: '/audio.holiday/Darlene Love - Christmas _Baby Please Come Home_ _Official Music Video_.mp4',
      cover: 'images/holi8.jpeg/'
    },
    {
      name: 'Jingle Bell Rock',
      artist: 'Daryl Hall',
      url: '/audio.holiday/Daryl Hall _ John Oates - Jingle Bell Rock _Daryl_s Version - HD_.mp4',
      cover: '/images/holi12.jpeg'
    },
    {
      name: 'Let it Snow',
      artist: 'Dean Martin',
      url: '/audio.holiday/Dean Martin - Let it Snow_(2).mp4',
      cover: '/images/holi13.jpeg'
    },
    {
      name: 'Silver Bells ',
      artist: 'Dean Martin',
      url: '/audio.holiday/Dean Martin - Silver Bells _Official Audio_(4).mp4',
      cover: '/images/holi15.jpeg'
    },
    {
      name: 'White Christmas',
      artist: 'Destinys child',
      url: '/audio.holiday/Destiny_s Child - White Christmas.mp4',
      cover: '/'
    },
    {
      name: 'Eartha Kitt',
      artist: 'Santa Baby',
      url: '/audio.holiday/Eartha Kitt - Santa Baby _Official Music Video_.mp4',
      cover: '/images/holi1.jpeg'
    },
    {
      name: 'Step Into Christmas',
      artist: 'Elton John',
      url: '/audio.holiday/Elton John - Step Into Christmas(3).mp4',
      cover: '/images/holi3.jpeg'
    },
    {
      name: 'BLue Christmas',
      artist: 'Elvis Preslry',
      url: '/audio.holiday/Elvis Presley - Blue Christmas _Official Animated Video_.mp4',
      cover: '/images/holi2.jpeg'
    },
    {
      name: 'Hallelujah',
      artist: 'Pentatonix',
      url: '/audio.holiday/Hallelujah – Pentatonix _From A Pentatonix Christmas Special_(4).mp4',
      cover: 'images/holi6.jpeg/'
    },
    {
      name: 'Its the most wonderful time of the year',
      artist: 'Sam Hurley',
      url: '/audio.holiday/It_s the Most Wonderful Time of the Year_ - Official Video _Sam Hurley_ _ Jam Jr. Christmas_.mp4',
      cover: '/images/holi6.jpeg'
    },
    {
      name: 'JIngle Bells',
      artist: 'Christmas Charol',
      url: '/audio.holiday/Jingle Bells with Lyrics _ Christmas Songs HD _ Christmas Songs and Carols.mp4',
      cover: '/images/holi7.jpeg'
    },
    {
      name: 'When a child is born',
      artist: 'Johnny Mathis',
      url: '/audio.holiday/Johnny Mathis - When a Child Is Born _from Home for Christmas_(2).mp4',
      cover: '/images/holi8.jpeg'
    },
    {
      name: 'Joy to the world',
      artist: 'Christmas charol',
      url: '/audio.holiday/Joy to the World Christmas Carol with Lyrics(3).mp4',
      cover: '/images/holi9.jpeg'
    },
    {
      name: 'The Christmas Song',
      artist: 'Judy Garland',
      url: '/audio.holiday/Judy Garland _ Mel Tormé - The Christmas Song.mp4',
      cover: 'images/holi10.jpeg/'
    },
    {
      name: 'The man with the bag',
      artist: 'Kellie Pickler',
      url: '/audio.holiday/Kellie Pickler - The Man with the Bag _Live_(3).mp4',
      cover: '/images/holi11.jpeg'
    },
    {
      name: 'Underneath the tree',
      artist: 'Kelly Clarkson',
      url: '/audio.holiday/Kelly Clarkson - Underneath the Tree _Official Video_.mp4',
      cover: '/images/holi12.jpeg'
    },
    {
      name: 'All i want for christmas is you',
      artist: 'Mariah Carey',
      url: '/audio.holiday/Mariah Carey - All I Want For Christmas Is You _Official Video_(2).mp4',
      cover: '/images/mariah.jpeg'
    },
    {
      name: 'O Holy Night',
      artist: 'Mariah Carey',
      url: '/audio.holiday/Mariah Carey - O Holy Night _Official HD Video_.mp4',
      cover: '/images/mariah.jpeg'
    },
    {
      name: 'Oh Santa',
      artist: 'Mariah Carey',
      url: '/audio.holiday/Mariah Carey - Oh Santa_ _Official Music Video_ ft. Ariana Grande_ Jennifer Hudson.mp4',
      cover: '/images/mariah.jpeg'
    },
    {
      name: 'Santa Claus IS Coming to town',
      artist: 'Mariah Carey',
      url: '/audio.holiday/Mariah Carey - Santa Claus Is Comin_ to Town _Animated Video_(4).mp4',
      cover: '/images/mariah.jpeg'
    },
    {
      name: 'HOlidays',
      artist: 'Meghan Trainor',
      url: '/audio.holiday/Meghan Trainor - Holidays _Official Music Video_ ft. Earth_ Wind _ Fire.mp4',
      cover: '/images/holi15.jpeg'
    },
    {
      name: 'Ring ring ring the bells',
      artist: 'Christmas song',
      url: '/audio.holiday/Ring Ring Ring the Bells with Lyrics _ Christmas Songs(2).mp4',
      cover: '/images/holi13.jpeg'
    },
    {
      name: 'Rudolph the Red Nosed Reindeer ',
      artist: 'Christmas song',
      url: '/audio.holiday/Rudolph the Red Nosed Reindeer With Lyrics _ Christmas Songs and Carols.mp4',
      cover: '/images/holi12.jpeg'
    },
    {
      name: 'Snowman',
      artist: 'Sia',
      url: '/audio.holiday/Sia - Snowman.mp4',
      cover: '/images/holi10.jpeg'
    },
    {
      name: 'Tony Bennett',
      artist: 'Winter Wonderland',
      url: '/audio.holiday/Tony Bennett - Winter Wonderland _Official Audio_.mp4',
      cover: '/images/holi9.jpeg'
    },
    {
      name: 'Twelve days of christmas',
      artist: 'Christmas Charol',
      url: '/audio.holiday/Twelve Days of Christmas with Lyrics Christmas Carol _ Song(2).mp4',
      cover: '/images/holi7.jpeg'
    },
    {
      name: 'We wish you a  merry christmas',
      artist: 'Christmas Charol',
      url: '/audio.holiday/We Wish You a Merry Christmas with Lyrics _ Christmas Carol _ Song.mp4',
      cover: '/images/holi6.jpeg'
    },

    {
      name: 'Last Christmas',
      artist: 'Wham',
      url: '/audio.holiday/Wham_ - Last Christmas _Official Video_.mp4',
      cover: '/images/holi4.jpeg'
    },
    {
      name: 'One wish',
      artist: 'Whitney Houston',
      url: '/audio.holiday/Whitney Houston - One Wish _For Christmas_ _Official Music Video_(5).mp4',
      cover: '/images/holi5.jpeg'
    },
    
    {
      name: 'The Christmas Song',
      artist: 'Whitney Houston',
      url: '/audio.holiday/Whitney Houston - The Christmas Song _Official Audio_.mp4',
      cover: '/images/holi3.jpeg'
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