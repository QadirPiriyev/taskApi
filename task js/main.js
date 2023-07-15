
    function getRandomImages(count) {
      const apiKey = 'Dc-05zPgtvt5hUgpZy9TA0HboGOaYLZGuFDIabYxXwU';
      const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const imageContainer = document.querySelector('.image-container');
          imageContainer.innerHTML = '';

          data.forEach(photo => {
            const imgElement = document.createElement('img');
            imgElement.src = photo.urls.small;
            imgElement.alt = photo.alt_description;

            imageContainer.appendChild(imgElement);
          });
        })
        .catch(error => console.log(error));
    }
