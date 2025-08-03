export default function analyzeArray(arr) {
    if (arr.length === 0) {
        throw Error("Cannot analyze empty array");
    }
    let average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
    let min = arr.reduce((acc, curr) => (acc < curr ? acc : curr), arr[0]);
    let max = arr.reduce((acc, curr) => (acc > curr ? acc : curr), arr[0]);
    return {
        average: average,
        min: min,
        max: max,
        length: arr.length,
    };
}
