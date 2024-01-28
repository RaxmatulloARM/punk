const eltemplate = document.querySelector(".template").content;
const ellist = document.querySelector(".list");
const eltemplate2 = document.querySelector(".template2").content;
const ellist2 = document.querySelector(".list2");
const elbtn = document.querySelector(".btn1");
const ellist3 = document.querySelector(".list3");
const eltemplate3 = document.querySelector(".template3").content;
let post = [];
let kamentariya = [];
let userId;

function imtihon(array, node) {
  node.innerHTML = null;

  array.forEach((stronger) => {
    const template = eltemplate.cloneNode(true);

    template.querySelector(".title").textContent = stronger.id;
    template.querySelector(".title2").textContent = stronger.name;
    template.querySelector(".title4").textContent = stronger.username;
    template.querySelector(".title3").textContent = stronger.email;
    template.querySelector(".btn1").dataset.userId = stronger.id;

    node.appendChild(template);
  });
}

async function nimadir() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const bir = await response.json();
  imtihon(bir, ellist);
}

nimadir();

////////P O S T/////////

function imtihonn(array, node) {
  node.innerHTML = null;

  array.forEach((punk) => {
    const template2 = eltemplate2.cloneNode(true);

    template2.querySelector(".babe").textContent = punk.userId;
    template2.querySelector(".babe2").textContent = punk.title;
    template2.querySelector(".babe3").textContent = punk.body;
    template2.querySelector(".bt").dataset.userId = punk.userId;

    node.appendChild(template2);
  });
}

async function nimadir2(userId) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const bir2 = await response.json();

  post = bir2.filter((post) => post.userId == userId);

  imtihonn(post, ellist2);
}

ellist.addEventListener('click', (evt) => {
  if (evt.target.matches('.btn1')) {
    ellist2.innerHTML = null;
    userId = evt.target.dataset.userId;
    nimadir2(userId);
    ellist3.innerHTML = null;
  }
});

////////// K O M M E N T //////////

function imtihonnn(array, node) {
  node.innerHTML = null;

  array.forEach((punky) => {
    const template3 = eltemplate3.cloneNode(true);

    template3.querySelector(".bitch").textContent = punky.postId;
    template3.querySelector(".bitch2").textContent = punky.name;
    template3.querySelector(".bitch3").textContent = punky.email;
    template3.querySelector(".bitch4").textContent = punky.body;

    node.appendChild(template3);
  });
}

async function nimadir6(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  const bir4 = await response.json();
  imtihonnn(bir4, ellist3);
  kamentariya = bir4.filter((comment) => comment.postId == postId);
}

ellist2.addEventListener("click", (evt) => {
  const comButton = evt.target.matches(".bt");
  if (comButton) {
    const isButton = evt.target.dataset.userId;
    nimadir6(isButton);
  }
});
