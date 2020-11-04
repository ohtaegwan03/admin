// 블랙잭 게임
// 
// 1. 처음에 prompt 로 숫자를 받습니다
// 2. 그 숫자를 총 숫자에 더하고
// 3-1. 만약 총 숫자가 21이 정확하게 되면 승리하였습니다! 라고 띄웁니다 (그리고 종료)
// 3-2. 만약 총 숫자가 21보다 적으면 다시 1번부터 반복합니다
// 3-3. 만약 총 숫자가 21보다 크면 실패하셨습니다! 를 출력합니다 (그리고 종료)

// 주의사항
// 21 이란 숫자를 그냥 쓰지 마세요 <- 매직넘버 주의
// for, while 자유입니다
// 반복을 사용하셔서 처리해주세요

// 문자를 숫자로 바꾸고 싶은 경우에는 변수명 * 1 로 해주세요

const BLACKJACK_NUMBER = 21;
let totalNumber = 0;

while(true) {
    let inputNumber = prompt("숫자를 입력해주세요") * 1; 
    totalNumber += inputNumber;

    if (totalNumber === BLACKJACK_NUMBER) {
        alert("승리하셨습니다!");
        break;
    } else if (totalNumber > BLACKJACK_NUMBER) {
        alert("실패하셨습니다");
        break;
    }
}