new fullpage('#fullpage', {
    autoscrolling: true,
    scrollHorizontally: true,
    navigation: true,
    onLeave: (origin, destination) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        gsap.to("title", 0.5, { y: "50", opacity: 0, rotation: 360, scale:0.5});
    }

});

