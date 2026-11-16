
function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

console.log("Callback Hell:");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});

function createStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    console.log("Async/Await Pipeline:");

    await createStage("Design");
    await createStage("Build");
    await createStage("Test");
    await createStage("Deploy");
    await createStage("Celebrate");

    console.log("Pipeline completed successfully");
}

setTimeout(() => {
    runPipeline();
}, 5500);
