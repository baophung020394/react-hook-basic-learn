import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Page({ todoList, onClickRemove, onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const onChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValues = {
      title: inputValue,
    };

    onSubmit(formValues);
    setInputValue('');
  };

  return (
    <div>
      <ul className='items'>
        {todoList.map((td, idx) => {
          return (
            <li className='item' key={idx} onClick={() => onClickRemove(td, idx)}>
              {td.title}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Title'>Title</label>
        <input type='text' value={inputValue} onChange={onChangeValue} />
        <button>Add</button>
      </form>
    </div>
  );
}

Page.propTypes = {
  todoList: PropTypes.array,
  onClickRemove: PropTypes.func,
};

Page.defaultProps = {
  todoList: [],
  onClickRemove: null,
};

export default Page;
