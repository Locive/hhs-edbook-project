function saveInsertedImage(){
	var editIMGElem = document.getElementById("file");
	var userVersion = editIMGElem.innerHTML;

	localStorage.userEdits = userVersion;
}