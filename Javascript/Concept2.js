function printWithDelay(message, timediff) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, timediff);
    });
}

printWithDelay("Hy There", 1000)
    .then(() => printWithDelay("How are you", 1000))
    .catch(error => {
        console.error("An error occurred:", error);
    });
