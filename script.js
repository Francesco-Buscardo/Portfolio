document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('download-btn');

    if (btn) {
        btn.addEventListener('click', () => {
            window.print();
        });
    }
});