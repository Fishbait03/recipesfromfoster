function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

let search = document.getElementById("search");
let list = document.getElementById("recipeList");

search.addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let items = list.querySelectorAll("li");

  if (filter.trim() === "") {
    list.classList.remove("show");
    return;
  }

  let visibleCount = 0;

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(filter)) {
      item.style.display = "";
      visibleCount++;
    } else {
      item.style.display = "none";
    }
  });

  if (visibleCount > 0) {
    list.classList.add("show");   // ✅ THIS is key
  } else {
    list.classList.remove("show");
  }
});