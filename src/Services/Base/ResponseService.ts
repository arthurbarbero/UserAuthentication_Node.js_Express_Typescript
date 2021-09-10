class ResponseService {
  public status: number
  public error: boolean
  public message: string

  constructor (status: number, error: boolean, message: string) {
    this.status = status
    this.error = error
    this.message = message
  }
}

export default ResponseService
