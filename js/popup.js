class CookiePop {
    constructor(opt){
        this.cookieName = opt.name;
        this.popup = document.querySelector(opt.popup);
        this.btnClose = this.popup.querySelector(".close");
        this.isCookie = document.cookie.indexOf(this.cookieName);
        this.isOn;
    
        (this.isCookie == -1) ? this.isOn = "block" : this.isOn = "none"; 
        this.popup.style.display = this.isOn;   
    
        this.btnClose.addEventListener("click", e=>{
            e.preventDefault();
            this.popup.style.display = "none";
    
            let isChecked = this.popup.querySelector("input[type=checkbox]").checked;
            if(isChecked) this.setCookie(this.cookieName, 1);        
        })
    }

    setCookie(name, due){
        const today = new Date();
        const date = today.getDate();
        today.setDate(date+due);
        const duedate = today.toGMTString();
        document.cookie = `${name}; path=/; expires=${duedate}`;
    }
}

