document.querySelector("#banners").addEventListener("wheel", event => {
    if(event.deltaY > 0){
        event.target.scrollBy(400, 0)
    } else {
        event.target.scrollBy(-400, 0)
    }
})