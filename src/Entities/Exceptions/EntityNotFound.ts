class EntityNotFound extends Error {
    private status = 404

    constructor (msg: string) {
      super(msg)
      Object.setPrototypeOf(this, EntityNotFound.prototype)
    }

    public getStatus (): number {
      return this.status
    }
}

export default EntityNotFound
