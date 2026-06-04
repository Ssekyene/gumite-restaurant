export default function loadMenu() {
  const content = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  const item1 = document.createElement("p");
  item1.textContent = "🍔 Beef Burger - $8";

  const item2 = document.createElement("p");
  item2.textContent = "🍕 Margherita Pizza - $12";

  const item3 = document.createElement("p");
  item3.textContent = "🍝 Spaghetti Bolognese - $10";

  const item4 = document.createElement("p");
  item4.textContent = "🥤 Fresh Juice - $3";

  menu.append(title, item1, item2, item3, item4);

  content.appendChild(menu);
}