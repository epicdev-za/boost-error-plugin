class ErrorReporter {

    constructor(error, description, code, stack, user) {
        this.error = error;
        this.description = description;
        this.code = code;
        this.stack = stack;
        if(user !== undefined){
            this.user = user;
        }else{
            this.user = null;
        }
    }

    report(){
        throw new Error("Abstract class cannot be used to perform functionality");
    }

}

module.exports = ErrorReporter;
