import Clock from 'components/Clock/Clock';
import MagicBox from 'components/MagicBox/MagicBox';
import PostList from 'components/PostList';
import RandomColor from 'components/RandomColor';
import TodoList from 'components/TodoList/TodoList';
import { useState } from 'react';
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
      <MagicBox />
    </div>
  );
}

export default App;
