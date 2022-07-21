import React from 'react'
import { useDrag } from 'react-dnd'

export const Unit = ({ id, row, col, img }) => {
    const [{ didDrop }, dragRef] = useDrag({
        type: 'unit',
        item: { id, row, col, img},
        collect: (monitor) => ({
            didDrop: monitor.didDrop()
        })
    })
    return (
        <img ref={dragRef} src={img} alt={`${row}, ${col}`} style={{height: "100%" ,objectFit:"scale-down"}} />
    )
}