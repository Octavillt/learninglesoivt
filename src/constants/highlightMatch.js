// Tras navegar a una sección desde el buscador global, ubica en el DOM ya
// renderizado el primer nodo de texto que contiene el término buscado,
// hace scroll hasta ahí y lo resalta brevemente. Como el contenido de cada
// Section vive en JSX plano (sin data-attributes por palabra), esta es la
// única forma de apuntar al lugar exacto sin instrumentar cada feature.

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function findTextNode(root, term) {
  const target = normalize(term);
  if (!target) return null;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return normalize(node.nodeValue).includes(target)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  return walker.nextNode();
}

// Envuelve el nodo de texto encontrado en un <mark> temporal para poder
// hacerle scroll y aplicarle la animación de resaltado vía CSS.
function wrapAndHighlight(textNode) {
  const parent = textNode.parentNode;
  if (!parent) return null;

  const mark = document.createElement("mark");
  mark.className = "search-highlight";
  mark.style.background = "transparent";
  mark.style.color = "inherit";
  parent.replaceChild(mark, textNode);
  mark.appendChild(textNode);
  return mark;
}

export function scrollToAndHighlight(term, { root = document.querySelector("main"), delay = 260 } = {}) {
  if (!root || !term) return;

  window.setTimeout(() => {
    const textNode = findTextNode(root, term);
    if (!textNode) return;

    const mark = wrapAndHighlight(textNode);
    if (!mark) return;

    mark.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => {
      mark.classList.remove("search-highlight");
    }, 3200);
  }, delay);
}
