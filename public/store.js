const { createStore } = Redux;

function countVotes(state, action) {
  if (!state) {
    state = {
      warriors: 0,
      raptors: 0,
      lebron: 0,
    };
  }
  const { type } = action;
  const newState = Object.assign(state);
  if (type === 'VOTE_WARRIORS') {
    newState.warriors += 1;
  } else if (type === 'VOTE_RAPTORS') {
    newState.raptors += 1;
  } else if (type === 'VOTE_LEBRON') {
    newState.lebron += 1;
  } else if (type === 'RESET') {
    newState.warriors = 0;
    newState.raptors = 0;
    newState.lebron = 0;
  }
  return newState;
}


let store = createStore(countVotes);

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
