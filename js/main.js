// @ts-nocheck
let currentCategory = 'Todas';
let currentSearch = '';

function renderGrid() {
  let list = recipes;
  if (currentCategory !== 'Todas') list = list.filter(r => r.category === currentCategory);
  if (currentSearch) list = list.filter(r =>
    r.name.toLowerCase().includes(currentSearch) ||
    r.description.toLowerCase().includes(currentSearch)
  );

  document.getElementById('allRecipesTitle').textContent =
    currentCategory === 'Todas' ? 'Todas as Receitas' : currentCategory;
  document.getElementById('allRecipesGrid').innerHTML = list.length
    ? list.map(Cards.recipe).join('')
    : '<p class="no-results">Nenhuma receita encontrada.</p>';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('topRecipesGrid').innerHTML =
    [...recipes].sort((a, b) => b.votes - a.votes).slice(0, 3).map(Cards.recipe).join('');

  renderGrid();

  document.getElementById('categoryPills').addEventListener('click', e => {
    const pill = e.target.closest('.pill');
    if (!pill) return;
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentCategory = pill.dataset.category;
    renderGrid();
  });

  document.getElementById('searchInput').addEventListener('input', e => {
    currentSearch = e.target.value.toLowerCase();
    renderGrid();
  });
});
