document.querySelector("#upload-form").addEventListener("submit", async function(event){
    event.preventDefault();

    // let form = new FormData();

    

    // form.append("")
    let image_to_upload = this.image.files[0];

    //upload the image
    const mover = Movers.uploadImage(image_to_upload, "http://movers.com.test/index.php");

    await mover.getUploadProgress();

   

})

