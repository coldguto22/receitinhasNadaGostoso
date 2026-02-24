// @ts-nocheck

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
            <span class="card-meta-item">${Icons.clock} ${r.time}</span>
            <span class="card-meta-item">${Icons.users} ${r.servings}</span>
            <span class="card-meta-item votes">${Icons.trending} ${r.votes}</span>
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
