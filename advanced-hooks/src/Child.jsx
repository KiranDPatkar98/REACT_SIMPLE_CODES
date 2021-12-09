import React from 'react'
import Grandchild from './Grandchild'

const Child = () => {
    return (
        <div>
<h2>IAm child component</h2>
            <Grandchild />
        </div>
    )
}

export default Child
