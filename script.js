document.addEventListener('DOMContentLoaded', () => {
    // 添加滚动动画
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // 分享功能
    document.querySelector('.share-btn').addEventListener('click', () => {
        // 这里可以添加分享逻辑
        alert('分享功能开发中...');
    });
});
