// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
}

// Work Modal Functions
const workData = {
    'bereavement': {
        title: 'Bereavement',
        videoId: 'cZ0vSNXe6-M', // Replace with actual YouTube video ID
        description: 'Instagramにて200万再生以上された楽曲。リリース時にオリコンチャートインをしGITADORAにも採用実績あり。\n\n作詞作曲編曲と弦楽器のレコーディング、ドラムのプログラミングを担当。'
    },
    'fadeaway': {
        title: 'Fade Away',
        videoId: 'aHAENBTPHwk', // Replace with actual YouTube video ID
        description: 'Spotify、Instagram、Apple Musicにてそれぞれ100万再生以上されている代表曲。\n\n作詞作曲編曲、ドラムのプログラミングを担当。'
    },
    'departure': {
        title: 'Departure',
        videoId: 'NCSvLsPAnC8', // Replace with actual YouTube video ID
        description: 'キャッチーなメロディやギターリフを採用した意欲作。\n\n作詞作曲編曲と弦楽器のレコーディング、ドラムのプログラミングを担当。'
    },
    'etherial': {
        title: 'Etherial',
        videoId: 'G2kAxUhMtfM', // Replace with actual YouTube video ID
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

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '送信中...';
            submitBtn.disabled = true;
            
            // Simulate sending (replace with actual form handling)
            setTimeout(() => {
                alert('お問い合わせありがとうございます。後ほどご連絡いたします。');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});