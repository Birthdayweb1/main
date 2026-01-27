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

    // Mobilde hatasız oynatma fonksiyonu
    function safePlay() {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Otomatik oynatma başarılı
                if(playBtn) playBtn.innerText = "⏸️"; // Duraklat butonu
            }).catch(error => {
                // Otomatik oynatma engellendi (kullanıcı etkileşimi bekleniyor)
                console.log("Müzik başlatılamadı (Mobil kısıtlaması):", error);
                if(playBtn) playBtn.innerText = "⏯️"; // Oynat butonu
            });
        }
    }

    function togglePlay() {
        if (audio.paused) {
            safePlay();
        } else {
            audio.pause();
            if(playBtn) playBtn.innerText = "⏯️";
        }
    }

    function nextSong() { 
        loadSong(currentSongIndex + 1); 
        safePlay(); 
    }

    function prevSong() { 
        loadSong(currentSongIndex - 1); 
        safePlay(); 
    }

    // --- EVENT LISTENERS ---
    if (volumeSlider) {
        // 'input' hem masaüstü hem mobilde daha akıcı çalışır
        volumeSlider.addEventListener('input', (e) => { 
            userVolume = e.target.value;
            audio.volume = userVolume; 
        });
    }

    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (nextBtn) nextBtn.addEventListener('click', nextSong);
    if (prevBtn) prevBtn.addEventListener('click', prevSong);
    
    // Şarkı bitince sonrakine geç
    audio.addEventListener('ended', nextSong);

    // Sayfa ilk açıldığında şarkıyı yükle ama hemen çalma (mobilde izinsiz çalmaz)
    loadSong(currentSongIndex);

    // ==========================================
    // DIŞARIYA AÇILAN KAPI (Intro sayfası kullanır)
    // ==========================================
    window.musicControl = {
        pause: function() {
            audio.pause();
            if(playBtn) playBtn.innerText = "⏯️"; // Oynat ikonu göster
        },
        resume: function() {
            // Sadece kullanıcı sesi tamamen kapatmadıysa devam et
            if(userVolume > 0) {
                safePlay();
            }
        }
    };
});