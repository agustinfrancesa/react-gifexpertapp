import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('');

    const handdleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handdleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            setCategories (category => [inputValue, ...category ]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handdleSubmit}>
        <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handdleInputChange}
            />
        </form>
    );
};

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

