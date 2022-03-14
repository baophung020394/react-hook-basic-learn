import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import List from './List'
import axios from 'axios';

function PostList() {

  const [list, setList] = useState([]);

  useEffect(() => { 

    const fetchData = async () => {
      try {
        const res = await axios.get('http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1');
        setList(res.data.data);
      } catch (error) {
        console.log('errors', error);
      }
    }

    fetchData();

  }, [])

  return (
    <div>
      {list !== [] ? <List list={list} /> : <h1>Loading...</h1>}
    </div>
  )
}


export default PostList
