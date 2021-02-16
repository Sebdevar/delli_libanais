const menu = {
  assiettes: {
    name: 'Assiettes',
    note: `Chaque assiette est servie avec du riz, des légumes et choix entre patates ou salade.
Accompagnée de sauce brune et d'un choix de mayonnaise (Ail ou Fines herbes)`,
    items: [
      {
        name: 'Shish taouk au poulet',
        price: '14,99',
      },
      {
        name: 'Shawarma au boeuf',
        price: '15,99',
      },
      {
        name: 'Mixte trois viandes: boeuf, agneau et poulet',
        price: '15,65',
      },
      {
        name: 'Combo brochettes poulet et crevettes',
        price: '15,99',
      },
      {
        name: 'Brochette de poulet',
        price: '14,99',
      },
      {
        name: 'Filet de sole',
        price: '14,99',
      },
      {
        name: 'Crevettes',
        price: '15,99',
      },
      {
        name: 'Kefta',
        price: '14,99',
      },
      {
        name: 'Salade taouk',
        price: '15,99',
      },
      {
        name: 'Salade',
        price: '14,55',
      },
    ],
  },
  sandwich: {
    name: 'Sandwichs',
    note: `Trio servi avec boisson en cannette et choix de patates ou salade
Choix de salades: Choux, Couscous, Fatouche, Pâtes au cari, Betteraves, Pois chiches, Taboulé, Pâtes fusilli`,
    items: [
      {
        name: 'Shish taouk',
        prixSeul: '10,99',
        prixTrio: '14,99',
      },
      {
        name: 'Shawarma au boeuf',
        prixSeul: '10,99',
        prixTrio: '14,99',
      },
      {
        name: 'Mixte trois viandes: boeuf, agneau et poulet',
        prixSeul: '10,99',
        prixTrio: '14,99',
      },
      {
        name: 'Falafel',
        prixSeul: '10,99',
        prixTrio: '14,99',
      },
      {
        name: 'Kefta',
        prixSeul: '10,99',
        prixTrio: '14,99',
      },
      {
        name: 'Merguez',
        prixSeul: '10,99',
        prixTrio: '14,99',
      },
      {
        name: 'Gyro',
        prixSeul: '10,99',
        prixTrio: '14,99',
      },
    ],
  },
  baklawa: {
    name: 'Baklawas',
    items: [
      {
        name: 'Pistache et cajou',
        price: '3,10',
      },
      {
        name: 'Amandes, noix et canelle',
        price: '3,10',
      },
      {
        name: 'Chocolat',
        price: '3,10',
      },
      {
        name: 'Noix',
        price: '3,10',
      },
      {
        name: 'Amandes',
        price: '3,10',
      },

    ],
  },
  boissons: {
    name: 'Boissons',
    items: [
      {
        name: 'Jus de pomme',
        price: '2,00',
      },
      {
        name: "Jus d'orange",
        price: '2,00',
      },
      {
        name: 'Jus de légumes',
        price: '2,00',
      },
      {
        name: 'Nestea (bouteille)',
        price: '2,98',
      },
      {
        name: 'Peace tea',
        price: '2,98',
      },
    ],
  },
};

export default menu;
