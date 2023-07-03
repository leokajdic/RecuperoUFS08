const photosId = [13914, 51719, 78503, 16858];

photosId.forEach((idArtwork) => {
  fetch(`https://api.artic.edu/api/v1/artworks/${idArtwork}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const artwork = data.data;
      const imageId = artwork.image_id;
      const title = artwork.title;
      const artist = artwork.artist_title;
      const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/300,/0/default.jpg`;

      if (idArtwork === 78503) {
        // Portrait div
        const portraitDiv = document.querySelector(".portrait");

        const image = document.createElement("img");
        image.src = imageUrl;

        const titleElement = document.createElement("h2");
        titleElement.textContent = title;

        const artistElement = document.createElement("p");
        artistElement.textContent = artist;

        portraitDiv.appendChild(image);
        portraitDiv.appendChild(titleElement);
        portraitDiv.appendChild(artistElement);
      } else {
        // Grid divs
        const gridDiv = document.querySelector(".photos");

        const image = document.createElement("img");
        image.src = imageUrl;

        const titleElement = document.createElement("h2");
        titleElement.textContent = title;

        const artistElement = document.createElement("p");
        artistElement.textContent = artist;

        const artworkContainer = document.createElement("div");
        artworkContainer.classList.add("artwork");

        artworkContainer.appendChild(image);
        artworkContainer.appendChild(titleElement);
        artworkContainer.appendChild(artistElement);

        gridDiv.appendChild(artworkContainer);
      }
    });
});
