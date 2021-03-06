import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "verdadero" : "falso"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.object.nombre + " - " + props.object.correo}</li>
        <li>{props.elementoReact}</li>
        <li>{props.array.map(props.funcion).join(", ")}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
