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
    theme: 'brown',
    
    
    audio: [{
      name: 'Candy shop',
      artist: '50 Cent',
      url: '/audio.rap/50 Cent - Candy Shop _Official Music Video_ ft. Olivia(1).mp4',
      cover: '/images/50.jpeg'
    },
    {
      name: 'In da club',
      artist: '50 Cent',
      url: '/audio.rap/50 Cent - In Da Club _Official Music Video_.mp4',
      cover: '/images/50.jpeg'
    },
    {
      name: 'Drunk in love',
      artist: 'Beyonce',
      url: '/audio.rap/Beyoncé - Drunk in Love _Explicit_ ft. JAY Z(1).mp4',
      cover: '/images/bey.jpg'
    },
    {
      name: 'Flawless',
      artist: 'Beyonce',
      url: '/audio.rap/Beyoncé - Flawless _Remix_ ft. Nicki Minaj.mp4',
      cover: '/images/bey.jpg'
    },
    {
      name: 'I dont fuck with you',
      artist: 'Big Sean',
      url: '/audio.rap/Big Sean - I Don_t Fuck With You ft. E-40 _Official Music Video_.mp4',
      cover: '/images/big.jpeg'
    },
    {
      name: 'Bodak Yellow',
      artist: 'Cardi B',
      url: '/audio.rap/Cardi B - Bodak Yellow _OFFICIAL MUSIC VIDEO_(1).mp4',
      cover: '/images/cardi.jpeg'
    },
    {
      name: 'Press',
      artist: 'Cardi B',
      url: '/audio.rap/Cardi B - Press _Official Audio_.mp4',
      cover: '/images/cardi.jpeg'
    },
    {
      name: 'No Problem',
      artist: 'Chance the rapper',
      url: '/audio.rap/Chance the Rapper ft. 2 Chainz _ Lil Wayne - No Problem _Official Video_.mp4',
      cover: '/images/wayne.jpeg'
    },
    {
      name: 'Loyal',
      artist: 'Chris Brown',
      url: '/audio.rap/Chris Brown - Loyal _Official Video_ ft. Lil Wayne_ Tyga.mp4',
      cover: '/images/wayne.jpeg'
    },
    {
      name: 'Twerk ',
      artist: 'City Girls ft Cardi B',
      url: '/audio.rap/City Girls - Twerk ft. Cardi B _Official Music Video_.mp4',
      cover: '/images/cardi.jpeg'
    },
    {
      name: 'Panda',
      artist: 'Designer',
      url: '/audio.rap/Desiigner- Panda _OFFICIAL SONG_ Prod. By_ Menace.mp4',
      cover: '/images/desii.jpeg'
    },
    {
      name: 'Turn down for what',
      artist: 'DJ Snake',
      url: '/audio.rap/DJ Snake_ Lil Jon - Turn Down for What.mp4',
      cover: '/images/snake.jpeg'
    },
    {
      name: 'The next week episode',
      artist: 'Dr.DRE',
      url: '/audio.rap/Dr. Dre ft. Snoop Dogg_ Kurupt_ Nate Dogg - The Next Episode _Official Video_.mp4',
      cover: '/images/images 5.jpeg'
    },
    {
      name: 'Laugh now cry later',
      artist: 'Drake',
      url: '/audio.rap/Drake - Laugh Now Cry Later _Official Audio_ ft. Lil Durk.mp4',
      cover: '/images/drake.jpeg'
    },
    {
      name: 'Started from the bottom',
      artist: 'Drake',
      url: '/audio.rap/Drake - Started From The Bottom _Explicit_.mp4',
      cover: '/images/drake.jpeg'
    },
    {
      name: 'Love the way you lie',
      artist: 'Eminem',
      url: '/audio.rap/Eminem - Love The Way You Lie ft. Rihanna.mp4',
      cover: '/images/eminem.jpeg'
    },
    {
      name: 'Mockingbird',
      artist: 'Eminem',
      url: '/audio.rap/Eminem - Mockingbird _Official Music Video_.mp4',
      cover: '/images/eminem.jpeg'
    },
    {
      name: 'Rap God',
      artist: 'Eminem',
      url: '/audio.rap/Eminem - Rap God _Explicit_.mp4',
      cover: '/images/eminem.jpeg'
    },
    {
      name: 'Trap Queen',
      artist: 'Fetty Wap',
      url: '/audio.rap/Fetty Wap  - Trap Queen _Official Video_ Prod. By Tony Fadd.mp4',
      cover: '/images/fetty.jpeg'
    },
    {
      name: 'Wake up',
      artist: 'Fetty Wap',
      url: '/audio.rap/Fetty Wap - Wake Up _Official Video_.mp4',
      cover: '/images/fetty.jpeg'
    },
    {
      name: 'Low Life',
      artist: 'Future',
      url: '/audio.rap/Future - Low Life _Official Music Video_ ft. The Weeknd.mp4',
      cover: '/images/future.jpeg'
    },
    {
      name: 'Where ya at',
      artist: 'Future',
      url: '/audio.rap/Future - Where Ya At ft. Drake.mp4',
      cover: '/images/future.jpeg'
    },
    {
      name: 'Me myself and i',
      artist: 'G-Eazy',
      url: '/audio.rap/G-Eazy x Bebe Rexha - Me_ Myself _ I.mp4',
      cover: '/images/eazy.jpeg'
    },
    {
      name: 'Black Widow',
      artist: 'Iggy Azaela',
      url: '/audio.rap/Iggy Azalea - Black Widow ft. Rita Ora _Official Music Video_.mp4',
      cover: '/images/iggy.jpeg'
    },
    {
      name: 'Fancy',
      artist: 'Iggy Azalea',
      url: '/audio.rap/Iggy Azalea - Fancy ft. Charli XCX _Official Music Video_.mp4',
      cover: '/images/iggy.jpeg'
    },
    {
      name: 'Sally walker',
      artist: 'Iggy Azalea',
      url: '/audio.rap/Iggy Azalea - Sally Walker _Audio_.mp4',
      cover: '/images/iggy.jpeg'
    },
    {
      name: 'Work',
      artist: 'Iggy Azalea',
      url: '/audio.rap/Iggy Azalea - Work _Official Music Video_.mp4',
      cover: '/images/iggy.jpeg'
    },
    {
      name: 'No Role MOdels',
      artist: 'J Cole',
      url: '/audio.rap/J Cole - No Role Models _2014 Forest Hills Drive_  LYRIC VIDEO.mp4',
      cover: '/images/cardi.jpeg'
    },
    {
      name: 'Wet Dreamz',
      artist: 'J Cole',
      url: '/audio.rap/J. Cole - Wet Dreamz _Video_.mp4',
      cover: '/images/cardi.jpeg'
    },
    {
      name: 'Get Ugly',
      artist: 'Jason Derulo',
      url: '/audio.rap/Jason Derulo - Get Ugly _Official Music Video_.mp4',
      cover: '/images/derulo.jpeg'
    },
    {
      name: 'Wiggle',
      artist: 'Jason Derulo',
      url: '/audio.rap/Jason Derulo - Wiggle feat. Snoop Dogg _Official Music Video_.mp4',
      cover: '/images/derulo.jpeg'
    },
    {
      name: 'Niggas in Paris',
      artist: 'Jay-z',
      url: '/audio.rap/Jay-Z _ Kanye West - Ni__as In Paris _Explicit_.mp4',
      cover: '/images/jay.jpeg'
    },
    {
      name: 'Dark Horse',
      artist: 'Katty Perry',
      url: '/audio.rap/Katy Perry - Dark Horse _Official_ ft. Juicy J.mp4',
      cover: '/images/images (1).jpeg'
    },
    {
      name: 'Alright',
      artist: 'Kendrick Lamar',
      url: '/audio.rap/Kendrick Lamar - Alright.mp4',
      cover: '/images/lamar.jpeg'
    },
    {
      name: 'HUmble',
      artist: 'Kendrick Lamar',
      url: '/audio.rap/Kendrick Lamar - HUMBLE..mp4',
      cover: '/images/lamar.jpeg'
    },
    {
      name: 'Promise',
      artist: 'KId Ink',
      url: '/audio.rap/Kid Ink - Promise _Official Music Video_ ft. Fetty Wap.mp4',
      cover: '/images/images (2).png'
    },
    {
      name: 'Gucci Gang',
      artist: 'Lil Pump',
      url: '/audio.rap/Lil Pump - Gucci Gang _Official Music Video_.mp4',
      cover: '/images/pump.jpeg'
    },
    {
      name: 'CANT HOLD US ',
      artist: 'MACKLEMORE',
      url: '/audio.rap/MACKLEMORE _ RYAN LEWIS - CAN_T HOLD US FEAT. RAY DALTON _OFFICIAL MUSIC VIDEO_.mp4',
      cover: '/images/mark.jpeg'
    },
    {
      name: 'THRIFT SHOP',
      artist: 'MACKLEMORE',
      url: '/audio.rap/MACKLEMORE _ RYAN LEWIS - THRIFT SHOP FEAT. WANZ _OFFICIAL VIDEO_.mp4',
      cover: '/images/mark.jpeg'
    },
    {
      name: 'Astronaut in the ocean',
      artist: 'Masked Wolf',
      url: '/audio.rap/Masked Wolf - Astronaut In The Ocean _Official Music Video_.mp4',
      cover: '/'
    },
    {
      name: 'Anaconda',
      artist: 'Nicki Minaj',
      url: '/audio.rap/Nicki Minaj - Anaconda.mp4',
      cover: '/images/nicki.jpeg'
    },
    {
      name: 'Barbie Tingz',
      artist: 'Nicki Minaj',
      url: '/audio.rap/Nicki Minaj - Barbie Tingz.mp4',
      cover: '/images/nicki.jpeg'
    },
    {
      name: 'Chun-Li',
      artist: 'NIcki Minaj',
      url: '/audio.rap/Nicki Minaj - Chun-Li.mp4',
      cover: '/images/nicki.jpeg'
    },
    {
      name: 'Feeling Myself',
      artist: 'Nicki MInaj',
      url: '/audio.rap/Nicki Minaj - Feeling Myself _Audio_ ft. Beyoncé.mp4',
      cover: '/images/nicki.jpeg'
    },
    {
      name: 'No Frauds',
      artist: 'Nicki Minaj',
      url: '/audio.rap/Nicki Minaj - No Frauds _Audio_ ft. Drake_ Lil Wayne.mp4',
      cover: '/images/nicki.jpeg'
    },
    {
      name: 'Super Bass',
      artist: 'Nicki Minaj',
      url: '/audio.rap/Nicki Minaj - Super Bass.mp4',
      cover: '/images/nicki.jpeg'
    },
    {
      name: 'Coco',
      artist: 'O.T. Genesis',
      url: '/audio.rap/O.T. Genasis - CoCo _Official Music Video_.mp4',
      cover: '/images/nicki.jpeg'
    },
    {
      name: 'Cut it ',
      artist: 'O.T. Genasis',
      url: '/audio.rap/O.T. Genasis - Cut It _feat. Young Dolph_ _Official Music Video_.mp4',
      cover: '/images/genesis.jpeg'
    },
    {
      name: 'Better Now',
      artist: 'Post Malone',
      url: '/audio.rap/Post Malone - Better Now.mp4',
      cover: '/images/malone.jpeg'
    },
    {
      name: 'Congratulations',
      artist: 'Post Malone',
      url: '/audio.rap/Post Malone - Congratulations ft. Quavo.mp4',
      cover: '/images/malone.jpeg'
    },
    {
      name: 'Black Beatles',
      artist: 'Rae Sremmurd',
      url: '/audio.rap/Rae Sremmurd - Black Beatles ft. Gucci Mane _Official Video_.mp4',
      cover: '/images/rae.jpeg'
    },
    {
      name: 'No Flex',
      artist: 'Rae Sremmurd',
      url: '/audio.rap/Rae Sremmurd - No Flex Zone _Explicit_ _Official Video_.mp4',
      cover: '/images/rae.jpeg'
    },
    {
      name: 'This could be us',
      artist: 'Rae Sremmurd',
      url: '/audio.rap/Rae Sremmurd - This Could Be Us _Official Video_.mp4',
      cover: '/images/rae.jpeg'
    },
    {
      name: 'Throw Sum mo',
      artist: 'Rae Sremmurd',
      url: '/audio.rap/Rae Sremmurd ft. Nicki Minaj_ Young Thug - Throw Sum Mo _Official Video_.mp4',
      cover: '/images/rae.jpeg'
    },
    {
      name: 'The box',
      artist: 'Roddy Rich',
      url: '/audio.rap/Roddy Ricch - The Box _Official Audio_.webm',
      cover: '/images/roddy.jpeg'
    },
    {
      name: 'Live your life',
      artist: 'T.I',
      url: '/audio.rap/T.I - Live Your Life _Feat. Rihanna_.mp4',
      cover: '/images/images 4.jpeg'
    },
    {
      name: 'Touchin_loving',
      artist: 'Trey songz',
      url: '/audio.rap/Trey Songz - Touchin_ Lovin ft. Nicki Minaj _Official Music Video_.mp4',
      cover: '/images/images (3).jpeg'
    },
    {
      name: 'Go hard or go home',
      artist: 'Wiz Khalifa',
      url: '/audio.rap/Wiz Khalifa _ Iggy Azalea – Go Hard or Go Home _Furious 7 Soundtrack_.mp4',
      cover: '/images/wiz.jpeg'
    },
    {
      name: 'Black and yellow',
      artist: 'Wiz Khalifa',
      url: '/audio.rap/Wiz Khalifa - Black And Yellow _Official Music Video_.mp4',
      cover: '/images/wiz.jpeg'
    },
    {
      name: 'See you again',
      artist: 'Wiz Khalifa',
      url: '/audio.rap/Wiz Khalifa - See You Again ft. Charlie Puth _Official Video_ Furious 7 Soundtrack.mp4',
      cover: '/images/wiz.jpeg'
    },
    {
      name: 'Work hard play hard',
      artist: 'Wiz Khalifa',
      url: '/audio.rap/Wiz Khalifa - Work Hard Play Hard _Music Video_.mp4',
      cover: '/images/wiz.jpeg'
    },
    {
      name: 'Down in the DM',
      artist: 'Yo Gotti',
      url: '/audio.rap/Yo Gotti - Down In the DM _Official Music Video_.mp4',
      cover: '/images/nicki.jpeg'
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