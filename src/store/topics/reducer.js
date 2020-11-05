import _ from 'lodash';

export default function reduce(state = initialState, action = {}) {
  // reducer implementation here
}

// selectors

export function getTopicsByUrl(state) {
  return state.topics.topicsByUrl;
}

export function getTopicsUrlArray(state) {
  return _.keys(state.topics.topicsByUrl);
}
