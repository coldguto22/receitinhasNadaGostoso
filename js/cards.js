// @ts-nocheck
const Cards = {
  recipe(r) {
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
  },

  related(r) {
    return `
      <a href="receita.html?id=${r.id}" class="related-card">
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        <div class="related-card-body">
          <p class="related-card-title">${r.name}</p>
          <p class="related-card-time">${Icons.clock} ${r.time}</p>
        </div>
      </a>`;
  },
};
