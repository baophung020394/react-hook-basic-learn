import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

function PostFilterForm({ onSearchForm }) {
  const [searchValue, setSearchValue] = useState('');
  const typingTimeoutRef = useRef(null); // useRef => giúp k thay đổi giá trị giữa các lần render

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (!onSearchForm) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    typingTimeoutRef.current = setTimeout(() => {
      const formsValue = {
        searchValue: value,
      };
      onSearchForm(formsValue);
    }, 500);
  };

  return (
    <form>
      <input
        ref={typingTimeoutRef}
        type='text'
        value={searchValue}
        onChange={onSearchChange}
      />
    </form>
  );
}

PostFilterForm.propTypes = {
  onSearchForm: PropTypes.func,
};

export default PostFilterForm;
