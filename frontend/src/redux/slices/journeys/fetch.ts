import { getAllJourneys } from '../../../apis/internal/journey'

export const fetchJourneys = async (): Promise<Interfaces.Journey[]> => {
  const response = await getAllJourneys()
  const result = await response.json()

  return result
}
