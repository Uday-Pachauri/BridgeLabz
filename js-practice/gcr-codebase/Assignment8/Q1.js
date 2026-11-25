class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
    }

    getGrade() {
        let avg = this.calculateAverage();

        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 60) return "C";
        return "F";
    }
}

let s1 = new Student("Uday", [90, 85, 95]);
let s2 = new Student("Rahul", [75, 80, 70]);
let s3 = new Student("Aman", [40, 50, 45]);

console.log(s1.name, s1.calculateAverage(), s1.getGrade());
console.log(s2.name, s2.calculateAverage(), s2.getGrade());
console.log(s3.name, s3.calculateAverage(), s3.getGrade());