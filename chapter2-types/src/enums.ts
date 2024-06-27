/*
    열거형 (Enum)
*/

// 1. 기본 문법
enum 이름 {
    상수값1, // 0 -> 값을 지정해주지 않으면 임의로 0이라는 값을 가지고, 순차적으로 1씩 증가하여 값을 갖게 됨.
    상수값2, // 1
    상수값3  // 2
}

// 2. 숫자형 Enum
// 비디오 플레이어
enum PlayerState {
    Buffering,
    Playing,
    Paused,
    Seeking
}

let currentState: PlayerState;

currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;

// currentState = "Playing" // Error -> 이 변수를 초기화 할때 값의 범위를 enum이라 한정해서.

const isPlaying = (state: PlayerState) => {
    return state === PlayerState.Playing;
}
// 플레이어 재생중?
isPlaying(currentState); // true



// 3. 문자형 Enum

enum Direction {
    Left = "LEFT",
    Right = "RIGHT",
    Up = "UP",
    Down = "DOWN"
}

function move(dir: Direction) {
    switch(dir){
        case Direction.Left:
            // 왼쪽 로직
            break;
        case Direction.Right:
            // 오른쪽 로직
            break;
        // ...
    }
}

move(Direction.Left)
move(Direction.Right)

