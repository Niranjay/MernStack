import React, { useState } from 'react'

function Assignment() {

    const [selects, setSelects] = useState

    return (
        <>
            <center>
                <h1 > dropdown {selects}</h1>
                <select >
                    <option value="0">Orange</option>
                    <option value="1">Radish</option>
                    <option value="Cherry">Cherry</option>
                </select>
            </center>
        </>
    )
}

export default Assignment
