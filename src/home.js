export default function loadHome() {
  const content = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("home");

  const title = document.createElement("h1");
  title.textContent = "Welcome to Gumite Restaurant";

  const tagline = document.createElement("p");
  tagline.textContent =
    "Fresh food, warm hospitality, and unforgettable dining experiences.";

  const description = document.createElement("p");
  description.textContent =
    "At Gumite Restaurant, we serve carefully prepared local and international dishes made from the freshest ingredients.";

  const image = document.createElement("img");

  image.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
  image.alt = "Restaurant interior";

  home.append(title, image, tagline, description);

  content.appendChild(home);
}