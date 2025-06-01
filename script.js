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
        description: 'Instagramにて200万再生以上された楽曲。リリース時にオリコンチャートインをしGITADORAにも採用実績あり。\n\n制作期間は約3ヶ月を要し、複数のテーマを巧みに織り交ぜながら、感動的なフィナーレへと導きます。録音はロサンゼルスのスタジオで行われ、世界一流のミュージシャンたちと共に制作されました。'
    },
    'fadeaway': {
        title: 'Fade Away',
        videoId: 'aHAENBTPHwk', // Replace with actual YouTube video ID
        description: '※近未来的なサウンドデザインとメロディアスなシンセサイザーが融合した作品です。デジタル技術を駆使しながらも、人間的な温かみを失わない楽曲を目指しました。\n\n様々なエレクトロニック楽器とアナログシンセサイザーを組み合わせ、独特な音響空間を創り出しています。現代社会とテクノロジーの関係性をテーマにした、コンセプチュアルな一曲です。'
    },
    'departure': {
        title: 'Departure',
        videoId: 'NCSvLsPAnC8', // Replace with actual YouTube video ID
        description: '※大型テーマパークのメインアトラクション用に作曲された楽曲です。ファミリーから大人まで幅広い年齢層に愛される、魔法のような音楽体験を提供します。\n\nオーケストラとポップスの要素を巧みに融合させ、アトラクションの物語性を音楽で表現しました。毎日何千人もの来園者に愛され続けている代表作の一つです。'
    },
    'etherial': {
        title: 'Etherial',
        videoId: 'G2kAxUhMtfM', // Replace with actual YouTube video ID
        description: '※受賞歴のあるドキュメンタリー映画のために作られたスコアです。リアルな人間ドラマを音楽で支え、視聴者の心に深く響く作品となりました。\n\n室内楽編成を中心としたアンサンブルで、親密で感情的な音楽を創造しました。映像との一体感を重視し、物語の核心に迫る音楽的表現を追求しています。'
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