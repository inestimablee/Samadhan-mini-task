let students = [
    { name: "Rahul", marks: [78, 85, 90, 67, 88] },
    { name: "Priya", marks: [88, 92, 79, 85, 91] },
    { name: "Amit", marks: [65, 70, 72, 80, 68] }
];

function calculateResult(student) {
    let total = 0;
    let highest = student.marks[0];

    for (let i = 0; i < student.marks.length; i++) {
        total += student.marks[i];
        if (student.marks[i] > highest) {
            highest = student.marks[i];
        }
    }

    let average = total / student.marks.length;

    return {
        name: student.name,
        total: total,
        average: average.toFixed(2),
        highest: highest
    };
}

for (let i = 0; i < students.length; i++) {
    let result = calculateResult(students[i]);
    console.log("Name:", result.name);
    console.log("Total Marks:", result.total);
    console.log("Average Marks:", result.average);
    console.log("Highest Subject Mark:", result.highest);
    console.log("--------------------------\n");
}
