import Card from "./component/Card";
import Counter from "./component/Counter";
import ThemeButton from "./component/ThemeButton";
import Login from "./pages/Login";



function App() {
  //logic
  console.log("App.js");

  const name = '조재원'
  const age = 29

  // 안녕하세요. 조재원님! 나이가 29세 이시네요.
  // 환영합니다.

  const greetingMessage = `안녕하세요. ${name}님! 나이가 ${age}세 이시네요.
  환영합니다.`
  console.log(greetingMessage);



  // 로그인한 상태이면서, 동시에 admin권한을 가진 유저
  // if (user.isLoggedIn && user.role === 'admin') {
  //   console.log('관리자 페이지에 접근이 가능합니다.')
  // } else {
  //   console.log('관리자 페이지에 접근이 불가능합니다.')
  // }



  /**
   * Logical poerators
   * 단축 평가 논리 계산법
   */

  const user = {
    isLoggedIn: true,
    role: "admin", // 'guest', 'user'
  };

  if (user.isLoggedIn && user.role === 'admin') {
    console.log('관리자 페이지 접근 가능');
  } else {
    console.log('관리자 페이지 접근 불가능');
  };
// 만약 && 에 '||' 들어간다면 하나만 true라도 '접근 가능'
// 플러스 === 대신 '!==' 들어간다면 false 이기에 '접근 불가능'


// 사용자가 로그인 한 상태에서, 역할이 'admin'인 경우엔 "관리자 페이지 접근 가능", 아니면 "관리자 페이지 접근 불가능"

// 예시
const user2 = {
  id: 'jjocoach6265',
  password: 'password',
  isLoggedIn: false,
}

if(user2.id === 'jjocoach6265' && user2.password === 'password') {
  //1차 조건 판별
  user2.isLoggedIn = true;
};


//Default parameter

// 함수 정의
const greeting = (input = "고객") => {
  return `${input}님, 반갑습니다!`;
};
// 함수 호출
console.log("greeting", greeting(''))
greeting();

// 구조분해 할당
const studentList = ['김태욱', '정세현'];
const [firstStudent, secondStudent] = studentList;

console.log('firstStudent:', firstStudent);
console.log('secondStudent', secondStudent);

// 객체 구조분해 할당
const person = {
  name: '조재원',
  age: 29,
  email: 'jjocoach6265@gmail.com'
};

const messageItem = {
  messageId: 1,
  message: "안녕하세요",
};
console.log("message", messageItem)

// const {name: name1, age: age1, email} = person;
// console.log("name", name1);
// console.log("age", age1);
// console.log("email", email);

// 배열 구조분해 할당


// 모드 변경 논리
/**
 * 1. ThemeButton 컴포넌트에서 버튼을 클릭한다
 */
  //view
  return (
    <div className="wrap">
      <Card title={"팀스마트"} 
      subText="케파" />
      <Card title={"케파"}
      subText={"디지털헬스케어"}/>
      <ThemeButton />
      {/* <Login /> */}
      {/* <Counter /> */}
    </div>);
}

export default App;