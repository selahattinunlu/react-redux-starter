import { createSelector } from 'reselect'

const getAOptionCounts = createSelector(
  state => state.Vote,
  VoteState => {
    return VoteState.get('aOptionVoteCounts');
  }
);

const getBOptionCounts = createSelector(
  state => state.Vote,
  VoteState => {
    return VoteState.get('bOptionVoteCounts')
  }
);

export default {
  getAOptionCounts,
  getBOptionCounts
}

