import React, { useState } from 'react'
import '../Style/styles.css'
import Form from '../Form'

function Monthly() {
    const [input, setInput] = useState('')
    console.log(input, "input")
    return (
        <div className='Main'>
            <h2>MONTHLY</h2>
                <Form input={input} setInput={setInput}/>
                {/* Todo List */}
                {/* Key */}
                {/* Author */}
            
        </div>
    )
}

export default Monthly