
const container = document.querySelector(".container")
const Projects = [
  { name: "Webbapp", image: "images/coffee1.jpg" },
]

if ("dabot" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/dabot.js")
        .then(res => console.log("Allok"))
        .catch(err => console.log("dabot not working sire", err))
    })
  }
  

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  