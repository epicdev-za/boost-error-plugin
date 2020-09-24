const BoostPlugin = require("boost/api/plugins/BoostPlugin");
const Reporter = require("./reporters/RemoteReporter");

class ErrorPlugin extends BoostPlugin{

    onExceptionCaught(error, description, uuid, currentStack) {
        const reporter = new Reporter(error, description, uid, currentStack);
        reporter.report();
    }

}

module.exports = ErrorPlugin;
