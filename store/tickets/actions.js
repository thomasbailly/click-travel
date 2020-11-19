import service from './service'

export default {
  async loadTicketsByDestination({ commit }, destinationCode) {
    try {
      const tickets = await service.getAllByDestination(destinationCode)
      commit('setTickets', tickets)
    } catch (e) {
      commit('setTickets', [])
    }
  },
  async loadTicket({ commit }, id) {
    try {
      const ticket = await service.getOneTicket(id)
      commit('setTicket', ticket)
    } catch (e) {
      commit('setTicket', {})
    }
  },
}
