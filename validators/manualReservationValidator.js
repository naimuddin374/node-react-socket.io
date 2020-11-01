const manualReservationValidator = data => {
    let error = {}

    if (!data.name) {
        error.name = 'Name number field is required!'
    }

    if (!data.numberOfPerson) {
        error.numberOfPerson = 'Number of person field is required!'
    } else if (data.numberOfPerson.length > 10) {
        error.numberOfPerson = 'Please provide a valid number!'
    }

    if (!data.numberOfPerson) {
        error.numberOfPerson = 'Number of person field is required!'
    }
    if (!data.password) {
        error.password = 'Password field is required!'
    }
    if (!data.date) {
        error.date = 'Date field is required!'
    }
    if (!data.startedAt) {
        error.startedAt = 'Started at field is required!'
    }
    if (!data.endedAt) {
        error.endedAt = 'Ended at field is required!'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = manualReservationValidator