// small utility to save posts to read later
var savedPosts = {}
if (localStorage.savedPosts)
  savedPosts = JSON.parse(localStorage.savedPosts)

function savePost(url, title, description) {
  savedPosts[url] = {title: title, description: description}
  localStorage.savedPosts = JSON.stringify(savedPosts)
}

function removePost(url) {
  delete savedPosts[url]
  localStorage.savedPosts = JSON.stringify(savedPosts)
}


function updateSavePostButtons() {
  document.querySelectorAll("button.btn-save").forEach(function (btn) {
    const url = btn.dataset.url
    if (savedPosts[url])
      btn.innerHTML = "remover publicación";
  else
    btn.innerHTML = "Guardar publicación";

      btn.onclick = function() {
      if (savedPosts[url]){
          removePost(url)
          btn.innerHTML = "Guardar publicación"
      }
      else {
          savePost(url, btn.dataset.title, btn.dataset.description)
          btn.innerHTML = "remover publicación"
      }
      }
  });
}
