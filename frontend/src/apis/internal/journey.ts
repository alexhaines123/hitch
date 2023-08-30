import { appRequest } from '.'

const PATH = 'journeys'

export const getAllJourneys = () => {
  return appRequest({ path: PATH, method: 'GET' })
}