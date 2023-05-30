/**
 * [문제]
 * 주어진 값
 *  1. 조리시간
 *  2. 배달시간
 *
 * 주어지는 주문 목록을
 * 조리시간, 배달시간을 합친 총 시간이 제일 짧은 순서대로 정렬한다.
 */

const orderList = [
    ["짬뽕", 30, 20],
    ["짜장면", 20, 25],
    ["탕수육", 40, 5],
    ["간짜장", 10, 5],
    ["짜장면2", 20, 30],
];

function orderListSort(orderList) {
    const list = orderList;
    const result = [];

    list.map((el) => {
        const totTime = el[1] + el[2];
        result.push([el[0], totTime]);
    });

    return bubbleSort(result);
}

function bubbleSort(array) {
    const arr = array;
    const lastIdx = array.length - 1;
    let isSorted;

    for (let i = 0; i < lastIdx; i++) {
        isSorted = true;

        for (let j = 0; j < lastIdx - i; j++) {
            if (arr[j][1] > arr[j + 1][1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = false;
            }
        }

        if (isSorted) {
            break;
        }
    }

    return arr;
}

console.log(orderListSort(orderList));
