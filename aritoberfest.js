var tabela = document.getElementById("lista-participantes");
var nomeParticipante = document.getElementById("nomeParticipante");
var i = 0;
function createList() {
  var ul = document.createElement("ul");
  ul.classList.add("lista");
  ul.setAttribute("id", `${"ul" + i}`);
  tabela.appendChild(ul);

  var participante = document.createElement("li");
  participante.textContent = nomeParticipante.value;
  ul.appendChild(participante);
  var li = document.createElement("li");
  li.innerHTML = `<button type="button" class="btn" onclick=btnMenos(${i})>-</button><span id="${
    "pont" + i
  }">0</span><button type="button" class="btn" onclick=btnMais(${i})>+</button>`;
  ul.appendChild(li);
  var remove = document.createElement("li");
  remove.innerHTML = `<button type="button" class="btn" onclick=removeElement(${i})>X</button>`;
  ul.appendChild(remove);
  nomeParticipante.value = "";
  nomeParticipante.focus();
  i++;
}

function removeElement(id) {
  var ul = document.getElementById(`${"ul" + id}`);
  ul.parentNode.removeChild(ul);
}
function btnMenos(value) {
  var namePontSpan = document.getElementById(`${"pont" + value}`).innerHTML;
  document.getElementById(`${"pont" + value}`).innerHTML =
    parseInt(namePontSpan) - 1;
}
function btnMais(value) {
  var namePontSpan = document.getElementById(`${"pont" + value}`).innerHTML;
  document.getElementById(`${"pont" + value}`).innerHTML =
    parseInt(namePontSpan) + 1;
}

