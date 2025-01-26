export const fetchPhotosByQuery = searchedQuery => {
   return fetch(
        `https://pixabay.com/api/?q=${searchedQuery}&key=48268337-f168b7768f25a86360e21e8ce&image_type=photo&orientation=horizontal&safesearch=true`
    )
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        });
};