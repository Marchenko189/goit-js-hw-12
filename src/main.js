import { fetchPhotosByQuery } from './js/pixabay-api';

import { createGalleryCardTemplate } from './js/render-functions';

import { createLoadingIndicator } from './js/render-functions'; 

import { toggleLoadingIndicator } from './js/render-functions';

import iziToast from "izitoast";

import SimpleLightbox from "simplelightbox";


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more-btn');
let loadingIndicator = document.querySelector('.loading-container');


let page = 1;
let searchedQuery = '';

const onSearchFormSubmit = async event => {
    try {
    event.preventDefault();

    searchedQuery = event.currentTarget.elements.user_query.value.trim();

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
        
        page = 1;

        loadMoreBtnEl.classList.add('is-hidden');

    if (!loadingIndicator) {
        loadingIndicator = createLoadingIndicator();
    }

    toggleLoadingIndicator(loadingIndicator, true);
    
    
    const { data } = await fetchPhotosByQuery(searchedQuery, page);

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

    if (data.totalHits > page * 15) {
      loadMoreBtnEl.classList.remove('is-hidden');

      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
    }

    const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');

    galleryEl.innerHTML = galleryTemplate;
            
    const lightbox = new SimpleLightbox('.js-gallery a', {
    captionsData: 'alt',
    captionDelay: 250
    });
            
    lightbox.refresh();
    
    searchFormEl.reset(); 
    } catch (err) {
        console.log(err);
    }
};

 
searchFormEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtnClick = async event => {
    try {
    loadMoreBtnEl.classList.add('is-hidden');
    page++;

    if (!loadingIndicator) {
        loadingIndicator = createLoadingIndicator();
    }

    toggleLoadingIndicator(loadingIndicator, true);
    
    const { data } = await fetchPhotosByQuery(searchedQuery, page);
      
    toggleLoadingIndicator(loadingIndicator, false);

    const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);
    
    let galleryCard = document.querySelector('.js-gallery-card');
        let rect = galleryCard.getBoundingClientRect();
        console.log(rect);
        window.scrollBy({
            top: 2 * rect.height,
            behavior: "smooth",
        });
    

    if (page * 15 >= data.totalHits) {
      loadMoreBtnEl.classList.add('is-hidden');

      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
       
      iziToast.info({
        titleColor: '#fff',
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: '#fff',
        position: 'topRight',
        color: '#59a10d',
        }); 
    }
        
    else {
      loadMoreBtnEl.classList.remove('is-hidden');
        }
        
  } catch (err) {
    console.log(err);
  }
};
