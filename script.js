let data;
const modulClasses = [".reaction", ".memory", ".verbal", ".visual"];

function fetchModulData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .then((data) => {
      for (i = 0; i < data.length; i++) {
        showProduct(data[i], modulClasses[i]);
      }
    });
}

function showProduct(data, modulClass) {
  //Add Title
  document.querySelector(modulClasses[i] + " .item-title").innerText =
    data.category;

  //Add Icon
  const img = document.createElement("img");
  img.src = data.icon;
  const img_src = document.querySelector(modulClasses[i] + " .item-title");
  img_src.appendChild(img);

  //Add Score
  document.querySelector(modulClasses[i] + " .item-points > span").innerText =
    data.score;
}

fetchModulData();
