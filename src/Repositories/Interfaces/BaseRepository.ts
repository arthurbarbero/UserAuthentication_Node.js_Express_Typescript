interface BaseRepository<Input, Output>{
  create(payload: Input): Promise<Output>
  update(id: number, payload:Partial<Input>): Promise<Output>
  getById(id: number): Promise<Output>
  deleteById(id: number): Promise<boolean>
  getAll(includeDeleted: boolean): Promise<Output[]>
}

export default BaseRepository
