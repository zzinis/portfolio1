const main = document.querySelector("main");
const loading = document.querySelector(".loading");
const frame = document.querySelector("#list");
const urlBase = "https://www.flickr.com/services/rest/?";
const method1 = "flickr.people.getPhotos";
const method2 = "flickr.photos.search";
const key = "fce3d5dec157a9b2bb0797070e4fd0b8";
const user_id = "193313784@N07";
const per_page = 9;
const format = "json";

//계정 업로드 이미지 검색
const url1 = `${urlBase}method=${method1}&api_key=${key}&user_id=${user_id}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

//처음 로딩
callData(url1);


//동적 팝업
frame.addEventListener("click",(e)=>{
    e.preventDefault();

    let target = e.target.closest(".item");
    let imgSrc = target.querySelector("a").getAttribute("href");

    let pop = document.createElement("aside");
    let popHtmls = `
        <img src="${imgSrc}">
        <span>close</span>
    `;
    pop.innerHTML = popHtmls;
    main.append(pop);
});

main.addEventListener("click",(e)=>{
    e.preventDefault();

    let target = e.target.closest("aside");
    if(target != null) {
        let imgFrame = target.querySelector("img");
        if(e.target != imgFrame) target.remove();
    }
});


function callData(url){
    initData();

    fetch(url)
    .then(data=>{
        let result = data.json();
        return result;
    })
    .then(json=>{
        let items = json.photos.photo;
    
        createList(items);
        delayLoading();
    })
}

function initData(){
    frame.innerHTML = "";
    loading.classList.remove("off");
    frame.classList.remove("on");
}

function createList(items){
    let htmls = "";

    items.forEach(data => {
        console.log(data);

        let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;
        let thumbSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;

        htmls += `
                <li class="item">
                <a href="${imgSrc}"><img src="${thumbSrc}"></a>
                <p>${data.title}</p>
                    <div class="profile">
                        <span>${data.owner}</span>
                    </div>
                </li>
        `;
    });
    frame.innerHTML = htmls;
}





// const main = document.querySelector("section"); 
// const frame = document.querySelector("#gallery"); 
// const loading = document.querySelector(".loading");
// const base = "https://www.flickr.com/services/rest/?"; 
// const method1 = "flickr.interestingness.getList";
// const method2 = "flickr.photos.search";
// const key = "fce3d5dec157a9b2bb0797070e4fd0b8";
// const per_page = 9; 
// const format = "json"; 
// const user_id = "193313784@N07";

// //interestingness 메소드 
// const url1 = `${base}method=${method1}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`; 

// //search 메서드 
// const url2 = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tag_mode=any&user_id=${user_id}`;

// callData(url2); 

// //동적 팝업 생성 
// frame.addEventListener("click", e=>{
//     e.preventDefault(); 
 
//     if(e.target !== e.target.closest("ul").querySelector(".thumb")) return; 
//     let target = e.target.closest("ul"); 
//     let imgSrc = target.querySelector("a").getAttribute("href"); 
 
//     let pop = document.createElement("aside"); 
//     let pops = `
//                 <img src="${imgSrc}">
//                 <span class="close">CLOSE</span>
//     `; 
//     pop.innerHTML = pops; 
//     document.querySelector("main").append(pop); 
//  }); 
 
 
//  //팝업닫기 버튼 클릭 이벤트 위임 
//  main.addEventListener("click", e=>{
//     let target = e.target.closest("aside"); 
 
//     if(target !== null){
//        let close = target.querySelector(".close"); 
//        if(e.target == close) target.remove(); 
//     }
    
//  })
 
 

// function callData(url){
//     fetch(url)
//     .then(data=>{
//         let result = data.json(); 
//         return result; 
//     })
//     .then(json=>{   
//         let items = json.photos.photo;   
//         createList(items);
//         delayLoading();
//     })
// }

// function createList(items){
//    let htmls =""; 
   
//    //배열의 갯수만큼 반복
//    items.map(data=>{
//       console.log(data);      

//       let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;
//       let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;

//       htmls+=`
//         <div id ="gallery">
//             <ul>
//                 <li>
//                     <a href="${imgSrcBig}">
//                         <img src="${imgSrc}" alt="">
//                     </a>
//                     <p>${data.title}</p>
//                     <div class="profile">
//                         <span></span>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//       `;
//    }); 

//    frame.innerHTML = htmls; 
// }



// $.ajax({
//     url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
//     dataType:"json", 
//     data:{
//         api_key:"fce3d5dec157a9b2bb0797070e4fd0b8", 
//         per_page:9, 
//         format:"json",
//         nojsoncallback:1, 
//         privacy_filter : 5, 
//         tag_mode: "any",
//         user_id: "193313784@N07"
//     }
// })
// .success(function(data){
//     console.log(data.photos.photo); 
//     let items = data.photos.photo; 

//     $("#gallery").append("<ul>");

//     $(items).each(function(index, data){

//         let text = data.title; 
//         if(!data.title){
//             text = "No description in this photo"; 
//         }
        

//         $("#gallery ul")
//             .append(
//                 $("<li>")
//                     .append(
//                         $("<a>").attr({
//                             href : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"
//                         })
//                         .append(

//                             $("<img>").attr({
//                                 src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
//                             })
//                         )
//                     )
//                     .append(
//                         $("<p>").text(text)
//                     )

//                     .append(
//                         $("<div class='profile'>")
//                             .append(
//                                 $("<span>").text(data.owner)
//                             )
//                     )
//             )
//     })
//     const total = $("#gallery ul li").length;
//     let imgNum=0;

//     $("#gallery img").each(function(index, data){   
        
//         data.onload = function(){            
//             imgNum++;
//             console.log(imgNum);

//             if(imgNum === total){   
                
//                 $(".loading").addClass("off");

//                 $("#gallery ul").addClass("on");
//             }
//         }        
//     }); 
// })
// .error(function(err){
//     console.err("데이터를 호출하는데 실패했습니다"); 
// })

// $("body").on("click", "#gallery ul li", function(e){
//     e.preventDefault();

//     let imgSrc = $(this).children("a").attr("href");

//     $("body").append(
//         $("<div class = 'pop'>")
//             .append(
//                 $("<img>").attr({src: imgSrc}),
//                 $("<span>").text("close")
//             )
//     );
// });

// $("body").on("click", ".pop span", function(){
//     $(".pop").fadeOut(1000,function(){
//         $(this).remove();
//     });
// });