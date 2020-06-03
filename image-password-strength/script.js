const password = document.querySelector('.password');
const background = document.querySelector('.background');
const fl = document.querySelector('.footer-link');

password.addEventListener('input', function(e) {
        let passwordInput = e.target.value;
        // 20 - initial blur value specified in style.css
        let value = 20 - passwordInput.length * 1.5;
        background.style.filter = `blur(${value}px)`;
});