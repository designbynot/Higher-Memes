const cacheName = 'avant-gallery-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/icon-192x192.png', // Your app icon
  '/images/icon-512x512.png', // Your app icon
  // Add paths to all images and other assets you want to cache
  '/images/HIGHERWAV1.png',
  '/images/HIGHERWAV2.png',
  '/images/HIGHERWAV3.png',
  '/images/HIGHERWAV4.png',
  '/images/HIGHERWAV5.png',
  '/images/HIGHERWAV6.png',
  '/images/HIGHERWAV7.png',
  '/images/HIGHERWAV8.png',
  '/images/HIGHERWAV9.png',
  '/images/HIGHERWAV10.png',
  '/images/HIGHERWAV11.png',
  '/images/HIGHERWAV12.png',
  '/images/HIGHERWAV13.png',
  '/images/HIGHERWAV14.png',
  '/images/HIGHERWAV15.png',
  '/images/HIGHERWAV16.png',
  '/images/HIGHERWAV17.png',
  '/images/HIGHERWAV18.png',
  '/images/HIGHERWAV19.png',
  '/images/HIGHERWAV20.png',
  '/images/HIGHERWAV21.png',
  '/images/HIGHERWAV22.png',
  '/images/HIGHERWAV23.png',
  '/images/HIGHERWAV24.png',
  '/images/HIGHERWAV25.png',
  '/images/HIGHERWAV26.png',
  '/images/HIGHERWAV27.png',
  '/images/HIGHERWAV28.png',
  '/images/HIGHERWAV29.png',
  '/images/HIGHERWAV30.png',
  '/images/HIGHERWAV31.png',
  '/images/HIGHERWAV32.png',
  '/images/HIGHERWAV33.png',
  '/images/HIGHERWAV34.png',
  '/images/HIGHERWAV35.png',
  '/images/HIGHERWAV36.png',
  '/images/HIGHERWAV37.png',
  '/images/HIGHERWAV38.png',
  '/images/HIGHERWAV39.png',
  '/images/HIGHERWAV40.png',
  '/images/HIGHERWAV41.png',
  '/images/HIGHERWAV42.png',
  '/images/HIGHERWAV43.png',
  '/images/HIGHERWAV44.png',
  '/images/HIGHERWAV45.png',
  '/images/HIGHERWAV46.png',
  '/images/HIGHERWAV47.png',
  '/images/HIGHERWAV48.png',
  '/images/HIGHERWAV49.png',
  '/images/HIGHERWAV50.png',
  '/images/HIGHERWAV51.png',
  '/images/HIGHERWAV52.png',
  '/images/HIGHERWAV53.png',
  '/images/HIGHERWAV54.png',
  '/images/HIGHERWAV55.png',
  '/images/HIGHERWAV56.png',
  '/images/HIGHERWAV57.png',
  '/images/HIGHERWAV58.png',
  '/images/HIGHERWAV59.png',
  '/images/HIGHERWAV60.png',
  '/images/HIGHERWAV61.png',
  '/images/HIGHERWAV62.png',
  '/images/HIGHERWAV63.png',
  '/images/HIGHERWAV64.png',
  '/images/HIGHERWAV65.png',
  '/images/HIGHERWAV66.png',
  '/images/HIGHERWAV67.png',
  '/images/HIGHERWAV68.png',
  '/images/HIGHERWAV69.png',
  '/images/HIGHERWAV70.png',
  '/images/HIGHERWAV71.png',
  '/images/HIGHERWAV72.png',
  '/images/HIGHERWAV73.png',
  '/images/HIGHERWAV74.png',
  '/images/HIGHERWAV75.png',
  '/images/HIGHERWAV76.png',
  '/images/HIGHERWAV77.png',
  '/images/HIGHERWAV78.png',
  '/images/HIGHERWAV79.png',
  '/images/HIGHERWAV80.png',
  '/images/HIGHERWAV81.png',
  '/images/HIGHERWAV82.png',
  '/images/HIGHERWAV83.png',
  '/images/HIGHERWAV84.png',
  '/images/HIGHERWAV85.png',
  '/images/HIGHERWAV86.png',
  '/images/HIGHERWAV87.png',
  '/images/HIGHERWAV88.png',
  '/images/HIGHERWAV89.png',
  '/images/HIGHERWAV90.png'
  // ... include all your image paths
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});