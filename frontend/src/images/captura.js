export const capturaImage = () =>{
    html2canvas(document.getElementById("map")).then((canvas) =>{
        let link = document.createElement('a');
        link.download = 'captura.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
};