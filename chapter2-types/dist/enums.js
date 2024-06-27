"use strict";
/*
    열거형 (Enum)
*/
// 1. 기본 문법
var 이름;
(function (이름) {
    이름[이름["\uC0C1\uC218\uAC121"] = 0] = "\uC0C1\uC218\uAC121";
    이름[이름["\uC0C1\uC218\uAC122"] = 1] = "\uC0C1\uC218\uAC122";
    이름[이름["\uC0C1\uC218\uAC123"] = 2] = "\uC0C1\uC218\uAC123"; // 2
})(이름 || (이름 = {}));
// 2. 숫자형 Enum
// 비디오 플레이어
var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["Buffering"] = 0] = "Buffering";
    PlayerState[PlayerState["Playing"] = 1] = "Playing";
    PlayerState[PlayerState["Paused"] = 2] = "Paused";
    PlayerState[PlayerState["Seeking"] = 3] = "Seeking";
})(PlayerState || (PlayerState = {}));
let currentState;
currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;
// currentState = "Playing" // Error -> 이 변수를 초기화 할때 값의 범위를 enum이라 한정해서.
const isPlaying = (state) => {
    return state === PlayerState.Playing;
};
// 플레이어 재생중?
isPlaying(currentState); // true
// 3. 문자형 Enum
var Direction;
(function (Direction) {
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
})(Direction || (Direction = {}));
function move(dir) {
    switch (dir) {
        case Direction.Left:
            // 왼쪽 로직
            break;
        case Direction.Right:
            // 오른쪽 로직
            break;
        // ...
    }
}
move(Direction.Left);
move(Direction.Right);
