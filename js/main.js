// @ts-nocheck
const clockSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
const usersSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const trendingSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`;

let currentCategory = 'Todas';
let currentSearch = '';

function buildCardHTML(r) {
  return `
    <a href="receita.html?id=${r.id}" class="card-link">
      <article class="card">
        <div class="card-image-wrapper">
          <img src="${r.image}" alt="${r.name}" loading="lazy">
          <span class="difficulty-badge">${r.difficulty}</span>
        </div>
        <div class="card-body">
          <p class="card-category">${r.category}</p>
          <h3 class="card-title">${r.name}</h3>
          <p class="card-desc">${r.description}</p>
          <div class="card-meta">
            <span class="card-meta-item">${clockSVG} ${r.time}</span>
            <span class="card-meta-item">${usersSVG} ${r.servings}</span>
            <span class="card-meta-item votes">${trendingSVG} ${r.votes}</span>
          </div>
        </div>
      </article>
    </a>`;
}

function renderGrid() {
  let list = recipes;
  if (currentCategory !== 'Todas') list = list.filter(r => r.category === currentCategory);
  if (currentSearch) list = list.filter(r => r.name.toLowerCase().includes(currentSearch) || r.description.toLowerCase().includes(currentSearch));

  document.getElementById('allRecipesTitle').textContent = currentCategory === 'Todas' ? 'Todas as Receitas' : currentCategory;
  document.getElementById('allRecipesGrid').innerHTML = list.length
    ? list.map(buildCardHTML).join('')
    : '<p class="no-results">Nenhuma receita encontrada.</p>';
}

document.addEventListener('DOMContentLoaded', () => {
  // Top 3 votadas
  document.getElementById('topRecipesGrid').innerHTML = [...recipes]
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3)
    .map(buildCardHTML).join('');

  renderGrid();

  // Filtro por categoria
  document.getElementById('categoryPills').addEventListener('click', e => {
    const pill = e.target.closest('.pill');
    if (!pill) return;
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentCategory = pill.dataset.category;
    renderGrid();
  });

  // Busca
  document.getElementById('searchInput').addEventListener('input', e => {
    currentSearch = e.target.value.toLowerCase();
    renderGrid();
  });
});
