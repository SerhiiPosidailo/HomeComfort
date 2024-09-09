import React, {useState} from 'react';

import css from './SearchForm.module.css'



const SearchForm  = ({onSubmit}) => {

    const [query, setQuery] = useState('')

    return (
        <form onSubmit={(e)  => onSubmit(e)} className={css.form}>
            <input
                className={css.input}
                name="search"
                type="text"
                placeholder={'Пошук'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className={css.buttonForm}>Пошук</button>
        </form>
    );
};

export {SearchForm};