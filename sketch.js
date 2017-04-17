var music;
var button;
var input;
var para;
var list;
var downloader;
var script;
var fileName;
// function preload(){
//    music = loadJSON("uplifting");
// }
function setup() {
    script = new Script();
    var title = createDiv("JSON Downloader");
    title.addClass('title');
    title.position(0, 20);
    input = createFileInput(handleFile);
    input.position(400, 100);
    para = createDiv("File: ");
    para.addClass('Status');
    para.attribute("id", "status");
    // console.log(music);
    // for(var i = 0; i<music.music.length;i++){
    //   console.log(music.music[i]);
    // }
    // console.clear();
    // button = createButton("Start Downloads");
    // button.position(19, 19);
    // button.mousePressed(startDownload);
    noCanvas();
    noLoop();
}

function startDownload() {
    if ($('.checkbox').is(':checked')) {
        script.onload(music.music,fileName);
    } else {
        button.attribute("disabled", "disabled");
        var counter = 0;
        downloader = setInterval(function() {
            listSongs();
            if (counter < music.music.length) {
                var names = music.music[counter].split("/");
                var name = names[names.length - 1];
                para.html("File "+ name);
                downloadURI(music.music[counter], name);
                counter++;
            } else {
                clearInterval(downloader);
            }
        }, 5000);
    }
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

function listSongs() {
    var temp = "";
    for (var i = 0; i < music.music.length; i++) {
        temp += music.music[i] + "<br>"
    }
    list = createDiv(temp);
    list.position(0, 0);
    list.addClass('list');
}

function start() {
  makeZipbox();
    button = createButton("Start Downloads");
    button.position(window.innerWidth / 2 - 150, 150);
    button.addClass('button-style');
    button.mousePressed(startDownload);
    // console.clear();
    var temp = setInterval(function() {
        if (typeof music != 'undefined') {
            clearInterval(temp);
            listSongs();
        }
    }, 250);
}

function handleFile(file) {
    print(file);
    // if (file.type === 'text') {
    fileName = file.name.split(".")[1];
    music = loadJSON(file.data);
    start();
    // }
}

function makeZipbox() {
    var divbox = createDiv("");
    divbox.addClass('checkDiv');
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "zipbox";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.className = "checkbox";

    var label = document.createElement('label')
    label.htmlFor = "id";
    label.className = "checkbox-label";
    label.appendChild(document.createTextNode('Download as a zip?'));

    divbox.child(checkbox);
    divbox.child(label);

}
