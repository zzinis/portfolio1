const $frame = $("#wrap");
const $tab_btns = $frame.find("dt");
const $tab_boxs = $frame.find("dd");
let speed = 500;

$tab_btns.on("click", function(e){
    e.preventDefault();

    var isOn = $(this).hasClass("on");

    $tab_btns.removeClass("on");
    $tab_boxs.slideUp(speed);

    if (isOn){
        $(this).removeClass("on");
        $(this).next().slideUp(speed);
    }else{
        $(this).addClass("on");
        $(this).next().slideDown(speed);
    }
});
