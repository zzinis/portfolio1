class Validation{
    constructor(selector, arr){
        this.form = document.querySelector(selector);
        this.btnSubmit = this.form.querySelector("input[type=submit]");

        arr.forEach(opt =>{
            this.btnSubmit.addEventListener("click", e=>{
                if(opt.type==="text"){
                    if(!this.isTxt(opt.name, opt.len)) e.preventDefault();
                }
                if(opt.type==="email"){
                    if(!this.isEmail(opt.name, opt.len)) e.preventDefault();
                }
                if(opt.type==="username"){
                    if(!this.isName(opt.name)) e.preventDefault();
                }
                if(opt.type==="password"){
                    if(!this.isPwd(opt.name[0], opt.name[1], opt.len)) e.preventDefault();
                }
            })
        })
    }
    isTxt(name, len){
        const input = this.form.querySelector(`[name=${name}]`);
        const txt = input.value;

        if(txt.length > len){
            const errMsgs = input.closest("td").querySelectorAll("span");
            if(errMsgs.length >0) input.closest("td").querySelector("span").remove();
            return true;
        }else{
            const errMsgs = input.closest("td").querySelectorAll("span");
            if(errMsgs.length >0) input.closest("td").querySelector("span").remove();
    
            const errMsg = document.createElement("span");
            errMsg.append(`텍스트를 ${len}글자 이상 입력하세요.`);
            input.closest("td").append(errMsg);
    
            return false;
        }
    }

    isEmail(name, len){
        const input = this.form.querySelector(`[name=${name}]`);
        const txt = input.value;

        if(txt.length > len && /@/.test(txt)){
            const errMsgs = input.closest("td").querySelectorAll("span");
            if(errMsgs.length >0) input.closest("td").querySelector("span").remove();
            return true;
        }else{
            const errMsgs = input.closest("td").querySelectorAll("span");
            if(errMsgs.length >0) input.closest("td").querySelector("span").remove();
    
            const errMsg = document.createElement("span");
            errMsg.append(`이메일 주소를 ${len}글자 이상 입력하세요.`);
            input.closest("td").append(errMsg);
    
            return false;
        }
    }

    isName(name, len){
        const input = this.form.querySelector(`[name=${name}]`);
        const txt = input.value;

        if(txt.length > len){
            const errMsgs = input.closest("td").querySelectorAll("span");
            if(errMsgs.length >0) input.closest("td").querySelector("span").remove();
            return true;
        }else{
            const errMsgs = input.closest("td").querySelectorAll("span");
            if(errMsgs.length >0) input.closest("td").querySelector("span").remove();
    
            const errMsg = document.createElement("span");
            errMsg.append(`텍스트를 ${len}글자 이상 입력하세요.`);
            input.closest("td").append(errMsg);
    
            return false;
        }
    }

    

    isPwd(name1, name2, len){
        const pwd1 = this.form.querySelector(`[name=${name1}]`);
        const pwd2 = this.form.querySelector(`[name=${name2}]`);
        const pwd1_val = pwd1.value;
        const pwd2_val = pwd2.value;

        const num = /[0-9]/;
        const eng = /[a-zA-Z]/;
        const spc = /[!@#$%^&*()_]/;

        if(pwd1_val === pwd2_val && pwd1_val.length >len && num.test(pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val)){      
            const errMsgs = pwd1.closest("td").querySelectorAll("span");
            if(errMsgs.length > 0 ) pwd1.closest("td").querySelector("span").remove();
            return true;
        }else{    
            const errMsgs = pwd1.closest("td").querySelectorAll("span");  
            if(errMsgs.length > 0 ) pwd1.closest("td").querySelector("span").remove();       
    
            const errMsg = document.createElement("span");
            errMsg.append(`비밀번호는 ${len}글자 이상, 영문, 숫자, 특수문자를 모두 포함해서 동일하게 입력하세요.`);
            pwd1.closest("td").append(errMsg);
    
            return false;
        }
    }
}


// $("input[type=submit]").on("click", function(e){
    
//     if(!isTxt("userid", 5)) e.preventDefault(); 
//     if(!isName("username")) e.preventDefault(); 
//     if(!isPwd("pwd1", "pwd2", 5)) e.preventDefault(); 
//     if(!isEmail("email")) e.preventDefault();
// }); 

// function isTxt(name, len){

//     if(len === undefined) len = 5; 
//     let txt = $("[name="+ name +"]").val();

//     if(txt.length >= len){  

//         $("[name="+name+"]").parent().find("span").remove(); 
//         return true;  
//     }else{      
//         $("[name="+name+"]").parent().find("span").remove(); 
//         $("[name="+name+"]").parent().append(
//             "<span>입력항목을 "+ len+"글자 이상 입력하세요</span>"
//         ); 
//         return false;  
//     }
// }


// function isName(name, len){

//     if(len === undefined) len = 5; 
//     let txt = $("[name="+ name +"]").val();

//     if(txt.length >= len){  

//         $("[name="+name+"]").parent().find("span").remove(); 
//         return true;  
//     }else{      
//         $("[name="+name+"]").parent().find("span").remove(); 
//         $("[name="+name+"]").parent().append(
//             "<span>이름을 입력하세요.</span>"
//         ); 
//         return false;  
//     }
// }

// function isPwd(name1, name2, len){
 
//     let pwd1 = $("input[name="+name1+"]").val(); 
//     let pwd2 = $("input[name="+name2+"]").val(); 

//     let num = /[0-9]/; 
//     let eng = /[a-zA-Z]/; 
//     let spc = /[~!@#$%^&*()_+\[\]-]/;

//     if(pwd1 ===pwd2 && pwd1.length >=len && num.test(pwd1) && eng.test(pwd1) && spc.test(pwd1)){

//         $("input[name="+name1+"]").parent().find("span").remove(); 
//         return true; 
//     }else{ 
//         $("input[name="+name1+"]").parent().find("span").remove(); 
//         $("input[name="+name1+"]").parent().append(
//             "<span>영문과 숫자는 "+len+"글자 이상을 사용해야 하며 특수문자, 숫자를 포함해주세요.</span>"
//         ); 
//         return false; 
//     }
// }

// function isEmail(name) {

//     let txt = $("[name="+name+"]").val(); 

//     if(email == ""){      
//         $("[name="+name+"]").parent().find("span").remove(); 
//         return true; 
//     }else{      
//         $("[name="+name+"]").parent().find("span").remove(); 
//         $("[name="+name+"]").parent().append(
//             "<span>메일 아이디를 입력하세요.</span>"
//         ); 
//         return false; 
//     }
// }