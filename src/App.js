import Clock from 'components/Clock/Clock';
import MagicBox from 'components/MagicBox/MagicBox';
import Memoization from 'components/Memoization/Memoization';
import PostList from 'components/PostList';
import RandomColor from 'components/RandomColor';
import TestUseRef from 'components/TestUseRef/TestUseRef';
import TodoList from 'components/TodoList/TodoList';
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [hide, setHide] = useState(true);

  return (
    <div className="App">
      {/* <button onClick={() => setHide(value => !value)} >toggle</button> */}
      {/* <RandomColor /> */}
      {/* <TodoList /> */}
      {/* <PostList /> */}
      {/* {hide ? <Clock /> : null} */}
      {/* <MagicBox /> */}
      {/* <TestUseRef /> */}
      <Memoization />
    </div>
  );
}

export default App;
