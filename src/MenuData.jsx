const menu = {
  assiettes: {
    name: 'Assiettes',
    note: `Chaque assiette est servie avec du riz, des légumes et choix entre patates ou salade.
Accompagnée de sauce brune et d'un choix de mayonnaise (Ail ou Fines herbes)`,
    items: [
      {
        name: 'Shish taouk au poulet',
        price: '11,69',
      },
      {
        name: 'Shawarma au boeuf',
        price: '11,89',
      },
      {
        name: 'Mixte trois viandes: boeuf, agneau et poulet',
        price: '11,79',
      },
      {
        name: 'Combo brochettes poulet et crevettes',
        price: '11,89',
      },
      {
        name: 'Brochette de poulet',
        price: '11,69',
      },
      {
        name: 'Filet de sole',
        price: '11,69',
      },
      {
        name: 'Crevettes',
        price: '11,89',
      },
      {
        name: 'Kefta',
        price: '11,69',
      },
      {
        name: 'Salade taouk',
        price: '11,89',
      },
      {
        name: 'Salade',
        price: '10,49',
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
        prixSeul: '8,49',
        prixTrio: '11,79',
      },
      {
        name: 'Shawarma au boeuf',
        prixSeul: '8,69',
        prixTrio: '11,79',
      },
      {
        name: 'Mixte trois viandes: boeuf, agneau et poulet',
        prixSeul: '8,69',
        prixTrio: '11,79',
      },
      {
        name: 'Falafel',
        prixSeul: '8,49',
        prixTrio: '11,79',
      },
      {
        name: 'Kefta',
        prixSeul: '8,49',
        prixTrio: '11,79',
      },
      {
        name: 'Merguez',
        prixSeul: '8,49',
        prixTrio: '11,79',
      },
      {
        name: 'Gyro',
        prixSeul: '8,49',
        prixTrio: '11,79',
      },
    ],
  },
  baklawa: {
    name: 'Baklawas',
    items: [
      {
        name: 'Pistache et cajou',
        price: '2,09',
      },
      {
        name: 'Amandes, noix et canelle',
        price: '2,09',
      },
      {
        name: 'Chocolat',
        price: '2,09',
      },
      {
        name: 'Noix',
        price: '2,09',
      },
      {
        name: 'Amandes',
        price: '2,09',
      },

    ],
  },
  boissons: {
    name: 'Boissons',
    items: [
      {
        name: 'Bouteille d\'eau',
        price: '1,50',
      },
      {
        name: 'Jus Oasis',
        price: '1,80',
      },
      {
        name: 'Nestea (bouteille)',
        price: '2,59',
      },
      {
        name: 'Peace tea',
        price: '2,59',
      },
      {
        name: 'Jus de canneberge',
        price: '2,59',
      },
    ],
  },
};

export default menu;
