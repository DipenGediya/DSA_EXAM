let array = [33, 49, 10, 1, 23, 85, 20, 7];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
    }
}
console.log(array);