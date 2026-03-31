// js/data.js

// 1. GİRİŞ VİDEOLARI (Parti başlayınca ilk bunlar oynar)
const introVideos = [
    { src: "assets/videos/5.mp4" },
    { src: "assets/videos/6.mp4" }
];

// 2. ZAMAN TÜNELİ (Sadece seçilmiş özel anlar - Highlights)
const timelineMemories = [
    {
        type: "image",
        src: "assets/images/1.jpeg", 
        date: "20.05.2020",
        note: "Bu fotoğraf sadece zaman tünelinde ve galeride var.",
        duration: 10000 
    },
    {
        type: "video",
        src: "assets/videos/1.mp4",
        date: "15.08.2021",
        note: "Unutulmaz an!",
        duration: null 
    }
];

// 3. GALERİ (Burada HER ŞEY olacak - Zaman tünelindekiler + Ekstralar)
const fullGallery = [
    "assets/images/1.jpeg", // Zaman tünelinden
    "assets/images/2.jpeg", // Ekstra
    "assets/images/3.jpeg", // Ekstra
    "assets/images/4.jpeg", // Sadece galeride görünen
    "assets/images/5.jpeg",
    "assets/images/6.jpeg",
    "assets/images/7.jpeg",
    "assets/images/8.jpeg",
    "assets/images/9.jpeg",
    "assets/images/10.jpeg",
    "assets/images/11.jpeg",
    "assets/images/12.jpeg",
    "assets/images/13.jpeg",
    "assets/images/14.jpeg",
    "assets/images/15.jpeg",
    "assets/images/16.jpeg",
    "assets/images/17.jpeg",
    "assets/images/18.jpeg",
    "assets/images/19.jpeg",
    "assets/images/20.jpeg",
    "assets/images/21.jpeg",
    "assets/images/22.jpeg",
    "assets/images/23.jpeg",
    "assets/images/24.jpeg",
    "assets/images/25.jpeg",
    "assets/images/26.jpeg",
    "assets/images/27.jpeg",
    "assets/images/28.jpeg",
    "assets/images/29.jpeg",
    "assets/images/30.jpeg",
    "assets/images/31.jpeg",
    "assets/images/32.jpeg",
    "assets/images/33.jpeg",
    "assets/images/34.jpeg",
    "assets/images/35.jpeg",
    "assets/images/36.jpeg",
    "assets/images/37.jpeg",
    "assets/images/38.jpeg",
    "assets/images/39.jpeg",
    "assets/images/40.jpeg",
    "assets/images/41.jpeg",
    "assets/images/42.jpeg",
    "assets/images/43.jpeg",
    "assets/images/44.jpeg",
    "assets/images/45.jpeg",
    "assets/images/46.jpeg",
    "assets/images/47.jpeg",
    "assets/images/48.jpeg",
    "assets/images/49.jpeg",
    "assets/images/50.jpeg",
    "assets/images/51.jpeg",
    "assets/images/52.jpeg",
    "assets/images/53.jpeg",
    "assets/images/54.jpeg",
    "assets/images/55.jpeg",
    "assets/images/56.jpeg",
    "assets/images/57.jpeg",
    "assets/images/58.jpeg",
    "assets/images/59.jpeg",
    "assets/images/60.jpeg",
    "assets/images/61.jpeg",
    "assets/images/62.jpeg",
    "assets/images/63.jpeg",
    "assets/images/64.jpeg",
    "assets/images/65.jpeg",
    "assets/images/66.jpeg",
    "assets/images/67.jpeg",
    "assets/images/68.jpeg",
    "assets/images/69.jpeg",
    "assets/images/70.jpeg",
    "assets/images/71.jpeg",
    "assets/images/72.jpeg",
    "assets/images/73.jpeg",
    "assets/images/74.jpeg",
    "assets/images/75.jpeg",
    "assets/images/76.jpeg",
    "assets/images/77.jpeg",
    "assets/images/78.jpeg",
    "assets/images/79.jpeg",
    "assets/images/80.jpeg",
    "assets/images/81.jpeg",
    "assets/images/82.jpeg",
    "assets/videos/1.mp4",
    "assets/videos/2.mp4",
    "assets/videos/3.mp4",
    "assets/videos/4.mp4",
    "assets/videos/5.mp4",
    "assets/videos/6.mp4",
    "assets/videos/7.mp4"
];

// 4. SÜRPRİZ MESAJI
const surpriseContent = {
    message: "İyi ki varsın iyi ki doğmuşsun. Nice mutlu beraber senelere. Bu projem internet yok olana kadar açık kalacak. Yani dijital ayak izini ben oluşturdum. Şimdi ikimizin içinde(bazılarında konuşmadıklarımız falan da var ama yapacak bişey yok) olduğu fotoğrafları görebilir, gezebilirsin (Ender Eniştem ortaya çıkmadan önce yaptım).",
    mediaType: "image",
    mediaSrc: "assets/images/surprise.jpg"
};

// 5. ARKA PLAN MÜZİĞİ
const playlist = [
    { title: "İyi ki Doğdun Zeynep", src: "assets/audio/iyikidogdun_zeynep.mp3" },
    { title: "Can Bonomo - Güneş", src: "assets/audio/can_bonomo_gunes.mp3" },
    { title: "Eşarbını Yan Bağlama", src: "assets/audio/esarbini_yan_baglama.mp3" },
    { title: "Tutu Maşallah", src: "assets/audio/tutu_masallah.mp3" },
    { title: "Ali Dayı", src: "assets/audio/ali_dayi.mp3" },
    { title: "Bahçe Duvarından Aştım", src: "assets/audio/bahce_duvarindan_astim.mp3" },
    { title: "Tellocan", src: "assets/audio/tellocan.mp3" },
    { title: "Sailor Song", src: "assets/audio/sailorsong.mp3" },
    { title: "Atlantis", src: "assets/audio/atlantis.mp3" },
    { title: "This Side Of Paradise", src: "assets/audio/thissideofparadise.mp3" },
    { title: "Une Belle Histoire", src: "assets/audio/unebellehistoire.mp3" },
    { title: "Yağmurlar", src: "assets/audio/yagmurlar.mp3" },
    { title: "BYE BYE", src: "assets/audio/byebye.mp3" }
];