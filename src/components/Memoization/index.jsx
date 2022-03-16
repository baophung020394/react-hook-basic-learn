import React, { useCallback, useMemo, useState } from 'react';
import Hero from './Hero';

export default function TestMemo() {
  const [count, setCount] = useState(0);
  const data = useMemo(() => [{}, {}, {}], []);
  const handleChangeValue = useCallback(() => {}, [])
  // console.log('Parent comp');
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
      {/* <Hero name='Hero' onClick={handleChangeValue} /> */}
      <Hero name='Hero' onClick={handleChangeValue} data={data} />
    </div>
  );
}
