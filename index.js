const ErrorReporter = require("./ErrorReporter");

class RemoteReporter extends ErrorReporter{

    report(){
        throw new Error("Reporter not built. Please don't use this class");
    }

}

module.exports = RemoteReporter;
