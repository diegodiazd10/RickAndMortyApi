// Insertar URL
const API = "https://rickandmortyapi.com/api/character";

// consumir API
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      dibujarData(json.results), paginacion(json.info);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

// Dibujar Cards Persobaje
const dibujarData = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="col-md-4" p-5>';
    html += '<div class="card bg-danger text-center text-white my-2" style="width: 18rem;">';
    html += `<img src="${pj.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h4 class="card-title">${pj.name}</h4>`;
    html += `<h6 class="card-title">Origin: ${pj.origin.name}</h6>`;
    html += `<h6 class="card-title">Status: ${pj.status}</h6>`;
    html += `<p class="card-text">${pj.gender}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPj").innerHTML = html;
};

// Paginacion
const paginacion = (data) => {
  let html = "";
  html += `<li class="page-item" ${
    data.prev ? "" : "disabled"
  }"><a class="btn text-decoration-none text-dark btn-outline-danger px-2 py-0 bg-white rounded-pill " onclick="getData('${data.prev}')">Preview</a></li>`;
  html += `<li class="page-item" ${
    data.next ? "" : "disabled"
  }><a class="btn btn-outline-danger text-decoration-none text-dark bg-white px-3 py-0 rounded-pill " onclick="getData('${data.next}')">Next</a></li>`;
  document.getElementById("paginacion").innerHTML = html;
};

//ejecutar getData
getData(API);
