export const adicionarParticulas = ({ pageX, pageY}) =>{
    const particle = document.createElement('div');
    particle.className = "w-2 h-2 pointer-events-none rounded-full absolute z-50";
    particle.style.backgroundColor = `hsl(${Math.random() * 80}, 50%, 50%)`;
    particle.style.left = pageX - 4 + "px";
    particle.style.top = pageY - 4 + "px";
    document.body.appendChild(particle);

    const moveParticle = () =>{
        let newX = parseFloat(particle.style.left) + (Math.random() * 6);
        let newY = parseFloat(particle.style.top) + (Math.random());
        particle.style.left = newX + "px";
        particle.style.top = newY + "px";

        requestAnimationFrame(moveParticle);
    }

    moveParticle();

    setTimeout(() => {
        particle.remove();
    }, 300);
}