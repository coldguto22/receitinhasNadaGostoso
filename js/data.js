const recipes = [
  {
    id: 1,
    name: "Feijoada Completa",
    category: "Pratos Principais",
    difficulty: "Médio",
    time: "3 horas",
    servings: 8,
    votes: 245,
    description: "A feijoada é um dos pratos mais tradicionais da culinária brasileira, perfeita para reunir a família.",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
    ingredients: [
      "500g de feijão preto",
      "300g de costelinha de porco",
      "200g de linguiça calabresa",
      "200g de paio",
      "150g de bacon",
      "150g de carne seca dessalgada",
      "2 cebolas grandes picadas",
      "6 dentes de alho amassados",
      "3 folhas de louro",
      "Sal e pimenta-do-reino a gosto",
      "Coentro e cebolinha para finalizar"
    ],
    steps: [
      "Deixe o feijão preto de molho na véspera por pelo menos 8 horas.",
      "Dessalgue as carnes em água fria por 12 horas, trocando a água a cada 4 horas.",
      "Em uma panela de pressão grande, aqueça o azeite e refogue o alho e a cebola até dourarem.",
      "Adicione todas as carnes e refogue por 5 minutos, mexendo bem.",
      "Acrescente o feijão escorrido e cubra com água (uns 4 cm acima dos ingredientes).",
      "Adicione as folhas de louro, tampe a panela e cozinhe em pressão por 40 minutos.",
      "Ajuste o sal e a pimenta. Sirva com arroz branco, farofa, couve refogada e laranja."
    ],
    related: [4, 8]
  },
  {
    id: 2,
    name: "Brigadeiro Gourmet",
    category: "Sobremesas",
    difficulty: "Fácil",
    time: "30 minutos",
    servings: 30,
    votes: 312,
    description: "O doce mais amado do Brasil em uma versão sofisticada e irresistível com chocolate belga.",
    image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=800&q=80",
    ingredients: [
      "1 lata de leite condensado (395g)",
      "4 colheres de sopa de cacau em pó 70%",
      "1 colher de sopa de manteiga sem sal",
      "1 pitada de sal",
      "Granulado de chocolate belga para cobrir",
      "Forminha de papel para acomodar"
    ],
    steps: [
      "Em uma panela antiaderente, misture o leite condensado, o cacau em pó e a manteiga.",
      "Leve ao fogo médio, mexendo sempre com espátula, por cerca de 10 a 12 minutos.",
      "O ponto certo é quando a mistura descola do fundo da panela e fica brilhante.",
      "Despeje em um prato levemente untado com manteiga e deixe esfriar completamente.",
      "Com as mãos levemente untadas, enrole em bolinhas do tamanho desejado.",
      "Passe cada brigadeiro no granulado e coloque nas forminhas de papel."
    ],
    related: [7, 6]
  },
  {
    id: 3,
    name: "Pão de Queijo Mineiro",
    category: "Lanches",
    difficulty: "Fácil",
    time: "40 minutos",
    servings: 20,
    votes: 289,
    description: "Quentinho e sequinho, o pão de queijo é perfeito para o café da manhã ou lanche da tarde.",
    image: "https://images.unsplash.com/photo-1607920592519-bab2fd6f5c55?w=800&q=80",
    ingredients: [
      "500g de polvilho azedo",
      "1 xícara de leite integral",
      "1/2 xícara de óleo",
      "1/2 xícara de água",
      "2 ovos inteiros",
      "300g de queijo meia-cura ralado",
      "1 colher de chá de sal"
    ],
    steps: [
      "Preaqueça o forno a 200°C e unte uma forma com óleo.",
      "Em uma panela, aqueça o leite, a água e o óleo até ferver. Desligue.",
      "Despeje a mistura quente sobre o polvilho e misture bem com uma colher.",
      "Espere amornar, adicione os ovos um a um e misture até incorporar.",
      "Acrescente o queijo ralado e o sal, misturando até formar uma massa homogênea.",
      "Enrole bolinhas e disponha na forma, deixando espaço entre elas.",
      "Asse por 25 a 30 minutos até ficarem dourados. Sirva quente!"
    ],
    related: [5, 1]
  },
  {
    id: 4,
    name: "Moqueca de Peixe",
    category: "Pratos Principais",
    difficulty: "Médio",
    time: "45 minutos",
    servings: 4,
    votes: 198,
    description: "Prato típico capixaba, a moqueca tem um sabor único e é perfeita para ocasiões especiais.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    ingredients: [
      "800g de filé de peixe firme (cação ou robalo)",
      "2 tomates picados",
      "2 cebolas em rodelas",
      "1 pimentão verde em tiras",
      "1 pimentão vermelho em tiras",
      "4 dentes de alho picados",
      "200ml de leite de coco",
      "3 colheres de azeite de dendê",
      "Suco de 1 limão",
      "Coentro e cebolinha a gosto",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Tempere o peixe com limão, sal, pimenta e alho. Deixe marinar por 20 minutos.",
      "Em uma panela de barro (ou comum), aqueça o azeite de dendê.",
      "Faça camadas: cebola, tomate, pimentões e o peixe marinado.",
      "Repita as camadas e regue com o leite de coco.",
      "Tampe e cozinhe em fogo médio por 20 minutos, sem mexer.",
      "Finalize com coentro e cebolinha picados. Sirva com arroz e pirão."
    ],
    related: [1, 8]
  },
  {
    id: 5,
    name: "Coxinha de Frango",
    category: "Lanches",
    difficulty: "Médio",
    time: "1h30",
    servings: 25,
    votes: 176,
    description: "Salgadinho clássico brasileiro, crocante por fora e macio por dentro com recheio cremoso.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
    ingredients: [
      "2 peitos de frango cozidos e desfiados",
      "1 cebola picada",
      "3 dentes de alho picados",
      "200g de cream cheese",
      "3 xícaras de farinha de trigo",
      "2 xícaras do caldo do frango",
      "1 colher de sopa de manteiga",
      "Sal, pimenta e cheiro-verde a gosto",
      "Farinha de rosca para empanar",
      "2 ovos batidos para empanar",
      "Óleo para fritar"
    ],
    steps: [
      "Cozinhe o frango temperado com sal e louro. Reserve o caldo e desfie a carne.",
      "Refogue a cebola e o alho na manteiga. Adicione o frango desfiado e o cream cheese. Misture e reserve.",
      "Para a massa: aqueça o caldo do frango e acrescente a farinha de trigo de uma vez, mexendo vigorosamente.",
      "Cozinhe a massa em fogo médio até soltar da panela. Deixe esfriar.",
      "Com as mãos enfarinhadas, abra um disco de massa, coloque o recheio e modele na forma de coxinha.",
      "Passe no ovo batido e depois na farinha de rosca.",
      "Frite em óleo quente (180°C) até ficarem douradas. Escorra em papel-toalha."
    ],
    related: [3, 1]
  },
  {
    id: 6,
    name: "Bowl de Açaí",
    category: "Sobremesas",
    difficulty: "Fácil",
    time: "10 minutos",
    servings: 2,
    votes: 341,
    description: "Refrescante e nutritivo, o açaí é perfeito para dias quentes com frutas frescas e granola.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
    ingredients: [
      "400g de polpa de açaí congelada",
      "1 banana congelada",
      "3 colheres de sopa de leite vegetal (ou leite comum)",
      "2 colheres de sopa de mel",
      "Granola crocante a gosto",
      "Banana fatiada para decorar",
      "Frutas vermelhas (morango, mirtilo) a gosto",
      "Fio de mel para finalizar"
    ],
    steps: [
      "Retire a polpa de açaí do congelador 10 minutos antes de preparar.",
      "No liquidificador, bata o açaí, a banana congelada e o leite até obter uma mistura cremosa.",
      "Adicione o mel e bata mais um pouco. A textura deve ser espessa (como sorvete).",
      "Divida em 2 bowls.",
      "Decore com granola, banana fatiada, frutas vermelhas e um fio de mel.",
      "Sirva imediatamente."
    ],
    related: [2, 7]
  },
  {
    id: 7,
    name: "Pudim de Leite",
    category: "Sobremesas",
    difficulty: "Médio",
    time: "2 horas",
    servings: 8,
    votes: 298,
    description: "Clássico das sobremesas brasileiras, cremoso e com calda de caramelo que derrete na boca.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    ingredients: [
      "1 lata de leite condensado (395g)",
      "2 medidas da lata de leite integral",
      "3 ovos inteiros",
      "1 colher de chá de essência de baunilha",
      "Para a calda: 1 xícara de açúcar",
      "Para a calda: 3 colheres de sopa de água quente"
    ],
    steps: [
      "Preaqueça o forno a 180°C.",
      "Para a calda: derreta o açúcar em fogo médio sem mexer até caramelizar. Adicione a água com cuidado e mexa até dissolver. Despeje em uma forma de pudim (20cm).",
      "No liquidificador, bata o leite condensado, o leite, os ovos e a baunilha por 2 minutos.",
      "Despeje a mistura sobre a calda na forma.",
      "Coloque a forma em banho-maria dentro do forno. Asse por 1h20 a 1h40.",
      "Verifique inserindo um palito — se sair limpo, está pronto. Espere esfriar e leve à geladeira por 4 horas.",
      "Para desenformar, passe uma faca nas bordas e vire sobre um prato fundo."
    ],
    related: [2, 6]
  },
  {
    id: 8,
    name: "Picanha ao Alho",
    category: "Pratos Principais",
    difficulty: "Médio",
    time: "1 hora",
    servings: 6,
    votes: 220,
    description: "A rainha das churrasqueiras brasileiras preparada com alho, manteiga e ervas aromáticas.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    ingredients: [
      "1,2kg de picanha com gordura",
      "8 dentes de alho picados finamente",
      "4 colheres de sopa de manteiga",
      "2 ramos de alecrim fresco",
      "Sal grosso a gosto",
      "Pimenta-do-reino moída na hora",
      "Azeite de oliva extra virgem"
    ],
    steps: [
      "Retire a picanha da geladeira 30 minutos antes. Faça cortes na gordura em formato xadrez.",
      "Tempere generosamente com sal grosso e pimenta em todos os lados.",
      "Aqueça uma frigideira de ferro ou chapa em fogo alto até ficar bem quente.",
      "Sele a picanha do lado da gordura por 4 minutos até dourar. Vire e sele os outros lados por 2 minutos cada.",
      "Reduza para fogo médio, adicione a manteiga, o alho e o alecrim. Regue a carne com a manteiga aromatizada por 3 minutos.",
      "Leve ao forno a 200°C por 15 a 20 minutos para o ponto desejado.",
      "Deixe descansar 10 minutos antes de fatiar. Fatie no sentido contrário às fibras."
    ],
    related: [1, 4]
  }
];
