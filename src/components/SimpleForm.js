import React, { useState } from 'react'

const SimpleForm = () => {
    const [name, setName] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [favLang, setFavLang] = useState()
    function handleSubmit(e) {
        e.preventDefault()
        console.log({ name, isChecked, favLang })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Name:</label>
                <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
                <br></br>
                <br></br>

                <label>Online :</label>
                <input type='checkbox' checked={isChecked} onChange={(e) => { setIsChecked(e.target.checked) }}></input>
                <br></br>
                <br></br>

                <label>Fav Lang :</label>
                <select value={favLang} onChange={(e) => { setFavLang(e.target.value) }}>
                    <option value='JS'>JS</option>
                    <option value='TS'>TS</option>
                </select>
                <br></br>
                <br></br>
                <input type='submit' value="Submit Form" />
            </form>
        </div>
    )
}

export default SimpleForm
