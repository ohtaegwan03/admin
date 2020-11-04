// # while, for, if
// 1. while 혹은 for 문을 사용하여 다음과 같이 1월부터 12월까지 출력하세요
// 1월
// 2월
// 3월
// ...
// 12월

    let day;

    for(day=1; day<=12; day++){
        console.log(`${day}월` );
    }

// 2. while 혹은 for 문을 사용하여 다음과 같이 1월부터 12월까지 짝수 달만 출력하세요
// 2월
// 4월
// 6월
// 8월
// 10월
// 12월
    let i;

    for(i=1; i<=12; i++){
        if (i%2==0){
            console.log(`${i}월` );
         }
    }
// 3. 숫자를 입력받아 입력받은 숫자보다 많아질때까지 피보나치 배열을 구현하세요
// 피보나치 배열은 다음과 같습니다
//  1, 1, 2, 3, 5, 8, 13, 21 과 같이 전 숫자와 전전 숫자를 더하여 계속되는 배열입니다
     
        // a 0 1 1 2
        // b 1 1 2 3
      //temp 1 2 3 5
   
   let a = 0;
   let b = 1;
   let temp = a+b;
   let input_number = prompt("숫자를 입력하세요.");
    for(;;){
        let temp = a+b;
        console.log(temp);
        a = b;
        b= temp;
        
        if(temp > input_number){
            break;
        }
    }

// 4. 월드전자는 노트북을 제조하고 판매하는 회사이다. 노트북 판매 대수에 상관없이 매년 임대료, 재산세, 보험료, 급여 등 A만원의 고정 비용이 들며, 
//한 대의 노트북을 생산하는 데에는 재료비와 인건비 등 총 B만원의 가변 비용이 든다고 한다.
// 예를 들어 A=1,000, B=70이라고 하자. 이 경우 노트북을 한 대 생산하는 데는 총 1,070만원이 들며, 열 대 생산하는 데는 총 1,700만원이 든다.
// 노트북 가격이 C만원으로 책정되었다고 한다. 일반적으로 생산 대수를 늘려 가다 보면 어느 순간 총 수입(판매비용)이 총 비용(=고정비용+가변비용)보다 많아지게 된다.
// 최초로 총 수입이 총 비용보다 많아져 이익이 발생하는 지점을 손익분기점(BREAK-EVEN POINT)이라고 한다.
// A, B, C가 주어졌을 때, 손익분기점을 구하는 프로그램을 작성하시오.

    const A = 1000;
    const B = 70;
    const C = 100;
    for(i=0;;i++){
        if(A+Bi< Ci){
           console.log(i);
           break;
       }
    }
// 반복문 없이 푸는법
     alert(parseInt(A/(C-B)+1));


     //While 없이 푸는 법
    alert(parseInt)(FIXED_PRICE/ (LIST_PRICE_PER_ONE - MANUFACTURE_PRICE_PER_ONE))
// 5. 상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
// 상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.
// 상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.

    const BIC_SUGAR = 5;
    const SMALL_SUGAR = 3;
    let sugar = 16;
     let bagCount = 0;

     while(true) {
     if (sugar % 5 === 0){
        bagCount = sugar / 5;
             break;
       } else if(sugar <= 0) {
         bagCount = -1;
         break;
     }
     sugar -= 3;
     bagCount ++;
// * 추가 문제
// 문자열이 abbbbddddeeeefff 와 같이 이어질때, 1글자씩 압축한 문자열을 출력하여라
// 예) abbbbddddeeeefff -> a4b4d4e3f
// 예) aabcdef -> 2abcdef

    const TARGET_STRING = "AAABBBCCC";
    const TARGET_STRING = "AAABBBCCC";

    let result = "";
    let nowCharacter = "";
    let nowCharacterCount = 0;
    
    for (const char of TARGET_STRING) {
        if (!nowCharacter) {
            nowCharacter = char;
            nowCharacterCount ++;
        } else {
            if (nowCharacter === char) {
                nowCharacterCount ++;
            }
            else {
                if (nowCharacterCount === 1) {
                    result += `${nowCharacterCount}${nowCharacter}`;    
                }
                else {
                    result += `${nowCharacterCount}${nowCharacter}`;
                }
                nowCharacter = char;
                nowCharacterCount = 1;
            }
        }
    }
    
    console.log(result);