
let userName = "Uday";
let age = 20;
let isStudent = true;
let subjects = ["Java", "JavaScript", "DBMS"];
let student = { name: "Uday", age: 20 };
let address = null;
let result;

console.table([
    { Label: "userName", Value: userName, Type: typeof userName },
    { Label: "age", Value: age, Type: typeof age },
    { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Label: "subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "student", Value: JSON.stringify(student), Type: typeof student },
    { Label: "address", Value: address, Type: typeof address },
    { Label: "result", Value: result, Type: typeof result }
]);
