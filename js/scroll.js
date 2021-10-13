const $btns = $("#navi li"); 
const $boxs = $(".myScroll"); 
let posArr = []; 
let len = $btns.length; 
let baseLine = -300; 


for(let i=0; i<len; i++){
    posArr.push($boxs.eq(i).offset().top);     
}

$(window).on("resize", function(){
    posArr = []; 
    for(let i=0; i<len; i++){
        posArr.push($boxs.eq(i).offset().top);     
    }

    console.log(posArr); 
});


$(window).on("scroll", function(){
    var scroll = $(this).scrollTop(); 
    for(let i =0; i<len; i++){
        if(scroll >= posArr[i] + baseLine){
            $btns.children("a").removeClass("on"); 
            $btns.eq(i).children("a").addClass("on"); 

        }
    }
}); 

$("#navi li a").on("click", function(e){
    e.preventDefault(); 

    let target = $(this).attr("href"); 
    console.log(target); 

    let targetPos = $(target).offset().top; 
    console.log(targetPos); 

    $("html, body").animate({
        scrollTop : targetPos
    },1000);
});


