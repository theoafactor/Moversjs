document.querySelector("#upload-form").addEventListener("submit", function(event){
    event.preventDefault();

    // let form = new FormData();

    

    // form.append("")
    let image_to_upload = this.image.files[0];

    Movers.uploadImage(image_to_upload, "http://localhost:8080/upload_image.php")
})

