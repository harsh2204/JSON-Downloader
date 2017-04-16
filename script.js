function Script() {

    this.onload = function(arr) {
        var zip;
        var a = document.body.appendChild(
            document.createElement("a")
        );
        var urls = arr;

        function request(url) {
            return new Promise(function(resolve) {
              zip= new JSZip();
                var httpRequest = new XMLHttpRequest();
                httpRequest.open("GET", url);
                httpRequest.onload = function() {
                    zip.file(url, this.responseText);
                    resolve()
                }
                httpRequest.send()
            })
        }

        Promise.all(urls.map(function(url) {
                return request(url)
            }))
            .then(function() {
                console.log(zip);
                zip.generateAsync({
                        type: "blob"
                    })
                    .then(function(content) {
                        a.download = "folder" + new Date().getTime();
                        a.href = URL.createObjectURL(content);
                        a.innerHTML = "download " + a.download;
                        a.click();
                    });
            })
    }
}
