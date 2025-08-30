function findHighestMark(marks) {
    let highest = marks[0];
    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }
    return highest;
}

let marksArray = [45, 78, 88, 92, 67, 99, 84];
console.log("The highest mark is:", findHighestMark(marksArray));