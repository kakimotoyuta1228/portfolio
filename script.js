// Work Modal Functions (既存のコード)
const workData = {
    'bereavement': {
        title: 'Bereavement',
        videoId: 'cZ0vSNXe6-M',
        description: 'Instagramにて200万再生以上された楽曲。リリース時にオリコンチャートインをしGITADORAにも採用実績あり。\n\n作詞作曲編曲と弦楽器のレコーディング、ドラムのプログラミングを担当。'
    },
    'fadeaway': {
        title: 'Fade Away',
        videoId: 'aHAENBTPHwk',
        description: 'Spotify、Instagram、Apple Musicにてそれぞれ100万再生以上されている代表曲。\n\n作詞作曲編曲、ドラムのプログラミングを担当。'
    },
    'departure': {
        title: 'Departure',
        videoId: 'NCSvLsPAnC8',
        description: 'キャッチーなメロディやギターリフを採用した意欲作。\n\n作詞作曲編曲と弦楽器のレコーディング、ドラムのプログラミングを担当。'
    },
    'etherial': {
        title: 'Etherial',
        videoId: 'G2kAxUhMtfM',
        description: 'ブレイクダウンパートをSNSでバイラルさせた楽曲。\n\n作詞作曲を担当。'
    }
};

function openWorkModal(workId) {
    const work = workData[workId];
    const modal = document.getElementById('workModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2 style="margin-bottom: 1.5rem; font-size: 2rem; padding-right: 2rem;">${work.title}</h2>
        <div class="youtube-container">
            <iframe src="https://www.youtube.com/embed/${work.videoId}" frameborder="0" allowfullscreen></iframe>
        </div>
        <div style="color: #ccc; line-height: 1.8; white-space: pre-line;">
            ${work.description}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeWorkModal() {
    const modal = document.getElementById('workModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('workModal');
    if (event.target === modal) {
        closeWorkModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeWorkModal();
    }
});

// Formspree対応: Contact form処理を削除
// contact.htmlがFormspreeのactionを使用するため、
// JavaScriptでのフォーム処理は無効化

// フォーム送信時のローディング表示（オプション）
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // Formspreeの場合はpreventDefaultを使わない
        contactForm.addEventListener('submit', function(e) {
            // Show loading state only
            const submitBtn = this.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.textContent = '送信中...';
                submitBtn.disabled = true;
            }
            
            // Formspreeが処理するため、preventDefaultは使用しない
            // フォームは通常通り送信される
        });
    }
});