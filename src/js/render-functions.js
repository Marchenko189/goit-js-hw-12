export const createGalleryCardTemplate = imgInfo => {

  return `
    <li class="js-gallery-card">
    <div class="container-gallery">
     <a class="gallery-link" href="${imgInfo.largeImageURL}">
      <img
      class="js-gallery-img"
      src="${imgInfo.webformatURL}" 
      alt="${imgInfo.tags}" 
      />
      </a>
      <div class="js-gallery-info">
  <p class="js-gallery-stats">
    Likes <span class="js-gallery-span">${imgInfo.likes}</span>
    </p>
  <p class="js-gallery-stats">
    Views <span class="js-gallery-span">${imgInfo.views}</span>
    </p>
  <p class="js-gallery-stats">
    Comments <span class="js-gallery-span">${imgInfo.comments}</span>
    </p>
  <p class="js-gallery-stats">
    Downloads <span class="js-gallery-span">${imgInfo.downloads}</span>
  </p>
    </div>
    </div>
    </li>
  `;
};

export const createLoadingIndicator = () => {
  const loadingIndicatorHTML = document.createElement('div');
  loadingIndicatorHTML.textContent = 'Loading images, please wait...';
  loadingIndicatorHTML.classList.add('loading-container');

  const span = document.createElement('span');
  span.classList.add('loader');

  loadingIndicatorHTML.appendChild(span);
  
  document.body.appendChild(loadingIndicatorHTML);

  return loadingIndicatorHTML;
}
