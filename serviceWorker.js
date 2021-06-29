//konstanta untu nama cache 
const assetBiography = "hany-biografi-assets";
// konstanta berisi array asset yang akan di cache
const assets = [
  '/',
  'index.html',  
  'portfolio-details.html',
  'assets/img/favicon.png',
  'assets/img/apple-touch-icon.png',
  'assets/img/profile.jpg',
  'assets/vendor/aos/aos.css',  
  'assets/vendor/bootstrap/css/bootstrap.min.css',
  'assets/vendor/bootstrap-icons/bootstrap-icons.css',
  'assets/vendor/boxicons/css/boxicons.min.css',
  'assets/vendor/glightbox/css/glightbox.min.css',
  'assets/vendor/swiper/swiper-bundle.min.css',
  'assets/css/style.css',
  'assets/vendor/aos/aos.js',
  'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
  'assets/vendor/glightbox/js/glightbox.min.js',
  'assets/vendor/isotope-layout/isotope.pkgd.min.js',
  'assets/vendor/swiper/swiper-bundle.min.js',
  'assets/vendor/typed.js/typed.min.js',
  'assets/vendor/waypoints/noframework.waypoints.js',
  'assets/js/app.js',
  'assets/js/main.js',
  'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i',
  'assets/img/profile-img.jpg',
  'assets/img/portfolio/portfolio-1.jpg',
  'assets/img/portfolio/portfolio-2.jpg',
  'assets/img/portfolio/portfolio-3.jpg',
  'assets/img/portfolio/portfolio-details-1.jpg',
  'assets/img/portfolio/portfolio-details-2.jpg',
  'assets/img/portfolio/portfolio-details-3.jpg'
];

// install service worker
self.addEventListener("install", event => {
  event.waitUntil(
    //buka asset yang akan dicache
    caches.open(assetBiography).then(cache => {
      // simpan cache file
      cache.addAll(assets);
    })
  );
});


//  service worker akan mulai menerima event fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    //cek response, jika ada response yang cocok tampilkan dari cache dan jika tidak fetch ulang dari network
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});



