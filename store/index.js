export const state = () => ({
  videos: [],
  currentVideo: {}
})

export const mutations = {
  SET_VIDEOS (state, listVDO) {
    state.videos = listVDO
  },
  SET_CURRENT_VIDEO (state, video) {
    state.currentVideo = video
  }
}

export const actions = {
  listVDO ({ state, commit }, data) {
    commit('SET_VIDEO', data)
  }
}
