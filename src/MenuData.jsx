const menu = {
  assiettes: {
    name: 'Assiettes',
    note: `Chaque assiette est servie avec du riz, des legumes et choix entre patates ou salade.
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
  sandwitch: {
    name: 'Sandwichs',
    note: `Trio servi avec boisson en cannette et choix entre patates ou salade
Choix de salades: Chou, Couscous, Fatouche, Pâte cari, Betteraves, Pois chiches, Taboule, Pâte fusilli`,
    items: [
      {
        name: 'Shiche taouk',
        prixSeul: '10,99',
        prixTrio: '14,99',
      },
      {
        name: 'Shawarma de boeuf',
        prixSeul: '10,99',
        prixTrio: '14,99',
      },
      {
        name: 'Mixte trois viandes',
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
        name: 'Pistache et cago',
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
        name: 'Jus d\'orange',
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
  // category: {
  //   name: 'NAME',
  //   note: 'NOTE',
  //   items: [
  //     {
  //       name: 'NAME',
  //       price: 1234,
  //     },
  //   ],
  // },
};

export default menu;
