alert("hey")
//     var ap1 = new APlayer({
//     container: document.getElementById('player1'),
//     audio: {
//         name: 'Title',
//         artist: 'Author',
//         url: '',
//         cover: 'billie.mp4'
//     }
// });
ap1.play()
var ap1 = new APlayer({
    container: document.getElementById('player1'),
    audio: {
        name: 'Title',
        artist: 'Author',
        url: '/audio/billie.mp4',
        cover: '/images/billie.jpeg'
    }
});
ap1.play()