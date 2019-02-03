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

export interface AppState {
  user: UserState,
  profession: ProfessionState
}