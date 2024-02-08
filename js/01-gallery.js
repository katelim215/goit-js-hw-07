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
        image.dataset.source = item.original;

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

    galleryContainer.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.nodeName === 'IMG') {
            const largeImageUrl = event.target.dataset.source;
            openModal(largeImageUrl);
        }
    });

    function openModal(imageUrl) {
        const instance = basicLightbox.create(`
            <img src="${imageUrl}" width="800" height="600">
        `);
        instance.show();
    }

    document.addEventListener('keydown', function (event) {
        const instance = basicLightbox.instance();
        if (event.key === 'Escape' && instance.visible()) {
            instance.close();
        }
    });
});
