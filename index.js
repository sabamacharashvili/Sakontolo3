function GetData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        createElement(post.title, post.body);
      });
    })

    .catch((err) => console.log(err));
}
const container = document.getElementById("container");
const createElement = (titletext, bodytext) => {
  const card = document.createElement("div");
  const title = document.createElement("h5");
  const body = document.createElement("p");

  card.classList.add("card");
  title.classList.add("title");
  body.classList.add("body");

  container.append(card);
  card.append(title);
  card.append(body);

  title.innerHTML = titletext;
  body.innerHTML = bodytext;
};

const refreshButton = document.getElementById("refreshBtn");
refreshButton.addEventListener("click", () => {
  container.innerHTML = "";
  GetData();
});

GetData();
