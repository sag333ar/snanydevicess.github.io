'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3f05136342cf35196aa8b4827728ac20",
"version.json": "43c82708238db606cc63f05ee119fcf6",
"index.html": "3129813a8803cf07456cec0ad788943b",
"/": "3129813a8803cf07456cec0ad788943b",
"main.dart.js": "55c988a70f43c39d8e12e017399681c2",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c9a037a3196024d7d8724b4b82323636",
"assets/AssetManifest.json": "e94b32b71905676bda19adf6d7c57806",
"assets/NOTICES": "1f4a11d7bbc91cc947ef6d0a766aa32d",
"assets/FontManifest.json": "8250f91b7632453830daa313564294d8",
"assets/AssetManifest.bin.json": "f2bf415196b95ea881c80ef29256be53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ae794a031d94f387fbe3a85b20e19e10",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/playstore_logo.png": "d040ea72c5e52b6d992a8cefda3f5fd6",
"assets/assets/images/background2.jpg": "b707666963bd7dc88303e6ad13d62d67",
"assets/assets/images/background3.jpg": "a190113c626abcf93efe055b9473b88e",
"assets/assets/images/flutter.png": "926c571524821c6a7f4609b4ed2f1ab7",
"assets/assets/images/android.png": "88887edf1d58ae99c18d8fdf723eb18b",
"assets/assets/images/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/images/aboutbackground.png": "01c0cd8ac40931ba15b3a60abab01210",
"assets/assets/images/homebackground.jpg": "25616996c0b08168ee6b6694aaa26d60",
"assets/assets/images/teammember2.png": "392e1d2943438e1cc927679d7ab73e61",
"assets/assets/images/teammember1.png": "76932ff265a43f85c526d1be0591af41",
"assets/assets/images/sn/logos/three_speak_logo.png": "60b8c76507e1b6080fdcb995d9dedd39",
"assets/assets/images/sn/logos/hifind_logo.png": "8195532e1781f1ac5140190fe5d4a2dc",
"assets/assets/images/sn/logos/hive_logo.png": "eb70b4860ddab728a7bcf87b41bc2ce7",
"assets/assets/images/sn/logos/ecency_logo.png": "6cd891e75bdd6541f3f74edb39f33a5b",
"assets/assets/images/sn/logos/inbox_logo.png": "65521371a0b1f11e42920a69b2ba074d",
"assets/assets/images/sn/showcase/waves_frame.png": "fd4de2c1009135df613195546d4688b3",
"assets/assets/images/sn/showcase/hive_frame.png": "5600d5211574de9056797b94ddf2ad88",
"assets/assets/images/sn/showcase/plugin_frame.png": "89f47196ad51ff1c240b0353f5580558",
"assets/assets/images/sn/showcase/three_speak_frame.png": "464e32f217ef6a5db8dca040a53838a2",
"assets/assets/images/sn/showcase/hifind_frame.png": "2a91667579586dcbcb9432908472d6d0",
"assets/assets/images/sn/showcase/inbox_frame.png": "78a89757131b779af31492cfc8b3e04d",
"assets/assets/images/swift.png": "f714d1329c4cea76a164cb52dfa75382",
"assets/assets/images/contact1.png": "acb71e0f82f275957f59f032221e25d1",
"assets/assets/images/mongodb.png": "3d1241f4b97dcbb4b375cbf298bcbc80",
"assets/assets/images/nodejs.png": "046e88944e44341e9fa89acc2498c57f",
"assets/assets/icons/dartlang-icon.svg": "384ad99903293e87f01f49214db88050",
"assets/assets/icons/flutterio-icon.svg": "59a662c262bb9fae1751abe4d13abb84",
"assets/assets/icons/firebase-icon.svg": "10b0719343408095f5a9b369e0787115",
"assets/assets/fonts/outfit/Outfit-Bold.ttf": "2960062c0977e0bbf1b8c600053f8125",
"assets/assets/fonts/outfit/Outfit-Regular.ttf": "55c9ece0a0c8820c818f4664c8ce72ae",
"assets/assets/fonts/outfit/Outfit-SemiBold.ttf": "389906e4d2d35f37a084f1deacf9890f",
"assets/assets/fonts/outfit/Outfit-Medium.ttf": "f10848bb47ef68b5a90b8c3a6aecdadc",
"assets/assets/fonts/outfit/Outfit-Light.ttf": "8c36fc1fcc1cd961faaedf0a734f6d68",
"assets/assets/fonts/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/itim/Itim-Regular.ttf": "4a3f2cf1ced5257b6af803f4b86bf427",
"assets/assets/fonts/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/animations/Animation%2520-%25201738827162358.json": "aa801c154e5038ebeb0d14db2fbf659a",
"assets/assets/animations/Animation%2520-%25201738827331908.json": "e5c0ae0ed3c90e8d18c38d32862ac257",
"assets/assets/animations/Animation%2520-%25201738828192966.json": "07244784ffe1d15a66b2792fa9119a1a",
"assets/assets/animations/Animation%2520-%25201738827251673.json": "ab819bc7ddbca7dcd5f74fffc02e2f53",
"assets/assets/animations/Animation%2520-%25201738816702168.json": "ada5cbbe628a7911c85048a2c162dd01",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
