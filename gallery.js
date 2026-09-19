// Shared photo-gallery behavior for journal posts.
// Two patterns are supported: a single photo set per post (.mySlides + .dot),
// and several photo sets per post (.mySlides1 .. .mySlides7, one gallery each).

// ---------- Single-gallery slideshow ----------
let slideIndex = 1;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (!slides.length) return;
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

if (document.getElementsByClassName("mySlides").length) {
  showSlides(slideIndex);
}

// ---------- Multi-gallery slideshow ----------
const gallerySlideIndex = [1, 1, 1, 1, 1, 1, 1];
const gallerySlideId = [
  "mySlides1",
  "mySlides2",
  "mySlides3",
  "mySlides4",
  "mySlides5",
  "mySlides6",
  "mySlides7",
];

function showGallerySlides(n, no) {
  const x = document.getElementsByClassName(gallerySlideId[no]);
  if (!x.length) return;
  if (n > x.length) gallerySlideIndex[no] = 1;
  if (n < 1) gallerySlideIndex[no] = x.length;
  for (let i = 0; i < x.length; i++) x[i].style.display = "none";
  x[gallerySlideIndex[no] - 1].style.display = "block";
}

function plusGallerySlides(n, no) {
  showGallerySlides((gallerySlideIndex[no] += n), no);
}

function currentGallerySlide(n, no) {
  showGallerySlides((gallerySlideIndex[no] = n), no);
}

gallerySlideId.forEach((_, idx) => showGallerySlides(1, idx));
