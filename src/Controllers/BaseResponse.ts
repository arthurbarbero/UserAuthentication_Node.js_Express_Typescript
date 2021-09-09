class BaseResponse {
  private hasErrors: boolean
  private message: string
  private objectResult: unknown

  constructor (hasErrors = false, message = '', objectResult: unknown = {}) {
    this.hasErrors = hasErrors
    this.message = message
    this.objectResult = objectResult
  }

  getDefaultResponse (): Record<string, unknown> {
    return {
      hasErrors: this.hasErrors,
      message: this.message,
      objectResult: this.objectResult
    }
  }
}

export default BaseResponse
