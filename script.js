// The mouseenter event is only triggered when the mouse pointer enters the div element.

// The mousemove event triggers every time the mouse pointer is moved over the div element
var crsr=document.querySelector("#cursor")
var crsr_blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x-10+"px";
    crsr.style.top=dets.y-10+"px";
})


document.addEventListener("mousemove",function(dets){
    crsr_blur.style.left=dets.x-200+"px"; // if we dont do -200 then its top left corner will move with us not center
    crsr_blur.style.top=dets.y-200+"px";
})



var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="0.8px solid #fff";
        crsr.style.backgroundColor="transparent";
        elem.style.color="#000";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #96c11e";
        crsr.style.backgroundColor="#96c11e";
        elem.style.color="#fff";
    })
})


var hy1=document.querySelector("#page4>h2")
var elemAll=document.querySelectorAll(".elem")
elemAll.forEach(function(elemt){
    elemt.addEventListener("mouseenter",function(){
        hy1.style.webkitTextStroke="2px #96c11e";
    })
    elemt.addEventListener("mouseleave",function(){
        hy1.style.webkitTextStroke="2px #fff";
    })
})


var arrow=document.querySelector("#page1 #arrow");
arrow.addEventListener("mousemove",function(){
    crsr.style.scale=3;
        crsr.style.border="0.8px solid #fff";
        crsr.style.backgroundColor="transparent";

})
arrow.addEventListener("mouseleave",function(){
    crsr.style.scale=1;
        crsr.style.border="0px solid #96c11e";
        crsr.style.backgroundColor="#96c11e";
})

 
var btnall=document.querySelectorAll("#nav2 .button")
btnall.forEach(function(e){
    e.addEventListener("mousemove",function(){
        crsr.style.backgroundColor="transparent";
        e.style.backgroundColor="#96c11e"
        e.style.color="#000"
    })

    e.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
            e.style.backgroundColor="#000"
            e.style.color="#fff"

    })
})


var all=document.querySelectorAll("#footer .f h3")
all.forEach(function(t){
    t.addEventListener("mousemove",function(){
        t.style.color="#fff";
    })
    t.addEventListener("mouseleave",function(){
        t.style.color="#000";
    })
})


var w=document.querySelector("#footer4 h3");
    w.addEventListener("mousemove",function(){

    w.style.color="#fff";
})

    w.addEventListener("mouseleave",function(){
    w.style.color="#000";

})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true, markers help us to visulize
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -70%",
        scrub:1,
    }
})


gsap.from('#aboutus img,#aboutus-in',{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3, //agr hum chahte hai multiple elements ek ek krke uper aye;
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 64%",
        end:"top 61%",
        scrub:2,
    }

})


gsap.from('#colon1',{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //  
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from('#colon2',{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //  
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from('#page4>h2',{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 75%",
        scrub:3,
    }
})

gsap.from("#page1 h1,h2,p ",{
    y:-50,
    opacity:0,
    duration:1,

})