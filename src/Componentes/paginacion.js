import React from 'react';
import { LeftArrow, RightArrow } from "./ArrowsSvg";

const Paginacion = (props) => {
    const { onLeft, onRight, pagina, totalPagina } = props;
    return (
        <div className="paginacion">
            <button className="pagination-btn" onClick={onLeft}>
                <div className="icon">
                    <LeftArrow />
                </div>
            </button>
            <div> {pagina} de {totalPagina}</div>
            <button className="pagination-btn" onClick={onRight}>
                <div className="icon">
                    <RightArrow />
                </div>
            </button>
        </div>
    )
}

export default Paginacion
