class MyYoutube{
    constructor(opt){
        if(!opt.frame || !opt.key){
            console.error("frame값과 key값은 필수 입력사항 입니다.");
            return;
        }
        if(!opt.playlist) opt.playlist = "PL7bRBTzgXVld3fPyDIJwzH3Dltj3e8bVU";
        if(!opt.num) opt.num = 6;
        this.init(opt);
        this.bindingEvent();
    }
    init(opt){
        this.body = document.querySelector("body");
        this.frame = document.querySelector(opt.frame);
        this.key = opt.key;
        this.playlist = opt.playlist;
        this.num = opt.num;
    }
    bindingEvent(){
        this.createVid();

        this.frame.addEventListener("click", e=>this.createPop(e));

        this.body.addEventListener("click", e=>this.removePop(e));
    }
    createVid(){
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${this.key}&part=snippet&playlistId=${this.playlist}&maxResults=${this.num}`;

        fetch(url)
        .then(data=>{
            return data.json();
        })
        .then(json=>{
            const items = json.items;
            let htmls = "";

            items.forEach(item=>{
                let title = item.snippet.title;
                title = title.substr(0,29);
                let date = item.snippet.publishedAt;
                date = date.substr(0,10);
                

                htmls += `
                    <article>
                        <a href=${item.snippet.resourceId.videoId}>
                            <img src=${item.snippet.thumbnails.high.url}>
                        </a>
                        <div class ="con">
                            <h2>${title}</h2>
                            <span>${date}</span>
                        </div>
                        
                    </article>
                `;
            });
            this.frame.innerHTML += htmls;
        });
    }
    createPop(e){
        e.preventDefault();
	
		if(e.target.parentElement.nodeName !== "A") return;
		const vidId = e.target.closest("a").getAttribute("href");	
	
		let pop = document.createElement("aside");
		pop.innerHTML = `
			<iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
			<span class="btnClose">close</span>
		`;
	
		this.body.append(pop);


    }
    removePop(e){
        const pop = this.body.querySelector("aside");
        if(pop == null) return;

        const closeBtn = pop.querySelector("span");
        if(e.target == closeBtn) pop.remove();
    }
}




// $.ajax({
//     url:"https://www.googleapis.com/youtube/v3/playlistItems",
//     dataType : 'jsonp',
//     data :{
//         part : "snippet",
//         key: "AIzaSyDADYcd0NuFdvXHQT6pTPiGJLbUS7vppKM",
//         maxResults :6,
//         playlistId : "PL7bRBTzgXVld3fPyDIJwzH3Dltj3e8bVU"
//     }
// })
// .success(function(data){
//     // console.log(data);
    
//     let items = data.items;
//     console.log(items);

//     $(items).each(function(index, data){

//         let txt = data.snippet.description;
//         let len = txt.length;
//         if(len>29){
//             txt = txt.substr(0,29) + "..."
//         }else{
//             txt
//         }

//         let date = data.snippet.publishedAt;
//         date = date.substr(0,10)
//         // date = date.split("T");

//         let title = data.snippet.title;
//         title = title.substr(0,23)


//         $("#vidGallery")
//             .append(
//                 $("<article>")
//                     .append(
//                         $("<a>").attr({ href : data.snippet.resourceId.videoId})
//                                 .append(
//                                     $("<img>").attr({ src : data.snippet.thumbnails.high.url})
//                                 ),
//                         $("<div class = 'con'>")
//                                     .append(
//                                         $("<h2>").text(title),
//                                         $("<p>").text(txt),
//                                         $("<span>").text(date)
//                                     )
//                     )
                    
//             )

//     });

// })
// .error(function(err){
//     console.log("데이터를 불러올 수 없습니다");
// })


// $("body").on("click", "#vidGallery article a", function(e){
//     e.preventDefault();

//     let vidId = $(this).attr("href");
//     $("body")
//         .append(
//             $("<div class = 'pop'>")
//                 .append(
//                     $("<iframe>")
//                         .attr({
//                             src : "https://www.youtube.com/embed/"+vidId,
//                             frameborder : 0,
//                             width:"100%",
//                             height:600
//                         }),
//                     $("<span>").text("close")    
//                 )
//         )

// });


// $("body").on("click", ".pop span", function(){
//     $(".pop").remove();
// });

