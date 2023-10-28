import React, { useState } from 'react'
import './styles.css'
import Form from './Form'

function Weekly() {
    const [input, setInput] = useState('')
    console.log(input, "input")
    return (
        <div className='Main'>
            <h2>WEEKLY</h2>
                <Form input={input} setInput={setInput}/>
                {/* Todo List */}
                {/* Key */}
                {/* Author */}
            
        </div>
    )
}

export default Weekly