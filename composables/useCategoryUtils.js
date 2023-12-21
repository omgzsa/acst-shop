export function getCategoryThumbnail(categorySlug) {
  const categoryMap = {
    kerekpartartok: '59cb511b-7e6e-4263-83d8-49091f9bcb03',
    tetocsomagtartok: 'cf6c6827-6fb1-4227-903b-794fb3203d99',
    'csomagtarto-boxok-es-kosarak': '664346f5-6579-4434-a2ee-ed03585dbb37',
    'vizi-sporteszkoz-szallitok': '1c0558e8-5416-43f0-9dbf-3bc3e78affed',
    'borondok-es-utazotaskak': '6d0223cb-38e6-4dba-b3e9-20ac78848055',
    'laptop-taskak': '2dfa4f72-6613-4c16-a946-9c4f489721d2',
    'hatizsakok-es-kezitaskak': 'f669a425-e90e-4858-b7f5-0c3a80eb23bd',
    'kerekparos-es-sporttaskak': '1f764248-3a26-4254-8f29-e269791715f2',
    'irat-es-eszkozrendezo-taskak': '3478e9a4-c98e-4ea6-952a-2cadd3abdea8',
    tetosatrak: 'f1fc1bc7-56e3-4a4e-afac-b6fa524245e9',
    babakocsik: '36074ccd-a25d-4893-b354-47822930ef46',
    'kerekpar-utanfutok': '41817b30-b902-46ac-8c3b-c75da0282a3b',
    'gyermek-kerekparulesek': '237d17af-eb52-4c7e-8d2b-3309210000a1',
  };

  return categoryMap[categorySlug] || '';
}

export function getCategoryTitle(categorySlug) {
  const titleMap = {
    kerekpartartok: 'Összes kerékpártartó',
    tetocsomagtartok: 'Összes tetőcsomagtartó',
    'csomagtarto-boxok-es-kosarak': 'Összes csomagtartó box és kosár',
    'vizi-sporteszkoz-szallitok': 'Összes vízi sporteszköz szállító',
    'borondok-es-utazotaskak': 'Összes bőrönd és utazótáska',
    'laptop-taskak': 'Összes laptop táska',
    'hatizsakok-es-kezitaskak': 'Összes hátizsák és kézitáska',
    'kerekparos-es-sporttaskak': 'Összes kerékpáros és sporttáska',
    'irat-es-eszkozrendezo-taskak': 'Összes irat és eszközrendező táska',
    tetosatrak: 'Összes autós sátor',
    babakocsik: 'Összes babakocsi',
    'kerekpar-utanfutok': 'Összes kerékpár utánfutó',
    'gyermek-kerekparulesek': 'Összes gyermek kerékpárlülés',
  };

  return titleMap[categorySlug] || '';
}
