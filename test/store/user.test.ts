import reducers from 'src/store/rootReducer'

test('reducers', () => {
  let state
  state = reducers(
    { user: { _id: null, email: null, username: null, account: 'free', campaigns: [] } },
    {
      type: 'user/setUser',
      payload: { _id: '5fada92d4773ef3af0debd0c', account: 'free', campaigns: [], email: 'eric@dgren.dev', username: 'eric', iat: 1605258279 },
    }
  )
  expect(state).toEqual({ user: { _id: null, email: null, username: null, account: 'free', campaigns: [] } })
})
