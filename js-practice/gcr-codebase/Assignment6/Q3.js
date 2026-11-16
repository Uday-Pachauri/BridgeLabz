
function getBugs() {
    return new Promise((resolve, reject) => {
        let apiFailure = Math.random() < 0.5;

        setTimeout(() => {
            if (apiFailure) {
                reject("API request failed");
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
