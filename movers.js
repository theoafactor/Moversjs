function AnchorMixer(){


	//load the scripts

   // - Load the Axios Library
   const axiosScript = document.createElement("script");
		   axiosScript.src="https://unpkg.com/axios@0.25.0/dist/axios.min.js";
		   axiosScript.async = true;
		   document.head.appendChild(axiosScript)

   // - Load the Cookie.js library for example
   const cookieScript = document.createElement("script");
		   cookieScript.src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js";
		   cookieScript.async = true;
		   document.head.appendChild(cookieScript);


	//Load Jquery
	const jqueryScript = document.createElement("script");
			jqueryScript.src="https://code.jquery.com/jquery-3.6.3.min.js"
			integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
			crossorigin="anonymous";

			jqueryScript.async = true;
			document.head.appendChild(jqueryScript);
		   

		   this.load_dependencies = () => {

			   return new Promise((resolve, reject) =>{
					intervalObject = setTimeout(() =>{
	   
					   if(
						   typeof axios !== 'undefined' 
						   && typeof Cookies !== 'undefined'
						   && typeof jQuery !== "undefined"
						   ){
							   resolve({
								   axios: axios,
								   Cookies: Cookies,
								   jQuery: jQuery
							   })
						   
					   }else{
						   dependencies = this.load_dependencies();
						   resolve(dependencies)
					   }
	   
	   
					  
				   }, 100)
	   
			   })
	   
	   
		   }


}





/**
 * Movers is a simple uploader library that guarntees delivery
 * Movers relies on other third party libraries to work effectively 
 */

const Movers = (function(anchorMixer){

		//load in the required libraries 
		

		const dependencies = init();

			//console.log(dependencies)

		

		
	
		/**
		 * Uploads an image to specific server
		 * @param {*} image_to_upload : the image to upload from source
		 * @param {*} target_location _ the target server url location
		 */
		async function uploadImage(image_to_upload, target_location){
			await dependencies;

			console.log(image_to_upload)

			const form = new FormData()

			form.append("file", image_to_upload)
			
			const xhr = new XMLHttpRequest

			xhr.open("POST", target_location)

			// xhr.onload = function(){
			// 	//

			// }

			xhr.upload.addEventListener("progress", function(event){

				console.log("Uploading: ", event);


				
			})


		

			xhr.send(form)

		}


		const uploadPdf = () => {
			dependencies.then((dependencies) => {
				console.log(dependencies)
			})

		}


		const getUploadProgess = () => {

		}


		const getFileSize = () => {
			dependencies.then((dependencies) => {
				console.log(dependencies)
			})

		}



		function init(){
			const dependencies = anchorMixer.load_dependencies();

			return dependencies;
		 
		}









		return {
			uploadImage: uploadImage,
			uploadPdf: uploadPdf,
			getUploadProgress: getUploadProgess,
			getFileSize: getFileSize
		}




}(new AnchorMixer));