function saveInsertedImage(){
	var editIMGElem = document.getElementById("fileToUpload");
	var userVersion = editIMGElem.innerHTML;

	localStorage.userEdits = userVersion;
}