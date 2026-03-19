const songs = [ 
    { title: "Highway to Hell", artist: "AC/DC", src: "../assets/music/01 Highway to Hell.mp3", cover: "../assets/images/ACDCHighwayToHell.jpg" },
    { title: "Girls Got Rhythm", artist: "AC/DC", src: "../assets/music/02 Girls Got Rhythm.mp3", cover: "../assets/images/ACDCHighwayToHell.jpg" },
    { title: "Walk All Over You", artist: "AC/DC", src: "../assets/music/03 Walk All Over You.mp3", cover: "../assets/images/ACDCHighwayToHell.jpg" },
    { title: "Touch Too Much", artist: "AC/DC", src: "../assets/music/04 Touch Too Much.mp3", cover: "../assets/images/ACDCHighwayToHell.jpg" },
    { title: "Beating Around the Bush", artist: "AC/DC", src: "../assets/music/05 Beating Around the Bush.mp3", cover: "../assets/images/ACDCHighwayToHell.jpg" },
    { title: "Shot Down in Flames", artist: "AC/DC", src: "../assets/music/06 Shot Down in Flames.mp3", cover: "../assets/images/ACDCHighwayToHell.jpg" },
    { title: "Get It Hot", artist: "AC/DC", src: "../assets/music/07 Get It Hot.mp3", cover: "../assets/images/ACDCHighwayToHell.jpg" },
    { title: "If You Want Blood (You've Got It)", artist: "AC/DC", src: "../assets/music/08 If You Want Blood (You've Got It).mp3", cover: "../assets/images/ACDCHighwayToHell.jpg" },
    { title: "Love Hungry Man", artist: "AC/DC", src: "../assets/music/09 Love Hungry Man.mp3", cover: "../assets/images/ACDCHighwayToHell.jpg" },
    { title: "Night Prowler", artist: "AC/DC", src: "../assets/music/10 Night Prowler.mp3", cover: "../assets/images/ACDCHighwayToHell.jpg" },
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
    { title: "(Sic)", artist: "Slipknot", src: "../assets/music/02 (Sic).mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
    { title: "742617000027", artist: "Slipknot", src: "../assets/music/01 742617000027.mp3", cover: "../assets/images/slipknotAlbumCover.webp" },
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
    { title: "Join Me in Death", artist: "HIM", src: "../assets/music/12 Join Me in Death.mp3", cover: "../assets/images/himAlbumCover.webp"},
    { title: "Cowboys From Hell", artist: "Pantera", src: "../assets/music/01 Cowboys From Hell.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Cemetery Gates", artist: "Pantera", src: "../assets/music/02 Cemetery Gates.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Mouth For War", artist: "Pantera", src: "../assets/music/03 Mouth For War.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Walk", artist: "Pantera", src: "../assets/music/04 Walk.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "This Love", artist: "Pantera", src: "../assets/music/05 This Love.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "I'm Broken", artist: "Pantera", src: "../assets/music/06 I'm Broken.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Becoming", artist: "Pantera", src: "../assets/music/07 Becoming.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "5 Minutes Alone", artist: "Pantera", src: "../assets/music/08 5 Minutes Alone.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Planet Caravan", artist: "Pantera", src: "../assets/music/09 Planet Caravan.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Drag The Waters", artist: "Pantera", src: "../assets/music/10 Drag The Waters.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Where You Come From", artist: "Pantera", src: "../assets/music/11 Where You Come From.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Cat Scratch Fever", artist: "Pantera", src: "../assets/music/12 Cat Scratch Fever.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Revolution Is My Name", artist: "Pantera", src: "../assets/music/13 Revolution Is My Name.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "I'll Cast A Shadow", artist: "Pantera", src: "../assets/music/14 I'll Cast A Shadow.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Goddamn Electric", artist: "Pantera", src: "../assets/music/15 Goddamn Electric.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Hole In The Sky", artist: "Pantera", src: "../assets/music/16 Hole In The Sky.mp3", cover: "../assets/images/panteraAlbumCover.webp" },
    { title: "Nosso Lugar", artist: "MC Kevin", src: "../assets/music/MCKevinNossoLugar.mp3", cover: "../assets/images/aGente.jpeg"},
    { title: "Amassa A Placa", artist: "MC Kevin", src: "../assets/music/MC Kevin - Amassa A Placa (Jorgin Deejhay) Lançamento Oficial 2016.mp3", cover: "../assets/images/MCKevinAlbumCover.webp" },
    { title: "Cavalo de Troia", artist: "MC Kevin", src: "../assets/music/MC Kevin - Cavalo de Troia - Simplesmente Os 4M a Capital Veio Parar (Djay W).mp3", cover: "../assets/images/MCKevinAlbumCover.webp" },
    { title: "Dama Da Cama", artist: "MC Kevin", src: "../assets/music/MC Kevin - Dama Da Cama (DJ R7)Lançamento Oficial 2016.mp3", cover: "../assets/images/MCKevinAlbumCover.webp" },
    { title: "Navegando No Mar", artist: "MC Kevin", src: "../assets/music/MC Kevin - Navegando No Mar.mp3", cover: "../assets/images/MCKevinAlbumCover.webp" },
    { title: "Pra inveja é tchau", artist: "MC Kevin", src: "../assets/music/MC Kevin - Pra inveja é tchau (light)(150)(2018).mp3", cover: "../assets/images/MCKevinAlbumCover.webp" },
    { title: "Ressaca", artist: "MC Kevin", src: "../assets/music/MC Kevin - Ressaca.mp3", cover: "../assets/images/MCKevinAlbumCover.webp" },
    { title: "CYPHER 4M", artist: "MC Kevin", src: "../assets/music/5° “CYPHER 4M“ - Mc Kevin, Mc PH, Mc IG, Mc Magal, Mc Lustosa, Mc Levi.mp3", cover: "../assets/images/MCKevinAlbumCover.webp"},
    { title: "Sex, Drugs, Etc...", artist: "Beach Weather", src: "../assets/music/Beach Weather - Sex, Drugs, Etc..flac", cover: "../assets/images/beachWeatherAlbumCover.webp" },
    { title: "Sweather Weather", artist: "The Neighbourhood", src: "../assets/music/sweatherWeatherTheNeighbourhood.mp3", cover: "../assets/images/sweatherWeatherAlbumCover.webp" },
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

const progressBar = document.getElementById('progress');
const volumeBar = document.getElementById('volume');
const shuffleBtn = document.getElementById('shuffle');
let isShuffle = false;

// 1. Escolher o momento da música (clicar na barra)
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// 2. Atualizar a barra conforme a música toca
audio.addEventListener('timeupdate', () => {
    if (!isNaN(audio.duration)) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
        
        // Atualizar os números de tempo
        document.getElementById('current-time').innerText = formatTime(audio.currentTime);
        document.getElementById('duration').innerText = formatTime(audio.duration);
    }
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// 3. Controle de Volume
volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value;
});

// 4. Ordem Aleatória (Shuffle)
shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('btn-active');
});

// Ajuste no botão de "Próxima" para respeitar o Aleatório
document.getElementById('next').addEventListener('click', () => {
    if (isShuffle) {
        currentTrackIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % songs.length;
    }
    loadTrack(currentTrackIndex);
});

// Quando a música acabar, pula para a próxima automaticamente
audio.addEventListener('ended', () => {
    document.getElementById('next').click();
});