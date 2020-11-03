// # PASSWORD를 맞추는 프로그램을 개발한다.
// 1. PASSWORD를 미리 지정한다. (CONST 사용 추천)
// 2. promat로 PASSWORD를 받는다.
// 3-1. 만약 맞았다면 "로그인 되었습니다!" 출력
// 4-1. 만약 틀렸다면 "로그인에 실패하였습니다." 출력
const ID= "otg0822"; //const:바꿀 수 없는 것.
const PASSWORD = "ssangyong3857!"; //const:바꿀 수 없는 것.
let result1 = prompt("아이디를 입력하시오.",""); //쓰는 창을 띄우는 것.
let result2 = prompt("비밀번호를 입력하시오.",""); //쓰는 창을 띄우는 것.

if(result1 === ID && result2 === PASSWORD){
    alert("로그인이 되었습니다.");
}else if(result1 !== result2===PASSWORD){
    alert("다시 아이디를 확인해주십시오.");
}else if(result1 === result2!==PASSWORD){
        alert("다시 아이디를 확인해주십시오.");
}else if(result1 !== result2!==PASSWORD){
    alert("다시 아이디와 비밀번호를 확인해주십시오.");
} 
