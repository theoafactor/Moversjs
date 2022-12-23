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
		
		/**
		 * Handles uploading images only
		 * other kinds of files will not be uploaded
		 */
		class UploadImage{

			/**
			 * Starts the actual uploading process 
			 * @param {*} image_to_upload 
			 * @param {*} target_location 
			 */
			constructor(image_to_upload, target_location){
				//do the actual uploading
				console.log("Uploading: ", image_to_upload, " to ", target_location)


			}


		}


		/**
		 * Handles only uploading of pdfs 
		 */
		class UploadPdf{

		}


		/**
		 * Handles all kinds of files ..
		 * 
		 */
		class UploadFile{

		}

		







		return {
			uploadImage: (image_to_upload, target_location) => new UploadImage(image_to_upload, target_location),
			// uploadPdf: uploadPdf,
			// getUploadProgress: getUploadProgess,
			// getFileSize: getFileSize
		}




}(new AnchorMixer));