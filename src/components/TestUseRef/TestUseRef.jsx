import React, { useEffect, useRef, useState } from 'react';

export default function TestUseRef() {
  console.log('1');
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  useEffect(() => {
    console.log('3');
    prevCount.current = count;
  }, [count]);

  const handleInscrease = () => {
    
    setCount(value => value + 1);
  }

  console.log('2');
  return (
    <div>
      <h1>Previous value: {prevCount.current}</h1>
      <h1>Current value: {count}</h1>
      <button onClick={() => handleInscrease()}>Inscrease</button>
    </div>
  );
}
