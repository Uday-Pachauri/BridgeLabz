
let scores = [];

for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

let updatedScores = scores.map(score => score);
let highestScore = Math.max(...updatedScores);
let lowestScore = Math.min(...updatedScores);
let totalScore = updatedScores.reduce((total, score) => total + score, 0);
let averageScore = totalScore / updatedScores.length;
let passedStudents = updatedScores.filter(score => score >= 50).length;

console.log(`Scores: ${updatedScores}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passedStudents}`);
