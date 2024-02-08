import { galleryItems } from './gallery-items.js';
// Change code below this line

document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.querySelector('.gallery');

    function createGalleryItem(item) {
        const listItem = document.createElement('li');
        listItem.classList.add('gallery__item');

        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.original;

        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = item.preview;
        image.alt = item.description;

        link.appendChild(image);
        listItem.appendChild(link);

        return listItem;
    }

    function renderGallery() {
        const galleryFragment = document.createDocumentFragment();
        galleryItems.forEach(item => {
            const galleryItem = createGalleryItem(item);
            galleryFragment.appendChild(galleryItem);
        });
        galleryContainer.appendChild(galleryFragment);
    }

    renderGallery();

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });
});