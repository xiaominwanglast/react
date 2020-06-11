export default {
  namespace: 'products',

  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
  getInitialState: function() {
    return {
      value: ''
    }
  }
}
