import dva from 'dva';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'add'(state, { payload: id }) {
      console.log(state)
      return state.filter(item => item.id !== id);
    },
  },
};