function addImageToGallery(imgelemnt) {
  const Imagegalleryelement = document.getElementById("photo-gallery");
  Imagegalleryelement.appendChild(imgelemnt);
}

function createImgElement(photoLink) {
  const imgelemnt = document.createElement("img");
  imgelemnt.src = photoLink;
  imgelemnt.alt = "Photo of a Cat";
  return imgelemnt;
}
function addDeleteButton(imgelemnt){
const deleteButton = document.createElement('button')
deleteButton.innerText= "X"
deleteButton.addEventListener('click', function() {
    imgelemnt.remove()
    deleteButton.remove()

})
const Imagegalleryelement = document.getElementById("photo-gallery");
Imagegalleryelement.appendChild(deleteButton);


return deleteButton
}

function addPhoto() {
  const photoLink = prompt("Enter a photo Link: ");
  const imgelemnt = createImgElement(photoLink);
  addImageToGallery(imgelemnt);
 addDeleteButton(imgelemnt)

}
const addphotobtn = document.getElementById("addphotobtn");
addphotobtn.addEventListener("click", addPhoto);
