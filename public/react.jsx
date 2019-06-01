
const { Provider, connect } = ReactRedux;

const App = () => (
  <div>
    <ConnectedDisplay />
    <ConnectedButtons />
  </div>
);

const VoteDisplay = ({ w, r, l }) => (
  <div>
    <div>Warriors: {w}</div>
    <div>Raptors: {r}</div>
    <div>Lebron: {l}</div>
    <div></div>
  </div>
);

const ButtonArea = ({ dispatch }) => (
  <div>
      <button onClick={() => dispatch({ type: "VOTE_WARRIORS"})}>Warriors!</button>
      <button onClick={() => dispatch({ type: "VOTE_RAPTORS"})}>Raptors!</button>
      <button onClick={() => dispatch({ type: "VOTE_LEBRON"})}>Lebron!</button>
  </div>
);

function mapStatetoPropsDisplay(state) {
  const { warriors, raptors, lebron } = state;
  return { w: warriors, r: raptors, l: lebron };
}

const ConnectedDisplay = connect(mapStatetoPropsDisplay, null)(VoteDisplay);
const ConnectedButtons = connect(null, null)(ButtonArea);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#container')
);

