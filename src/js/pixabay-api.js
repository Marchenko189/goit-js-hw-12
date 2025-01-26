import axios from 'axios';

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
    const searchParams = new URLSearchParams({
        q: searchedQuery,
        page: currentPage,
        per_page: 15,
        key: '48268337-f168b7768f25a86360e21e8ce',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return axios.get(`https://pixabay.com/api/?${searchParams}`);
};
