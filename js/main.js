document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio();
    const playBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const titleEl = document.getElementById('song-title');
    const volumeSlider = document.getElementById('volume-slider');

    let currentSongIndex = 0;
    // Varsayılan ses seviyesi
    let userVolume = 0.5; 
    audio.volume = userVolume;

    // --- TEMEL FONKSİYONLAR ---
    if (typeof playlist === 'undefined' || playlist.length === 0) {
        if(titleEl) titleEl.innerText = "Liste Boş";
        return;
    }

    function loadSong(index) {
        if (index < 0) index = playlist.length - 1;
        if (index >= playlist.length) index = 0;
        currentSongIndex = index;
        audio.src = playlist[currentSongIndex].src;
        if (titleEl) titleEl.innerText = playlist[currentSongIndex].title;
    }

    function togglePlay() {
        if (audio.paused) {
            audio.play().then(() => { if(playBtn) playBtn.innerText = "⏸️"; })
                 .catch(e => console.error(e));
        } else {
            audio.pause();
            if(playBtn) playBtn.innerText = "⏯️";
        }
    }

    function nextSong() { loadSong(currentSongIndex + 1); audio.play(); if(playBtn) playBtn.innerText = "⏸️"; }
    function prevSong() { loadSong(currentSongIndex - 1); audio.play(); if(playBtn) playBtn.innerText = "⏸️"; }

    // --- EVENT LISTENERS ---
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => { 
            userVolume = e.target.value;
            audio.volume = userVolume; 
        });
    }
    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (nextBtn) nextBtn.addEventListener('click', nextSong);
    if (prevBtn) prevBtn.addEventListener('click', prevSong);
    audio.addEventListener('ended', nextSong);

    loadSong(currentSongIndex);

    // ==========================================
    // YENİ EKLENEN KISIM: DIŞARIYA AÇILAN KAPI
    // ==========================================
    window.musicControl = {
        pause: function() {
            audio.pause();
            if(playBtn) playBtn.innerText = "⏯️"; // Oynat ikonu
        },
        resume: function() {
            // Sadece kullanıcı sesi tamamen kapatmadıysa devam et
            if(userVolume > 0) {
                audio.play();
                if(playBtn) playBtn.innerText = "⏸️"; // Durdur ikonu
            }
        }
    };
});