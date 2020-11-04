let input_score = prompt("점수를 입력하세요.");

if(input_score>=90 && input_score<=100){
    console.log("A");
}else if(input_score>=80 && input_score<=90){
    console.log("B");
}else if(input_score>=70 && input_score<=79){
    console.log("C");
}else if(input_score>=60 && input_score<=69){
    console.log("D");
}else{
    console.log("F");
}