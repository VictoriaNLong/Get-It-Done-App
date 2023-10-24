import React, { useState } from 'react'
import './styles.css'
import Form from '../Form'

function Daily() {
    const [input, setInput] = useState('')
    console.log(input, "input")
    return (
        <div className='Main'>
            <h2>Daily Tasks
                <Form input={input} setInput={setInput}/>
                {/* Todo List */}
                {/* Key */}
                {/* Author */}
            </h2>
        </div>
    )
}

export default Daily