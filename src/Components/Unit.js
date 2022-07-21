import React from 'react'
import { useDrag } from 'react-dnd'

export const Unit = ({ id, name, img }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'unit',
        item: { id, name, img},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <img ref={dragRef} src={img} alt={name} style={{height: "100%" ,objectFit:"scale-down"}} />
    )
}