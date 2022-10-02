const scroll = new LocomotiveScroll({
    el:document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet:{smooth: true},
    smarphone: {smooth: true},
});
//pour changer le body color//
scroll.on("scroll", () => {
    console.log("ca scroll!!");
    if (document.querySelector("#color.is-inview")) {
        document.body.style.background = "#000101";
        document.body.style.color = "#fefeff";
    } else {
        document.body.style.background = "#fefeff";
        document.body.style.color = "#000101";
    }
});