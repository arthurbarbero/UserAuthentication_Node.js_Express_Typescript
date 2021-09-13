export const CreateUser = {
  tags: ['Users'],
  description: 'Create a user on the model especification for this project and returns the created user',
  operationId: 'create',
  parameters: [{
    in: 'body',
    description: 'The user to create',
    name: 'User',
    required: true,
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' }
      }
    }
  }],
  responses: {
    200: {
      description: 'The created user.',
      content: {
        'applciation/json': {
          schema: {
            type: 'object',
            properties: {
              hasErrors: {
                type: 'boolean',
                description: 'If there is any errors in the request'
              },
              message: {
                type: 'string',
                description: 'Message from the response'
              },
              objectResult: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer'
                  },
                  name: {
                    type: 'string'
                  },
                  email: {
                    type: 'string'
                  },
                  password: {
                    type: 'string'
                  },
                  updatedAt: {
                    type: 'string'
                  },
                  createdAt: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export const GetAllUsers = {
  tags: ['Users'],
  description: 'Get All users and returns the list of users',
  operationId: 'GetAll',
  responses: {
    200: {
      description: 'The list of users.',
      content: {
        'applciation/json': {
          schema: {
            type: 'object',
            properties: {
              hasErrors: {
                type: 'boolean',
                description: 'If there is any errors in the request'
              },
              message: {
                type: 'string',
                description: 'Message from the response'
              },
              objectResult: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string'
                    },
                    name: {
                      type: 'string'
                    },
                    email: {
                      type: 'string'
                    },
                    password: {
                      type: 'string'
                    },
                    updatedAt: {
                      type: 'string'
                    },
                    createdAt: {
                      type: 'string'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export const GetUserById = {
  tags: ['Users'],
  description: 'Get the requested user by id and returns the finded user',
  operationId: 'GetById',
  responses: {
    200: {
      description: 'The finded user.',
      content: {
        'applciation/json': {
          schema: {
            type: 'object',
            properties: {
              hasErrors: {
                type: 'boolean',
                description: 'If there is any errors in the request'
              },
              message: {
                type: 'string',
                description: 'Message from the response'
              },
              objectResult: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer'
                  },
                  name: {
                    type: 'string'
                  },
                  email: {
                    type: 'string'
                  },
                  password: {
                    type: 'string'
                  },
                  updatedAt: {
                    type: 'string'
                  },
                  createdAt: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export const DeleteById = {
  tags: ['Users'],
  description: 'Get the requested user by id and returns the finded user',
  operationId: 'DeleteById',
  responses: {
    200: {
      description: 'The finded user.',
      content: {
        'applciation/json': {
          schema: {
            type: 'object',
            properties: {
              hasErrors: {
                type: 'boolean',
                description: 'If there is any errors in the request'
              },
              message: {
                type: 'string',
                description: 'Message from the response'
              },
              objectResult: {
                type: 'boolean'
              }
            }
          }
        }
      }
    }
  }
}

export const UpdateById = {
  tags: ['Users'],
  description: 'Update a user on the model especification for this project and returns the updated user',
  operationId: 'update',
  parameters: [{
    in: 'body',
    description: 'The user to create',
    name: 'User',
    required: true,
    schema: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' }
      }
    }
  }],
  responses: {
    200: {
      description: 'The created user.',
      content: {
        'applciation/json': {
          schema: {
            type: 'object',
            properties: {
              hasErrors: {
                type: 'boolean',
                description: 'If there is any errors in the request'
              },
              message: {
                type: 'string',
                description: 'Message from the response'
              },
              objectResult: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer'
                  },
                  name: {
                    type: 'string'
                  },
                  email: {
                    type: 'string'
                  },
                  password: {
                    type: 'string'
                  },
                  updatedAt: {
                    type: 'string'
                  },
                  createdAt: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
