import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import axios from 'axios';
import Pagination from 'components/Pagination/Pagination';
import queryString from 'query-string';
import PostFilterForm from 'components/PostFilterForm/PostFilterForm';

function PostList() {
  const [list, setList] = useState([]);

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  });

  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = queryString.stringify(filters);
        const res = await axios.get(
          `http://js-post-api.herokuapp.com/api/posts?${queryParams}`
        );
        setList(res.data.data);
        setPagination(res.data.pagination);
      } catch (error) {
        console.log('errors', error);
      }
    };

    fetchData();
  }, [filters]);

  const handlePageChange = (newPage) => {
    console.log('pagination', newPage);
    setFilters({ ...filters, _page: newPage });
  };

  const onSearchChange = (search) => {
    console.log(search);
    setFilters({
      ...filters,
      _page: 1,
      title_like: search.searchValue,
    });
  };
  // console.log('pagination', pagination);
  console.log('list', list);
  return (
    <div>
      <PostFilterForm onSearchForm={onSearchChange} />
      {list.length <= 0 ? <h1>Not found</h1> : <List list={list} />}
      <Pagination onPageChange={handlePageChange} pagination={pagination} />
    </div>
  );
}

export default PostList;
