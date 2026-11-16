
function processStep(stepName, message) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log(message);
                resolve();
            } else {
                reject(stepName + " failed");
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await processStep("Order", "Step 1: Order taken");

        await processStep("Prepare", "Step 2: Food prepared");

        await processStep("Pack", "Step 3: Package ready");

        await processStep("Dispatch", "Step 4: Out for delivery");

        await processStep("Deliver", "Delivery completed!");

    } catch (error) {
        console.log("Pipeline failed!");
        console.log(error);
    }
}

runPipeline();
