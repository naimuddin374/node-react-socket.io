exports.actionSuccess = (res, message = 'Success', data = null) => {
    res.status(200).json({
        message,
        data,
    })
}


exports.createdSuccess = (res, message = 'Created Successful!', data = null) => {
    res.status(201).json({
        message,
        data,
    })
}


exports.updatedSuccess = (res, data = null, message = 'Update Successful!') => {
    res.status(201).json({
        message,
        data,
    })
}


exports.badRequest = (res, error, message = "Bad Request!") => {
    console.log(error)
    res.status(400).json({
        message,
        error
    })
}

exports.validationError = (res, error) => {
    console.log(error)
    res.status(406).json({
        message: 'Validation Error!',
        error
    })
}


exports.serverError = (res, error) => {
    console.log(error)
    res.status(500).json({
        message: 'Server Error Occurred!',
        error
    })
}

exports.makeRand = length => {
    var result = '';
    var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


exports.filterText = text => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}