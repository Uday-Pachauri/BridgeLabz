let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        this.data = data;
    }

    checkData() {
        if (this.data.length === 0) {
            throw new Error("Workout data is empty");
        }
    }

    getActiveUsers() {
        this.checkData();
        return this.data.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        this.checkData();
        return this.data.reduce((total, user) => total + user.calories, 0) / this.data.length;
    }

    getUserSummary() {
        this.checkData();
        return this.data.map(user => `${user.user} walked ${user.steps} steps and burned ${user.calories} calories`);
    }
}

let fitness = new FitnessAnalytics(workoutData);

try {
    console.log(fitness.getActiveUsers());
    console.log(fitness.getAverageCalories());
    console.log(fitness.getUserSummary());
} catch (error) {
    console.log(error.message);
}