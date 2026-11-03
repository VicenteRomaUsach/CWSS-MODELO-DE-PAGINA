(function () {
  "use strict";

  const PHOTO_ROOT = "imagenes-optimizadas/";
  const MAX_PROJECT_IMAGES = 10;
  if (document.body) document.body.classList.add("page-transition");
  const defaultProjects = [
  {
    "id": "nueva-apoquindo",
    "name": "Nueva Apoquindo",
    "contractor": "Echeverría Izquierdo",
    "year": "2014",
    "status": "",
    "products": [
      "Barandas de cristal",
      "Pasamanos de acero inoxidable",
      "Accesos Vidriados"
    ],
    "images": [
      "imagenes-drive/nueva-apoquindo/382a6bf7c7dc555987ec.webp",
      "imagenes-drive/nueva-apoquindo/2da2ac9a03a003991a76.webp",
      "imagenes-drive/nueva-apoquindo/f45948cc71639e93e22d.webp",
      "imagenes-drive/nueva-apoquindo/7fb5f014020d0eabd09e.webp",
      "imagenes-drive/nueva-apoquindo/987d4429afd48dbcdecc.webp"
    ]
  },
  {
    "id": "badajoz",
    "name": "Badajoz",
    "contractor": "Nahmias",
    "year": "2015",
    "status": "",
    "products": [
      "Puertas vidriadas con marcos de acero inoxidable"
    ],
    "images": [
      "imagenes-drive/badajoz/3d28119b04e2ab7fd709.webp",
      "imagenes-drive/badajoz/4c0cab77be06ed6b1e76.webp",
      "imagenes-drive/badajoz/a372e2e619327199dd49.webp",
      "imagenes-drive/badajoz/33ff45b1380b5f62d3dc.webp",
      "imagenes-drive/badajoz/25989c5bc2bee58d83ae.webp"
    ]
  },
  {
    "id": "edificio-to-be",
    "name": "Edificio To-Be",
    "contractor": "Armas",
    "year": "2015",
    "status": "",
    "products": [
      "Lucarna Vidriada"
    ],
    "images": [
      "imagenes-drive/edificio-to-be/200e07564767d453d12d.webp",
      "imagenes-drive/edificio-to-be/143ac1a80579ab871999.webp",
      "imagenes-drive/edificio-to-be/9f033af739fe52e0e4e7.webp",
      "imagenes-drive/edificio-to-be/80e57d71645032beac2f.webp"
    ]
  },
  {
    "id": "guernica",
    "name": "Guernica",
    "contractor": "Echeverría Izquierdo",
    "year": "2015",
    "status": "",
    "products": [
      "Puertas Protex",
      "Barandas de Cristal",
      "Lucarnas"
    ],
    "images": [
      "imagenes-drive/guernica/044b800963eb6c5cc3b6.webp",
      "imagenes-drive/guernica/0ab02d649d145523abe4.webp",
      "imagenes-drive/guernica/04b3ba22208286dbcc98.webp",
      "imagenes-drive/guernica/3268c8e1dd957a21a211.webp",
      "imagenes-drive/guernica/da40a37c5f913a51f0a5.webp"
    ]
  },
  {
    "id": "hotel-plaza-el-bosque",
    "name": "Hotel Plaza El Bosque",
    "contractor": "Echeverría Izquierdo",
    "year": "2016",
    "status": "",
    "products": [
      "Shower Door",
      "Barandas de Cristal",
      "Recubrimiento de Panel Compuesto de Aluminio (ACM)",
      "Espejos"
    ],
    "images": [
      "imagenes-drive/hotel-plaza-el-bosque/70c694671fa4352840d8.webp",
      "imagenes-drive/hotel-plaza-el-bosque/bd6893472085d7eeffc0.webp",
      "imagenes-drive/hotel-plaza-el-bosque/232eb4d5de36d979ac1e.webp",
      "imagenes-drive/hotel-plaza-el-bosque/7d6250901875996b1703.webp",
      "imagenes-drive/hotel-plaza-el-bosque/7516a53870bb52854f0a.webp"
    ]
  },
  {
    "id": "parque-de-los-reyes",
    "name": "Parque de los Reyes",
    "contractor": "Nahmias",
    "year": "2016",
    "status": "",
    "products": [
      "Barandas de Cristal Empotradas",
      "Badajoz "
    ],
    "images": [
      "imagenes-drive/parque-de-los-reyes/3eb84768368d00acc75c.webp",
      "imagenes-drive/parque-de-los-reyes/3fa8e1159c7d1fbeb174.webp",
      "imagenes-drive/parque-de-los-reyes/4ba4adf573db24d856b4.webp",
      "imagenes-drive/parque-de-los-reyes/3b16fb2b11c903ccdac0.webp",
      "imagenes-drive/parque-de-los-reyes/3dc1f16a9cdc53d839a8.webp"
    ]
  },
  {
    "id": "angamos",
    "name": "Angamos",
    "location": "Antofagasta",
    "contractor": "BMI",
    "year": "2018",
    "status": "",
    "products": [
      "Muro cortina"
    ],
    "images": [
      "imagenes-drive/angamos/62bb1f2a1d8637b3b9c2.webp",
      "imagenes-drive/angamos/9b9a8a90931f526e2b3d.webp",
      "imagenes-drive/angamos/dcc7ad37d7543cc78576.webp"
    ]
  },
  {
    "id": "comapa-punta-arenas",
    "name": "Comapa",
    "location": "Punta Arenas",
    "contractor": "Bravo Izquierdo",
    "year": "2018",
    "status": "",
    "products": [
      "Lucarnas",
      "Barandas de cristal",
      "Tabiques Vidriados"
    ],
    "images": [
      "imagenes-drive/comapa-punta-arenas/c3daf6c8ceda6cc2ed3a.webp",
      "imagenes-drive/comapa-punta-arenas/72955d310c4d28bd2e6d.webp",
      "imagenes-drive/comapa-punta-arenas/a90c0b26f84e9f9d23bd.webp",
      "imagenes-drive/comapa-punta-arenas/a4fbd50e767c07977394.webp"
    ]
  },
  {
    "id": "hotel-icon",
    "name": "Hotel Icon",
    "contractor": "Nahmias",
    "year": "2018",
    "status": "",
    "products": [
      "Shower Door",
      "Tabiques Vidriados"
    ],
    "images": [
      "imagenes-drive/hotel-icon/17d4b4f53119052613ad.webp",
      "imagenes-drive/hotel-icon/f45105b231de36d79cb4.webp",
      "imagenes-drive/hotel-icon/b61f99d1600b38903806.webp",
      "imagenes-drive/hotel-icon/fd90727ae238efb53dfc.webp",
      "imagenes-drive/hotel-icon/fc8994a8396e1a2c2be8.webp"
    ]
  },
  {
    "id": "malaga",
    "name": "Malaga",
    "contractor": "Mena y Ovalle",
    "year": "2018",
    "status": "",
    "products": [
      "Shower Door"
    ],
    "images": [
      "imagenes-drive/malaga/19f30b8e5fe489006ec0.webp",
      "imagenes-drive/malaga/37df594667907897601a.webp",
      "imagenes-drive/malaga/fbac97a2d87ed1cb5814.webp",
      "imagenes-drive/malaga/bb051baa5b90973f3b5d.webp",
      "imagenes-drive/malaga/2ac1c3bf25865cc4623a.webp"
    ]
  },
  {
    "id": "puerta-del-sol",
    "name": "Puerta del Sol",
    "contractor": "Mena y Ovalle",
    "year": "2018",
    "status": "",
    "products": [
      "Shower Door"
    ],
    "images": [
      "imagenes-optimizadas/2018 - PUERTA DEL SOL/PUERTA DEL SOL MENA Y OVALLE 2018--PUERTA-DEL-SOL--01.webp"
    ]
  },
  {
    "id": "torres-centenario-antofagasta",
    "name": "Torres Centenario",
    "location": "Antofagasta",
    "contractor": "Mar Abierto",
    "year": "2018",
    "status": "",
    "products": [
      "Muro cortina",
      "Panel compuesto de aluminio (ACM)"
    ],
    "images": [
      "imagenes-drive/torres-centenario-antofagasta/f85e303433746b6cb35f.webp",
      "imagenes-drive/torres-centenario-antofagasta/5e0cf658ac0e9609c19d.webp",
      "imagenes-drive/torres-centenario-antofagasta/938714efff221a97ee13.webp",
      "imagenes-drive/torres-centenario-antofagasta/4e559b73fb5d150466bd.webp",
      "imagenes-drive/torres-centenario-antofagasta/f53ea27483fde8dc69ea.webp"
    ]
  },
  {
    "id": "nueva-manquehue",
    "name": "Nueva Manquehue",
    "contractor": "Echeverría Izquierdo",
    "year": "2019",
    "status": "",
    "products": [
      "Chambranas de ascensor de Acero Inoxidable"
    ],
    "images": [
      "imagenes-drive/nueva-manquehue/34e061bb59a5f53ebb5d.webp",
      "imagenes-drive/nueva-manquehue/0b6415d2dae3bd22bd65.webp",
      "imagenes-drive/nueva-manquehue/64dd74ec629900c5afc3.webp",
      "imagenes-drive/nueva-manquehue/615be862cc4d0d1a1446.webp",
      "imagenes-drive/nueva-manquehue/2824a17f6deeba3623cc.webp"
    ]
  },
  {
    "id": "club-de-campo-vitacura",
    "name": "Club de Campo Vitacura",
    "subtitle": "Edificios Boldo, Peumo y Quillay",
    "contractor": "Nahmias",
    "year": "2020",
    "status": "",
    "products": [
      "Barandas de cristal empotradas y con botones",
      "Separadores de cristal",
      "Shower Door",
      "Maparas Interiores",
      "Espejos"
    ],
    "images": [
      "imagenes-drive/club-de-campo-vitacura/b31a5b5395f6f68afa9a.webp",
      "imagenes-drive/club-de-campo-vitacura/9652a5e4072749a9111a.webp",
      "imagenes-drive/club-de-campo-vitacura/827c6ae8a7fff21c07f1.webp",
      "imagenes-drive/club-de-campo-vitacura/326a38bf1c1c45c78a1a.webp",
      "imagenes-drive/club-de-campo-vitacura/6326e145fe4142ab6d22.webp"
    ]
  },
  {
    "id": "onofre-jarpa",
    "name": "Condominio Onofre Jarpa",
    "contractor": "Sur G",
    "year": "2021",
    "status": "",
    "products": [
      "Barandas de cristal",
      "Shower Door"
    ],
    "images": [
      "imagenes-drive/onofre-jarpa/cec6a91684232a2b42de.webp",
      "imagenes-drive/onofre-jarpa/59537a1fe0b27188cd7d.webp",
      "imagenes-drive/onofre-jarpa/6e426609ed7929a15f76.webp"
    ]
  },
  {
    "id": "puerto-nuevo-antofagasta",
    "name": "Puerto Nuevo",
    "location": "Antofagasta",
    "contractor": "Echeverría Izquierdo",
    "year": "2021",
    "status": "",
    "products": [
      "Barandas de cristal",
      "Pasamanos de acero inoxidable 316"
    ],
    "images": [
      "imagenes-drive/puerto-nuevo-antofagasta/58ac04f91619cac0059c.webp",
      "imagenes-drive/puerto-nuevo-antofagasta/099a002a7267ab28d402.webp",
      "imagenes-drive/puerto-nuevo-antofagasta/9b1339e4e8fab680d306.webp",
      "imagenes-drive/puerto-nuevo-antofagasta/1d15b75b0afd82e1b391.webp",
      "imagenes-drive/puerto-nuevo-antofagasta/8ce21fc3fe06e83dd900.webp"
    ]
  },
  {
    "id": "casa-italia",
    "name": "Casa Italia",
    "contractor": "Tecton",
    "year": "2022",
    "status": "",
    "products": [
      "Shower Door",
      "Espejos"
    ],
    "images": [
      "imagenes-drive/casa-italia/aec403daceb564ef11a5.webp",
      "imagenes-drive/casa-italia/ab74465fd97a38cfb638.webp",
      "imagenes-drive/casa-italia/7f815feacb1913cf4eab.webp"
    ]
  },
  {
    "id": "edificio-el-roble",
    "name": "Edificio El Roble",
    "contractor": "Nahmias",
    "year": "2022",
    "status": "",
    "products": [
      "Canopy de acceso",
      "Mamparas de oficina"
    ],
    "images": [
      "imagenes-drive/edificio-el-roble/70b2bfa4df1eeb688de3.webp",
      "imagenes-drive/edificio-el-roble/e6700eb79def5eb92694.webp",
      "imagenes-drive/edificio-el-roble/2fd0c5f93f1030ebdced.webp",
      "imagenes-drive/edificio-el-roble/d963feaf426234d9d777.webp",
      "imagenes-drive/edificio-el-roble/72f33a179fba2f9f114b.webp"
    ]
  },
  {
    "id": "la-capitania",
    "name": "La Capitania",
    "contractor": "Nahmias",
    "year": "2022",
    "status": "",
    "products": [
      "Tabiques Vidriados",
      "Shower Door"
    ],
    "images": [
      "imagenes-drive/la-capitania/292b1cdd9106f6ee8d61.webp",
      "imagenes-drive/la-capitania/f6ed74749da8325f66ad.webp",
      "imagenes-drive/la-capitania/e3ef9b3a0f052bbfccb6.webp",
      "imagenes-drive/la-capitania/160b808d7281c13156cc.webp",
      "imagenes-drive/la-capitania/358f2566834221bab006.webp"
    ]
  },
  {
    "id": "pedro-navia",
    "name": "Pedro Navia",
    "contractor": "Tecton",
    "year": "2022",
    "status": "",
    "products": [
      "Barandas de cristal con herrajes",
      "Lucarnas"
    ],
    "images": [
      "imagenes-drive/pedro-navia/c75e3eb43b18ff9079e0.webp",
      "imagenes-drive/pedro-navia/674a850058115fab0760.webp",
      "imagenes-drive/pedro-navia/da475090aa68be5ab56d.webp"
    ]
  },
  {
    "id": "bustamante",
    "name": "Bustamante",
    "contractor": "Nahmias",
    "year": "2024",
    "status": "",
    "products": [
      "Barandas de cristal con balaustros",
      "Shower Door",
      "Espejos"
    ],
    "images": [
      "imagenes-drive/bustamante/1e472b0146c13d0f991d.webp",
      "imagenes-drive/bustamante/05e463420bc9377be957.webp",
      "imagenes-drive/bustamante/3e2d2e7b2169a5d75b16.webp",
      "imagenes-drive/bustamante/7223cf3d81431c416361.webp",
      "imagenes-drive/bustamante/20e1869552219ab27b62.webp"
    ]
  },
  {
    "id": "data-center-chile-3",
    "name": "Data Center Chile 3",
    "contractor": "Puerto Octay",
    "year": "2024",
    "status": "",
    "products": [
      "Barandas de cristal",
      "Tabiques vidriados"
    ],
    "images": [
      "imagenes-drive/data-center-chile-3/d2e0529a99e9f5f378d8.webp",
      "imagenes-drive/data-center-chile-3/0ebc572c527ebd36b20b.webp",
      "imagenes-drive/data-center-chile-3/8a29aa3537387da2db88.webp",
      "imagenes-drive/data-center-chile-3/15261e9da8ca04f7e32e.webp",
      "imagenes-drive/data-center-chile-3/7739fcb2cd3fcd9468fe.webp"
    ]
  },
  {
    "id": "jofre",
    "name": "Jofre",
    "contractor": "Nahmias",
    "year": "2024",
    "status": "",
    "products": [
      "Shower Door",
      "Espejos"
    ],
    "images": [
      "imagenes-drive/jofre/a99454d6f3aa8a46c90e.webp",
      "imagenes-drive/jofre/1d226ecf8619655328f2.webp"
    ]
  },
  {
    "id": "jose-domingo-canas",
    "name": "Jose Domingo Cañas Torre I y II",
    "contractor": "Nahmias",
    "year": "2024",
    "status": "",
    "products": [
      "Barandas de cristal empotradas",
      "Shower Door"
    ],
    "images": [
      "imagenes-drive/jose-domingo-canas/c157b1f9411c97c02a89.webp",
      "imagenes-drive/jose-domingo-canas/8d396415a35cb0aaec9b.webp",
      "imagenes-drive/jose-domingo-canas/eee465afdc3bb3f766d8.webp"
    ]
  },
  {
    "id": "lote-19",
    "name": "Lote 19",
    "contractor": "Ignacio Hurtado",
    "year": "2024",
    "status": "",
    "products": [
      "Shower Door",
      "Espejos"
    ],
    "images": [
      "imagenes-optimizadas/2024 - LOTE 19/LOTE 19 IGNACIO HURTADO 2024--LOTE-19--01.webp",
      "imagenes-optimizadas/2024 - LOTE 19/LOTE 19 IGNACIO HURTADO 2024--LOTE-19--02.webp",
      "imagenes-optimizadas/2024 - LOTE 19/LOTE 19 IGNACIO HURTADO 2024--LOTE-19--03.webp"
    ]
  },
  {
    "id": "principe-de-gales",
    "name": "Principe de Gales",
    "contractor": "Echeverría Izquierdo",
    "year": "2024",
    "status": "",
    "products": [
      "Mamparas de acceso",
      "Shower Door"
    ],
    "images": [
      "imagenes-drive/principe-de-gales/7f33dbd39b69caf18080.webp",
      "imagenes-drive/principe-de-gales/e5c055f633b805b05829.webp",
      "imagenes-drive/principe-de-gales/7bc09a72908312031e83.webp",
      "imagenes-drive/principe-de-gales/33e9b34b568239ed2528.webp"
    ]
  },
  {
    "id": "angamos-nahmias",
    "name": "Angamos",
    "contractor": "Nahmias",
    "year": "2025",
    "status": "",
    "products": [
      "Shower Door",
      "Espejos"
    ],
    "images": [
      "imagenes-drive/angamos-nahmias/6e8667e10f1c2fe92303.webp",
      "imagenes-drive/angamos-nahmias/2e8380b6ea46742d45ab.webp",
      "imagenes-drive/angamos-nahmias/d309bd49e3a289c1b1c5.webp",
      "imagenes-drive/angamos-nahmias/4f07665489625ed7d3fa.webp"
    ]
  },
  {
    "id": "burgos",
    "name": "Burgos",
    "contractor": "Tecton",
    "year": "2025",
    "status": "",
    "products": [
      "Espejos"
    ],
    "images": [
      "imagenes-drive/burgos/9a596d363e7a734e7a05.webp",
      "imagenes-drive/burgos/1521cfdbf5f7478d9018.webp",
      "imagenes-drive/burgos/b535cbd7fd1acc18da0e.webp",
      "imagenes-drive/burgos/c2d662f9e7d4d373cb1f.webp"
    ]
  },
  {
    "id": "data-center-scala-santa-teresa",
    "name": "Data Center Scala Santa Teresa",
    "contractor": "Puerto Octay",
    "year": "2025",
    "status": "",
    "products": [
      "Recubrimiento de fachada con panel compuesto"
    ],
    "images": [
      "imagenes-drive/data-center-scala-santa-teresa/89cdbff818a7492ee1ce.webp",
      "imagenes-drive/data-center-scala-santa-teresa/81126cd7a3eb0c5e9b3d.webp",
      "imagenes-drive/data-center-scala-santa-teresa/4b925e25649e4ffea8f6.webp",
      "imagenes-drive/data-center-scala-santa-teresa/49442526083df4a7228f.webp",
      "imagenes-drive/data-center-scala-santa-teresa/2ed30c9a98ab8c5246ee.webp"
    ]
  },
  {
    "id": "tavelli",
    "name": "Tavelli",
    "contractor": "Nahmias",
    "year": "2025",
    "status": "",
    "products": [
      "Shower Door"
    ],
    "images": [
      "imagenes-drive/tavelli/cd5587d59a98ab3fc84d.webp",
      "imagenes-drive/tavelli/665b77bc8e62a5316958.webp",
      "imagenes-drive/tavelli/9e84d52f152727e2f68d.webp",
      "imagenes-drive/tavelli/db5227962fb4061307f0.webp",
      "imagenes-drive/tavelli/57429426fb2456b10783.webp"
    ]
  },
  {
    "id": "apoquindo-los-militares",
    "name": "Apoquindo Los Militares",
    "contractor": "Echeverría Izquierdo",
    "year": "2026",
    "status": "En instalación",
    "products": [
      "Barandas con botones",
      "Separadores de cristal",
      "Separadores de cristal"
    ],
    "images": [
      "imagenes-drive/apoquindo-los-militares/63d2d187dc25a76ce503.webp",
      "imagenes-drive/apoquindo-los-militares/9125b10876e4b56032e1.webp",
      "imagenes-drive/apoquindo-los-militares/50ed0257adcbe6b218af.webp",
      "imagenes-drive/apoquindo-los-militares/5861fd4c195426fb1fd3.webp",
      "imagenes-drive/apoquindo-los-militares/e57deb4c711f9671b341.webp"
    ]
  },
  {
    "id": "el-sauce",
    "name": "El Sauce 3",
    "contractor": "Pocuro",
    "year": "2026",
    "status": "En instalación",
    "products": [
      "Barandas de cristal con mini balaustros"
    ],
    "images": [
      "imagenes-drive/el-sauce/13e6806aa0cf9560b7e9.webp",
      "imagenes-drive/el-sauce/b0f66c85d77a92792171.webp",
      "imagenes-drive/el-sauce/25fa0ad482dbd9f1e7f8.webp",
      "imagenes-drive/el-sauce/73188f71cfed9f60e72b.webp",
      "imagenes-drive/el-sauce/99ffce5d2ec3d8924722.webp"
    ]
  },
  {
    "id": "paso-el-roble",
    "name": "Paso el Roble",
    "contractor": "Pocuro",
    "year": "2026",
    "status": "En instalación",
    "products": [
      "Barandas con balustros",
      "Separadores de Cristal"
    ],
    "images": [
      "imagenes-drive/paso-el-roble/97a5757d68a6df99a25c.webp",
      "imagenes-drive/paso-el-roble/7420b1a633ee2f4940a9.webp",
      "imagenes-drive/paso-el-roble/197aa7b66ced9f51d51a.webp",
      "imagenes-drive/paso-el-roble/16e66474bd7c6ad66df1.webp",
      "imagenes-drive/paso-el-roble/bab1982918186bfd8a73.webp"
    ]
  },
  {
    "id": "comisaria",
    "name": "PRIMERA COMISARIA DE PUNTA ARENAS",
    "contractor": "Bravo Izquierdo",
    "year": "2026",
    "status": "",
    "products": [
      "Baranda de cristral con botones"
    ],
    "images": [
      "imagenes-optimizadas/2026 - PRIMERA COMISARIA DE PUNTA ARENAS/COMISARIA 1.png",
      "imagenes-optimizadas/2026 - PRIMERA COMISARIA DE PUNTA ARENAS/comisaria 2.png",
      "imagenes-optimizadas/2026 - PRIMERA COMISARIA DE PUNTA ARENAS/comisaria 3.jpeg",
      "imagenes-optimizadas/2026 - PRIMERA COMISARIA DE PUNTA ARENAS/comisaria 4.jpeg"
    ]
  },
  {
    "id": "indumotora",
    "name": "Indumotora",
    "contractor": "Echeverría Izquierdo",
    "year": "2015",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/indumotora/73678ff29c8d52e9e931.webp",
      "imagenes-drive/indumotora/34996222898eaf8c52c0.webp",
      "imagenes-drive/indumotora/0d8fc82519d9f1ae62fb.webp",
      "imagenes-drive/indumotora/3fd062ff8bab551811ac.webp"
    ]
  },
  {
    "id": "norambuena",
    "name": "Norambuena",
    "contractor": "Consorcio Bimo",
    "year": "2018",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/norambuena/f24f0d668bcac47fa582.webp",
      "imagenes-drive/norambuena/d75f2a0fc66a41d892ff.webp",
      "imagenes-drive/norambuena/c900adde5f2dd2437113.webp",
      "imagenes-drive/norambuena/03c970ec819a52bae84b.webp",
      "imagenes-drive/norambuena/9982908480058e0c3644.webp"
    ]
  },
  {
    "id": "manquehue-ffv",
    "name": "Manquehue FFV",
    "contractor": "FFV",
    "year": "2017",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/manquehue-ffv/2078621d3ced65d09264.webp",
      "imagenes-drive/manquehue-ffv/0a9d28e7b995814bd0f1.webp",
      "imagenes-drive/manquehue-ffv/27c1f2fc1d7a53a5efb7.webp",
      "imagenes-drive/manquehue-ffv/63558ad27c52d3122df2.webp",
      "imagenes-drive/manquehue-ffv/d23e482a48a21dfcb2e6.webp"
    ]
  },
  {
    "id": "alto-parque",
    "name": "Alto Parque",
    "contractor": "Nahmias",
    "year": "2019",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/alto-parque/bd54d162622afefb98a6.webp",
      "imagenes-drive/alto-parque/72fe2f1c3d1822e12b1e.webp",
      "imagenes-drive/alto-parque/15690fe66bba67ae476c.webp",
      "imagenes-drive/alto-parque/846f97ca63f8426c5653.webp",
      "imagenes-drive/alto-parque/6e0308e0ca99ea6dec7f.webp"
    ]
  },
  {
    "id": "nativo-riesco",
    "name": "Nativo Riesco",
    "contractor": "Ignacio Hurtado",
    "year": "2022",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/nativo-riesco/35b8b8f7208dc80dca6d.webp",
      "imagenes-drive/nativo-riesco/41f0dbb416a6f7322d86.webp",
      "imagenes-drive/nativo-riesco/daf5471e1fa61f3bc4a4.webp",
      "imagenes-drive/nativo-riesco/a89b2c5880b47d0a0810.webp",
      "imagenes-drive/nativo-riesco/2fce07696d613fbb3976.webp"
    ]
  },
  {
    "id": "parque-los-alerces",
    "name": "Parque Los Alerces",
    "contractor": "Ignacio Hurtado",
    "year": "2018",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/parque-los-alerces/39299e037da44ac67cca.webp",
      "imagenes-drive/parque-los-alerces/35f033423a3f4e22dd3f.webp",
      "imagenes-drive/parque-los-alerces/c42505c47b644379e04a.webp",
      "imagenes-drive/parque-los-alerces/78d5cb56dbc182fc03eb.webp",
      "imagenes-drive/parque-los-alerces/6bc54f6db8e98f399ba0.webp"
    ]
  },
  {
    "id": "la-camara",
    "name": "La Cámara",
    "contractor": "Nahmias",
    "year": "2019",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/la-camara/f0412ffe8b49931e4659.webp",
      "imagenes-drive/la-camara/3edc0d0fbd9611fc909b.webp",
      "imagenes-drive/la-camara/5bbd4d65dcfb733e4030.webp",
      "imagenes-drive/la-camara/edbe397d3b59931d251c.webp",
      "imagenes-drive/la-camara/d93bd75610e28f89e7e9.webp"
    ]
  },
  {
    "id": "ilanes",
    "name": "Ilanes",
    "contractor": "Nahmias",
    "year": "2018",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/ilanes/96aa98ea3fb519f426da.webp",
      "imagenes-drive/ilanes/5e33f3dbbfc7397d417a.webp",
      "imagenes-drive/ilanes/1a63a3c092e3e27544ba.webp",
      "imagenes-drive/ilanes/b748d52eb25a79c45108.webp",
      "imagenes-drive/ilanes/81623eda4399fd104261.webp"
    ]
  },
  {
    "id": "don-pedro",
    "name": "Don Pedro",
    "contractor": "Ignacio Hurtado",
    "year": "2018",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/don-pedro/c53c1cac25b894c25898.webp",
      "imagenes-drive/don-pedro/f45249baa78db7615452.webp",
      "imagenes-drive/don-pedro/0a07f709e6f990d3c120.webp",
      "imagenes-drive/don-pedro/68b78e970dc8dfd91b2d.webp",
      "imagenes-drive/don-pedro/0de98be2a975d93e8541.webp"
    ]
  },
  {
    "id": "centenario",
    "name": "Centenario",
    "contractor": "Consorcio Bimo",
    "year": "2020",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/centenario/51d1912577dfdaca8abc.webp",
      "imagenes-drive/centenario/501420a253ba2b3969f8.webp",
      "imagenes-drive/centenario/fd85fbd0059aa5346f07.webp",
      "imagenes-drive/centenario/049b36913fa5f3961bac.webp",
      "imagenes-drive/centenario/f1b143f735c1a6cad6d9.webp"
    ]
  },
  {
    "id": "casas-la-rabida",
    "name": "Casas La Rábida",
    "contractor": "Sur G",
    "year": "2019",
    "status": "",
    "products": [],
    "images": [
      "imagenes-drive/casas-la-rabida/a286adfb7a602ab3f757.webp",
      "imagenes-drive/casas-la-rabida/62bd9adaaac21291ed80.webp",
      "imagenes-drive/casas-la-rabida/9c68a97d7d2a5ff9c9ba.webp",
      "imagenes-drive/casas-la-rabida/b503b1442eac8bc37f55.webp",
      "imagenes-drive/casas-la-rabida/666f3dcd239ad61221ca.webp"
    ]
  }
];

  defaultProjects.forEach(function (project) {
    const imageSets = project.imageSets || (project.imageFolder && project.imageBase
      ? [{ folder: project.imageFolder, base: project.imageBase, count: project.imageCount }]
      : []);
    const imageSources = Array.isArray(project.images)
      ? project.images
      : Array.isArray(project.imageFiles) && project.imageFolder
        ? project.imageFiles.map(function (file) { return PHOTO_ROOT + project.imageFolder + "/" + file; })
        : imageSets.flatMap(function (set) {
      return Array.from({ length: Number(set.count) || 0 }, function (_, index) {
        const number = String(index + 1).padStart(2, "0");
        return PHOTO_ROOT + set.folder + "/" + set.base + "--" + number + ".webp";
      });
    });
    const images = Array.from(new Set(imageSources.filter(Boolean))).slice(0, MAX_PROJECT_IMAGES);
    project.cover = images[0];
    project.gallery = images.slice(1);
    project.products = Array.isArray(project.products) ? project.products : [];
    delete project.imageFolder;
    delete project.imageBase;
    delete project.imageCount;
    delete project.imageSets;
    delete project.imageFiles;
    delete project.images;
  });

  const defaultProducts = [
    { id: "tabiques-vidriados", name: "Tabiques vidriados", anchor: "vidriadas", images: ["imagenes-productos/TABIQUES VIDRIADOS/TABIQUES-VIDRIADOS--01.webp", "imagenes-productos/TABIQUES VIDRIADOS/TABIQUES-VIDRIADOS--02.webp", "imagenes-productos/TABIQUES VIDRIADOS/TABIQUES-VIDRIADOS--03.webp", "imagenes-productos/TABIQUES VIDRIADOS/TABIQUES-VIDRIADOS--04.webp"] },
    { id: "barandas-cristal", name: "Barandas de cristal", anchor: "barandas", images: ["imagenes-productos/BARANDAS DE CRISTAL/BARANDAS-CRISTAL--01.webp", "imagenes-productos/BARANDAS DE CRISTAL/BARANDAS-CRISTAL--02.webp", "imagenes-productos/BARANDAS DE CRISTAL/BARANDAS-CRISTAL--03.webp", "imagenes-productos/BARANDAS DE CRISTAL/BARANDAS-CRISTAL--04.webp"] },
    { id: "shower-door", name: "Shower Door", images: ["imagenes-productos/SHOWER DOOR/SHOWER-DOOR--01.webp", "imagenes-productos/SHOWER DOOR/SHOWER-DOOR--02.webp", "imagenes-productos/SHOWER DOOR/SHOWER-DOOR--03.webp", "imagenes-productos/SHOWER DOOR/SHOWER-DOOR--04.webp"] },
    { id: "espejos-retroiluminados", name: "Espejos D-FROSTER Retroiluminados", images: ["imagenes-productos/ESPEJOS RETROILUMINADOS/ESPEJOS-RETROILUMINADOS--03.webp", "imagenes-productos/ESPEJOS RETROILUMINADOS/ESPEJOS-RETROILUMINADOS--04.webp"] },
    { id: "pasamanos-acero", name: "Pasamanos acero inoxidable", images: ["imagenes-productos/PASAMANOS ACERO INOXIDABLE/PASAMANOS-ACERO-INOXIDABLE--01.webp", "imagenes-productos/PASAMANOS ACERO INOXIDABLE/PASAMANOS-ACERO-INOXIDABLE--02.webp", "imagenes-productos/PASAMANOS ACERO INOXIDABLE/PASAMANOS-ACERO-INOXIDABLE--03.webp", "imagenes-productos/PASAMANOS ACERO INOXIDABLE/PASAMANOS-ACERO-INOXIDABLE--04.webp"] },
    { id: "revestimientos-muros-chambranas", name: "Revestimientos de muros y chambranas de ascensor inoxidable", anchor: "revestimientos", images: ["imagenes-productos/REVESTIMIENTOS DE MUROS Y CHAMBRANAS DE ASCENSOR INOXIDABLE/REVESTIMIENTOS-MUROS-CHAMBRANAS--01.webp", "imagenes-productos/REVESTIMIENTOS DE MUROS Y CHAMBRANAS DE ASCENSOR INOXIDABLE/REVESTIMIENTOS-MUROS-CHAMBRANAS--02.webp", "imagenes-productos/REVESTIMIENTOS DE MUROS Y CHAMBRANAS DE ASCENSOR INOXIDABLE/REVESTIMIENTOS-MUROS-CHAMBRANAS--03.webp", "imagenes-productos/REVESTIMIENTOS DE MUROS Y CHAMBRANAS DE ASCENSOR INOXIDABLE/REVESTIMIENTOS-MUROS-CHAMBRANAS--04.webp"] },
    { id: "fachadas-panel-aluminio", name: "Revestimientos de fachadas en panel de aluminio compuesto.", images: ["imagenes-productos/REVESTIMIENTOS DE FACHADAS EN PANEL DE ALUMINIO COMPUESTO/FACHADAS-PANEL-ALUMINIO--01.webp", "imagenes-productos/REVESTIMIENTOS DE FACHADAS EN PANEL DE ALUMINIO COMPUESTO/FACHADAS-PANEL-ALUMINIO--02.webp", "imagenes-productos/REVESTIMIENTOS DE FACHADAS EN PANEL DE ALUMINIO COMPUESTO/FACHADAS-PANEL-ALUMINIO--03.webp", "imagenes-productos/REVESTIMIENTOS DE FACHADAS EN PANEL DE ALUMINIO COMPUESTO/FACHADAS-PANEL-ALUMINIO--04.webp"] },
    { id: "canopy-cubiertas-cristal", name: "Canopy y cubiertas de cristal", images: ["imagenes-productos/CANOPY Y CUBIERTAS DE CRISTAL/CANOPY-CUBIERTAS-CRISTAL--01.webp", "imagenes-productos/CANOPY Y CUBIERTAS DE CRISTAL/CANOPY-CUBIERTAS-CRISTAL--02.webp", "imagenes-productos/CANOPY Y CUBIERTAS DE CRISTAL/CANOPY-CUBIERTAS-CRISTAL--03.webp", "imagenes-productos/CANOPY Y CUBIERTAS DE CRISTAL/CANOPY-CUBIERTAS-CRISTAL--04.webp"] }
  ];

  function cloneDefaults() {
    return JSON.parse(JSON.stringify(defaultProjects));
  }

  function getProjects() {
    return cloneDefaults();
  }

  function cloneProductDefaults() {
    return JSON.parse(JSON.stringify(defaultProducts));
  }

  function getProducts() {
    return cloneProductDefaults();
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function projectUrl(id) {
    return "proyecto.html?id=" + encodeURIComponent(id);
  }

  function productSlides(product) {
    const images = Array.isArray(product.images) ? product.images.filter(Boolean).slice(0, 4) : [];
    return images.map(function (source, index) {
      const number = index + 1;
      if (!source) {
        return `<figure class="product-carousel__slide product-card__placeholder" data-carousel-slide role="img" aria-label="Imagen ${number} pendiente de ${escapeHtml(product.name)}"><span>Imagen ${number}</span></figure>`;
      }
      return `<figure class="product-carousel__slide" data-carousel-slide aria-hidden="${index === 0 ? "false" : "true"}">
        <img src="${escapeHtml(source)}" alt="${escapeHtml(product.name)} - imagen ${number}" loading="lazy" decoding="async" draggable="false">
      </figure>`;
    }).join("");
  }

  function productCard(product, index) {
    const articleId = product.anchor || product.id;
    const buttonId = "producto-boton-" + product.id;
    const panelId = "producto-panel-" + product.id;
    const imageCount = Math.max(1, Array.isArray(product.images) ? product.images.slice(0, 4).length : 0);
    return `<article class="product-card" id="${escapeHtml(articleId)}" data-product-card data-product-index="${index}">
      <h2 class="product-card__heading">
        <button class="product-card__toggle" id="${escapeHtml(buttonId)}" type="button" aria-expanded="false" aria-controls="${escapeHtml(panelId)}" data-product-toggle>
          <span>${escapeHtml(product.name)}</span><span class="product-card__indicator" aria-hidden="true"></span>
        </button>
      </h2>
      <div class="product-card__panel" id="${escapeHtml(panelId)}" role="region" aria-labelledby="${escapeHtml(buttonId)}" data-product-panel hidden>
        <div class="product-carousel" data-product-carousel>
          <div class="product-carousel__viewport" data-carousel-viewport>
            <div class="product-carousel__track" data-carousel-track>${productSlides(product)}</div>
          </div>
          <button class="product-carousel__expand" type="button" data-product-expand aria-label="Ampliar galería de ${escapeHtml(product.name)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M21 16v5h-5M8 21H3v-5"/></svg></button>
          <div class="product-carousel__controls">
            <button type="button" data-carousel-previous aria-label="Imagen anterior de ${escapeHtml(product.name)}">←</button>
            <p aria-live="polite"><span data-carousel-current>1</span> / ${imageCount}</p>
            <button type="button" data-carousel-next aria-label="Imagen siguiente de ${escapeHtml(product.name)}">→</button>
          </div>
        </div>
      </div>
    </article>`;
  }

  function renderProducts(products) {
    const container = document.querySelector("[data-products]");
    if (!container) return;
    container.innerHTML = products.map(productCard).join("");
    if (!products.length) container.innerHTML = '<div class="empty-state">No hay productos publicados por el momento.</div>';
  }

  function createProductSlider(root, options) {
    const settings = options || {};
    const viewport = root.querySelector("[data-carousel-viewport]");
    const track = root.querySelector("[data-carousel-track]");
    const slides = Array.from(root.querySelectorAll("[data-carousel-slide]"));
    const currentLabel = root.querySelector("[data-carousel-current]");
    const previous = root.querySelector("[data-carousel-previous]");
    const next = root.querySelector("[data-carousel-next]");
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = Math.min(Number(settings.initialIndex) || 0, Math.max(slides.length - 1, 0));
    let timer = null;
    let dragging = false;
    let pointerId = null;
    let startX = 0;
    let deltaX = 0;

    function setTransform(extraPixels) {
      track.style.transform = `translate3d(calc(${-current * 100}% + ${extraPixels || 0}px), 0, 0)`;
    }

    function show(index, animate) {
      if (!slides.length) return;
      const useAnimation = animate !== false && !reducedMotion;
      current = (index + slides.length) % slides.length;
      track.classList.toggle("is-jumping", !useAnimation);
      setTransform(0);
      slides.forEach(function (slide, slideIndex) {
        slide.setAttribute("aria-hidden", String(slideIndex !== current));
      });
      if (currentLabel) currentLabel.textContent = String(current + 1);
      if (!useAnimation) window.requestAnimationFrame(function () { track.classList.remove("is-jumping"); });
    }

    function stop() {
      if (timer !== null) window.clearInterval(timer);
      timer = null;
    }

    function start() {
      stop();
      if (reducedMotion || slides.length <= 1 || document.hidden) return;
      if (settings.shouldAutoplay && !settings.shouldAutoplay()) return;
      timer = window.setInterval(function () { show(current + 1); }, settings.interval || 4600);
    }

    function select(index) {
      show(index);
      start();
    }

    function finishDrag(event) {
      if (!dragging || (event && event.pointerId !== pointerId)) return;
      const threshold = Math.min(90, Math.max(42, viewport.clientWidth * 0.12));
      dragging = false;
      track.classList.remove("is-dragging");
      if (viewport.hasPointerCapture && viewport.hasPointerCapture(pointerId)) viewport.releasePointerCapture(pointerId);
      if (deltaX <= -threshold) show(current + 1);
      else if (deltaX >= threshold) show(current - 1);
      else show(current);
      pointerId = null;
      deltaX = 0;
      start();
    }

    function onPointerDown(event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      stop();
      dragging = true;
      pointerId = event.pointerId;
      startX = event.clientX;
      deltaX = 0;
      track.classList.add("is-dragging");
      viewport.setPointerCapture(pointerId);
    }

    function onPointerMove(event) {
      if (!dragging || event.pointerId !== pointerId) return;
      deltaX = event.clientX - startX;
      setTransform(deltaX);
    }

    function onVisibilityChange() {
      if (document.hidden) stop(); else start();
    }

    if (previous) previous.addEventListener("click", function () { select(current - 1); });
    if (next) next.addEventListener("click", function () { select(current + 1); });
    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", finishDrag);
    viewport.addEventListener("pointercancel", finishDrag);
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", function (event) {
      if (!root.contains(event.relatedTarget)) start();
    });
    document.addEventListener("visibilitychange", onVisibilityChange);
    show(current, false);

    return {
      destroy: function () {
        stop();
        viewport.removeEventListener("pointerdown", onPointerDown);
        viewport.removeEventListener("pointermove", onPointerMove);
        viewport.removeEventListener("pointerup", finishDrag);
        viewport.removeEventListener("pointercancel", finishDrag);
        document.removeEventListener("visibilitychange", onVisibilityChange);
      },
      getIndex: function () { return current; },
      show: show,
      start: start,
      stop: stop
    };
  }

  function setupProductAccordions(products) {
    const cards = Array.from(document.querySelectorAll("[data-product-card]"));
    if (!cards.length) return;
    const controllers = new Map();
    let activeProduct = null;
    let fullscreenController = null;
    let fullscreenSource = null;
    const dialog = document.createElement("dialog");
    dialog.className = "product-lightbox";
    dialog.setAttribute("aria-label", "Galería ampliada de producto");
    dialog.innerHTML = `<button class="product-lightbox__close" type="button" data-product-lightbox-close aria-label="Cerrar galería ampliada">×</button>
      <p class="product-lightbox__title" data-product-lightbox-title></p>
      <div class="product-lightbox__stage" data-product-lightbox-stage></div>`;
    document.body.appendChild(dialog);

    function openFullscreen(card, product, controller) {
      if (fullscreenController && fullscreenSource) fullscreenSource.show(fullscreenController.getIndex(), false);
      if (fullscreenController) fullscreenController.destroy();
      controller.stop();
      activeProduct = product;
      fullscreenSource = controller;
      dialog.querySelector("[data-product-lightbox-title]").textContent = product.name;
      dialog.querySelector("[data-product-lightbox-stage]").innerHTML = `<div class="product-carousel product-carousel--fullscreen" data-product-fullscreen-carousel>
        <div class="product-carousel__viewport" data-carousel-viewport>
          <div class="product-carousel__track" data-carousel-track>${productSlides(product)}</div>
        </div>
        <div class="product-carousel__controls">
          <button type="button" data-carousel-previous aria-label="Imagen anterior de ${escapeHtml(product.name)}">←</button>
          <p aria-live="polite"><span data-carousel-current>1</span> / ${product.images.length}</p>
          <button type="button" data-carousel-next aria-label="Imagen siguiente de ${escapeHtml(product.name)}">→</button>
        </div>
      </div>`;
      const fullscreenRoot = dialog.querySelector("[data-product-fullscreen-carousel]");
      fullscreenController = createProductSlider(fullscreenRoot, {
        initialIndex: controller.getIndex(),
        interval: 4600,
        shouldAutoplay: function () { return false; }
      });
      if (!dialog.open) dialog.showModal();
    }

    function cleanupFullscreen() {
      if (fullscreenController && fullscreenSource) fullscreenSource.show(fullscreenController.getIndex(), false);
      if (fullscreenController) fullscreenController.destroy();
      if (fullscreenSource) fullscreenSource.start();
      fullscreenController = null;
      fullscreenSource = null;
      activeProduct = null;
      dialog.querySelector("[data-product-lightbox-stage]").replaceChildren();
    }

    dialog.querySelector("[data-product-lightbox-close]").addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("close", cleanupFullscreen);
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    document.addEventListener("keydown", function (event) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
          event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const selected = cards.find(function (card) { return card.classList.contains("is-open"); });
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        const direction = event.key === "ArrowDown" ? 1 : -1;
        const index = selected ? cards.indexOf(selected) : (direction === 1 ? -1 : 0);
        const card = cards[(index + direction + cards.length) % cards.length];
        openCard(card);
        if (dialog.open) {
          openFullscreen(card, products[Number(card.dataset.productIndex)], controllers.get(card));
        } else {
          card.querySelector("[data-product-toggle]").focus({ preventScroll: true });
          card.scrollIntoView({ block: "start", behavior: "auto" });
        }
        return;
      }
      const card = selected || cards[0];
      if (!selected) openCard(card);
      const controller = dialog.open ? fullscreenController : controllers.get(card);
      if (controller) {
        controller.stop();
        controller.show(controller.getIndex() + (event.key === "ArrowRight" ? 1 : -1));
      }
    });

    function closeCard(card) {
      const button = card.querySelector("[data-product-toggle]");
      const panel = card.querySelector("[data-product-panel]");
      const controller = controllers.get(card);
      if (controller) controller.stop();
      card.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      panel.hidden = true;
    }

    function openCard(card) {
      cards.forEach(function (otherCard) {
        if (otherCard !== card) closeCard(otherCard);
      });
      const button = card.querySelector("[data-product-toggle]");
      const panel = card.querySelector("[data-product-panel]");
      const controller = controllers.get(card);
      card.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      if (controller) controller.start();
    }

    cards.forEach(function (card) {
      const button = card.querySelector("[data-product-toggle]");
      const product = products[Number(card.dataset.productIndex)];
      const carousel = card.querySelector("[data-product-carousel]");
      const controller = createProductSlider(carousel, {
        interval: 4600,
        shouldAutoplay: function () { return card.classList.contains("is-open") && !dialog.open; }
      });
      controllers.set(card, controller);
      button.addEventListener("click", function () {
        if (card.classList.contains("is-open")) {
          closeCard(card);
          return;
        }
        openCard(card);
      });
      card.querySelector("[data-product-expand]").addEventListener("click", function () {
        openFullscreen(card, product, controller);
      });
    });

    function openHashProduct() {
      const target = cards.find(function (card) { return "#" + card.id === window.location.hash; });
      openCard(target || cards[0]);
    }
    openHashProduct();
    window.addEventListener("hashchange", openHashProduct);
  }

  function featuredProductCard(product, imageIndex) {
    const images = (product.images || []).filter(Boolean);
    const slides = images.map(function (source, index) {
      const active = index === imageIndex % images.length;
      return `<img class="featured-product-card__image${active ? " is-active" : ""}" src="${escapeHtml(source)}" alt="${escapeHtml(product.name)}" aria-hidden="${!active}" loading="lazy" decoding="async">`;
    }).join("");
    const target = product.anchor || product.id;
    return `<article class="featured-product-card">
      <a href="soluciones.html#${encodeURIComponent(target)}" aria-label="Ver producto ${escapeHtml(product.name)}">
        ${slides}
        <div class="featured-product-card__content">
          <h3>${escapeHtml(product.name)}</h3>
        </div>
        <span class="featured-product-card__arrow" aria-hidden="true">↗</span>
      </a>
    </article>`;
  }

  function setupFeaturedProducts(products) {
    const container = document.querySelector("[data-featured-products]");
    if (!container) return;
    const featuredIds = ["tabiques-vidriados", "barandas-cristal", "shower-door", "espejos-retroiluminados"];
    const available = featuredIds.map(function (id) {
      return products.find(function (product) { return product.id === id; });
    }).filter(function (product) { return product && product.images.some(Boolean); });
    if (!available.length) return;
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pendingChanges = [];
    let timer = null;
    container.innerHTML = available.map(function (product) { return featuredProductCard(product, 0); }).join("");
    const cards = Array.from(container.querySelectorAll(".featured-product-card")).map(function (card) {
      return { images: Array.from(card.querySelectorAll(".featured-product-card__image")), current: 0 };
    });

    function advanceCard(card) {
      const next = (card.current + 1) % card.images.length;
      const incoming = card.images[next];
      if (!incoming.complete || !incoming.naturalWidth) return;
      card.current = next;
      card.images.forEach(function (image, index) {
        const active = index === card.current;
        image.classList.toggle("is-active", active);
        image.setAttribute("aria-hidden", String(!active));
      });
    }

    function nextImages() {
      pendingChanges = [];
      cards.forEach(function (card, index) {
        if (index === 0) advanceCard(card);
        else pendingChanges.push(window.setTimeout(function () { advanceCard(card); }, index * 1000));
      });
    }

    function stop() {
      if (timer !== null) window.clearInterval(timer);
      timer = null;
      pendingChanges.forEach(function (timeout) { window.clearTimeout(timeout); });
      pendingChanges = [];
    }

    function start() {
      stop();
      if (reducedMotion || document.hidden) return;
      timer = window.setInterval(nextImages, 6000);
    }

    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);
    container.addEventListener("focusin", stop);
    container.addEventListener("focusout", function (event) {
      if (!container.contains(event.relatedTarget)) start();
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else start();
    });
    start();
  }

  function setupAboutTabs() {
    const text = document.querySelector("[data-about-text]");
    const buttons = Array.from(document.querySelectorAll("[data-about-tab]"));
    if (!text || !buttons.length) return;

    const content = {
      quienes: '<span class="about-text__paragraph">En <strong>CWSS Ingeniería Ltda.</strong> contamos con más de 10 años de experiencia en el desarrollo e instalación de soluciones vidriadas para nuestros clientes, principalmente: arquitectos, inmobiliarias y empresas constructoras.</span><span class="about-text__paragraph">Nuestro principal valor es la experiencia y el profesionalismo de un equipo que participa activamente en cada etapa del proyecto, entregando asesoría especializada desde el diseño hasta la ingeniería de detalles, fabricación y montaje final del producto.</span><span class="about-text__paragraph">Trabajamos con un enfoque integral, buscando entregar soluciones que respondan a las necesidades técnicas y arquitectónicas de cada proyecto, asegurando una ejecución eficiente y de calidad.</span>',
      mision: '<span class="about-text__paragraph">En <strong>CWSS Ingeniería Ltda.</strong> diseñamos, desarrollamos, fabricamos e instalamos soluciones vidriadas para proyectos arquitectónicos y constructivos, entregando asesoría especializada a arquitectos, inmobiliarias y empresas constructoras. Integramos experiencia técnica, ingeniería de detalle, fabricación y montaje para entregar soluciones eficientes, seguras y de alta calidad, adaptadas a los requerimientos de cada proyecto. Construimos relaciones de largo plazo basadas en el profesionalismo, la confianza, el cumplimiento y la excelencia.</span>',
      vision: '<span class="about-text__paragraph">Ser una empresa referente en soluciones vidriadas para la arquitectura y construcción en Chile, reconocida por la calidad de sus proyectos, su capacidad técnica, el cumplimiento de sus compromisos y la confianza de sus clientes, consolidando un crecimiento sostenible y una participación cada vez más relevante en proyectos de alta exigencia.</span>'
    };

    function selectTab(button) {
      const key = button.dataset.aboutTab;
      if (!content[key]) return;
      buttons.forEach(function (item) {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      text.innerHTML = content[key];
      const title = document.querySelector("[data-about-title]");
      if (title) title.textContent = { quienes: "QUIENES SOMOS", mision: "MISION", vision: "VISION" }[key];
      text.setAttribute("aria-labelledby", button.id);
      text.classList.remove("is-switching");
      void text.offsetWidth;
      text.classList.add("is-switching");
    }

    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () { selectTab(button); });
      button.addEventListener("keydown", function (event) {
        if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        let nextIndex = index;
        if (event.key === "Home") nextIndex = 0;
        else if (event.key === "End") nextIndex = buttons.length - 1;
        else if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (index + 1) % buttons.length;
        else nextIndex = (index - 1 + buttons.length) % buttons.length;
        buttons[nextIndex].focus();
        selectTab(buttons[nextIndex]);
      });
    });
    selectTab(buttons.find(function (button) { return button.classList.contains("is-active"); }) || buttons[0]);
  }

  function projectImages(project) {
    return Array.from(new Set([project.cover].concat(project.gallery || []).filter(Boolean))).slice(0, MAX_PROJECT_IMAGES);
  }

  function projectProducts(project) {
    if (Array.isArray(project.products) && project.products.length) return project.products;
    if (project.product) return [String(project.product)];
    return [];
  }

  function projectProductsMarkup(project) {
    return groupedProjectProducts(project).map(function (product) {
      return `<span>${escapeHtml(product)}</span>`;
    }).join("");
  }

  function groupedProjectProducts(project) {
    const products = projectProducts(project);
    const crystalProducts = products.map(function (product, index) {
      const match = String(product).trim().match(/^(.+?)\s+de cristal$/i);
      return match ? { index: index, name: match[1].trim() } : null;
    }).filter(Boolean);
    if (crystalProducts.length < 2) return products;

    const names = crystalProducts.map(function (product, index) {
      if (index === 0) return product.name;
      return product.name.charAt(0).toLowerCase() + product.name.slice(1);
    });
    const groupedName = names.length === 2
      ? names[0] + " y " + names[1] + " de cristal"
      : names.slice(0, -1).join(", ") + " y " + names[names.length - 1] + " de cristal";
    const crystalIndexes = new Set(crystalProducts.map(function (product) { return product.index; }));
    const firstCrystalIndex = crystalProducts[0].index;
    const result = [];
    products.forEach(function (product, index) {
      if (index === firstCrystalIndex) result.push(groupedName);
      if (!crystalIndexes.has(index)) result.push(product);
    });
    return result;
  }

  function projectDisplayName(project) {
    return project.name + (project.location ? " (" + project.location + ")" : "");
  }

  function projectConstructor(project) {
    const contractor = project.contractor || "No indica";
    if (contractor === "N/A") return contractor;
    return /^Constructora\s/i.test(contractor) ? contractor : "Constructora " + contractor;
  }

  function projectCard(project, autoplay) {
    const client = projectConstructor(project);
    const displayName = projectDisplayName(project);
    const subtitle = project.subtitle ? `<p class="project-card__subtitle">${escapeHtml(project.subtitle)}</p>` : "";
    const images = projectImages(project);
    const productsMarkup = projectProductsMarkup(project);
    const productsFact = productsMarkup
      ? `<p><span>Productos</span><strong class="project-products">${productsMarkup}</strong></p>`
      : "";
    const media = !images.length
      ? `<div class="project-card__media project-card__media--empty" role="img" aria-label="Imágenes pendientes de ${escapeHtml(displayName)}"><span>Imágenes próximamente</span></div>`
      : autoplay
      ? `<div class="project-card__media" data-card-slideshow>${images.map(function (image, index) {
          return `<img class="project-card__slide${index === 0 ? " is-active" : ""}" src="${escapeHtml(image)}" alt="${index === 0 ? escapeHtml(displayName) : ""}" ${index === 0 ? "" : 'loading="lazy" '}decoding="async">`;
        }).join("")}</div>`
      : `<img src="${escapeHtml(project.cover)}" alt="${escapeHtml(displayName)}" loading="lazy" decoding="async">`;
    const controls = autoplay && images.length > 1
      ? `<div class="project-card__slider-controls" aria-label="Controles de imágenes">
          <button type="button" data-card-previous aria-label="Imagen anterior">←</button>
          <span><b data-card-current>1</b> / ${images.length}</span>
          <button type="button" data-card-next aria-label="Imagen siguiente">→</button>
        </div>`
      : "";
    return `
      <article class="project-card">
        <a class="project-card__link" href="${projectUrl(project.id)}" aria-label="Ver obra ${escapeHtml(displayName)}">
          ${media}
          <div class="project-card__content">
            <div><h3>${escapeHtml(displayName)}</h3>${subtitle}</div>
            <div class="project-card__facts">
              <p><span>Cliente</span><strong>${escapeHtml(client)}</strong></p>
              <p><span>Año</span><strong>${escapeHtml(project.year || "Por confirmar")}</strong></p>
              ${productsFact}
            </div>
          </div>
          <span class="project-card__arrow" aria-hidden="true">↗</span>
        </a>
        ${controls}
      </article>`;
  }

  function compareProjectsByYearAndName(a, b) {
    const yearA = /^\d{4}$/.test(String(a.year)) ? Number(a.year) : -1;
    const yearB = /^\d{4}$/.test(String(b.year)) ? Number(b.year) : -1;
    if (yearA !== yearB) return yearB - yearA;
    return String(a.name || "").localeCompare(String(b.name || ""), "es", { sensitivity: "base" });
  }

  function renderLatest(projects) {
    const container = document.querySelector("[data-latest-projects]");
    if (!container) return;
    const inProgress = projects.filter(function (project) { return project.status === "En instalación"; }).sort(compareProjectsByYearAndName);
    container.innerHTML = inProgress.slice(0, 3).map(function (project) { return projectCard(project, true); }).join("");
  }

  function renderAllProjects(projects) {
    const container = document.querySelector("[data-all-projects]");
    if (!container) return;
    const ordered = projects.slice().sort(compareProjectsByYearAndName);
    container.innerHTML = ordered.map(function (project) { return projectCard(project, false); }).join("");
    const empty = document.querySelector("[data-empty-projects]");
    if (empty) empty.hidden = projects.length > 0;
  }

  function projectBackgroundVariant(id) {
    const hash = String(id || "").split("").reduce(function (total, character) {
      return ((total * 31) + character.charCodeAt(0)) >>> 0;
    }, 0);
    return hash % 2 === 0 ? "solutions" : "projects";
  }

  function setupProjectsBackground() {
    const background = document.querySelector("[data-projects-background]");
    const main = background && background.closest("main");
    if (!background || !main) return;
    let resizeFrame = null;

    function renderPanels() {
      const pageWidth = Math.max(main.clientWidth, 320);
      const pairHeight = pageWidth * ((9 / 16) + (16 / 9));
      const pairs = Math.max(1, Math.ceil(main.scrollHeight / pairHeight) + 1);
      background.innerHTML = Array.from({ length: pairs }, function () {
        return '<span class="projects-background__panel projects-background__panel--solutions"></span>'
          + '<span class="projects-background__panel projects-background__panel--projects"></span>';
      }).join("");
    }

    renderPanels();
    window.addEventListener("resize", function () {
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(renderPanels);
    });
  }

  function renderProjectDetail(projects) {
    const container = document.querySelector("[data-project-detail]");
    if (!container) return;
    const id = new URLSearchParams(window.location.search).get("id");
    const project = projects.find(function (item) { return item.id === id; });
    if (!project) {
      container.hidden = true;
      document.querySelector("[data-project-not-found]").hidden = false;
      return;
    }
    document.body.dataset.projectBackground = projectBackgroundVariant(project.id);
    const displayName = projectDisplayName(project);
    const orderedProjects = projects.slice().sort(compareProjectsByYearAndName);
    const currentProjectIndex = orderedProjects.findIndex(function (item) { return item.id === project.id; });
    const previousProject = orderedProjects[(currentProjectIndex - 1 + orderedProjects.length) % orderedProjects.length];
    const nextProject = orderedProjects[(currentProjectIndex + 1) % orderedProjects.length];
    const projectNavigation = orderedProjects.length > 1
      ? `<nav class="project-detail__navigation" aria-label="Navegación entre obras">
          <a href="${projectUrl(previousProject.id)}" aria-label="Obra anterior: ${escapeHtml(projectDisplayName(previousProject))}">←</a>
          <span>${currentProjectIndex + 1} / ${orderedProjects.length}</span>
          <a href="${projectUrl(nextProject.id)}" aria-label="Obra siguiente: ${escapeHtml(projectDisplayName(nextProject))}">→</a>
        </nav>`
      : "";
    document.title = displayName + " | CWSS";
    const galleryImages = projectImages(project);
    const gallery = galleryImages.map(function (image, index) {
      return `<figure class="project-gallery__slide" aria-hidden="${index === 0 ? "false" : "true"}"><img src="${escapeHtml(image)}" alt="${escapeHtml(displayName)} - imagen ${index + 1}" loading="lazy" decoding="async"><button class="project-gallery__full" type="button" data-full-image${index === 0 ? "" : ' tabindex="-1"'}>Ver imagen completa</button></figure>`;
    }).join("");
    const selectors = galleryImages.map(function (image, index) {
      return `<button class="project-gallery__thumb${index === 0 ? " is-active" : ""}" type="button" data-gallery-select="${index}" aria-label="Ver imagen ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"><img src="${escapeHtml(image)}" alt="" loading="lazy" decoding="async"></button>`;
    }).join("");
    const client = projectConstructor(project);
    const subtitle = project.subtitle ? `<p class="project-detail__subtitle">${escapeHtml(project.subtitle)}</p>` : "";
    const productsMarkup = projectProductsMarkup(project);
    const productsFact = productsMarkup
      ? `<p><span>Productos</span><strong class="project-products">${productsMarkup}</strong></p>`
      : "";
    const heroStyle = project.cover ? ` style="background-image:url('${escapeHtml(project.cover)}')"` : "";
    const gallerySection = galleryImages.length
      ? `<section class="project-gallery" aria-label="Galería de ${escapeHtml(displayName)}" data-project-gallery tabindex="0">
        <div class="project-gallery__viewport">
          <div class="project-gallery__track" data-gallery-track>${gallery}</div>
        </div>
        <div class="project-gallery__selector" ${galleryImages.length <= 1 ? "hidden" : ""}>${selectors}</div>
        <div class="project-gallery__controls" ${galleryImages.length <= 1 ? "hidden" : ""}>
          <button type="button" data-gallery-previous aria-label="Ver imagen anterior">←</button>
          <p aria-live="polite"><span data-gallery-current>1</span> / ${galleryImages.length}</p>
          <button type="button" data-gallery-next aria-label="Ver imagen siguiente">→</button>
        </div>
      </section>
      <dialog class="image-dialog" data-image-dialog aria-label="Vista completa de la imagen">
        <button class="image-dialog__close" type="button" data-image-close aria-label="Cerrar imagen">×</button>
        <img data-image-dialog-src alt="">
        <p data-image-dialog-caption></p>
        <div class="image-dialog__controls" ${galleryImages.length <= 1 ? "hidden" : ""}>
          <button type="button" data-image-previous aria-label="Imagen anterior">←</button>
          <span data-image-counter aria-live="polite"></span>
          <button type="button" data-image-next aria-label="Imagen siguiente">→</button>
        </div>
      </dialog>`
      : "";
    container.innerHTML = `
      <section class="project-detail__hero${project.cover ? "" : " project-detail__hero--empty"}"${heroStyle}>
        <div class="project-detail__title">
          ${projectNavigation}
          <p class="project-detail__project">${escapeHtml(displayName)}</p>
          ${subtitle}
          <div class="project-detail__facts">
            <p><span>Cliente</span><strong>${escapeHtml(client)}</strong></p>
            <p><span>Año</span><strong>${escapeHtml(project.year || "Por confirmar")}</strong></p>
            ${productsFact}
          </div>
        </div>
      </section>
      ${gallerySection}`;
  }

  function setupProjectGallery() {
    const gallery = document.querySelector("[data-project-gallery]");
    if (!gallery) return;
    const track = gallery.querySelector("[data-gallery-track]");
    const slides = Array.from(gallery.querySelectorAll(".project-gallery__slide"));
    const thumbnails = Array.from(gallery.querySelectorAll("[data-gallery-select]"));
    const thumbnailContainer = gallery.querySelector(".project-gallery__selector");
    const currentLabel = gallery.querySelector("[data-gallery-current]");
    const previous = gallery.querySelector("[data-gallery-previous]");
    const next = gallery.querySelector("[data-gallery-next]");
    const dialog = document.querySelector("[data-image-dialog]");
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let autoplayTimer = null;

    function showSlide(index) {
      if (!slides.length) return;
      current = (index + slides.length) % slides.length;
      track.style.transform = "translateX(-" + (current * 100) + "%)";
      slides.forEach(function (slide, slideIndex) {
        slide.setAttribute("aria-hidden", String(slideIndex !== current));
        const fullButton = slide.querySelector("[data-full-image]");
        if (fullButton) fullButton.tabIndex = slideIndex === current ? 0 : -1;
      });
      thumbnails.forEach(function (thumb, thumbIndex) {
        const active = thumbIndex === current;
        thumb.classList.toggle("is-active", active);
        thumb.setAttribute("aria-current", String(active));
      });
      const activeThumbnail = thumbnails[current];
      if (thumbnailContainer && activeThumbnail && thumbnailContainer.clientWidth && thumbnailContainer.clientHeight) {
        let left = thumbnailContainer.scrollLeft;
        let top = thumbnailContainer.scrollTop;
        const right = activeThumbnail.offsetLeft + activeThumbnail.offsetWidth;
        const bottom = activeThumbnail.offsetTop + activeThumbnail.offsetHeight;
        if (activeThumbnail.offsetLeft < left) left = activeThumbnail.offsetLeft;
        else if (right > left + thumbnailContainer.clientWidth) left = right - thumbnailContainer.clientWidth;
        if (activeThumbnail.offsetTop < top) top = activeThumbnail.offsetTop;
        else if (bottom > top + thumbnailContainer.clientHeight) top = bottom - thumbnailContainer.clientHeight;
        if (left !== thumbnailContainer.scrollLeft || top !== thumbnailContainer.scrollTop) {
          if (typeof thumbnailContainer.scrollTo === "function") thumbnailContainer.scrollTo({ left: left, top: top, behavior: "auto" });
          else {
            thumbnailContainer.scrollLeft = left;
            thumbnailContainer.scrollTop = top;
          }
        }
      }
      if (currentLabel) currentLabel.textContent = String(current + 1);
      if (dialog && dialog.open) updateFullImage();
    }

    function updateFullImage() {
      const source = slides[current].querySelector("img");
      const image = dialog.querySelector("[data-image-dialog-src]");
      image.src = source.getAttribute("src");
      image.alt = source.alt;
      dialog.querySelector("[data-image-dialog-caption]").textContent = source.alt;
      dialog.querySelector("[data-image-counter]").textContent = (current + 1) + " / " + slides.length;
    }

    function stopAutoplay() {
      if (autoplayTimer !== null) window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }

    function startAutoplay() {
      stopAutoplay();
      if (reducedMotion || slides.length <= 1 || document.hidden || (dialog && dialog.open)) return;
      autoplayTimer = window.setInterval(function () { showSlide(current + 1); }, 4800);
    }

    function selectSlide(index) {
      showSlide(index);
      stopAutoplay();
    }

    if (dialog) {
      slides.forEach(function (slide, index) {
        slide.querySelector("[data-full-image]").addEventListener("click", function () {
          stopAutoplay();
          showSlide(index);
          updateFullImage();
          dialog.showModal();
        });
      });
      dialog.querySelector("[data-image-previous]").addEventListener("click", function () { selectSlide(current - 1); });
      dialog.querySelector("[data-image-next]").addEventListener("click", function () { selectSlide(current + 1); });
      dialog.querySelector("[data-image-close]").addEventListener("click", function () { dialog.close(); });
      dialog.addEventListener("click", function (event) { if (event.target === dialog) dialog.close(); });
      dialog.addEventListener("close", function () { gallery.focus({ preventScroll: true }); });
    }

    thumbnails.forEach(function (thumb) {
      thumb.addEventListener("click", function () { selectSlide(Number(thumb.dataset.gallerySelect)); });
    });
    if (previous) previous.addEventListener("click", function () { selectSlide(current - 1); });
    if (next) next.addEventListener("click", function () { selectSlide(current + 1); });
    gallery.addEventListener("mouseenter", stopAutoplay);
    gallery.addEventListener("mouseleave", startAutoplay);
    gallery.addEventListener("focusin", stopAutoplay);
    gallery.addEventListener("focusout", function (event) {
      if (!gallery.contains(event.relatedTarget)) startAutoplay();
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopAutoplay(); else startAutoplay();
    });
    document.addEventListener("keydown", function (event) {
      const target = event.target;
      const isEditing = target instanceof HTMLElement
        && (target.matches("input, textarea, select") || target.isContentEditable);
      if (isEditing || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        selectSlide(current - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        selectSlide(current + 1);
      }
    });
    startAutoplay();
  }

  function setupProjectCardSlides() {
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controllers = [];
    let roundTimer = null;
    let pendingChanges = [];

    document.querySelectorAll("[data-card-slideshow]").forEach(function (media) {
      const slides = Array.from(media.querySelectorAll(".project-card__slide"));
      const card = media.closest(".project-card");
      const previous = card && card.querySelector("[data-card-previous]");
      const next = card && card.querySelector("[data-card-next]");
      const currentLabel = card && card.querySelector("[data-card-current]");
      if (!card || slides.length <= 1) return;
      let current = 0;
      let paused = false;

      function show(index) {
        slides[current].classList.remove("is-active");
        current = (index + slides.length) % slides.length;
        slides[current].classList.add("is-active");
        if (currentLabel) currentLabel.textContent = String(current + 1);
      }

      if (previous) previous.addEventListener("click", function () { show(current - 1); });
      if (next) next.addEventListener("click", function () { show(current + 1); });
      card.addEventListener("mouseenter", function () { paused = true; });
      card.addEventListener("mouseleave", function () { paused = false; });
      card.addEventListener("focusin", function () { paused = true; });
      card.addEventListener("focusout", function (event) {
        if (!card.contains(event.relatedTarget)) paused = false;
      });
      controllers.push({
        advance: function () { if (!paused) show(current + 1); }
      });
    });

    function stopRounds() {
      if (roundTimer !== null) window.clearInterval(roundTimer);
      roundTimer = null;
      pendingChanges.forEach(function (timeout) { window.clearTimeout(timeout); });
      pendingChanges = [];
    }

    function runRound() {
      pendingChanges = [];
      controllers.forEach(function (controller, index) {
        if (index === 0) controller.advance();
        else pendingChanges.push(window.setTimeout(controller.advance, index * 1500));
      });
    }

    function startRounds() {
      stopRounds();
      if (reducedMotion || document.hidden || controllers.length === 0) return;
      roundTimer = window.setInterval(runRound, 6000);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopRounds(); else startRounds();
    });
    startRounds();
  }

  function setupNavigation() {
    const button = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    if (button && nav) {
      button.addEventListener("click", function () {
        const open = nav.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(open));
      });
    }
    document.querySelectorAll(".nav-group > a").forEach(function (link) {
      link.addEventListener("click", function (event) {
        if (window.innerWidth <= 1020 && !link.parentElement.classList.contains("is-open")) {
          event.preventDefault();
          link.parentElement.classList.add("is-open");
        }
      });
    });
    document.querySelectorAll('a[href="#contacto"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        const contact = document.getElementById("contacto");
        if (!contact) return;
        event.preventDefault();
        contact.scrollIntoView({ behavior: "smooth", block: "start" });
        if (nav) nav.classList.remove("is-open");
        if (button) button.setAttribute("aria-expanded", "false");
        window.history.replaceState(null, "", "#contacto");
      });
    });
  }

  function setupPageTransitions() {
    const body = document.body;
    if (!body) return;
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function showPage() {
      body.classList.remove("is-page-leaving");
      body.classList.add("is-page-visible");
    }

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(showPage);
    });
    window.addEventListener("pageshow", showPage);
    if (reducedMotion) return;

    const transitionPages = new Set(["", "index.html", "soluciones.html", "proyectos.html"]);
    document.addEventListener("click", function (event) {
      const link = event.target.closest("a");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target || link.hasAttribute("download")) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.hash && destination.pathname === window.location.pathname) return;
      const page = destination.pathname.split("/").pop().toLowerCase();
      if (!transitionPages.has(page) || destination.href === window.location.href) return;

      event.preventDefault();
      body.classList.remove("is-page-visible");
      body.classList.add("is-page-leaving");
      window.setTimeout(function () { window.location.href = destination.href; }, 480);
    });
  }

  function setupRevealAnimations() {
    const selectors = [
      ".site-header .main-nav > a",
      ".about-visual",
      ".about-copy > *",
      ".latest .section-heading > *",
      ".latest .project-card",
      ".page-intro > *",
      ".projects-page .project-card",
      ".products-page > h1",
      ".products-page .product-card",
      ".project-detail__title > *",
      ".project-gallery__viewport",
      ".project-gallery__selector",
      ".project-gallery__controls",
      ".not-found > *"
    ];
    const elements = Array.from(document.querySelectorAll(selectors.join(",")));
    if (!elements.length) return;

    elements.forEach(function (element, index) {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", Math.min(index % 6, 5) * 110 + "ms");
    });

    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach(function (element) { element.classList.add("is-revealed"); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    elements.forEach(function (element) { observer.observe(element); });
  }

  const projects = getProjects();
  const products = getProducts();
  renderProducts(products);
  setupProductAccordions(products);
  setupAboutTabs();
  renderLatest(projects);
  setupFeaturedProducts(products);
  renderAllProjects(projects);
  setupProjectsBackground();
  renderProjectDetail(projects);
  setupProjectCardSlides();
  setupProjectGallery();
  setupNavigation();
  setupPageTransitions();
  setupRevealAnimations();
  document.querySelectorAll("[data-year]").forEach(function (year) {
    year.textContent = String(new Date().getFullYear());
  });
})();
