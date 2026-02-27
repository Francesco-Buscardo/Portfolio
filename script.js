document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('download-btn');

    if (btn) {
        btn.addEventListener('click', () => {
            const element = document.querySelector('.cv-container');

            const opt = {
                margin:       0,
                filename:     'CV_Francesco_Buscardo.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { 
                    scale: 2, 
                    useCORS: true,
                    letterRendering: true,
                    scrollY: 0 
                },
                jsPDF:        { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait' 
                },
                pagebreak: { 
                    mode: ['avoid-all', 'css', 'legacy'] 
                }
            };

            btn.style.visibility = 'hidden';

            html2pdf().set(opt).from(element).save()
                .then(() => {
                    btn.style.visibility = 'visible';
                })
                .catch(err => {
                    console.error("Error generating PDF:", err);
                    btn.style.visibility = 'visible';
                });
        });
    } else {
        console.error("Error: The button [id='download-btn'] was not found!");
    }
});