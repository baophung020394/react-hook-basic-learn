import React, { useEffect } from 'react';

function Memoization() {
  const addMemo = (a, b) => {
    if (!addMemo.cache) {
      addMemo.cache = {};
    }

    const key = `${a}_${b}`;
    const sematricKey = `${b}_${a}`;
    
    
    if (addMemo.cache[key]) return addMemo.cache[key];
    if (addMemo.cache[sematricKey]) return addMemo.cache[sematricKey];

    let sum = a + b;
    addMemo.cache[key] = sum;
    addMemo.cache[sematricKey] = sum;
    console.log(addMemo.cache);
    console.log('Tinh toan');
    return sum;
  };

  useEffect(() => {
    console.log('lan 1',addMemo(2, 3));
    console.log('lan 2',addMemo(3, 2));
    console.log('lan 3',addMemo(1, 2));
  }, []);

  return <div>Memoization</div>;
}

export default Memoization;
