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

document.querySelectorAll(".nutrition-box").forEach(box => {

  box.innerHTML = `
    <div class="nutrition-calories">
      ${nutrition.servings}
      <small>Number of Servings</small>

      ${nutrition.calories}
      <small>Calories per Serving</small>
    </div>

    <div class="nutrition-grid">

      <div class="nutrition-item">
        <span>Total Fat</span>
        <span>${nutrition.totalfat}g</span>
      </div>

      <div class="nutrition-item">
        <span>Saturated Fat</span>
        <span>${nutrition.saturatedfat}g</span>
      </div>

      <div class="nutrition-item">
        <span>Cholesterol</span>
        <span>${nutrition.cholesterol}mg</span>
      </div>

      <div class="nutrition-item">
        <span>Sodium</span>
        <span>${nutrition.sodium}mg</span>
      </div>

      <div class="nutrition-item">
        <span>Total Carbs</span>
        <span>${nutrition.totalcarbs}g</span>
      </div>

      <div class="nutrition-item">
        <span>Dietary Fiber</span>
        <span>${nutrition.dietaryfiber}g</span>
      </div>

      <div class="nutrition-item">
        <span>Total Sugars</span>
        <span>${nutrition.totalsugars}g</span>
      </div>

      <div class="nutrition-item">
        <span>Protein</span>
        <span>${nutrition.protein}g</span>
      </div>

    </div>
  `;
});
