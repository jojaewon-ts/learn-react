import React, { useEffect, useState } from 'react';


const Counter = () => {
  /**
   * 카운터 앱 논리 작성
   * 1. counter라는 변수를 만든다.
   * 2. counter라는 초기값을 0으로 지정한다.
   * 3. counter라는 값을 UI에 보여준다.
   * 4. increase함수를 만든다.
   * 5. 사용자가 +1 버튼을 클릭하면 increase함수가 실행된다.
   * 6. (increase함수 정의) counter라는 변수의 값이 1 증가한다.
   * 7. (increase함수 정의) counter라는 변수의 값이 10 미만인 경우에만 counterd의 값을 1 증가한다.
   * 8. 숫자가 +1이 되어 변경되는 것을 확인한다. 
   * 
   */


const [counter, setCounter] = useState(0);

  const increase = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

//1. 컴포넌트에 존재하는 state가 하나라도 변경시 실행
useEffect(() => {});

//2. 컴포넌트가 마운트 될때(화면에 보여지는 순간) 딱 1번 실행
useEffect(() => {
  console.log('딱 1번 실행!!!')
}, []);

//3. 의존성 state 변경시 실행
useEffect(() => {
  console.log('counter 변경 될때마다')
}, [counter]);


//view
  return (
    <div style={{textAlign: "center"}}>
      <h2>{counter}</h2>
      <button type="button" onClick={increase}>+1</button>
      <button type='button' onClick={decrease}>-1</button>
    </div>
  )
}

export default Counter;
