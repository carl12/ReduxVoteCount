const { createStore, combineReducers } = Redux;

function countWarriorVote(state, action) {
  let newState = state;
  if (!newState) {
    newState = 0;
  }
  if (action.type === 'VOTE_WARRIORS') {
    newState += 1;
  }
  return newState;
}


function countRaptorVote(state, action) {
  let newState = state;
  if (!newState) {
    newState = 0;
  }
  if (action.type === 'VOTE_RAPTORS') {
    newState += 1;
  }
  return newState;
}

function countLebronVote(state, action) {
  let newState = state;
  if (!newState) {
    newState = 0;
  }
  if (action.type === 'VOTE_LEBRON') {
    newState += 1;
  }
  return newState;
}

const rootReducer = combineReducers({
  warriors: countWarriorVote,
  raptors: countRaptorVote,
  lebron: countLebronVote,
});

const store = createStore(rootReducer);

const warriorCount = document.querySelector('.warrior_votes');
const raptorCount = document.querySelector('.raptor_votes');
const lebronCount = document.querySelector('.lebron_votes');

warriorCount.innerHTML = store.getState().warriors;
raptorCount.innerHTML = store.getState().raptors;
lebronCount.innerHTML = store.getState().lebron;

store.subscribe(() => {
  warriorCount.innerHTML = store.getState().warriors;
  raptorCount.innerHTML = store.getState().raptors;
  lebronCount.innerHTML = store.getState().lebron;
});


const warriorButton = document.querySelector('.vote_warriors');
const raptorButton = document.querySelector('.vote_raptors');
const lebronButton = document.querySelector('.vote_lebron');

warriorButton.addEventListener('click', () => {
  store.dispatch({ type: 'VOTE_WARRIORS' });
});
raptorButton.addEventListener('click', () => {
  store.dispatch({ type: 'VOTE_RAPTORS' });
});
lebronButton.addEventListener('click', () => {
  store.dispatch({ type: 'VOTE_LEBRON' });
});
