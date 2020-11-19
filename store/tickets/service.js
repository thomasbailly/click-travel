import axios from 'axios'

export default {
  async getAllByDestination(code) {
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
    return tickets.data
  },
  async getOneTicket(id) {
    const ticket = await axios.get(
      `http://travel-api.clicksomeone.com/tickets/${id}`
    )
    console.log(ticket)
    return ticket.data
  },
}
