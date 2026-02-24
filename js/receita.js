// @ts-nocheck
const clockSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;

document.addEventListener('DOMContentLoaded', () => {
  const id = parseInt(new URLSearchParams(window.location.search).get('id'), 10);
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    document.getElementById('receitaPage').style.display = 'none';
    document.getElementById('notFound').style.display = 'block';
    return;
  }

  // Preencher página
  document.title = recipe.name + ' - ReceitasBR';
  document.getElementById('receitaPage').style.display = '';

  const img = document.getElementById('detailImage');
  img.src = recipe.image;
  img.alt = recipe.name;

  document.getElementById('detailCategory').textContent = recipe.category;
  document.getElementById('detailTitle').textContent = recipe.name;
  document.getElementById('detailDescription').textContent = recipe.description;
  document.getElementById('infoTime').textContent = recipe.time;
  document.getElementById('infoServings').textContent = recipe.servings + ' pessoas';
  document.getElementById('infoDifficulty').textContent = recipe.difficulty;

  // Votos (base + delta salvo)
  const voteDeltas = JSON.parse(localStorage.getItem('vote_counts') || '{}');
  const totalVotes = () => recipe.votes + (voteDeltas[id] || 0);
  document.getElementById('infoVotes').textContent = totalVotes();

  // Ingredientes
  document.getElementById('ingredientsList').innerHTML =
    recipe.ingredients.map(i => `<li>${i}</li>`).join('');

  // Passos
  document.getElementById('stepsList').innerHTML =
    recipe.steps.map((s, i) => `
      <li class="step-item">
        <span class="step-number">${i + 1}</span>
        <p class="step-text">${s}</p>
      </li>`).join('');

  // Receitas relacionadas
  document.getElementById('relatedGrid').innerHTML =
    recipes.filter(r => recipe.related.includes(r.id)).map(r => `
      <a href="receita.html?id=${r.id}" class="related-card">
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        <div class="related-card-body">
          <p class="related-card-title">${r.name}</p>
          <p class="related-card-time">${clockSVG} ${r.time}</p>
        </div>
      </a>`).join('');

  // Botão de votar
  const btn = document.getElementById('voteBtn');
  const voted = JSON.parse(localStorage.getItem('voted_ids') || '[]');

  if (voted.includes(id)) {
    btn.textContent = 'Você já votou nesta receita';
    btn.disabled = true;
  }

  btn.addEventListener('click', () => {
    if (voted.includes(id)) return;

    voteDeltas[id] = (voteDeltas[id] || 0) + 1;
    localStorage.setItem('vote_counts', JSON.stringify(voteDeltas));

    voted.push(id);
    localStorage.setItem('voted_ids', JSON.stringify(voted));

    document.getElementById('infoVotes').textContent = totalVotes();
    btn.textContent = 'Obrigado pelo seu voto!';
    btn.disabled = true;
  });
});
