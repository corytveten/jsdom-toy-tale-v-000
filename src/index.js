let addToy = false;

function fetchToys(toyData) {
  fetch('http://localhost:3000/toys', {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
        'name': toyData.name.value,
        'image': toyData.image.value
      })
    })
    .then(function(resp) {
        return resp.json();
    })
    .then(function(json) {
      const card = document.createElement('.card')
      card.innerHTML = 
    })
}

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });
});
