//Da bot
if ("dabot" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/dabot.js")
        .then(res => console.log("Allok"))
        .catch(err => console.log("dabot not working sire", err))
    })
  }

const container = document.querySelector(".container")
const Projects = [
  { name: "Progressive Web App", image: "images/pwa-logo.jpg" },
]

const showProjects = () => {
    let output = ""
    Projects.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Voir plus</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
document.addEventListener("DOMContentLoaded", showProjects)

  