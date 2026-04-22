var dataURL = "https://api.flickr.com/services/rest?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=9&format=json&nojsoncallback=1";

function getimg(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', dataURL, true);
  xhr.send();

  xhr.onload = function(){
    var data = JSON.parse(this.responseText);
    add_new_img(data.photos.photo);
  }
}

function add_new_img(dataset){
  var gal = document.getElementById("gallery");
  gal.innerHTML = "";

  dataset.forEach(function(item){
    console.log(item);

    var img = document.createElement("img");

    var imgUrl = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`;

    img.setAttribute("src", imgUrl);
    gal.appendChild(img);
  });
}
