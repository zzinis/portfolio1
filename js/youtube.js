$.ajax({
    url : "https://www.googleapis.com/youtube/v3/playlistItems",
    dataType : 'jsonp',
    data : {
        part : "snippet",
        key : "AIzaSyDADYcd0NuFdvXHQT6pTPiGJLbUS7vppKM",
        maxResults :5,
        playlistId : "PL7bRBTzgXVld3fPyDIJwzH3Dltj3e8bVU"
    }
})
.success(function(data){
    let items = data.items;
    console.log(items);

    $(items).each(function(idnex, data){
        let txt = data.snippet.description;
        let len = txt.length;
        if(len>150){
            txt = txt.substr(0,150) + "..."
        }else{
            txt
        }

        let date = data.snippet.publishedAt;
        date = date.substr(0,10)

        $("#vidGallery")
            .append(
                $("<article>")
                    .append(
                        $("<a>").attr({ href: data.snippet.resourceId.videoID})
                                .append(
                                    $("<img>").attr({ src: data.snippet.thumbnails.high.url})
                                ),
                        $("<div class = 'con'>")
                                    .append(
                                        $("<h2>").text(data.snippet.title),
                                        $("<p>").text(txt),
                                        $("<span>").text(date)
                                    )
                    )
            )
    });

})
.error(function(err){
    console.log("데이터를 불러올 수 없습니다.")
})

$("body").on("click", "#vidGallery article a", function(e){
    e.preventDefault();

    let vidId = $(this).attr("href");

    $("body")
        .append(
            $("<div class = 'pop'>")
                .append(
                    $("<iframe>")
                        .attr({
                            src : "https://www.youtube.com/embed/"+vidId,
                            frameborder : 0,
                            width:"100%",
                            height:600
                        }),
                        $("<span>").text("close")
                )
        )
});

$("body").on("click", ".pop span", function(){
    $(".pop").remove();
});