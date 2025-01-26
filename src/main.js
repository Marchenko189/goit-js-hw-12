import { fetchPhotosByQuery } from './js/pixabay-api';

import { createGalleryCardTemplate } from './js/render-functions';

import { createLoadingIndicator } from './js/render-functions'; 

import iziToast from "izitoast";

import SimpleLightbox from "simplelightbox";

const toggleLoadingIndicator = (loadingIndicator, show) => {
    if (show) {
        loadingIndicator.classList.add('show');
    } else {
        loadingIndicator.classList.remove('show');
    }
};

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
    event.preventDefault();

    const searchedQuery = event.currentTarget.elements.user_query.value.trim();

      if (searchedQuery === '') {
        iziToast.warning({
            title: "Caution",
            titleColor: '#fff',
            message: 'The field must be filled!',
            messageColor: '#fff',
            position: 'topRight',
            color: '#ffa000',
        });

        return;
    }

    let loadingIndicator = document.querySelector('.loading-container');
    if (!loadingIndicator) {
        loadingIndicator = createLoadingIndicator();
    }

     toggleLoadingIndicator(loadingIndicator, true);
    
    
    fetchPhotosByQuery(searchedQuery)
        .then(data => {

         toggleLoadingIndicator(loadingIndicator, false);

        if (data.hits.length === 0) {
            iziToast.error({
                title: "Error",
                titleColor: '#fff',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: '#fff',
                position: 'topRight',
                color: '#ef4040',
            });

            galleryEl.innerHTML = '';

            searchFormEl.reset();

            return;
        }
                const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');

            galleryEl.innerHTML = galleryTemplate;
            
            const lightbox = new SimpleLightbox('.js-gallery a', {
            captionsData: 'alt',
            captionDelay: 250
            });
            
            lightbox.refresh();
        })
        .catch(err => {

             loadingIndicator.classList.remove('show');

            console.log(err);
        });
    
    searchFormEl.reset();

};

 


searchFormEl.addEventListener('submit', onSearchFormSubmit);