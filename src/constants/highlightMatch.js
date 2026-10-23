// Tras navegar a una sección desde el buscador global, ubica en el DOM ya
// renderizado el primer nodo de texto que contiene el término buscado,
// hace scroll hasta ahí y lo resalta brevemente. Como el contenido de cada
// Section vive en JSX plano (sin data-attributes por palabra), esta es la
// única forma de apuntar al lugar exacto sin instrumentar cada feature.

const MARK_ATTR = "data-search-mark";
const HIGHLIGHT_MS = 3200;

let pendingTimers = [];

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function findTextNode(root, term) {
  const target = normalize(term);
  if (!target) return null;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest(".module-guide, .lesson-recall, .lesson-footer, [data-search-skip]")) return NodeFilter.FILTER_REJECT;
      return normalize(node.nodeValue).includes(target)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  return walker.nextNode();
}

// Devuelve el DOM al estado exacto en que lo dejó React. Cuando la búsqueda
// apunta a la sección que ya está abierta, React no remonta <main> y los
// <mark> de búsquedas previas sobrevivirían: se irían acumulando y, al repetir
// un término, el nuevo <mark> se anidaría dentro del viejo sin animarse.
function clearHighlights() {
  document.querySelectorAll(`mark[${MARK_ATTR}]`).forEach(mark => {
    const parent = mark.parentNode;
    if (!parent) return;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
  });
}

// Envuelve el nodo de texto encontrado en un <mark> temporal para poder
// hacerle scroll y aplicarle la animación de resaltado vía CSS.
function wrapAndHighlight(textNode) {
  const parent = textNode.parentNode;
  if (!parent) return null;

  const mark = document.createElement("mark");
  mark.className = "search-highlight";
  mark.setAttribute(MARK_ATTR, "");
  mark.style.background = "transparent";
  mark.style.color = "inherit";
  parent.replaceChild(mark, textNode);
  mark.appendChild(textNode);
  return mark;
}

export function scrollToAndHighlight(term, { root = document.querySelector("main"), delay = 260 } = {}) {
  // Una búsqueda nueva invalida a la anterior aunque su resaltado siga vivo.
  pendingTimers.forEach(window.clearTimeout);
  pendingTimers = [];
  clearHighlights();

  if (!root || !term) return;

  pendingTimers.push(window.setTimeout(() => {
    // En desarrollo React remonta el árbol y el <main> capturado al programar
    // el resaltado ya no está en el documento. Se busca en el que sí se ve.
    const liveRoot = root?.isConnected ? root : document.querySelector("main");
    const textNode = liveRoot && findTextNode(liveRoot, term);
    if (!textNode) return;

    // Las ampliaciones de una lección pueden estar plegadas. La coincidencia
    // debe quedar visible antes de desplazar y resaltar su texto.
    for (let parent = textNode.parentElement; parent; parent = parent.parentElement) {
      if (parent.tagName === "DETAILS") parent.open = true;
    }

    const mark = wrapAndHighlight(textNode);
    if (!mark) return;

    mark.scrollIntoView({ behavior: "smooth", block: "center" });

    pendingTimers.push(window.setTimeout(clearHighlights, HIGHLIGHT_MS));
  }, delay));
}
