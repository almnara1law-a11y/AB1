// عرض رسالة عند النقر على زر "انقر هنا"
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('showMessage');
    if (btn) {
        btn.addEventListener('click', () => {
            alert('مرحباً! هذا تفاعل بسيط من ملف JavaScript الخارجي.');
        });
    }

    // معالجة نموذج الاتصال
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // محاكاة إرسال البيانات
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                feedback.textContent = 'يرجى ملء جميع الحقول.';
                feedback.style.color = 'red';
            } else {
                feedback.textContent = 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.';
                feedback.style.color = 'green';
                form.reset();
            }
        });
    }

    // إضافة تأثير تمييز للروابط عند التمرير (اختياري)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
