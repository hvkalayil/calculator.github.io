'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
".git/config": "8946e1b05a8f50a1a643eff02755a4a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "184746d9b82bc1d7cb6b3b51341a1ce1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eeb93114ea187e32c73cdb81f315af82",
".git/logs/refs/heads/master": "eeb93114ea187e32c73cdb81f315af82",
".git/logs/refs/remotes/origin/master": "5a2d85da20348126bb96962d02c8a2e4",
".git/objects/06/93540967227476e443600949390654d9b111e0": "e7ea94a3c6efa554df293cbdb8fd52ee",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/412088c0f53029fbe37f83cc035798c155dd75": "f1c06dfa8d91b6fb62ab8fcf4da73677",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2f/12bc8ac2f2f4df044a7060897ed24df115c3f4": "a387030d0477ce50fb0d54b9559f9b00",
".git/objects/34/1847f9062b7d2a02887eeae46226ae638bc023": "fe8cd2d91c7740771b9c41adc1438ec6",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/5b/fecda0e37c0a553ccf176696e12cb9f0040f5f": "4559c44c3a676be1d0c8dc16152b5dc3",
".git/objects/65/6f1eb73839780640342ca7caf263ee366dca7a": "9de1cc55a40d9bf4eefe06398da67e0c",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6f8e2deadb8357084d51fd09cc5225fc5e1708": "85c588ed92a033aca3dd6bdb45dbd90c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ed/d44fc008a27c7bf204b58e34e78dcd1b9525a9": "605e1f6cec088269ea1640f1a731014b",
".git/objects/ee/fbb36f64708dd6c1e3ebdaf518abd5f923462d": "234d1f6d2cfcde8c69c250a0b3f197e5",
".git/objects/f0/07cede04da616bc39da07979f98a903d3525ab": "bf3bc52ed98a9171beceaff01d76a54d",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/fc/470fe761ae777379115fbfb782f245558a8c56": "13117424ad9bd3204868e98919c7c18c",
".git/objects/fd/a55280d8c25875b1cfd4e854fdcbede49d0fae": "56620e06d49b611b74da346c706a7f3a",
".git/refs/heads/master": "b886c86aefb8ce1a2e38f87fa442244a",
".git/refs/remotes/origin/master": "b886c86aefb8ce1a2e38f87fa442244a",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "d30571e3e58e3b559be62e34ceeadb56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "70c5ccaa81ec2da6fc34a5dcb318498c",
"/": "70c5ccaa81ec2da6fc34a5dcb318498c",
"main.dart.js": "dec7b6abf4f3166df2a9bb4f2e500b18",
"manifest.json": "adf2b113940e8f2a0b7314c1bd23e4b6",
"README.md": "57483043d388213d94fc193dff038a58"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
