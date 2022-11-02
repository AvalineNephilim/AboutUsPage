gsap.to('#vdo', {
    width:'100%',
    height:'100%',
    ease:'Power1.out',
    scrollTrigger:{
        trigger:'#video',
        // markers: true,
        start:'top 30%',
        end:'bottom bottom',
        toggleActions: "play pause resume reset", 
        // scrub:1,
    }
})