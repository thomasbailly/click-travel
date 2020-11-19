import axios from 'axios'

export default {
  async getAll() {
    const destinations = await axios.get(
      `http://travel-api.clicksomeone.com/destinations`
    )
    return destinations.data
  },
}
