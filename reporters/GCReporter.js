const ErrorReporter = require("../ErrorReporter");
const {populateErrorMessage} = require('@google-cloud/error-reporting/build/src/populate-error-message');

class GCReporter extends ErrorReporter{

    report(){
        if(process.env.NODE_ENV === "production"){
            const {ErrorReporting} = require('@google-cloud/error-reporting');

            const errors = new ErrorReporting();

            const errorEvent = errors.event();

            errorEvent.setMessage(this.description);
            if(this.user !== null){
                errorEvent.setUser(this.user.uuid);
            }

            populateErrorMessage(this.error, errorEvent);

            errors.report(errorEvent);
        }
    }

}

module.exports = GCReporter;
