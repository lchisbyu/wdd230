const images=document = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src)");
    if (!src) {
        return;
    }
}
const imgOptions = {};

const imgObserver = new IntersectionObserver((enteries, imgObserver) => {
    entries.forEach(entry => {
        return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
})
}, imgOptions)
