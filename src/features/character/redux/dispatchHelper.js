export const returnError = (obj) => {
    return ({
        type: 'ERROR',
        payload:
        {
            message: `An error has occurred while trying to get ${obj}.`,
            variant: 'error'
        }
    })
}
 