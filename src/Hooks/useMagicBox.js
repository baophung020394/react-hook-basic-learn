import React, { useEffect, useRef, useState } from 'react';

const randomColor = (currentColor) => {
  console.log('currentColor', currentColor)
  const colors = ['green', 'blue', 'red'];

  const currentIndex = colors.indexOf(currentColor);
  let newIndex = currentIndex;
  console.log('currentIndex', currentIndex)

  // loop liên tục nếu 2 giá trị = nhau
  // nếu bằng nhau thì tiếp tục random;
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }

  return colors[newIndex];
};

export default function useMagicBox() {
  const [color, setColor] = useState('transparent');
  const colorRef = useRef('transparent'); // Lưu giữ giá trị lại.


  useEffect(() => {
    const colorInterval = setInterval(() => {
      // console.log('First: ', color);
      // console.log('colorRef: ', colorRef.current);
      const newColor = randomColor(colorRef.current);
      console.log('newColor: ', newColor);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return { color };
}
