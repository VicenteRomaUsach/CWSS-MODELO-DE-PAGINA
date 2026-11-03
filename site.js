(function () {
  "use strict";

  const PHOTO_ROOT = "imagenes-optimizadas/";
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
      "imagenes-drive/nueva-apoquindo/fcf7047d3327436c19c3.webp",
      "imagenes-drive/nueva-apoquindo/013f634565f59fb5332d.webp",
      "imagenes-drive/nueva-apoquindo/2da2ac9a03a003991a76.webp",
      "imagenes-drive/nueva-apoquindo/c8565223ae13c4f51b4b.webp",
      "imagenes-drive/nueva-apoquindo/06a625adab0ac52574c2.webp",
      "imagenes-drive/nueva-apoquindo/382a6bf7c7dc555987ec.webp",
      "imagenes-drive/nueva-apoquindo/403a3fa74aa544c4d592.webp",
      "imagenes-drive/nueva-apoquindo/c9a04e8da992ee09cff9.webp",
      "imagenes-drive/nueva-apoquindo/1eb66683ee35f343d7db.webp",
      "imagenes-drive/nueva-apoquindo/9ca69cc2933f3f32e824.webp",
      "imagenes-drive/nueva-apoquindo/f45948cc71639e93e22d.webp",
      "imagenes-drive/nueva-apoquindo/dbc5027d896724fc246c.webp",
      "imagenes-drive/nueva-apoquindo/7fb5f014020d0eabd09e.webp",
      "imagenes-drive/nueva-apoquindo/4b1302c73c4e17bbf52c.webp",
      "imagenes-drive/nueva-apoquindo/3e4629d1f376a3bdfbd5.webp",
      "imagenes-drive/nueva-apoquindo/c40296a729543b045a84.webp",
      "imagenes-drive/nueva-apoquindo/d74511659cfe218c5523.webp",
      "imagenes-drive/nueva-apoquindo/987d4429afd48dbcdecc.webp",
      "imagenes-drive/nueva-apoquindo/645db0ac78f3d293147f.webp",
      "imagenes-drive/nueva-apoquindo/5c8bd4992994bc68ed84.webp",
      "imagenes-drive/nueva-apoquindo/e1c794aaca979246df24.webp",
      "imagenes-drive/nueva-apoquindo/fe3ef982dede15044cfe.webp",
      "imagenes-drive/nueva-apoquindo/20217503c66830b3c24f.webp",
      "imagenes-drive/nueva-apoquindo/0040132b09b67b36bdff.webp",
      "imagenes-drive/nueva-apoquindo/9f3df5ce9bc779e3ac3d.webp",
      "imagenes-drive/nueva-apoquindo/138c4b1ef1432bbc1e50.webp",
      "imagenes-drive/nueva-apoquindo/9ff55b30cbc084cb78c0.webp",
      "imagenes-drive/nueva-apoquindo/f29cd6557ad0606f5f30.webp",
      "imagenes-drive/nueva-apoquindo/7b6563db8c5befe5726b.webp",
      "imagenes-drive/nueva-apoquindo/a94c0dc6ed6a06af6c9d.webp",
      "imagenes-drive/nueva-apoquindo/dafe44a99df49fb09c87.webp",
      "imagenes-drive/nueva-apoquindo/22688e6304e2104f53fc.webp",
      "imagenes-drive/nueva-apoquindo/64334f92e5e16f20b635.webp",
      "imagenes-drive/nueva-apoquindo/6cad91555b01df79a491.webp",
      "imagenes-drive/nueva-apoquindo/4f31000baa1ee8e3fc23.webp",
      "imagenes-drive/nueva-apoquindo/171b761296e25d2a4571.webp",
      "imagenes-drive/nueva-apoquindo/7914847e77497fdd6016.webp",
      "imagenes-drive/nueva-apoquindo/5662c7fc584e7515e18a.webp",
      "imagenes-drive/nueva-apoquindo/51aa77aab1181a6e99d0.webp",
      "imagenes-drive/nueva-apoquindo/926300a1525960f4bf60.webp",
      "imagenes-drive/nueva-apoquindo/2265474df8504e5df533.webp",
      "imagenes-drive/nueva-apoquindo/058c250a2b6628db084e.webp",
      "imagenes-drive/nueva-apoquindo/bf1b6798268df5debb53.webp",
      "imagenes-drive/nueva-apoquindo/d5b4dc3fece762d96b6c.webp",
      "imagenes-drive/nueva-apoquindo/841148cd6566f258ac16.webp",
      "imagenes-drive/nueva-apoquindo/5a65c4308707d7cf5772.webp",
      "imagenes-drive/nueva-apoquindo/8d7db61a1c36aa27dff1.webp",
      "imagenes-drive/nueva-apoquindo/2210465f59f5ad4f42bb.webp",
      "imagenes-drive/nueva-apoquindo/6333da7a964896e40e3b.webp",
      "imagenes-drive/nueva-apoquindo/ae548a6af15f75ca9171.webp",
      "imagenes-drive/nueva-apoquindo/49d8694e506aaa74d141.webp",
      "imagenes-drive/nueva-apoquindo/6ec226e47e977feafdb8.webp",
      "imagenes-drive/nueva-apoquindo/2a2431b5a4830066bb9c.webp",
      "imagenes-drive/nueva-apoquindo/8bb9e630c28df294f4a2.webp",
      "imagenes-drive/nueva-apoquindo/d11d8c5ad095d8fdef70.webp"
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
      "imagenes-drive/badajoz/a372e2e619327199dd49.webp",
      "imagenes-drive/badajoz/25989c5bc2bee58d83ae.webp",
      "imagenes-drive/badajoz/4c0cab77be06ed6b1e76.webp",
      "imagenes-drive/badajoz/b0aa420c1445fcaa72ef.webp",
      "imagenes-drive/badajoz/3d28119b04e2ab7fd709.webp",
      "imagenes-drive/badajoz/33ff45b1380b5f62d3dc.webp",
      "imagenes-drive/badajoz/73650a185805e610ed7a.webp",
      "imagenes-drive/badajoz/a07b76c3765d9fe319e1.webp",
      "imagenes-drive/badajoz/db282d629231927234c3.webp",
      "imagenes-drive/badajoz/82b88aadfb2027af07a7.webp",
      "imagenes-drive/badajoz/0556298d73339abc3cec.webp",
      "imagenes-drive/badajoz/462563a3f422db1f577e.webp",
      "imagenes-drive/badajoz/74ceb305195f3dce09e6.webp",
      "imagenes-drive/badajoz/27cca53de814772798c9.webp",
      "imagenes-drive/badajoz/6fa3743f9f68301a05ac.webp",
      "imagenes-drive/badajoz/39c9c5eb70e2fc03e513.webp",
      "imagenes-drive/badajoz/b34eac082befe4c33a73.webp",
      "imagenes-drive/badajoz/161723bdcee8b3f5b6a2.webp",
      "imagenes-drive/badajoz/3afc8b4eb55966503a39.webp",
      "imagenes-drive/badajoz/916df71a4f69bdc00686.webp",
      "imagenes-drive/badajoz/1e66c7e8b85f5fb2dd0c.webp",
      "imagenes-drive/badajoz/4e6fcf57840feb798d85.webp",
      "imagenes-drive/badajoz/fd879af6ee95d834926e.webp",
      "imagenes-drive/badajoz/f39014b5b5f113850cca.webp",
      "imagenes-drive/badajoz/fe10e93e8d51c07d8ad3.webp",
      "imagenes-drive/badajoz/360158b32465b5c7a44e.webp",
      "imagenes-drive/badajoz/4ad7dbd603f6be1d9f6d.webp",
      "imagenes-drive/badajoz/5521a17b113f5d6db7fa.webp",
      "imagenes-drive/badajoz/c2d325b653ca484f209e.webp",
      "imagenes-drive/badajoz/b91a1a2970b37643a378.webp",
      "imagenes-drive/badajoz/9301dd556a8abb4487fe.webp"
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
      "imagenes-drive/edificio-to-be/9f033af739fe52e0e4e7.webp",
      "imagenes-drive/edificio-to-be/80e57d71645032beac2f.webp",
      "imagenes-drive/edificio-to-be/143ac1a80579ab871999.webp",
      "imagenes-drive/edificio-to-be/744d0f6c74d38a5a4493.webp",
      "imagenes-drive/edificio-to-be/2d21e02ed49d10a9dfec.webp",
      "imagenes-drive/edificio-to-be/fe7d2e3c65cf96295344.webp",
      "imagenes-drive/edificio-to-be/fbb76fa7f655fb97d7c7.webp",
      "imagenes-drive/edificio-to-be/0ef95efed0af5ab1df15.webp",
      "imagenes-drive/edificio-to-be/8d209956929c67e1213c.webp",
      "imagenes-drive/edificio-to-be/577193168b0a7f19a0e1.webp",
      "imagenes-drive/edificio-to-be/dab8ebaa325b1484296c.webp",
      "imagenes-drive/edificio-to-be/26689bebef090310c5bf.webp",
      "imagenes-drive/edificio-to-be/897722f5fb3045e8f62b.webp",
      "imagenes-drive/edificio-to-be/5c9c0d0568d0c1ecee4b.webp",
      "imagenes-drive/edificio-to-be/768dbb9498466333d06b.webp",
      "imagenes-drive/edificio-to-be/0ecd88e68785950a3bf2.webp",
      "imagenes-drive/edificio-to-be/7015b8c6127969b0256a.webp",
      "imagenes-drive/edificio-to-be/63da081e19e10a430e23.webp",
      "imagenes-drive/edificio-to-be/bb108eab0a0d744bc63d.webp",
      "imagenes-drive/edificio-to-be/beddf48bf27cd6bfc8dd.webp",
      "imagenes-drive/edificio-to-be/aae9eab8b8632941cec4.webp",
      "imagenes-drive/edificio-to-be/8f9dd42ad3b5c776c2d6.webp",
      "imagenes-drive/edificio-to-be/71c5a68f37d424ac7dc2.webp",
      "imagenes-drive/edificio-to-be/5e43d92231044164528f.webp",
      "imagenes-drive/edificio-to-be/47b54c4c67db563199cd.webp",
      "imagenes-drive/edificio-to-be/86c621dd4fdb26b3d27e.webp",
      "imagenes-drive/edificio-to-be/f37412afedbe245d09e8.webp",
      "imagenes-drive/edificio-to-be/2951929a70718fb08005.webp",
      "imagenes-drive/edificio-to-be/1fb940a37e2c90ab4373.webp",
      "imagenes-drive/edificio-to-be/ea751b8c24639593b122.webp",
      "imagenes-drive/edificio-to-be/3e3b0232ea56009f864e.webp",
      "imagenes-drive/edificio-to-be/7b9c64409241bfdd8036.webp",
      "imagenes-drive/edificio-to-be/26802f4ea918e11a0ff2.webp",
      "imagenes-drive/edificio-to-be/5a0c1493302a24964734.webp",
      "imagenes-drive/edificio-to-be/288b3a63a281fd7e0a0c.webp",
      "imagenes-drive/edificio-to-be/36a9816d880d56376bef.webp",
      "imagenes-drive/edificio-to-be/b4af705e9628a82ba14d.webp",
      "imagenes-drive/edificio-to-be/599a252d55bdbd0b7baf.webp",
      "imagenes-drive/edificio-to-be/5cba125349baf99c1e97.webp",
      "imagenes-drive/edificio-to-be/d06f3af22ac2089a0a82.webp",
      "imagenes-drive/edificio-to-be/477b00bf5b02c899b634.webp",
      "imagenes-drive/edificio-to-be/13e0876c279715555efe.webp",
      "imagenes-drive/edificio-to-be/d9fa80e2048c90342a4e.webp",
      "imagenes-drive/edificio-to-be/b1d52d7c898d3adf06f6.webp",
      "imagenes-drive/edificio-to-be/9ec5a182488221d779e5.webp",
      "imagenes-drive/edificio-to-be/6b88f179a40be97a53d1.webp",
      "imagenes-drive/edificio-to-be/a4dd367883fc2dea31aa.webp",
      "imagenes-drive/edificio-to-be/f6a191ecd0b5d2b46608.webp",
      "imagenes-drive/edificio-to-be/9732192329bfdf9771cf.webp",
      "imagenes-drive/edificio-to-be/6ab99eb11f5accea6e5a.webp",
      "imagenes-drive/edificio-to-be/b9816bff7d65f1c80b8a.webp"
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
      "imagenes-drive/guernica/bdfbbfee734c32234cdf.webp",
      "imagenes-drive/guernica/6c284d63dd030cc9fde1.webp",
      "imagenes-drive/guernica/e82d8ea59acfe3c4c708.webp",
      "imagenes-drive/guernica/988d80ffb2173967149b.webp",
      "imagenes-drive/guernica/018b17e406d6b094017b.webp",
      "imagenes-drive/guernica/5f6ec0818872098fb07e.webp",
      "imagenes-drive/guernica/fa3d3025321e736bf5f4.webp",
      "imagenes-drive/guernica/c55c8a4b0c7a5d4bab72.webp",
      "imagenes-drive/guernica/9c676014642ab7174383.webp",
      "imagenes-drive/guernica/0ab02d649d145523abe4.webp",
      "imagenes-drive/guernica/d94207e40abae91f006e.webp",
      "imagenes-drive/guernica/d07db7f96aba52db997d.webp",
      "imagenes-drive/guernica/2237ddba05907f73ff1a.webp",
      "imagenes-drive/guernica/72f9615c45cb77fe4468.webp",
      "imagenes-drive/guernica/5933996b44e9cfcf2658.webp",
      "imagenes-drive/guernica/28b10ccc2951e2c82489.webp",
      "imagenes-drive/guernica/d2f7de1858651ecf8ca2.webp",
      "imagenes-drive/guernica/7d21daa565498a9c35cc.webp",
      "imagenes-drive/guernica/66af9365a5c5126e3239.webp",
      "imagenes-drive/guernica/5d39f5a1c4a641a42de3.webp",
      "imagenes-drive/guernica/a145e69880b8fc4a0c75.webp",
      "imagenes-drive/guernica/822c7a1d20a3db37d124.webp",
      "imagenes-drive/guernica/0caccd203e650360118b.webp",
      "imagenes-drive/guernica/5d5623011edbfcdeabb4.webp",
      "imagenes-drive/guernica/04b3ba22208286dbcc98.webp",
      "imagenes-drive/guernica/b4aef05e1f68c37a52d8.webp",
      "imagenes-drive/guernica/1f381d5426b53c3c82ae.webp",
      "imagenes-drive/guernica/709ac0d2cbf69635246b.webp",
      "imagenes-drive/guernica/51025d88f60434d3088f.webp",
      "imagenes-drive/guernica/1b47735492ccf82a989c.webp",
      "imagenes-drive/guernica/3801d3704b1ab975109f.webp",
      "imagenes-drive/guernica/3268c8e1dd957a21a211.webp",
      "imagenes-drive/guernica/d5d9e12aa31388265e26.webp",
      "imagenes-drive/guernica/5628dd9353b4be2ddd28.webp",
      "imagenes-drive/guernica/a9b2a3973e238540d040.webp",
      "imagenes-drive/guernica/23fad2fe0b7dcdc24b58.webp",
      "imagenes-drive/guernica/0f7e5a06e2e3a91f8536.webp",
      "imagenes-drive/guernica/da40a37c5f913a51f0a5.webp",
      "imagenes-drive/guernica/5d6143e86dfbb21e6c71.webp",
      "imagenes-drive/guernica/9a089e850a500d3efcc4.webp",
      "imagenes-drive/guernica/97edf481c610efabe5db.webp",
      "imagenes-drive/guernica/9008a6d02fe7d9047b6f.webp",
      "imagenes-drive/guernica/044b800963eb6c5cc3b6.webp",
      "imagenes-drive/guernica/19983f48065e2ba17029.webp",
      "imagenes-drive/guernica/a65f0c42c40b4126ff55.webp",
      "imagenes-drive/guernica/a19d0e287387660ac350.webp",
      "imagenes-drive/guernica/c96a1510e9f21603e615.webp",
      "imagenes-drive/guernica/20eb6b5dbb79f972b53a.webp",
      "imagenes-drive/guernica/eeb5bb66b9c7a32b161f.webp",
      "imagenes-drive/guernica/aa326241896cbe485ea2.webp",
      "imagenes-drive/guernica/cdf429ee0bab9c283ab5.webp",
      "imagenes-drive/guernica/065152f6e19f80cf76e6.webp",
      "imagenes-drive/guernica/dcd6253220d48d5b4110.webp",
      "imagenes-drive/guernica/5b615a4e683bf5a51f2c.webp",
      "imagenes-drive/guernica/3a4222d11dd546a19d7c.webp",
      "imagenes-drive/guernica/8c168045ec51b134e683.webp",
      "imagenes-drive/guernica/e920c14733bc45354bf7.webp",
      "imagenes-drive/guernica/9a09542499d99fdaccff.webp",
      "imagenes-drive/guernica/355e8fb4a3e1a41f61ce.webp",
      "imagenes-drive/guernica/23aebae854f06dabf8bb.webp",
      "imagenes-drive/guernica/f9b411bd6f1f61932096.webp",
      "imagenes-drive/guernica/28cd5325200f5bc0b9ef.webp",
      "imagenes-drive/guernica/9964a40cc153ce2ac410.webp",
      "imagenes-drive/guernica/a798460eeced4bfa88a7.webp",
      "imagenes-drive/guernica/bc56d0b75a7c4ef037a0.webp",
      "imagenes-drive/guernica/f6dee69db0943a395e23.webp",
      "imagenes-drive/guernica/c7123d37276c75366d05.webp",
      "imagenes-drive/guernica/483ceead2f0396c06cdd.webp",
      "imagenes-drive/guernica/bbcea9287293e98fc1e3.webp",
      "imagenes-drive/guernica/254b5691dff5f79b4322.webp",
      "imagenes-drive/guernica/4ad37d1d07e89170fcdf.webp",
      "imagenes-drive/guernica/c2a4e8fb2d36a836854e.webp",
      "imagenes-drive/guernica/88cbd9260e9dd5b8789f.webp",
      "imagenes-drive/guernica/28eae8272e1bc9fe54ba.webp",
      "imagenes-drive/guernica/d7d7fe60d27e603c79dc.webp",
      "imagenes-drive/guernica/2b7389d677bea4f986e4.webp",
      "imagenes-drive/guernica/be5fb6b7aeaadde4d909.webp",
      "imagenes-drive/guernica/34d3d57c7783a2bb6705.webp",
      "imagenes-drive/guernica/8970624f0011be56bf33.webp",
      "imagenes-drive/guernica/00fb8861ced67c88cfae.webp",
      "imagenes-drive/guernica/6ab1f876e7f4cbefdbf4.webp",
      "imagenes-drive/guernica/72a498b3e61b7a0c59c3.webp",
      "imagenes-drive/guernica/84dce667952e250973ee.webp",
      "imagenes-drive/guernica/a704c22df6dcf75586bf.webp",
      "imagenes-drive/guernica/2d08853f5fbf2b9fa918.webp",
      "imagenes-drive/guernica/01da2c358b4730c9e227.webp",
      "imagenes-drive/guernica/68c0056f5866cc7ad0a0.webp",
      "imagenes-drive/guernica/979da674ae8f730595d3.webp",
      "imagenes-drive/guernica/fd81d29742c77147a77d.webp",
      "imagenes-drive/guernica/f868762cf80617e61bdb.webp",
      "imagenes-drive/guernica/7ce1a6695bc35aae79d7.webp",
      "imagenes-drive/guernica/a9ddb0efb4c396f81406.webp",
      "imagenes-drive/guernica/39b4038a73a55797b50e.webp",
      "imagenes-drive/guernica/a31dc70968b9f85331a9.webp",
      "imagenes-drive/guernica/77d7fa39109556483833.webp",
      "imagenes-drive/guernica/7b58f069341b302ea338.webp",
      "imagenes-drive/guernica/3fbcfad616159cfaafed.webp",
      "imagenes-drive/guernica/d4deb68b51228d01d35c.webp",
      "imagenes-drive/guernica/37158cbd30bb3e4dc6f0.webp",
      "imagenes-drive/guernica/4678c6f9f0ed3cf3731f.webp",
      "imagenes-drive/guernica/94c8d4c720f3b90245ab.webp",
      "imagenes-drive/guernica/2494a916569486360465.webp",
      "imagenes-drive/guernica/656436a15a3a3b900c64.webp"
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
      "imagenes-drive/hotel-plaza-el-bosque/8507d053124c3b3fca83.webp",
      "imagenes-drive/hotel-plaza-el-bosque/7d6250901875996b1703.webp",
      "imagenes-drive/hotel-plaza-el-bosque/732099b33e9c5ee609f1.webp",
      "imagenes-drive/hotel-plaza-el-bosque/4083c577dfe7722aaa20.webp",
      "imagenes-drive/hotel-plaza-el-bosque/7516a53870bb52854f0a.webp",
      "imagenes-drive/hotel-plaza-el-bosque/70c694671fa4352840d8.webp",
      "imagenes-drive/hotel-plaza-el-bosque/232eb4d5de36d979ac1e.webp",
      "imagenes-drive/hotel-plaza-el-bosque/bd6893472085d7eeffc0.webp",
      "imagenes-drive/hotel-plaza-el-bosque/32fb5d1ed2a2d4505102.webp",
      "imagenes-drive/hotel-plaza-el-bosque/10c52fa3924349a548dd.webp",
      "imagenes-drive/hotel-plaza-el-bosque/3bf4d6676c5b7d7cf4ba.webp",
      "imagenes-drive/hotel-plaza-el-bosque/8bfa57ea183fc65d6d48.webp",
      "imagenes-drive/hotel-plaza-el-bosque/e593a5c660ea8b2cae6a.webp",
      "imagenes-drive/hotel-plaza-el-bosque/74a91b2443adae624d77.webp",
      "imagenes-drive/hotel-plaza-el-bosque/2bf2db6c1a7566d4063b.webp",
      "imagenes-drive/hotel-plaza-el-bosque/101315f02dd930e141af.webp",
      "imagenes-drive/hotel-plaza-el-bosque/1e921000bfa25bb8d23e.webp",
      "imagenes-drive/hotel-plaza-el-bosque/e8c40a6775b8108abe69.webp",
      "imagenes-drive/hotel-plaza-el-bosque/70f8eb127f808bf9a194.webp",
      "imagenes-drive/hotel-plaza-el-bosque/60a7b2cc6c71bef630c7.webp",
      "imagenes-drive/hotel-plaza-el-bosque/bf9515f611611dd2c3ad.webp",
      "imagenes-drive/hotel-plaza-el-bosque/6b75aa51d76c39e0cddd.webp",
      "imagenes-drive/hotel-plaza-el-bosque/dcc1cfe3947267ece201.webp",
      "imagenes-drive/hotel-plaza-el-bosque/6944ab8be4452c02d2f8.webp",
      "imagenes-drive/hotel-plaza-el-bosque/c62b1fd79ea7e2d6ba7e.webp",
      "imagenes-drive/hotel-plaza-el-bosque/9e7fd6efd7a101d56afc.webp",
      "imagenes-drive/hotel-plaza-el-bosque/5362261344a1512ea920.webp",
      "imagenes-drive/hotel-plaza-el-bosque/8203aff42aea195e7749.webp",
      "imagenes-drive/hotel-plaza-el-bosque/b147aa9b4dd3c74be756.webp",
      "imagenes-drive/hotel-plaza-el-bosque/b630ae4cdcf668b5900a.webp",
      "imagenes-drive/hotel-plaza-el-bosque/6dad8e183eea66e82129.webp",
      "imagenes-drive/hotel-plaza-el-bosque/2be3043f38af1cc75c49.webp",
      "imagenes-drive/hotel-plaza-el-bosque/a5932e685e4a9e744d6c.webp",
      "imagenes-drive/hotel-plaza-el-bosque/f5f6a718d8881f9c60ad.webp",
      "imagenes-drive/hotel-plaza-el-bosque/07f7255383a960ac460a.webp",
      "imagenes-drive/hotel-plaza-el-bosque/0b6d50084e57f46d3947.webp",
      "imagenes-drive/hotel-plaza-el-bosque/32b4059e9e40e3b1c816.webp",
      "imagenes-drive/hotel-plaza-el-bosque/5cfabf05dfa7ede155cc.webp",
      "imagenes-drive/hotel-plaza-el-bosque/84f9095b68d8e7e00a3f.webp",
      "imagenes-drive/hotel-plaza-el-bosque/1b9a6fed9ffc30bfe054.webp",
      "imagenes-drive/hotel-plaza-el-bosque/72b0c23fa8dca909cfe1.webp",
      "imagenes-drive/hotel-plaza-el-bosque/bd929fbd71088b3fd367.webp",
      "imagenes-drive/hotel-plaza-el-bosque/9a6ef24547765f8823ff.webp",
      "imagenes-drive/hotel-plaza-el-bosque/0a8deac3c68773b6b54d.webp",
      "imagenes-drive/hotel-plaza-el-bosque/d92d4845a23b05d565aa.webp",
      "imagenes-drive/hotel-plaza-el-bosque/7d4e5e6ed9858f4bfd04.webp"
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
      "imagenes-drive/parque-de-los-reyes/3b16fb2b11c903ccdac0.webp",
      "imagenes-drive/parque-de-los-reyes/8dfeddec16a43a1a38e2.webp",
      "imagenes-drive/parque-de-los-reyes/3eb84768368d00acc75c.webp",
      "imagenes-drive/parque-de-los-reyes/3dc1f16a9cdc53d839a8.webp",
      "imagenes-drive/parque-de-los-reyes/1f10b4a8e3e8b7695dbd.webp",
      "imagenes-drive/parque-de-los-reyes/3fa8e1159c7d1fbeb174.webp",
      "imagenes-drive/parque-de-los-reyes/4ba4adf573db24d856b4.webp",
      "imagenes-drive/parque-de-los-reyes/7eda60039f5d2a0a7bb4.webp",
      "imagenes-drive/parque-de-los-reyes/009eff197712816afafb.webp",
      "imagenes-drive/parque-de-los-reyes/265218bcd74f9464da27.webp",
      "imagenes-drive/parque-de-los-reyes/28dd965609f6a4a0ed1b.webp",
      "imagenes-drive/parque-de-los-reyes/7523875cb4eee0832ba9.webp",
      "imagenes-drive/parque-de-los-reyes/c944f1f89f12e5116273.webp",
      "imagenes-drive/parque-de-los-reyes/1416052f731a1a1fc6ce.webp"
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
      "imagenes-drive/hotel-icon/ac02c060d6afe53b5781.webp",
      "imagenes-drive/hotel-icon/af434355dd6223777911.webp",
      "imagenes-drive/hotel-icon/7cd31d57272d247491ce.webp",
      "imagenes-drive/hotel-icon/3f4ae085277fe696a08d.webp",
      "imagenes-drive/hotel-icon/e9bbdc38407751f46f1d.webp",
      "imagenes-drive/hotel-icon/b61f99d1600b38903806.webp",
      "imagenes-drive/hotel-icon/fc8994a8396e1a2c2be8.webp",
      "imagenes-drive/hotel-icon/17d4b4f53119052613ad.webp",
      "imagenes-drive/hotel-icon/fd90727ae238efb53dfc.webp",
      "imagenes-drive/hotel-icon/f45105b231de36d79cb4.webp",
      "imagenes-drive/hotel-icon/635080e5be5c4ee69b3e.webp",
      "imagenes-drive/hotel-icon/de2c4269dcfacc610cd2.webp",
      "imagenes-drive/hotel-icon/d6f77e355ad721eef78b.webp",
      "imagenes-drive/hotel-icon/5101ec51cd40ca09b91b.webp",
      "imagenes-drive/hotel-icon/d98c5e73dd88a77a59d1.webp"
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
      "imagenes-drive/malaga/c5a9b881b3221d9cd354.webp",
      "imagenes-drive/malaga/0ec0ed551bf153b9bb92.webp",
      "imagenes-drive/malaga/2ac1c3bf25865cc4623a.webp",
      "imagenes-drive/malaga/fbac97a2d87ed1cb5814.webp",
      "imagenes-drive/malaga/19f30b8e5fe489006ec0.webp",
      "imagenes-drive/malaga/3640128f680bd6312bb1.webp",
      "imagenes-drive/malaga/37df594667907897601a.webp",
      "imagenes-drive/malaga/bb051baa5b90973f3b5d.webp"
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
      "imagenes-drive/torres-centenario-antofagasta/d3838a0438c6da396f84.webp",
      "imagenes-drive/torres-centenario-antofagasta/5e0cf658ac0e9609c19d.webp",
      "imagenes-drive/torres-centenario-antofagasta/938714efff221a97ee13.webp",
      "imagenes-drive/torres-centenario-antofagasta/f85e303433746b6cb35f.webp",
      "imagenes-drive/torres-centenario-antofagasta/67a047755cdce7e4f359.webp",
      "imagenes-drive/torres-centenario-antofagasta/4e559b73fb5d150466bd.webp",
      "imagenes-drive/torres-centenario-antofagasta/08787655190fc7e4c73c.webp",
      "imagenes-drive/torres-centenario-antofagasta/e23cc57439443b8e2808.webp",
      "imagenes-drive/torres-centenario-antofagasta/a497abf3b1182b8ea8f0.webp",
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
      "imagenes-drive/nueva-manquehue/0b6415d2dae3bd22bd65.webp",
      "imagenes-drive/nueva-manquehue/34e061bb59a5f53ebb5d.webp",
      "imagenes-drive/nueva-manquehue/bd5f476859317db6737a.webp",
      "imagenes-drive/nueva-manquehue/feba7a6fa5be84c255ca.webp",
      "imagenes-drive/nueva-manquehue/64dd74ec629900c5afc3.webp",
      "imagenes-drive/nueva-manquehue/2824a17f6deeba3623cc.webp",
      "imagenes-drive/nueva-manquehue/615be862cc4d0d1a1446.webp",
      "imagenes-drive/nueva-manquehue/6801aabbba6097a9bd24.webp"
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
      "imagenes-drive/club-de-campo-vitacura/1dbd3847dd57b0384b4e.webp",
      "imagenes-drive/club-de-campo-vitacura/9652a5e4072749a9111a.webp",
      "imagenes-drive/club-de-campo-vitacura/f2ec9452ae0315c3f849.webp",
      "imagenes-drive/club-de-campo-vitacura/b31a5b5395f6f68afa9a.webp",
      "imagenes-drive/club-de-campo-vitacura/8454245fb61bac77a22a.webp",
      "imagenes-drive/club-de-campo-vitacura/28b4a2a1c7a56dffbce8.webp",
      "imagenes-drive/club-de-campo-vitacura/d0f99080df26a6188071.webp",
      "imagenes-drive/club-de-campo-vitacura/b57886b5b8a82b13eadf.webp",
      "imagenes-drive/club-de-campo-vitacura/c6f38c0a6e57117b9aee.webp",
      "imagenes-drive/club-de-campo-vitacura/a0752012ee7649e4e421.webp",
      "imagenes-drive/club-de-campo-vitacura/95dd778b63db2de4cbd9.webp",
      "imagenes-drive/club-de-campo-vitacura/6693473911fe0acdc1ba.webp",
      "imagenes-drive/club-de-campo-vitacura/e083af5e20d1e1540a8f.webp",
      "imagenes-drive/club-de-campo-vitacura/7b2ed19e3d8adcfe9134.webp",
      "imagenes-drive/club-de-campo-vitacura/922c6484bd5b463c8b3d.webp",
      "imagenes-drive/club-de-campo-vitacura/cfa050259104a16aab66.webp",
      "imagenes-drive/club-de-campo-vitacura/1e33b7cb9d39c750e503.webp",
      "imagenes-drive/club-de-campo-vitacura/827c6ae8a7fff21c07f1.webp",
      "imagenes-drive/club-de-campo-vitacura/6326e145fe4142ab6d22.webp",
      "imagenes-drive/club-de-campo-vitacura/326a38bf1c1c45c78a1a.webp",
      "imagenes-drive/club-de-campo-vitacura/f0edb59b5d14007daa1a.webp",
      "imagenes-drive/club-de-campo-vitacura/5129d02b458e79359ff6.webp"
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
      "imagenes-drive/puerto-nuevo-antofagasta/2ac86b74991fbf78dd99.webp",
      "imagenes-drive/puerto-nuevo-antofagasta/b1eba43a81261a1897d5.webp",
      "imagenes-drive/puerto-nuevo-antofagasta/04488b79243c65fa005a.webp",
      "imagenes-drive/puerto-nuevo-antofagasta/099a002a7267ab28d402.webp",
      "imagenes-drive/puerto-nuevo-antofagasta/58ac04f91619cac0059c.webp",
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
      "imagenes-drive/edificio-el-roble/5bdf2763ba2878216e9d.webp",
      "imagenes-drive/edificio-el-roble/e6700eb79def5eb92694.webp",
      "imagenes-drive/edificio-el-roble/70ed0fe552597ec9b12a.webp",
      "imagenes-drive/edificio-el-roble/d963feaf426234d9d777.webp",
      "imagenes-drive/edificio-el-roble/70b2bfa4df1eeb688de3.webp",
      "imagenes-drive/edificio-el-roble/89ae6155f0d97b1f4900.webp",
      "imagenes-drive/edificio-el-roble/8275a91d2c0b2fee783a.webp",
      "imagenes-drive/edificio-el-roble/72f33a179fba2f9f114b.webp",
      "imagenes-drive/edificio-el-roble/50020e4259df08475ac4.webp",
      "imagenes-drive/edificio-el-roble/881a97a93a790b779cb1.webp",
      "imagenes-drive/edificio-el-roble/2fd0c5f93f1030ebdced.webp"
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
      "imagenes-drive/la-capitania/04fbb5e74f6f470758ee.webp",
      "imagenes-drive/la-capitania/f6ed74749da8325f66ad.webp",
      "imagenes-drive/la-capitania/f105332d7ad01db3fe6f.webp",
      "imagenes-drive/la-capitania/1c315345f4f159567234.webp",
      "imagenes-drive/la-capitania/e3ef9b3a0f052bbfccb6.webp",
      "imagenes-drive/la-capitania/ec727fc3d42875fe82a0.webp",
      "imagenes-drive/la-capitania/160b808d7281c13156cc.webp",
      "imagenes-drive/la-capitania/358f2566834221bab006.webp",
      "imagenes-drive/la-capitania/292b1cdd9106f6ee8d61.webp"
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
      "imagenes-drive/bustamante/86565f04969cf2f76b0b.webp",
      "imagenes-drive/bustamante/b3b30a365f4d027b8399.webp",
      "imagenes-drive/bustamante/bb1212f8049627dd7927.webp",
      "imagenes-drive/bustamante/a147826d1d2f83ad4b25.webp",
      "imagenes-drive/bustamante/1e472b0146c13d0f991d.webp",
      "imagenes-drive/bustamante/49241cfb473ee4938cba.webp",
      "imagenes-drive/bustamante/05e463420bc9377be957.webp",
      "imagenes-drive/bustamante/5c24b39e3db4fbb170c6.webp",
      "imagenes-drive/bustamante/8dfeddec16a43a1a38e2.webp",
      "imagenes-drive/bustamante/7223cf3d81431c416361.webp",
      "imagenes-drive/bustamante/5422168817d96ebff230.webp",
      "imagenes-drive/bustamante/3e2d2e7b2169a5d75b16.webp",
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
      "imagenes-drive/data-center-chile-3/7739fcb2cd3fcd9468fe.webp",
      "imagenes-drive/data-center-chile-3/b2f461b9de09907cb820.webp",
      "imagenes-drive/data-center-chile-3/5e518e9c6d22c1cc72da.webp",
      "imagenes-drive/data-center-chile-3/961c53db2a91544d36d7.webp",
      "imagenes-drive/data-center-chile-3/13493308ac4049a6e591.webp",
      "imagenes-drive/data-center-chile-3/38fad863877ebd22f233.webp",
      "imagenes-drive/data-center-chile-3/4a83b40f7d49e641aa42.webp",
      "imagenes-drive/data-center-chile-3/2dd68d3a30f265b3a47f.webp"
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
      "imagenes-drive/data-center-scala-santa-teresa/4b925e25649e4ffea8f6.webp",
      "imagenes-drive/data-center-scala-santa-teresa/b3b5b08dcccf72311b82.webp",
      "imagenes-drive/data-center-scala-santa-teresa/89cdbff818a7492ee1ce.webp",
      "imagenes-drive/data-center-scala-santa-teresa/49442526083df4a7228f.webp",
      "imagenes-drive/data-center-scala-santa-teresa/2ed30c9a98ab8c5246ee.webp",
      "imagenes-drive/data-center-scala-santa-teresa/81126cd7a3eb0c5e9b3d.webp"
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
      "imagenes-drive/apoquindo-los-militares/ea96b007096df0441e4d.webp",
      "imagenes-drive/apoquindo-los-militares/5861fd4c195426fb1fd3.webp",
      "imagenes-drive/apoquindo-los-militares/15a3f13f2ea46423db49.webp",
      "imagenes-drive/apoquindo-los-militares/0bea404172569f8bb39f.webp",
      "imagenes-drive/apoquindo-los-militares/63d2d187dc25a76ce503.webp",
      "imagenes-drive/apoquindo-los-militares/9125b10876e4b56032e1.webp",
      "imagenes-drive/apoquindo-los-militares/f6ad8c15f0841f067dbb.webp",
      "imagenes-drive/apoquindo-los-militares/8c9ffd52fc6fa2717563.webp",
      "imagenes-drive/apoquindo-los-militares/cee073403a1740b036ce.webp",
      "imagenes-drive/apoquindo-los-militares/fc80423dc0e67f3f43f4.webp",
      "imagenes-drive/apoquindo-los-militares/df6354b4f3a541578081.webp",
      "imagenes-drive/apoquindo-los-militares/8e53ead9d9be7f018b7c.webp",
      "imagenes-drive/apoquindo-los-militares/9b2dde6b5ce0c4e6fd96.webp",
      "imagenes-drive/apoquindo-los-militares/781f875d8926d1b43583.webp",
      "imagenes-drive/apoquindo-los-militares/50ed0257adcbe6b218af.webp",
      "imagenes-drive/apoquindo-los-militares/e57deb4c711f9671b341.webp",
      "imagenes-drive/apoquindo-los-militares/81602575f33d4d929c4c.webp",
      "imagenes-drive/apoquindo-los-militares/e645517464b82f0b726b.webp",
      "imagenes-drive/apoquindo-los-militares/dee09063508a86485acf.webp",
      "imagenes-drive/apoquindo-los-militares/ef636d0cc6c16e1be709.webp",
      "imagenes-drive/apoquindo-los-militares/1c1cb4816c6ffdc767e9.webp",
      "imagenes-drive/apoquindo-los-militares/ec28aead69901c43d024.webp",
      "imagenes-drive/apoquindo-los-militares/8bfe912e609e31b44b73.webp",
      "imagenes-drive/apoquindo-los-militares/040b58865f9e0f5a345f.webp",
      "imagenes-drive/apoquindo-los-militares/13715f93732d59efa266.webp",
      "imagenes-drive/apoquindo-los-militares/3bb817b80159346ed557.webp",
      "imagenes-drive/apoquindo-los-militares/3e2eca799942886cf55f.webp",
      "imagenes-drive/apoquindo-los-militares/707dfa8584144d21b3d0.webp",
      "imagenes-drive/apoquindo-los-militares/4cfd8f04a9fd8bb1f83c.webp",
      "imagenes-drive/apoquindo-los-militares/1ff4c2a9c6615b7c77cc.webp",
      "imagenes-drive/apoquindo-los-militares/5aa51de72720119bb72c.webp",
      "imagenes-drive/apoquindo-los-militares/499586d033adb60e8d06.webp",
      "imagenes-drive/apoquindo-los-militares/58ec5cfd7c3b223cfaad.webp",
      "imagenes-drive/apoquindo-los-militares/ebcb3146ce28b2e4afa3.webp",
      "imagenes-drive/apoquindo-los-militares/05787fc1294f2244be3a.webp",
      "imagenes-drive/apoquindo-los-militares/6011093096eb39ce8a37.webp",
      "imagenes-drive/apoquindo-los-militares/808d6c450f956059838b.webp",
      "imagenes-drive/apoquindo-los-militares/5df2475f4cab170a44b0.webp",
      "imagenes-drive/apoquindo-los-militares/3dd57f49d7d85ec55393.webp",
      "imagenes-drive/apoquindo-los-militares/fcec77d8da24400ac4fc.webp",
      "imagenes-drive/apoquindo-los-militares/db71f203ed8c40a1d80b.webp",
      "imagenes-drive/apoquindo-los-militares/5670996a03a6c19b83ce.webp",
      "imagenes-drive/apoquindo-los-militares/38412a3ce034fa2ef9b6.webp",
      "imagenes-drive/apoquindo-los-militares/31ae8fa9138e1fd91947.webp",
      "imagenes-drive/apoquindo-los-militares/f68c7281cdb21301dac8.webp",
      "imagenes-drive/apoquindo-los-militares/8f5091e42c1e0a2548a8.webp",
      "imagenes-drive/apoquindo-los-militares/fc12b2e49ff9b55057be.webp",
      "imagenes-drive/apoquindo-los-militares/7d3828565a3cce4bc73b.webp",
      "imagenes-drive/apoquindo-los-militares/9a95f1dc3a864a32e376.webp",
      "imagenes-drive/apoquindo-los-militares/fdd7f4a26e0502d252e2.webp",
      "imagenes-drive/apoquindo-los-militares/4df7d31b7dc5745bb5ab.webp",
      "imagenes-drive/apoquindo-los-militares/ffdd5c413d9ccbcb3ed6.webp"
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
      "imagenes-drive/el-sauce/4b34f26b6ac84d68fae6.webp",
      "imagenes-drive/el-sauce/25fa0ad482dbd9f1e7f8.webp",
      "imagenes-drive/el-sauce/48db39821a62df48fc18.webp",
      "imagenes-drive/el-sauce/b0f66c85d77a92792171.webp",
      "imagenes-drive/el-sauce/0cf8f603c0298d489789.webp",
      "imagenes-drive/el-sauce/99ffce5d2ec3d8924722.webp",
      "imagenes-drive/el-sauce/13e6806aa0cf9560b7e9.webp",
      "imagenes-drive/el-sauce/73188f71cfed9f60e72b.webp",
      "imagenes-drive/el-sauce/bff7b4085f3379cc60f6.webp",
      "imagenes-drive/el-sauce/cd38321f296f119fa28f.webp",
      "imagenes-drive/el-sauce/266bce761791c0001fcb.webp",
      "imagenes-drive/el-sauce/0eae758dbecf19715787.webp",
      "imagenes-drive/el-sauce/f5b318fcf270db9b6e91.webp",
      "imagenes-drive/el-sauce/d2a9b9a1b88680316999.webp",
      "imagenes-drive/el-sauce/246e4b7ad5ecee1728c7.webp",
      "imagenes-drive/el-sauce/7272a61866fad2f9c337.webp",
      "imagenes-drive/el-sauce/611739579e3a1b20ddde.webp",
      "imagenes-drive/el-sauce/6656e54c6053f55032a7.webp",
      "imagenes-drive/el-sauce/1ab3b02ca307c16dcfdc.webp",
      "imagenes-drive/el-sauce/8dcddc67e9047b5c56cd.webp",
      "imagenes-drive/el-sauce/4451e0cc2d66b7ed055a.webp",
      "imagenes-drive/el-sauce/f15817b7f1f4723c67ff.webp",
      "imagenes-drive/el-sauce/d29feeda87220887f68a.webp",
      "imagenes-drive/el-sauce/2a250bb2523a2cb79752.webp",
      "imagenes-drive/el-sauce/d4dd06d43cecfdee9f33.webp",
      "imagenes-drive/el-sauce/4993b6f55e296027edab.webp",
      "imagenes-drive/el-sauce/417cd720284958900447.webp",
      "imagenes-drive/el-sauce/a845375ea6d3dbbe0315.webp",
      "imagenes-drive/el-sauce/b66a7328c57abc4d9fbe.webp",
      "imagenes-drive/el-sauce/d6fdb7a0f8342b4c5dd0.webp",
      "imagenes-drive/el-sauce/b9f79c7eb87d10e28c3c.webp",
      "imagenes-drive/el-sauce/831d2e6a5f8708ecb635.webp",
      "imagenes-drive/el-sauce/4c1211f605a2c47650ea.webp",
      "imagenes-drive/el-sauce/254ad068291930ffe352.webp",
      "imagenes-drive/el-sauce/b6bf849da4ca8726e2f9.webp",
      "imagenes-drive/el-sauce/0156f1e4674d7a4c1aea.webp",
      "imagenes-drive/el-sauce/e4626bf1a41d949f0315.webp",
      "imagenes-drive/el-sauce/e90e0f9a2b6e0a302a98.webp",
      "imagenes-drive/el-sauce/8d55b79491991f088c9f.webp",
      "imagenes-drive/el-sauce/87bedd37de8abba116c2.webp",
      "imagenes-drive/el-sauce/044ab1a2ae9511347968.webp",
      "imagenes-drive/el-sauce/a66e8f397c0b6b972db2.webp",
      "imagenes-drive/el-sauce/ac04bce13cd41ccd8824.webp",
      "imagenes-drive/el-sauce/a81ff82b13615c40e16f.webp",
      "imagenes-drive/el-sauce/0894195f1c8c38026724.webp",
      "imagenes-drive/el-sauce/d9e854f05f6eb9c19026.webp",
      "imagenes-drive/el-sauce/9a400f25eadefae00d06.webp",
      "imagenes-drive/el-sauce/49d9db404b03ca7fd4c1.webp",
      "imagenes-drive/el-sauce/debb7435f0504feaebd1.webp",
      "imagenes-drive/el-sauce/7c99a921558f1172b91a.webp",
      "imagenes-drive/el-sauce/9cc0cb303327e87ea193.webp",
      "imagenes-drive/el-sauce/0f2cc07c14b6603b06a7.webp",
      "imagenes-drive/el-sauce/a384b2afa752f663463b.webp",
      "imagenes-drive/el-sauce/ae9bfe06cb009afe9d4a.webp",
      "imagenes-drive/el-sauce/38e52cc6c656770a03db.webp"
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
      "imagenes-drive/paso-el-roble/b471f4e35586329f2dff.webp",
      "imagenes-drive/paso-el-roble/2b9356668ed3dacc4b80.webp",
      "imagenes-drive/paso-el-roble/db3733edf0740045f0c0.webp",
      "imagenes-drive/paso-el-roble/32f42ec81ea7d2db0a83.webp",
      "imagenes-drive/paso-el-roble/cff71a9f5bea8978e591.webp",
      "imagenes-drive/paso-el-roble/cb77509034dc9238a221.webp",
      "imagenes-drive/paso-el-roble/f34a81ad2c6bd27d763f.webp",
      "imagenes-drive/paso-el-roble/712387037b0ab7113814.webp",
      "imagenes-drive/paso-el-roble/2f2e81121ddca2614760.webp",
      "imagenes-drive/paso-el-roble/d28eb618130cb7282479.webp",
      "imagenes-drive/paso-el-roble/91d66ba7b8fb10dcd73c.webp",
      "imagenes-drive/paso-el-roble/44a32e7fc46becfd28b2.webp",
      "imagenes-drive/paso-el-roble/322369cb28d0f6a7fd38.webp",
      "imagenes-drive/paso-el-roble/c70424480385fa0e08ca.webp",
      "imagenes-drive/paso-el-roble/63473f87a1b2b39c7b7b.webp",
      "imagenes-drive/paso-el-roble/311ee0be6709a72c9e1a.webp",
      "imagenes-drive/paso-el-roble/78edd6b681fcb67ca9ba.webp",
      "imagenes-drive/paso-el-roble/bab1982918186bfd8a73.webp",
      "imagenes-drive/paso-el-roble/eb78ad677d84880a3b8e.webp",
      "imagenes-drive/paso-el-roble/677fca556b74aa04c0f1.webp",
      "imagenes-drive/paso-el-roble/7919e00c1e79c7ccdff0.webp",
      "imagenes-drive/paso-el-roble/97f42174647bef4b757c.webp",
      "imagenes-drive/paso-el-roble/048b938b10782e5672aa.webp",
      "imagenes-drive/paso-el-roble/5a1073a722b1664f5a59.webp",
      "imagenes-drive/paso-el-roble/7d16500d07410a67caa5.webp",
      "imagenes-drive/paso-el-roble/f35215cfdb905510dace.webp",
      "imagenes-drive/paso-el-roble/4da66481b371e26157b2.webp",
      "imagenes-drive/paso-el-roble/f0dbeadc1271b3e385f1.webp",
      "imagenes-drive/paso-el-roble/0b3aa83c94dfa141e7f6.webp",
      "imagenes-drive/paso-el-roble/1e4885fb17585e307ed5.webp",
      "imagenes-drive/paso-el-roble/1edbc96cf9db8ea6ec5c.webp",
      "imagenes-drive/paso-el-roble/7420b1a633ee2f4940a9.webp",
      "imagenes-drive/paso-el-roble/6c6488c1cf28ec1c7f10.webp",
      "imagenes-drive/paso-el-roble/732d3d543ad033a6a890.webp",
      "imagenes-drive/paso-el-roble/752f5b4ce803cfed098b.webp",
      "imagenes-drive/paso-el-roble/2b6458d6ec4a5a99158b.webp",
      "imagenes-drive/paso-el-roble/ec08a19643a94e43ea53.webp",
      "imagenes-drive/paso-el-roble/71d47fa8580adc58037e.webp",
      "imagenes-drive/paso-el-roble/839381547d08129d38bd.webp",
      "imagenes-drive/paso-el-roble/93c34d69b323af97a2f6.webp",
      "imagenes-drive/paso-el-roble/e078cc4cab4d74bc8ace.webp",
      "imagenes-drive/paso-el-roble/a0770b0f891fa968836c.webp",
      "imagenes-drive/paso-el-roble/4dcd823c3479170224e9.webp",
      "imagenes-drive/paso-el-roble/ae32b09f84575f247844.webp",
      "imagenes-drive/paso-el-roble/f6209327c77a1cdcba06.webp",
      "imagenes-drive/paso-el-roble/8785046e0853f2dc1264.webp",
      "imagenes-drive/paso-el-roble/5a1c2da70d9957fbd0a4.webp",
      "imagenes-drive/paso-el-roble/07ce81bed24f2e6fd8f1.webp",
      "imagenes-drive/paso-el-roble/5634ba56c8f418862ce6.webp",
      "imagenes-drive/paso-el-roble/65a27ec7be3675f4f5dc.webp",
      "imagenes-drive/paso-el-roble/197aa7b66ced9f51d51a.webp",
      "imagenes-drive/paso-el-roble/16e66474bd7c6ad66df1.webp",
      "imagenes-drive/paso-el-roble/97a5757d68a6df99a25c.webp"
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
      "imagenes-drive/norambuena/c900adde5f2dd2437113.webp",
      "imagenes-drive/norambuena/1b7ec0f91fac7d9cf9d2.webp",
      "imagenes-drive/norambuena/8d9ea061bb29d4c207cd.webp",
      "imagenes-drive/norambuena/9d71626430626dc8a249.webp",
      "imagenes-drive/norambuena/d289650a36fa27ef49df.webp",
      "imagenes-drive/norambuena/042a10db159c20c7e2f3.webp",
      "imagenes-drive/norambuena/f24f0d668bcac47fa582.webp",
      "imagenes-drive/norambuena/3a7cc4cb84e577610d62.webp",
      "imagenes-drive/norambuena/336f019ba8f325093e20.webp",
      "imagenes-drive/norambuena/03c970ec819a52bae84b.webp",
      "imagenes-drive/norambuena/f96f2110e1fcf65b91ef.webp",
      "imagenes-drive/norambuena/9982908480058e0c3644.webp",
      "imagenes-drive/norambuena/b6965905160490ff7b24.webp",
      "imagenes-drive/norambuena/d75f2a0fc66a41d892ff.webp"
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
      "imagenes-drive/manquehue-ffv/1d1f46639a90229ee6fa.webp",
      "imagenes-drive/manquehue-ffv/038f410fc5be351b9f1c.webp",
      "imagenes-drive/manquehue-ffv/8bb2284ee037a74eb414.webp",
      "imagenes-drive/manquehue-ffv/63558ad27c52d3122df2.webp",
      "imagenes-drive/manquehue-ffv/b657eeb1252444375ee5.webp",
      "imagenes-drive/manquehue-ffv/d23e482a48a21dfcb2e6.webp",
      "imagenes-drive/manquehue-ffv/f4f845d37967db35377a.webp",
      "imagenes-drive/manquehue-ffv/27c1f2fc1d7a53a5efb7.webp",
      "imagenes-drive/manquehue-ffv/4f83875773496b09e1b5.webp",
      "imagenes-drive/manquehue-ffv/0a9d28e7b995814bd0f1.webp"
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
      "imagenes-drive/nativo-riesco/9f1a9ae22f7a68d4dc34.webp",
      "imagenes-drive/nativo-riesco/daf5471e1fa61f3bc4a4.webp",
      "imagenes-drive/nativo-riesco/54e5a4f653c0c1da8441.webp",
      "imagenes-drive/nativo-riesco/41f0dbb416a6f7322d86.webp",
      "imagenes-drive/nativo-riesco/d6be78f9a3e886c137ae.webp",
      "imagenes-drive/nativo-riesco/dbc18acccbed609f81ce.webp",
      "imagenes-drive/nativo-riesco/04051ba7903cf996d4d2.webp",
      "imagenes-drive/nativo-riesco/a89b2c5880b47d0a0810.webp",
      "imagenes-drive/nativo-riesco/8ab0719d837d3cfdcdd9.webp",
      "imagenes-drive/nativo-riesco/35b8b8f7208dc80dca6d.webp",
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
      "imagenes-drive/parque-los-alerces/78d5cb56dbc182fc03eb.webp",
      "imagenes-drive/parque-los-alerces/2a541b2a18a936a0ff69.webp",
      "imagenes-drive/parque-los-alerces/35f033423a3f4e22dd3f.webp",
      "imagenes-drive/parque-los-alerces/c42505c47b644379e04a.webp",
      "imagenes-drive/parque-los-alerces/621710a3ba2620d60935.webp",
      "imagenes-drive/parque-los-alerces/39299e037da44ac67cca.webp",
      "imagenes-drive/parque-los-alerces/dc29bc6203195d4b7e02.webp",
      "imagenes-drive/parque-los-alerces/724f3b0992966dc236ab.webp",
      "imagenes-drive/parque-los-alerces/3de3c3e7a35efd532ca8.webp",
      "imagenes-drive/parque-los-alerces/d95ffecd9b1406868458.webp",
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
      "imagenes-drive/ilanes/2c12a11200f1a836fd3a.webp",
      "imagenes-drive/ilanes/39fa998dccde6e383ca0.webp",
      "imagenes-drive/ilanes/5e33f3dbbfc7397d417a.webp",
      "imagenes-drive/ilanes/f41f04981c6adcfbbf8f.webp",
      "imagenes-drive/ilanes/22195e5819b43cf1e5e9.webp",
      "imagenes-drive/ilanes/1a63a3c092e3e27544ba.webp",
      "imagenes-drive/ilanes/23e7e96af2c09babba8b.webp",
      "imagenes-drive/ilanes/96aa98ea3fb519f426da.webp",
      "imagenes-drive/ilanes/81623eda4399fd104261.webp",
      "imagenes-drive/ilanes/da0faff29f12e1b82231.webp",
      "imagenes-drive/ilanes/b748d52eb25a79c45108.webp",
      "imagenes-drive/ilanes/f981694a2856d7cb1700.webp",
      "imagenes-drive/ilanes/74e6d86d43760b02d7e7.webp",
      "imagenes-drive/ilanes/fdab3f3bfb0c97745d30.webp",
      "imagenes-drive/ilanes/c3bac454720cc835be59.webp"
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
      "imagenes-drive/don-pedro/68b78e970dc8dfd91b2d.webp",
      "imagenes-drive/don-pedro/0a07f709e6f990d3c120.webp",
      "imagenes-drive/don-pedro/640891036c2848ffbcad.webp",
      "imagenes-drive/don-pedro/f45249baa78db7615452.webp",
      "imagenes-drive/don-pedro/a862e61a251cb1a527ae.webp",
      "imagenes-drive/don-pedro/14372a46cad48e373ba9.webp",
      "imagenes-drive/don-pedro/0de98be2a975d93e8541.webp",
      "imagenes-drive/don-pedro/c53c1cac25b894c25898.webp"
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
      "imagenes-drive/centenario/501420a253ba2b3969f8.webp",
      "imagenes-drive/centenario/b477755034b7a4e34781.webp",
      "imagenes-drive/centenario/cb63ca4b5290c190d5b0.webp",
      "imagenes-drive/centenario/fd85fbd0059aa5346f07.webp",
      "imagenes-drive/centenario/fa4fc2d9be6693ee3521.webp",
      "imagenes-drive/centenario/16faad62898c30d53cac.webp",
      "imagenes-drive/centenario/51d1912577dfdaca8abc.webp",
      "imagenes-drive/centenario/6ac4606e7ec343b63892.webp",
      "imagenes-drive/centenario/932d33d17d78245cd3cd.webp",
      "imagenes-drive/centenario/049b36913fa5f3961bac.webp",
      "imagenes-drive/centenario/f1b143f735c1a6cad6d9.webp",
      "imagenes-drive/centenario/452f03c15594521a61b7.webp"
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
      "imagenes-drive/casas-la-rabida/6e426609ed7929a15f76.webp",
      "imagenes-drive/casas-la-rabida/b503b1442eac8bc37f55.webp",
      "imagenes-drive/casas-la-rabida/62bd9adaaac21291ed80.webp",
      "imagenes-drive/casas-la-rabida/78c2675e36420099b4f9.webp",
      "imagenes-drive/casas-la-rabida/666f3dcd239ad61221ca.webp",
      "imagenes-drive/casas-la-rabida/a286adfb7a602ab3f757.webp",
      "imagenes-drive/casas-la-rabida/9c68a97d7d2a5ff9c9ba.webp",
      "imagenes-drive/casas-la-rabida/c269dbcb502c8a46f9b8.webp"
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
    const images = Array.from(new Set(imageSources.filter(Boolean)));
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
    return Array.from(new Set([project.cover].concat(project.gallery || []).filter(Boolean)));
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
