$("input[type=submit]").on("click", function(e){
    
    if(!isTxt("userid", 5)) e.preventDefault(); 
    if(!isName("username")) e.preventDefault(); 
    if(!isPwd("pwd1", "pwd2", 5)) e.preventDefault(); 
}); 

function isTxt(name, len){

    if(len === undefined) len = 5; 
    let txt = $("[name="+ name +"]").val();

    if(txt.length >= len){  

        $("[name="+name+"]").parent().find("span").remove(); 
        return true;  
    }else{      
        $("[name="+name+"]").parent().find("span").remove(); 
        $("[name="+name+"]").parent().append(
            "<span>입력항목을 "+ len+"글자 이상 입력하세요</span>"
        ); 
        return false;  
    }
}


function isName(name, len){

    if(len === undefined) len = 5; 
    let txt = $("[name="+ name +"]").val();

    if(txt.length >= len){  

        $("[name="+name+"]").parent().find("span").remove(); 
        return true;  
    }else{      
        $("[name="+name+"]").parent().find("span").remove(); 
        $("[name="+name+"]").parent().append(
            "<span>이름을 입력하세요.</span>"
        ); 
        return false;  
    }
}

function isPwd(name1, name2, len){
 
    let pwd1 = $("input[name="+name1+"]").val(); 
    let pwd2 = $("input[name="+name2+"]").val(); 

    let num = /[0-9]/; 
    let eng = /[a-zA-Z]/; 
    let spc = /[~!@#$%^&*()_+\[\]-]/;

    if(pwd1 ===pwd2 && pwd1.length >=len && num.test(pwd1) && eng.test(pwd1) && spc.test(pwd1)){

        $("input[name="+name1+"]").parent().find("span").remove(); 
        return true; 
    }else{ 
        $("input[name="+name1+"]").parent().find("span").remove(); 
        $("input[name="+name1+"]").parent().append(
            "<span>영문과 숫자는 "+len+"글자 이상을 사용해야 하며 특수문자, 숫자를 포함해주세요.</span>"
        ); 
        return false; 
    }
}