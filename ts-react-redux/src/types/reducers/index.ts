export interface UserState {
  name: string,
  location: {
    city: string,
    country: string
  }
}

export interface ProfessionState {
  designation: string,
  company: string,
  location: string
}

export interface FruitsState {
  bucket: Array<{ name: string, price: number }>
}

export interface AppState {
  user: UserState,
  profession: ProfessionState,
  fruits: FruitsState
}