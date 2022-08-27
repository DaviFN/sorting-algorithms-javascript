function bubbleSort(array) {
    for(i = array.length ; i >= 0 ; --i) {
        sortedAlready = true
        for(j = 0 ; j < i ; ++j) {
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
    for(i = 0 ; i < array.length ; ++i) {
        indexOfSmallestItemInUnsortedSubvector = i
        for(j = i ; j < array.length ; ++j) {
            if(array[j] < array[indexOfSmallestItemInUnsortedSubvector]) {
                indexOfSmallestItemInUnsortedSubvector = j
            }
        }
        temp = array[indexOfSmallestItemInUnsortedSubvector]
        array[indexOfSmallestItemInUnsortedSubvector] = array[i]
        array[i] = temp
    }
    return array
}

function insertionSort(array) {
    for(i = 1 ; i < array.length ; ++i) {
        beingInserted = array[i]
        correctIndexOfCurrentUnsortedElementInSortedSubvector = i
        for(j = 0 ; j < i ; ++j) {
            if(array[j + 1] > beingInserted)
            correctIndexOfCurrentUnsortedElementInSortedArray = j
            break
        }
        for(j = correctIndexOfCurrentUnsortedElementInSortedSubvector ; j < i ; ++j) {
            array[j + 1] = array[j]
        }
        array[correctIndexOfCurrentUnsortedElementInSortedSubvector] = temp
    }
    return array
}

function randomlyGenerateArray(arraySize) {
    return Array.from({length: arraySize}, () => Math.floor(Math.random() * 1000));
}

function isSorted(array) {
    for(i = 0 ; i < array.length - 1; ++i) {
        if(array[i] > array[i + 1]) return false
    }
    return true
}

function printArray(array) {
    arrayString = isSorted(array) ? "(sorted)" : "(unsorted)"
    arrayString += " [ "
    array.forEach(item => arrayString += item + " ")
    arrayString += "]"
    console.log(arrayString)
}

arraySize = 15
array = randomlyGenerateArray(arraySize)
console.log("original array:")
printArray(array)

arraySortedWithBubbleSort = bubbleSort(Array.from(array))
console.log("sorted with bubble sort:")
printArray(arraySortedWithBubbleSort)

arraySortedWithSelectionSort = selectionSort(Array.from(array))
console.log("sorted with selection sort:")
printArray(arraySortedWithSelectionSort)

arraySortedWithInsertionSort = insertionSort(Array.from(array))
console.log("sorted with insertion sort:")
printArray(arraySortedWithInsertionSort)