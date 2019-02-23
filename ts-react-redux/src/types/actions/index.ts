export namespace Profession {
  export interface UpdateProfession {
    (designation: string, company: string, location: string): void
  }

  export type ActionCreator = {
    (source: 'profession'): {
      updateProfession: UpdateProfession
    }
  }
}

export namespace User {
  export interface UpdateName<T=void> {
    (value: string): T
  }

  export interface ResetName<T=void> {
    (payload: boolean): T
  }

  export type ActionCreator = {
    (source: 'user'): {
      updateName: UpdateName,
      resetName: ResetName
    }
  }
}
