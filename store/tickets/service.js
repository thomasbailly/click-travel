import axios from 'axios'

export default {
  async getAllByDestination(code) {
    console.log(code)
    const tickets = await axios.get(
      `http://travel-api.clicksomeone.com/tickets`,
      {
        params: {
          filter: {
            where: {
              to: code,
            },
          },
        },
      }
    )
    console.log(tickets)
    return tickets.data
  },
}
