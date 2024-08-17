document.addEventListener('mousemove', (e) => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `
    })
})

document.addEventListener('touchmove', (e) => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.touches[0].clientX - window.innerWidth / 2) * -0.005}deg;
            --move-y: ${(e.touches[0].clientY - window.innerHeight / 2) * -0.01}deg;
        `
    })
})