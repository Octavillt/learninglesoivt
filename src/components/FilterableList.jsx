import { useEffect, useRef } from "react";

// Cuando la barra de temas no se puede medir (tests, primer render) asumimos
// su alto típico en móvil para no dejar el campo debajo de ella.
const STICKY_FALLBACK = 52;
const BREATHING_ROOM = 12;

function stickyOffset() {
  const nav = document.querySelector(".nav-wrap");
  const height = nav?.getBoundingClientRect().height;
  return (height || STICKY_FALLBACK) + BREATHING_ROOM;
}

// Buscador + resultados de las listas largas (verbos, irregulares, adjetivos).
//
// Al filtrar, la lista se encoge y la página entera se acorta: el navegador
// recorta el scroll al nuevo alto del documento y el campo —con sus
// resultados— quedaba por encima de la pantalla, obligando a subir a mano
// después de cada consulta. Tres piezas que se complementan:
//
// 1. Tras cada cambio del filtro reposicionamos la vista en el campo, para
//    ver los resultados desde el primero y no por donde quedó el scroll.
//    El destino es siempre el mismo, así que las siguientes pulsaciones ya
//    no mueven nada.
// 2. Mientras hay filtro, la zona de resultados reserva el alto de una
//    pantalla: si no, con dos o tres coincidencias el documento se queda más
//    corto que la ventana y el navegador no tiene margen para subir hasta el
//    campo (en móvil quedaba a media pantalla, tapado por el teclado).
// 3. El campo va pegado (sticky) debajo de la barra de temas, así sigue a la
//    vista aunque se recorra una lista filtrada larga.
export default function FilterableList({ value, onChange, placeholder, children }) {
  const inputRef = useRef(null);
  // El campo pegado miente sobre su posición (reporta la de la pantalla, no
  // la del documento); este ancla de alto cero se queda en el flujo normal.
  const anchorRef = useRef(null);
  const skipFirstRun = useRef(true);

  useEffect(() => {
    if (skipFirstRun.current) {
      skipFirstRun.current = false;
      return;
    }
    // Solo mientras el usuario escribe aquí: si el filtro cambia por otra vía
    // (montaje de la sección, salto desde el buscador global) no robamos el
    // scroll que esa navegación ya definió.
    if (!anchorRef.current || document.activeElement !== inputRef.current) return;

    const top = window.scrollY + anchorRef.current.getBoundingClientRect().top - stickyOffset();
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  }, [value]);

  return (
    <>
      <div ref={anchorRef} aria-hidden="true" />
      <div className="filter-sticky">
        <input
          ref={inputRef}
          className="search-input"
          type="search"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{
            width: "100%", padding: "11px 15px", borderRadius: "10px", border: "none",
            background: "#1e293b", color: "#fff", boxSizing: "border-box",
          }}
        />
      </div>
      <div className={value.trim() ? "filter-results filter-results--room" : "filter-results"}>
        {children}
      </div>
    </>
  );
}
