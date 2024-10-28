const grades = "jim 25, sue 32, mary 34, ann 22, ted 28, frank 15, lisa 19, mike 30, ahn 26, vishaya 27";
const students = grades.split(", ");
let totalScore = 0;
let lowestScore = 100;
let highestScore = 0;
const studentList = document.getElementById("student-list");
const stats = document.getElementById("stats");


students.sort((a, b) => {
    const nameA = a.split(" ")[0].toLowerCase();
    const nameB = b.split(" ")[0].toLowerCase();
    return nameA.localeCompare(nameB);
});


for (let i = 0; i < students.length; i++) {  // Changed from i <= students.length to i < students.length
    let studentData = students[i].split(" ");
    let name = studentData[0];
    let score = parseInt(studentData[1]);  // Fixed to parse studentData[1] (the score), not studentData[0]

    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    studentList.innerHTML += `
        <tr>
            <td>${capitalizedName}</td>
            <td>${score}</td>
        </tr>
    `;

    totalScore += score;
    if (score < lowestScore) {
        lowestScore = score;
    }
    if (score > highestScore) {
        highestScore = score;
    }
}

let averageScore = totalScore / students.length;

stats.innerHTML = `
    <p>Total Students: ${students.length}</p>
    <p>Lowest Score: ${lowestScore}</p>
    <p>Highest Score: ${highestScore}</p>
    <p>Average Score: ${averageScore.toFixed(2)}</p>
`;
