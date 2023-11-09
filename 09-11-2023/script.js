const profilesection = document.querySelector(".suggested-list");
const btn = document.querySelector("button");
const profileData = [
  {
    name: "Ayato",
    vision: "Hydro",
    online: "dnd",
    image:
      "https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Kamisato_Ayato_Character_Card.png/revision/latest",
  },
  {
    name: "Kokomi",
    vision: "Hydro",
    online: "true",
    image:
      "https://static.wikia.nocookie.net/gensin-impact/images/d/d3/Sangonomiya_Kokomi_Character_Card.png/revision/latest?cb=20230302031258",
  },
  {
    name: "Venti",
    vision: "Anemo",
    online: "false",
    image:
      "https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Venti_Character_Card.png/revision/latest?cb=20230519022324",
  },
  {
    name: "Diona",
    vision: "Cryo",
    online: "true",
    image:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/31/Diona_Character_Card.png/revision/latest",
  },
];
btn.addEventListener("click", more);
function more() {
  btn.style.display = "none";
  profileData.forEach((e) => {
    console.log(e.vision, ...profileData);
    const ht = `
        <div class="profile">
        <div class="profile-pic">
        <img
        src="${e.image}"
        alt="${e.name}"
        />
        <div class="online-status ${e.online}"></div>
        </div>
        <div class="profile-details">
        <div class="profile-container">
        <h1 class="profile-name">${e.name}</h1>
        <h2 class="profile-vision">Vision - ${e.vision}</h2>
            </div>
            <div class="profile-options-container">
              <a href="#">Message</a>
              <a href="#">Follow</a>
            </div>
          </div>
        </div>
    `;
    profilesection.innerHTML += ht;
  });
}
