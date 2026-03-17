const songs = [
    { title: "Hells Bells", artist: "AC/DC", src: "../assets/music/01 - Hells Bells.mp3", cover: "../assets/images/BackInBlack.webp" },
    { title: "Shoot to Thrill", artist: "AC/DC", src: "../assets/music/02 - Shoot to Thrill.mp3", cover: "../assets/images/BackInBlack.webp" },
    { title: "What Do You Do for Money Honey", artist: "AC/DC", src: "../assets/music/03 - What Do You Do for Money Honey.mp3", cover: "../assets/images/BackInBlack.webp" },
    { title: "Givin the Dog a Bone", artist: "AC/DC", src: "../assets/music/04 - Givin the Dog a Bone.mp3", cover: "../assets/images/BackInBlack.webp" },
    { title: "Let Me Put My Love Into You", artist: "AC/DC", src: "../assets/music/05 - Let Me Put My Love Into You.mp3", cover: "../assets/images/BackInBlack.webp" },
    { title: "Back in Black", artist: "AC/DC", src: "../assets/music/06 - Back in Black.mp3", cover: "../assets/images/BackInBlack.webp" },
    { title: "You Shook Me All Night Long", artist: "AC/DC", src: "../assets/music/07 - You Shook Me All Night Long.mp3", cover: "../assets/images/BackInBlack.webp" },
    { title: "Have a Drink on Me", artist: "AC/DC", src: "../assets/music/08 - Have a Drink on Me.mp3", cover: "../assets/images/BackInBlack.webp" },
    { title: "Shake a Leg", artist: "AC/DC", src: "../assets/music/09 - Shake a Leg.mp3", cover: "../assets/images/BackInBlack.webp" },
    { title: "Rock and Roll Ain't Noise Pollution", artist: "AC/DC", src: "../assets/music/10 - Rock and Roll Ain't Noise Pollution.mp3", cover: "../assets/images/BackInBlack.webp" },
    { title: "Hero", artist: "Skillet", src: "../assets/music/01 Hero [Album Version].mp3", cover: "../assets/images/skilletAlbumCover.webp" },
    { title: "Awake And Alive", artist: "Skillet", src: "../assets/music/04 Awake And Alive.mp3", cover: "../assets/images/skilletAlbumCover.webp" },
    { title: "Dead Inside", artist: "Skillet", src: "../assets/music/13 Dead Inside (BT).mp3", cover: "../assets/images/skilletAlbumCover.webp" },
    { title: "Would It Matter", artist: "Skillet", src: "../assets/music/14 Would It Matter (BT).mp3", cover: "../assets/images/skilletAlbumCover.webp" },
    { title: "Monster", artist: "Skillet", src: "../assets/music/15 Skillet - Monster (Radio Edit).flac", cover: "../assets/images/skilletAlbumCover.webp" },
{ title: "Eyeless", artist: "Slipknot", src: "../assets/music/03 Eyeless.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Wait And Bleed", artist: "Slipknot", src: "../assets/music/04 Wait And Bleed.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Surfacing", artist: "Slipknot", src: "../assets/music/05 Surfacing.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Spit It Out", artist: "Slipknot", src: "../assets/music/06 Spit It Out.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Tattered & Torn", artist: "Slipknot", src: "../assets/music/07 Tattered & Torn.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Me Inside", artist: "Slipknot", src: "../assets/music/08 Me Inside.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Liberate", artist: "Slipknot", src: "../assets/music/09 Liberate.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Prosthetics", artist: "Slipknot", src: "../assets/music/10 Prosthetics.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "No Life", artist: "Slipknot", src: "../assets/music/11 No Life.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Diluted", artist: "Slipknot", src: "../assets/music/12 Diluted.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Only One", artist: "Slipknot", src: "../assets/music/13 Only One.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Scissors", artist: "Slipknot", src: "../assets/music/14 Scissors.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
{ title: "Join Me in Death", artist: "HIM", src: "../assets/music/12 Join Me in Death.mp3", cover: "../assets/images/himAlbumCover.webp"}
];

const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play');
const playlist = document.getElementById('playlist');
let currentTrackIndex = 0;

// Carregar lista lateral
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerText = `${song.artist} - ${song.title}`;
    li.addEventListener('click', () => loadTrack(index));
    playlist.appendChild(li);
});

function loadTrack(index) {
    currentTrackIndex = index;
    const song = songs[index];
    audio.src = song.src;
    document.getElementById('track-title').innerText = song.title;
    document.getElementById('track-artist').innerText = song.artist;
    document.getElementById('current-cover').src = song.cover;
    playTrack();
}

function playTrack() {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

playBtn.addEventListener('click', () => {
    if (audio.paused) playTrack();
    else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Botão Próximo
document.getElementById('next').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % songs.length;
    loadTrack(currentTrackIndex);
});

// Botão Anterior
document.getElementById('prev').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + songs.length) % songs.length;
    loadTrack(currentTrackIndex);
});

// Barra de progresso
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById('progress').value = progress || 0;
});