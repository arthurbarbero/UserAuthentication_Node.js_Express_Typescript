import ResponseService from '../ResponseService'

interface BaseService<Input, Output>{
  ResponseService: ResponseService

  create(payload: Input): Promise<Output>
  update(id: number, payload: Input): Promise<Output>
  getById(id: number): Promise<Output>
  deleteById(id: number): Promise<boolean>
  getAll(includeDeleted: boolean): Promise<Output[]>
}

export default BaseService
