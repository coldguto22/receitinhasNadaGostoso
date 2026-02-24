// @ts-nocheck
const Storage = {
  getVoteCounts() {
    return JSON.parse(localStorage.getItem('vote_counts') || '{}');
  },

  getVotedIds() {
    return JSON.parse(localStorage.getItem('voted_ids') || '[]');
  },

  hasVoted(id) {
    return this.getVotedIds().includes(id);
  },

  vote(id) {
    const counts = this.getVoteCounts();
    counts[id] = (counts[id] || 0) + 1;
    localStorage.setItem('vote_counts', JSON.stringify(counts));

    const voted = this.getVotedIds();
    voted.push(id);
    localStorage.setItem('voted_ids', JSON.stringify(voted));
  },

  totalVotes(recipe) {
    return recipe.votes + (this.getVoteCounts()[recipe.id] || 0);
  },
};
