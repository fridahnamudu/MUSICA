alert("welcome")

alert("hello")
var ap1 = new APlayer({
container: document.getElementById('player1'),
audio: [{
  name: 'Ocean Eyes',
  artist: 'Billie Ellish',
  url: '/audio/billie.mp4',
  cover: '/images/billie.jpeg'
},
{
    name: 'Dont start Now',
    artist: 'Dua Lipa',
    url: '/audio/lipa.mp4',
    cover: '/images/lipa.jpeg'
},
{
    name: 'Sorry',
    artist: 'Halsey',
    url: '/audio/halsey.mp4',
    cover: '/images/halsey.jpeg'

},
{
    name: 'Hold On',
    artist: 'Chord Overstreet',
    url: '/audio/chord.mp4',
    cover: '/images/chord.jpeg'
},
{
    name: 'Truth Hurts',
    artist: 'Lizzo',
    url: '/audio/lizzo.mp4',
    cover: '/images/lizzo.jpeg'
},
{
    name: 'Here With Me',
    artist: 'Marshmello',
    url: '/audio/marsh.mp4',
    cover: '/images/marsh.jpeg'
},
{
    name: 'You Broke Me First',
    artist: 'Tate MC Rae',
    url: '/audio/tate.mp4',
    cover: '/images/tate.jpeg'
},
{
    name: 'Dance Monkey',
    artist: 'Tones and I',
    url: '/audio/monkey.mp4',
    cover: '/images/tones.jpeg'
},
{
    name: 'Panini',
    artist: 'Lil Nas X',
    url: '/audio/panini.mp4',
    cover: '/images/nas.jpeg'
},
{
    name: 'The Box',
    artist: 'Roddy Ricch',
    url: '/audio/box.mp4',
    cover: '/images/roddy.jpeg'
},
{
    name: 'TIME',
    artist: 'NF',
    url: '/audio/time.mp4',
    cover: '/images/Time.jpeg'
},
{
    name: 'STAY',
    artist: 'Zedd ft Alissia Cara',
    url: '/audio/STAY.mp4',
    cover: '/images/zedd.jpeg'
}]
});

ap1.play()

       