// js/timeline.js

let currentIndex = 0;
let slideTimer;
const contentSlot = document.getElementById('content-slot');
const noteText = document.getElementById('note-text');
const dateBadge = document.getElementById('date-badge');
const progressBar = document.getElementById('progress-bar');

window.onload = startTimeline;

function startTimeline() {
    loadMemory(currentIndex);
}

function loadMemory(index) {
    clearTimeout(slideTimer);
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    
    if (index >= timelineMemories.length) {
        // Timeline bitti, Sürprize geçmeden önce müziği aç (ne olur ne olmaz)
        if(window.parent && window.parent.musicControl) window.parent.musicControl.resume();
        window.location.href = "surprise.html";
        return;
    }
    if (index < 0) { currentIndex = timelineMemories.length - 1; loadMemory(currentIndex); return; }

    const memory = timelineMemories[index];
    contentSlot.innerHTML = '';
    noteText.innerText = memory.note;
    dateBadge.innerText = memory.date;
    
    // --- MÜZİK KONTROL MANTIĞI BURADA ---
    if (memory.type === 'image') {
        // RESİM GELDİ: Müziği Oynat (Eğer durmuşsa)
        if(window.parent && window.parent.musicControl) {
            window.parent.musicControl.resume();
        }

        contentSlot.innerHTML = `<img src="${memory.src}">`;
        
        setTimeout(() => {
            progressBar.style.transition = `width ${memory.duration}ms linear`;
            progressBar.style.width = '100%';
        }, 50);
        
        slideTimer = setTimeout(nextSlide, memory.duration);

    } else if (memory.type === 'video') {
        // VİDEO GELDİ: Müziği Durdur
        if(window.parent && window.parent.musicControl) {
            window.parent.musicControl.pause();
        }

        const video = document.createElement('video');
        video.src = memory.src;
        video.controls = true;
        video.autoplay = true;
        
        // Video bitince diğerine geç
        video.onended = function() {
            nextSlide();
        };
        contentSlot.appendChild(video);
    }
}

function changeSlide(dir) {
    currentIndex += dir;
    loadMemory(currentIndex);
}

function nextSlide() {
    currentIndex++;
    loadMemory(currentIndex);
}