let json = "{ bad json }";
try {

    let user = json.parse(json); // <--여기서 에러가 발생하므로
    alert(user.name); //이 코드는 동작하지 않습니다. 

} catch (e) {
    //에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
    alert("데이터에 에러가 있어 재요청을 시도합니다.");
    alert(e.name);
    alert(e.message);
}