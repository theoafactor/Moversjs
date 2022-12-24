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

	// - Load in LocalForage library
	const localforageScript = document.createElement("script");
		localforageScript.src = "https://unpkg.com/localforage@1.10.0/dist/localforage.js";
		localforageScript.async = true;
		document.head.appendChild(localforageScript);		



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
						   && typeof localforage !== "undefined"
						   ){
							   resolve({
								   axios: axios,
								   Cookies: Cookies,
								   jQuery: jQuery,
								   localforage: localforage
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


		let upload_progress = 0;



		const getUploadProgress = function(){
			return upload_progress;
		}
		
		
		
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
				//console.log("Uploading: ", image_to_upload, " to ", target_location)

				//generates a random key used for this particular upload operation
				this.upload_key = 123;
				this.uploadProgress = 0;

				const currentMoverObject = this; //save a reference to this



				const form = new FormData();

				form.append("file", image_to_upload);

				const xhr = new XMLHttpRequest;

				xhr.open("POST", target_location);

				xhr.upload.addEventListener("progress", async function(event){

					currentMoverObject.checker = "working";

					console.log("Jest: ", currentMoverObject.upload_key)
				
					//get the progress of the upload 
					//get the total file size 
					let total_file_size = event.total;
				
					//get what is loaded 
					let loaded = event.loaded;
				
					//percentages 
					let zero_percent = 0;
				
					let twentyfive_percent = (25/100) * total_file_size;
					let forty_percent = (40/100) * total_file_size;
					let fortyfive_percent = (45/100) * total_file_size;
					let fifty_percent = (50/100) * total_file_size;
					let fiftyfive_percent = (55/100) * total_file_size;
					let sixty_percent = (60/100) * total_file_size;
					let sixtyfive_percent = (65/100) * total_file_size;
					let seventy_percent = (70/100) * total_file_size;
					let seventyfive_percent = (75/100) * total_file_size;
					let eighty_percent = (80/100) * total_file_size;
					let eightyfive_percent = (85/100) * total_file_size;
					let ninety_percent = (90/100) * total_file_size;
					let ninetyfive_percent = (95/100) * total_file_size;
					let hundred_percent = (100/100) * total_file_size;
					
				
					//calculate the progress

					
				
					if(loaded < twentyfive_percent){
						//this progress is less than 25%
						currentMoverObject.uploadProgress = 25;

						console.log("Current loader: ", loaded);

						//save this to localforage
						await localforage.setItem(`_movers_upload_${currentMoverObject.upload_key}`, currentMoverObject.uploadProgress);
				
					}
				
					else if(loaded > twentyfive_percent && loaded < forty_percent){
						currentMoverObject.uploadProgress = 30;

						console.log("Current loader: ", loaded);
						await localforage.setItem(`_movers_upload_${currentMoverObject.upload_key}`, currentMoverObject.uploadProgress);
					}
				
					else if(loaded >= forty_percent && loaded <= fortyfive_percent){

						console.log("Current loader: ", loaded);
						currentMoverObject.uploadProgress = 43;
						await localforage.setItem(`_movers_upload_${currentMoverObject.upload_key}`, currentMoverObject.uploadProgress);
					}
				
					else if(loaded == hundred_percent){
						currentMoverObject.uploadProgress = 100;
						console.log("Current loader: ", loaded);	
						await localforage.setItem(`_movers_upload_${currentMoverObject.upload_key}`, currentMoverObject.uploadProgress);
					}
				
				
					
				
				
				
				
				});

				xhr.timeout = 60000;

				xhr.send(form);

			
				

			}


			async getUploadProgress(){

				console.log(this.upload_key)

				//get the upload progress
				let upload_progress = await localforage.getItem(`_movers_upload_${this.upload_key}`);

				console.log("Upload progress: ", upload_progress);

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