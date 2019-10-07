function saveInsertedImage(){
	var editIMGElem = document.getElementById("uploadfile");
	var userVersion = editIMGElem.innerHTML;

	localStorage.userEdits = userVersion;
}