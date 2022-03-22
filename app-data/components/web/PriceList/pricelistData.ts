import { PriceListType } from '../../../shared/types';

export const pricelistData: PriceListType = [
  {
    title: 'Základné úkony',
    icon: '/icons/pricelist/zakladne_ukony.svg',
    subcategory: [
      {
        items: [
          {
            title: 'Preventívna stomatologická prehliadka',
            price: '15,00',
            insurancePrice: '0,00',
          },
          {
            title: 'Vyžiadané akútne ošetrenie mimo ordinačného času',
            price: '100,00',
            insurancePrice: '100,00',
          },
          {
            title: 'Rtg ortopantomogram',
            price: '15,00',
            insurancePrice: '15,00',
          },
          {
            title: 'Rtg snímka intraorálna zubov, BTW',
            price: '10,00',
            insurancePrice: '10,00',
          },
          {
            title: 'CT snímok',
            price: '50,00',
            insurancePrice: '50,00',
          },
          {
            title: 'Lokálna intraligamentárna anestéza',
            price: '10,00',
            insurancePrice: '10,00',
          },
          {
            title: 'Injekčná anestéza k extrakcii nadštandard',
            price: '25,00',
            insurancePrice: '25,00',
          },
          {
            title: 'Mandibulárna anestéza',
            price: '15,00',
            insurancePrice: '15,00',
          },
          {
            title: 'Operačný mikroskop hodina práce+výkon',
            price: '30,00',
            insurancePrice: '30,00',
          },
          {
            title: 'Vylúčenie dentálnej fokálnej infekcie',
            price: '20,00',
            insurancePrice: '20,00',
          },
          {
            title: 'Vyžiadané vyšetrenie počas ordinačného času',
            price: '50,00',
            insurancePrice: '50,00',
          },
          {
            title:
              'Pacient sa nedostavil na ošetrenie, nezrušil termín dopredu 24 hod.',
            price: '30,00',
            insurancePrice: '30,00',
          },
          {
            title: 'Konzultácia',
            price: '20,00',
            insurancePrice: '20,00',
          },
        ],
      },
    ],
  },
  {
    title: 'Záchovná stomatológia',
    icon: '/icons/pricelist/zachovna_stomatologia.svg',
    subcategory: [
      {
        title: 'Kompozitné výplne',
        items: [
          {
            title: 'Výplň kompozít - jedna plôška',
            price: '60,00',
            insurancePrice: '35,00',
          },
          {
            title: 'Výplň kompozít - dve plôšky',
            price: '75,00',
            insurancePrice: '50,00',
          },
          {
            title: 'Fotokompozitná dostavba',
            price: '90,00',
            insurancePrice: '60,00',
          },
          {
            title: 'Fotokompozitná dostavba - estetic line',
            price: '115,00',
            insurancePrice: '85,00',
          },
          {
            title: 'Pečatenie zubov / recesus',
            price: '25,00',
            insurancePrice: '25,00',
          },
          {
            title: 'Každých začatých 30 minút',
            price: '35,00',
            insurancePrice: '35,00',
          },
          {
            title: 'Nasadenie koferdamu',
            price: '10,00',
            insurancePrice: '10,00',
          },
          {
            title: 'Dočasná výplň',
            price: '10,00',
            insurancePrice: '10,00',
          },
          {
            title: 'Piersing zuba, diamant do zuba',
            price: '45,00',
            insurancePrice: '45,00',
          },
        ],
      },
      {
        title: 'Endodoncia ( plnenie koreňových kanálikov )',
        items: [
          {
            title: 'Dočasné ošetrenie - Frontálne zuby, anest., vložka',
            price: '45,00',
            insurancePrice: '30,00',
          },
          {
            title: 'Dočasné ošetrenie - Distálne zuby, anest., vložka',
            price: '65,00',
            insurancePrice: '45,00',
          },
          {
            title:
              'Definitívna výplň 1 koreň. kanálika, strojová prep., anest., koferdam',
            price: '130,00',
            insurancePrice: '90,00',
          },
          {
            title:
              'Definitívna výplň 2 koreň. kanálikov, strojová prep., anest., koferdam',
            price: '170,00',
            insurancePrice: '115,00',
          },
          {
            title: 'Definitívna výplň 3 koreň. kanálikov, strojová prep.',
            price: '220,00',
            insurancePrice: '155,00',
          },
          {
            title: 'Použitie hmoty MTA, Biodentine, FRC čap',
            price: '25,00',
            insurancePrice: '25,00',
          },
          {
            title: 'Každý ďalší kanálik nad 3 kanáliky',
            price: '35,00',
            insurancePrice: '35,00',
          },
          {
            title: 'Reendodoncia 1KK',
            price: '150,00',
            insurancePrice: '150,00',
          },
          {
            title: 'Endogénne bielenie - 1 zub',
            price: '55,00',
            insurancePrice: '55,00',
          },
        ],
      },
      {
        title: 'Mikroskopická stomatológia',
        items: [
          {
            title: 'Mikroskopická stomatológia 1KK',
            price: '150,00',
            insurancePrice: '110,00',
          },
          {
            title: 'Mikroskopická stomatológia 2KK',
            price: '200,00',
            insurancePrice: '145,00',
          },
          {
            title: 'Mikroskopická stomatológia 3KK',
            price: '250,00',
            insurancePrice: '195,00',
          },
          {
            title: 'Mikroskopická stomatológia 4KK',
            price: '300,00',
            insurancePrice: '245,00',
          },
          {
            title: 'Plomba po mikroskopickej stomatológii 1 plôška',
            price: '100,00',
            insurancePrice: '80,00',
          },
          {
            title: 'Plomba po mikroskopickej stomatológii 2 plôšky',
            price: '120,00',
            insurancePrice: '90,00',
          },
          {
            title: 'Plomba po mikroskopickej stomatológii 3 plôšky',
            price: '130,00',
            insurancePrice: '100,00',
          },
          {
            title: 'Hodinová práca',
            price: '150,00',
            insurancePrice: '150,00',
          },
          {
            title: 'Polhodinová práca',
            price: '75,00',
            insurancePrice: '75,00',
          },
        ],
      },
    ],
  },
  {
    title: 'Chirurgická stomatológia',
    icon: '/icons/pricelist/chirurgicka_stomatologia.svg',
    subcategory: [
      {
        items: [
          {
            title: 'Atraumaticka extrakcia viac koreň. zub - periotome, luxtor',
            price: '65,00',
            insurancePrice: '40,00',
          },
          {
            title: 'Atraumaticka extrakcia 1 koreň - periotome, luxtor',
            price: '60,00',
            insurancePrice: '35,00',
          },
          {
            title: 'Sutúra extrakčnej rany - atraumatické šitie',
            price: '20,00',
            insurancePrice: '20,00',
          },
          {
            title: 'Neplánovaná chirurgická extrakcia zuba - atraumatická',
            price: '100,00',
            insurancePrice: '60,00',
          },
          {
            title: 'Hemiextrakcia, hemisekcia',
            price: '65,00',
            insurancePrice: '65,00',
          },
          {
            title: 'Dezinfekčný výplach',
            price: '10,00',
            insurancePrice: '10,00',
          },
          {
            title: 'Alvogyl, revízia rany',
            price: '25,00',
            insurancePrice: '25,00',
          },
          {
            title: 'Trepanácia alveolu',
            price: '45,00',
            insurancePrice: '45,00',
          },
          {
            title: 'Príplatok k certifkovaným chirurgickým výkonom I.',
            price: '45,00',
            insurancePrice: '45,00',
          },
          {
            title: 'Príplatok k certifkovaným chirurgickým výkonom II.',
            price: '100,00',
            insurancePrice: '100,00',
          },
          {
            title: 'Príplatok k certifkovaným chirurgickým výkonom III.',
            price: '160,00',
            insurancePrice: '160,00',
          },
        ],
      },
      {
        title: 'Ošetrenie bez účasti zdravotnej poisťovne',
        items: [
          {
            title: 'Atraumatické šitie',
            price: '20,00',
          },
          {
            title: 'Extrakcia ponechaného koreňa',
            price: '75,00',
          },
          {
            title: 'Chirurgická extrakcia I., anestézia, sutura',
            price: '100,00',
          },
          {
            title: 'Chirurgická extrakcia II., anestézia, sutura',
            price: '160,00',
          },
          {
            title: 'Chirurgická extrakcia III., anestézia, sutura',
            price: '200,00',
          },
          {
            title: 'Frenulektómia, anestézia, šitie',
            price: '45,00',
          },
          {
            title: 'Resekcia koreňového hrotu, anestézia, šitie',
            price: '100,00',
          },
          {
            title: 'Egalizácia alveolárneho výbežku',
            price: '100,00',
          },
          {
            title: 'Vestibuloplastika',
            price: '100,00',
          },
          {
            title: 'Plastika oroantrálnej komunikácie',
            price: '100,00',
          },
          {
            title: 'Decapsulácia',
            price: '25,00',
          },
          {
            title: 'Chirurgické predĺženie klinickej korunky',
            price: '30,00',
          },
          {
            title: 'Gingivektómia',
            price: '50,00',
          },
          {
            title: 'Intraorálna incízia',
            price: '10,00',
          },
          {
            title: 'Epiteliálny, väzivový štep',
            price: '200,00',
          },
          {
            title: 'Extirácia, excízia TU, histológia',
            price: '65,00',
          },
          {
            title: 'Retrogradne MTA plnenie',
            price: '85,00',
          },
          {
            title: 'Extrakcia + replantácia',
            price: '300,00',
          },
          {
            title: 'Sklerotizácia hemangiomu',
            price: '35,00',
          },
          {
            title:
              'Komplikovaná chirurgická extrakcia - mikrochirurgická extrakcia',
            price: '250,00',
          },
          {
            title: 'Kyretáž parodontálneho vačku',
            price: '100,00',
          },
          {
            title: 'Kyretáž parodontálneho vačku - každý ďalší',
            price: '30,00',
          },
          {
            title: 'Plastika oroantrálnej komunikácie ( Bichat`s Gat pad )',
            price: '200,00',
          },
          {
            title: 'Fenestrácia',
            price: '85,00',
          },
          {
            title: 'Patefakcia',
            price: '120,00',
          },
        ],
      },
    ],
  },
  {
    title: 'Fixná protetika',
    icon: '/icons/pricelist/fixna_protetika.svg',
    subcategory: [
      {
        items: [
          {
            title: 'Dlahovanie zubov pomocou sklenného vlákna, po úraze',
            price: '175,00',
            insurancePrice: '175,00',
          },
          {
            title: 'Mostík na sklennom vlákne',
            price: '260,00',
            insurancePrice: '260,00',
          },
          {
            title: 'Liaty kovový čap + Pattern resin',
            price: '85,00',
            insurancePrice: '85,00',
          },
          {
            title: 'Sklenný čap - FRC čap, koreňová in lay',
            price: '55,00',
            insurancePrice: '55,00',
          },
          {
            title: 'Odstránenie kovového alebo FRC čapu z kanálika',
            price: '40,00',
            insurancePrice: '40,00',
          },
          {
            title: 'Ochranné korunky dočasné razidlova metóda',
            price: '50,00',
            insurancePrice: '50,00',
          },
          {
            title: 'Ochranný mostík frezovaný - člen',
            price: '50,00',
            insurancePrice: '50,00',
          },
          {
            title: 'Estetická keramická fazeta',
            price: '300,00',
            insurancePrice: '300,00',
          },
          {
            title: 'Estetická fazeta Non-prep',
            price: '450,00',
            insurancePrice: '450,00',
          },
          {
            title: 'Korunka Cerec nasadenie do 24 hodín',
            price: '400,00',
            insurancePrice: '400,00',
          },
          {
            title: 'Kovokeramická korunka ( člen )',
            price: '275,00',
            insurancePrice: '250,00',
          },
          {
            title: 'Lithium Disilicate korunka',
            price: '300,00',
            insurancePrice: '300,00',
          },
          {
            title: 'Zirkon - oxidová korunka ( člen )',
            price: '300,00',
            insurancePrice: '285,00',
          },
          {
            title: 'Onlay, Inlay',
            price: '165,00',
            insurancePrice: '165,00',
          },
          {
            title: 'Sňatie fixnej náhrady za každú pilierovú konštrukciu',
            price: '15,00',
            insurancePrice: '15,00',
          },
          {
            title: 'Znovunasadenie fixnej náhrady',
            price: '15,00',
            insurancePrice: '15,00',
          },
        ],
      },
    ],
  },
  {
    title: 'Snímateľná protetika',
    icon: '/icons/pricelist/snimatelna_protetika.svg',
    subcategory: [
      {
        items: [
          {
            title: 'Kombinovaný odtlačok/sken',
            price: '30,00',
            insurancePrice: '30,00',
          },
          {
            title: 'Odtlačok čeľuste alebo sánky',
            price: '30,00',
            insurancePrice: '30,00',
          },
          {
            title: 'Obrúsenie 1 pahýľa',
            price: '15,00',
            insurancePrice: '15,00',
          },
          {
            title: 'Adhezívna fixácia',
            price: '10,00',
            insurancePrice: '10,00',
          },
          {
            title: 'Rekonštrukcia intraalveolárnych vzťahov šablónami',
            price: '50,00',
            insurancePrice: '50,00',
          },
          {
            title: 'Skúška zubov vo vosku',
            price: '50,00',
            insurancePrice: '50,00',
          },
          {
            title: 'Čiastočná snímateľná náhrada - flexibilná',
            price: '400,00',
            insurancePrice: '400,00',
          },
          {
            title: 'Dolderov/Gilmorov strmeň',
            price: '350,00',
            insurancePrice: '350,00',
          },
          {
            title: 'Zásuvný spoj',
            price: '200,00',
            insurancePrice: '200,00',
          },
          {
            title: 'Skeletová snímateľná náhrada',
            price: '850,00',
            insurancePrice: '850,00',
          },
          {
            title: 'Snímateľná dlaha, ochranná dlaha pre športovcov',
            price: '65,00',
            insurancePrice: '65,00',
          },
          {
            title: 'Dlaha proti bruxizmu',
            price: '45,00',
            insurancePrice: '45,00',
          },
          {
            title: 'Totálna protéza nadštandard',
            price: '550,00',
            insurancePrice: '350,00',
          },
          {
            title: 'Čiastočná imediátna náhrada do 4 zubov',
            price: '180,00',
            insurancePrice: '180,00',
          },
          {
            title: 'Čiastočne snímatelná náhrada nadštandard',
            price: '600,00',
            insurancePrice: '450,00',
          },
          {
            title: 'Rebazácia náhrady - každej',
            price: '60,00',
            insurancePrice: '60,00',
          },
        ],
      },
    ],
  },
  {
    title: 'Dentálna hygiena',
    icon: '/icons/pricelist/dentalna_hygiena.svg',
    subcategory: [
      {
        items: [
          {
            title: 'Dentálna hygiena',
            price: '40,00',
          },
          {
            title: 'Dentálna hygiena deti',
            price: '30,00',
          },
          {
            title: 'Kontrolná dentálna hygiena',
            price: '30,00',
          },
          {
            title: 'Inštruktáž, nácvik ústnej hygieny',
            price: '15,00',
          },
          {
            title: 'Lokálna fluoridácia /lak, gél/',
            price: '10,00',
          },
          {
            title: 'Ambulantné bielenie zubov čeluste a sánky',
            price: '175,00',
          },
          {
            title: 'Icon',
            price: '150,00',
          },
          {
            title: 'Domáce bielenie',
            price: '100,00',
          },
          {
            title: 'Medzizubné kefky - sada',
            price: '7,00',
          },
          {
            title: 'Medzizubná kefka 1ks',
            price: '1,50',
          },
          {
            title: 'Superfloss',
            price: '7,00',
          },
          {
            title: 'Zubná kefka',
            price: '4,00',
          },
          {
            title: 'Jednozväzková kefka (single kefka)',
            price: '4,00',
          },
          {
            title: 'ELMEX gelée',
            price: '8,00',
          },
          {
            title: 'CURASEPT gél',
            price: '4,00',
          },
          {
            title: 'Zubná pasta',
            price: '3,50',
          },
        ],
      },
    ],
  },
  {
    title: 'Implantológia',
    icon: '/icons/pricelist/implantologia.svg',
    subcategory: [
      {
        items: [
          {
            title: 'Konzultácia k implantátom',
            price: '50,00',
          },
          {
            title: 'Otvorený sinus lift',
            price: '500,00',
          },
          {
            title: 'Uzatvorený sinus lift',
            price: 'od 200,00',
          },
          {
            title: 'Ball abutment',
            price: '250,00',
          },
          {
            title: 'Frezovaná práca angulovaný abutment',
            price: '250,00',
          },
          {
            title: 'Vhojovák',
            price: '50,00',
          },
          {
            title: 'Okamžitá implantácia + Compact Bone B',
            price: '550,00',
          },
          {
            title: 'Bone split',
            price: '300,00',
          },
          {
            title: 'Zavedenie implantátu',
            price: '480,00',
          },
          {
            title: 'Nadstavba na implantát - Abutment',
            price: '100,00',
          },
          {
            title: 'Korunka na implantát',
            price: '350,00',
          },
          {
            title: 'Náhrada 1 zuba - implantát abutment, korunka',
            price: '950,00',
          },
          {
            title: 'Miniimplantáty guličkové',
            price: '350,00',
          },
          {
            title: 'Výmena 1 guličky v protéze',
            price: '40,00',
          },
          {
            title: 'Totálna náhrada na guličkových implantátoch',
            price: '700,00',
          },
          {
            title: 'All on four',
            price: '6 100,00',
          },
          {
            title: 'All on six',
            price: '7 500,00',
          },
          {
            title: 'Protéza na titánovom základe',
            price: '3 200,00',
          },
          {
            title: 'Odtlačok implantátu',
            price: '30,00',
          },
          {
            title: 'Tunelová augmentácia',
            price: '300,00',
          },
          {
            title: 'Augmentácia kosti',
            price: 'od 200,00',
          },
          {
            title: 'Khoury technika augmentácie',
            price: '500,00',
          },
          {
            title: 'Sausage technika augmentácie',
            price: '700,00',
          },
          {
            title: 'PRF',
            price: '50,00',
          },
          {
            title: 'Socket preservation + extrakcia zuba',
            price: '200,00',
          },
          {
            title: 'Socket shield',
            price: '100,00',
          },
          {
            title: 'Krycia membrána',
            price: 'od 100,00',
          },
          {
            title: 'Multiunit abutment',
            price: '250,00',
          },
          {
            title: 'Implantoplastika',
            price: '100,00',
          },
          {
            title: 'Explantácia',
            price: '100,00',
          },
        ],
      },
    ],
  },
];
