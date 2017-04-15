var music;
var button;
var input;
var para;
var list;
// function preload(){
//    music = loadJSON("uplifting");
// }
function setup() {
  var title = createDiv("JSON Downloader");
  title.addClass('title');
  title.position(window.innerWidth/2,20);
  input = createFileInput(handleFile);
  input.position(400, 100);
  para = createDiv("File: ");
  // console.log(music);
  // for(var i = 0; i<music.music.length;i++){
  //   console.log(music.music[i]);
  // }
  // console.clear();
  // button = createButton("Start Downloads");
  // button.position(19, 19);
  // button.mousePressed(startDownload);
  noLoop();
}
function startDownload(){
  var counter = 0;
  var downloader = setInterval(function(){
    listSongs();
    if(counter <music.music.length){
      var names = music.music[counter].split("/");
      var name = names[names.length-1];
      para.remove();
      para= createDiv("File: "+ name);
      downloadURI(music.music[counter],name);
      counter++;
    }else{
    clearInterval(downloader);
    }
  },5000);
}
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}
function listSongs(){
  var temp = "";
  for(var i = 0; i<music.music.length;i++){
    temp += music.music[i] + "<br>"
  }
  list = createDiv(temp);
  list.position(0,250);
}
function start(){
  button = createButton("Start Downloads");
  button.position(19, 19);
  button.mousePressed(startDownload);
  console.clear();
}
function handleFile(file) {
    print(file);
    // if (file.type === 'text') {
        music = loadJSON("uplifting");
        start();
    // }
}
