const inputName = document.getElementById("name");
const h1 = document.querySelector("#head h1");
const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", e => {
    const item = localStorage.getItem("name");
    if (item) {
        localStorage.removeItem("name");
        h1.innerHTML = "<i>Nessun Nome</i>"
    } else alert("Nessun Nome creato, creane uno")
})

window.addEventListener("DOMContentLoaded", (e) => {
const p = document.getElementsByTagName("p")[0];
  if (localStorage.getItem("name")) {
    h1.innerHTML = localStorage.getItem("name");
  }

  let count = 0;
  setInterval(() => {
    count++;
    sessionStorage.setItem("counter", count)
    p.innerHTML = `Tempo: ${count} secondi`
  }, 1000)
});

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("name", inputName.value);
  h1.innerHTML = inputName.value;
});


