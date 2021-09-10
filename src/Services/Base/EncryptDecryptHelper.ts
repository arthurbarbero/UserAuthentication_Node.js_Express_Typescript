import bcryptjs from 'bcryptjs'

export const encrypt = async (termToEncrypt: string): Promise<string> => {
  const salt = await bcryptjs.genSalt(10)
  return bcryptjs.hash(termToEncrypt, salt)
}

export const validate = async (password: string, passwordToCompare: string): Promise<boolean> => {
  return bcryptjs.compare(password, passwordToCompare)
}
