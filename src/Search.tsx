import React, { useState } from 'react'
import { Suggestion } from './Random'

function Search() {
    const [search, setSearch] = useState<Suggestion>(
        {
            name: '',
            area: '',
            link: ''
        }
    )
    return (
        <div>
            <h3>Search for your favourite meal</h3>
        </div>
    )
}

export default Search