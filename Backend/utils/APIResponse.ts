class APIResponse{
    statusCode: number
    data: any
    message: string
    Success: boolean
    constructor (statusCode: number, data: any, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.Success = statusCode < 400
    }
}

export {APIResponse}