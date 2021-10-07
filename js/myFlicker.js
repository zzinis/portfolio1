$.ajax({
    url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    dataType:"json",
    data:{
        api_key: "fce3d5dec157a9b2bb0797070e4fd0b8",
        per_page:20,
        format:"json",
        nojsoncallback:1,
        privacy_filter:5,
        tags: "landscape"
    }
})
