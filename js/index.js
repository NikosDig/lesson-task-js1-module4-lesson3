// const url = "https://breakingbadapi.com/api/characters/";
const list = document.querySelector(".list");
const select = document.querySelector(".select");

select.onchange = produceAnchors;

function produceAnchors() {
  const valueOfSelect = this.value;
  list.innerHTML = "";
  for (i = 1; i <= valueOfSelect; i++) {
    list.innerHTML += `<a class="item" href="details.html?id=${i}"> ${i}</a> `;
  }
  console.log(select.value);
}

// async function getData() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();
