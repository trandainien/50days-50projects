const imgs = [
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1587614382231-d1590f0039e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1598346762291-aee88549193f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1509668521827-dd7d42a587e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

const cards = document.querySelector("[data-user-cards]");
let users = [];

window.addEventListener("scroll", () => {
  users.forEach((user, index) => {
    const windowHeight = innerHeight;
    const visibleHeight = 150;
    const elementHeight = user[0].getBoundingClientRect().top;
    const isAppear = elementHeight < windowHeight - visibleHeight;

    console.log(index === 2 && elementHeight, windowHeight - visibleHeight);
    user[0].classList.toggle("active", isAppear);
  });
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((person, index) => {
      const template = document.querySelector("[data-card-template]");
      const card = template.content.cloneNode(true).children[0];

      const name = card.querySelector(".body h1");
      const email = card.querySelector(".body p");
      const imgElement = card.querySelector("img");

      imgElement.setAttribute("src", imgs[index]);
      name.textContent = person.name;
      email.textContent = person.email;

      // card.addEventListener("click", () => {
      //   card.classList.toggle("open");
      // });

      cards.append(card);

      return [...users, card];
    });
  });
