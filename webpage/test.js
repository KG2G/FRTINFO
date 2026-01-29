document.querySelector('.fancy-btn').addEventListener('click', function() {
    this.textContent = 'Clicked! 🎉';
    setTimeout(() => {
        this.textContent = 'Click Me!';
    }, 1000);
});
