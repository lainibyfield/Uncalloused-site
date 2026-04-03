// Uncalloused image rotation
// Add images to each pool as the library grows.
// Any element with data-pool="poolname" gets a random image from that pool.

const IMAGE_POOLS = {
  // AMIR (artist in residence — AI rendered from real feet)
  // amir-sole-to-sole.png — pencil, two feet sole to sole. Tender. Manifesto fixed image.
  // amir-toes-ink.png — ink cross-hatching, single foot, dark nails. Anatomical.
  // amir-beach-watercolor.png — watercolor, sandy feet toward ocean, striped bikini. June/earthing.

  // PHOTOGRAPHY / ILLUSTRATION
  // steel-toe-man.png — man lying down, worn sneaker sole over face. THE Steel Toe image.
  // sock-monk.png — anime monk running with armful of socks, hearts. The punchline.
  // holi-sneakers.png — paint-splattered sneakers at Holi festival. The loud one.
  // studio-stiletto.png — studio shot, crystal stilettos, red nails. Soft energy.
  // professor.png — Black woman professor, heels up, chalkboard. Intellectual/sensual.
  // bath-triptych.png — illustrated bath scenes, feet in bubbles, romance novel. Warm.
  // stocking-ad.png — vintage stocking ad, leather pants + Vans + lace-up stiletto.
  // stocking-ad-v2.png — vintage stocking ad, kitten heels, period-accurate.
  // hiking-sandal.png — real foot, hiking sandal, dirt, wildflowers. Body-neutral.
  // rainbow-socks.png — rainbow knee socks, Converse, Polaroid. Playful/queer.
  // grocery-wedge.png — illustrated Black woman in wedges, grocery store, 70s editorial.
  // rhinestone-heels.png — rhinestone platforms, dressing room lights. Glamour.
  // dutch-still-life.png — Dutch Golden Age still life, no feet. Rue's Desk atmosphere.

  // LOTUS FOOT ESSAY PAIR — use together on the lotus feet essay page
  // sock-payment-comic.png — retro 4-panel comic, woman pays mechanic in socks. The funniest image in the library.
  // lotus-foot-bound.png — hyperrealistic AI rendering of bound foot. Sole & Culture essay only.
  // lotus-foot-reflexology.png — reflexology zones mapped onto bound foot, with misspellings.
  //   The zones chart for a foot reflexology never accounted for. Also Rue's Desk artifact.

  hero: [
    'images/sock-payment-comic.png',
    'images/sock-payment-comic.png',
    'images/steel-toe-man.png',
    'images/sock-monk.png',
    'images/amir-sole-to-sole.png',
    'images/amir-toes-ink.png',
    'images/amir-beach-watercolor.png',
    'images/holi-sneakers.png',
    'images/studio-stiletto.png',
    'images/professor.png',
    'images/bath-triptych.png',
    'images/stocking-ad.png',
    'images/stocking-ad-v2.png',
    'images/hiking-sandal.png',
    'images/rainbow-socks.png',
    'images/grocery-wedge.png',
    'images/rhinestone-heels.png',
    'images/dutch-still-life.png'
  ],
  'sole-culture': [
    'images/amir-beach-watercolor.png',
    'images/amir-sole-to-sole.png',
    'images/amir-toes-ink.png',
    'images/holi-sneakers.png',
    'images/stocking-ad.png',
    'images/stocking-ad-v2.png',
    'images/grocery-wedge.png',
    'images/bath-triptych.png',
    'images/sock-payment-comic.png'
  ],
  soft: [
    'images/steel-toe-man.png',
    'images/dutch-still-life.png',
    'images/amir-sole-to-sole.png',
    'images/studio-stiletto.png',
    'images/professor.png',
    'images/rhinestone-heels.png',
    'images/bath-triptych.png'
  ],
  pedicare: [
    'images/amir-beach-watercolor.png',
    'images/amir-toes-ink.png',
    'images/amir-sole-to-sole.png',
    'images/bath-triptych.png',
    'images/hiking-sandal.png',
    'images/rainbow-socks.png'
  ],
  calendar: [
    'images/amir-beach-watercolor.png',
    'images/amir-sole-to-sole.png',
    'images/holi-sneakers.png',
    'images/hiking-sandal.png',
    'images/rainbow-socks.png',
    'images/grocery-wedge.png',
    'images/rhinestone-heels.png'
  ],
  'steel-toe': [
    'images/sock-payment-comic.png',
    'images/sock-payment-comic.png',
    'images/steel-toe-man.png',
    'images/sock-monk.png',
    'images/holi-sneakers.png',
    'images/amir-beach-watercolor.png',
    'images/amir-sole-to-sole.png',
    'images/hiking-sandal.png',
    'images/professor.png',
    'images/rhinestone-heels.png'
  ],
  // Reserved for the lotus feet essay page — not in general rotation
  'lotus-essay': [
    'images/lotus-foot-bound.png',
    'images/lotus-foot-reflexology.png'
  ]
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function loadRotatingImages() {
  document.querySelectorAll('[data-pool]').forEach(slot => {
    const pool = slot.dataset.pool;
    const images = IMAGE_POOLS[pool];
    if (!images || !images.length) return;
    const src = pickRandom(images);
    const img = document.createElement('img');
    img.alt = '';
    img.src = src;
    img.onload = () => img.classList.add('loaded');
    if (img.complete) img.classList.add('loaded');
    slot.appendChild(img);
  });
}

document.addEventListener('DOMContentLoaded', loadRotatingImages);
