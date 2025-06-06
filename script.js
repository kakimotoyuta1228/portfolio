// Work Modal Functions (既存のコード)
const workData = {
    'bereavement': {
        title: 'Bereavement',
        videoId: 'cZ0vSNXe6-M',
        description: 'Instagramにて200万再生以上された楽曲。リリース時にオリコンチャートインをしGITADORAにも採用実績あり。\n\n2016年制作。作詞作曲編曲と弦楽器のレコーディング、ドラムのプログラミングを担当。'
    },
    'fadeaway': {
        title: 'Fade Away',
        videoId: 'aHAENBTPHwk',
        description: 'Spotify、Instagram、Apple Musicにてそれぞれ100万再生以上されている代表曲。\n\n2016年制作。作詞作曲編曲、ドラムのプログラミングを担当。'
    },
    'departure': {
        title: 'Departure',
        videoId: 'NCSvLsPAnC8',
        description: 'キャッチーなメロディやギターリフを採用した意欲作。\n\n2016年制作。作詞作曲編曲と弦楽器のレコーディング、ドラムのプログラミングを担当。'
    },
    'etherial': {
        title: 'Etherial',
        videoId: 'G2kAxUhMtfM',
        description: 'ブレイクダウンパートをSNSでバイラルさせた楽曲。\n\n2016年制作。作詞作曲を担当。'
    },
    'memories': {
        title: 'Memories',
        videoId: 'QJUqSGpTY2c',
        description: '静かな海をイメージしたSE。後半にかけての盛り上がりを意識しています。\n\n2018年制作。作曲を担当。'
    },
    'boss': {
        title: 'Portfolio BGM Boss',
        videoId: 'uW1cgIX_2K8',
        description: 'サブベースのイントロから後半にかけてはクラシカルで荘厳な展開を意識しました。\n\n2021年制作。作曲を担当。'
    },
    'nostalgic': {
        title: 'Portfolio BGM Nostalgic',
        videoId: 'dR8xCkh0yeE',
        description: '回想シーンなどで使用することを想定して作曲しました。\n\n2025年制作。Loigc Proを使用。作曲とミックス・マスタリングを担当。'
    },
    'winter': {
        title: 'Portfolio BGM Winter',
        videoId: 'jCfKXouR0go',
        description: '雪山など寒い環境のシーンで使用することを想定して作曲しました。\n\n2025年制作。Loigc Proを使用。作曲とミックス・マスタリングを担当。'
    },
    'lofi': {
        title: 'Portfolio BGM Lofi',
        videoId: 'VmTgZhjnZXw',
        description: '回想や独白などエモーショナルな場面で使用することを想定して作曲しました。\n\n2025年制作。Loigc Proを使用。作曲とミックス・マスタリングを担当。'
    },
    'green': {
        title: 'Portfolio BGM Green',
        videoId: 'LDJUmU2uLTw',
        description: '森や泉など生命力が溢れた場面で使用することを想定して作曲しました。\n\n2025年制作。Loigc Proを使用。作曲とミックス・マスタリングを担当。'
    },
    'beach': {
        title: 'Portfolio BGM Beach',
        videoId: 'DUcVjtzAmkE',
        description: '海や異なる種族がいるエリアなど異国感のある場面で使用することを想定して作曲しました。\n\n2025年制作。Loigc Proを使用。作曲とミックス・マスタリングを担当。'
    },
    'drive': {
        title: 'Portfolio BGM Drive',
        videoId: '32myK-Ctmkg',
        description: 'ドライブやピクニックといった軽快な場面で使用することを想定して作曲しました。\n\n2025年制作。Loigc Proを使用。作曲とミックス・マスタリングを担当。'
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