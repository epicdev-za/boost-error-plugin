const BoostPlugin = require("../boost/api/plugins/BoostPlugin");
const Reporter = require("./reporters/GCReporter");
const {ErrorReporting} = require('@google-cloud/error-reporting');

class GCErrorPlugin extends BoostPlugin{

    constructor() {
        super();
        const errors = new ErrorReporting();
        process.on('uncaughtException', (e) => {
            console.error(e);
            errors.report(e);
        });
    }

    onExceptionCaught(error, status, description, uuid, currentStack) {
        const reporter = new Reporter(error, status, description, uuid, currentStack);
        reporter.report();
    }

}

module.exports = GCErrorPlugin;
