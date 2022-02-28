const reload = document.getElementById("reload")
const url = "https://api.thecatapi.com/v1/images/search";
const div = document.querySelector(".flex")
let contentHTML = '';


function cats(){
  fetch(url)
  .then((json) => json.json())
  .then((data) => {
      contentHTML += `
      <div class="flex-item">
            <img src="${data[0].url}" alt="${data[0].id}">
      </div>`;
    div.innerHTML = contentHTML;
});
}

function gatos(){
  let gatox = cats() * cats() * cats() * cats();
  return gatox;
}

reload.addEventListener("click",(e)=>{
  e.preventDefault()
  console.log(reload.click)
  reload.value = "New Imagen";
  gatos();
})
