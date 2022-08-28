function bubbleSort(array) {
    for(var i = array.length ; i >= 0 ; --i) {
        var sortedAlready = true
        for(var j = 0 ; j < i ; ++j) {
            if(array[j] > array[j + 1]) {
                var temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp
                sortedAlready = false
            }
        }
        if(sortedAlready) break
    }
    return array
}

function selectionSort(array) {
    for(var i = 0 ; i < array.length ; ++i) {
        indexOfSmallestItemInUnsortedSubvector = i
        for(var j = i ; j < array.length ; ++j) {
            if(array[j] < array[indexOfSmallestItemInUnsortedSubvector]) {
                indexOfSmallestItemInUnsortedSubvector = j
            }
        }
        var temp = array[indexOfSmallestItemInUnsortedSubvector]
        array[indexOfSmallestItemInUnsortedSubvector] = array[i]
        array[i] = temp
    }
    return array
}

function insertionSort(array) {
    for(i = 1 ; i < array.length ; ++i) {
        var beingInserted = array[i]
        var correctIndexOfCurrentUnsortedElementInSortedSubvector = i
        for(var j = 0 ; j < i ; ++j) {
            if(array[j] > beingInserted) {
                correctIndexOfCurrentUnsortedElementInSortedSubvector = j
                break
            }
        }
        for(var j = i - 1 ; j > correctIndexOfCurrentUnsortedElementInSortedSubvector ; --j) {
            array[j + 1] = array[j]
        }
        array[correctIndexOfCurrentUnsortedElementInSortedSubvector] = beingInserted
    }
    return array
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
}

function factorial(n) {
    var factorial = 1
    for(var i = 1 ; i <= n ; ++i) {
        factorial *= i
    }
    return factorial
}

function bogoSort(array) {
    console.log("about to sort the array using bogo sort (this can take a while)...")
    probabilityOfSuccess = (1 / factorial(array.length)) * 100
    console.log("probability of success on any given iteration: " + probabilityOfSuccess + " %")
    var iteration = 0
    while(!isSorted(array)) {
        iteration++
        shuffleArray(array)
        if(iteration % 10000000 == 0) {
            console.log("on iteration: " + iteration)
        }
    }
    return array
}

function randomlyGenerateArray(arraySize) {
    return Array.from({length: arraySize}, () => Math.floor(Math.random() * 1000));
}

function isSorted(array) {
    for(var i = 0 ; i < array.length - 1; ++i) {
        if(array[i] > array[i + 1]) return false
    }
    return true
}

function printArray(array) {
    var arrayString = isSorted(array) ? "(sorted)" : "(unsorted)"
    arrayString += " [ "
    array.forEach(item => arrayString += item + " ")
    arrayString += "]"
    console.log(arrayString)
}

var arraySize = 11
var array = randomlyGenerateArray(arraySize)
console.log("original array:")
printArray(array)

var arraySortedWithBubbleSort = bubbleSort(Array.from(array))
console.log("sorted with bubble sort:")
printArray(arraySortedWithBubbleSort)

var arraySortedWithSelectionSort = selectionSort(Array.from(array))
console.log("sorted with selection sort:")
printArray(arraySortedWithSelectionSort)

var arraySortedWithInsertionSort = insertionSort(Array.from(array))
console.log("sorted with insertion sort:")
printArray(arraySortedWithInsertionSort)

var arraySortedWithBogoSort = bogoSort(Array.from(array))
console.log("sorted with bogo sort:")
printArray(arraySortedWithBogoSort)