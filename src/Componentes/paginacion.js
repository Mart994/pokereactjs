import React from 'react';

const Paginacion = (props) => {
    const { onLeft, onRight, page, totalPage } = props;
    return (
        <div className="paginacion">
            <button onClick={onLeft}>I</button>
            <div> {page} de {totalPage}</div>
            <button onClick={onRight}>D</button>
        </div>
    )
}

export default Paginacion
