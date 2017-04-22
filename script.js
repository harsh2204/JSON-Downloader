function Script() {
  var apiKey = "AsWTtgi6qRHWiF3SA5m0Tz";
  var url = "https://process.filestackapi.com/";
  var a = document.body.appendChild(
      document.createElement("a")
  );
    this.onload = function(arr) {
      //Maybe not required:/
      // for (var i = 0; i < arr.length; i++) {
      //   var temp = arr[i].replace(/["]+/g, '');
      //   console.log(temp);
      //   arr[i] = temp;
      // }
      //:/
      var links = "["+arr.toString()+"]";
      console.log(links);
      a.href = url+apiKey+"/zip/"+links;
      a.click();
    }
}
