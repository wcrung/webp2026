function getImages(){
  const url="https://api.flickr.com/services/rest?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=9&format=json&nojsoncallback=1";
  fetch(url)
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
    const gallery=document.getElementById("gallery");
    gallery.innerHTML=" ";
    
    const photos=data.photos.photo;
    photos.forEach(photo=>{
      const img=document.vreateElemtn("img");
      const imgUrl=           `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
      img.src=imgUrl;
      gallery.appendChild(img);
    });
  })
  .catch(error=>{
    console.log("Error:", error);
  });
}
