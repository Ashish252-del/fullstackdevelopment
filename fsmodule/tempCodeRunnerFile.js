fs.appendFile("./fsmodule/read2.txt", " its final", (error) => {
    if (error) console.log(error);
    else console.log("Task completed");