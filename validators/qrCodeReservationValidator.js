const qrCodeReservationValidator = data => {
    let error = {}

    if (!data.phoneNumber) {
        error.phoneNumber = 'Phone number field is required!'
    }
    if (!data.numberOfPerson) {
        error.numberOfPerson = 'Number of person field is required!'
    } else if (data.numberOfPerson.length > 10) {
        error.numberOfPerson = 'Please provide a valid number!'
    }

    if (!data.password) {
        error.password = 'Password field is required!'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}
module.exports = qrCodeReservationValidator