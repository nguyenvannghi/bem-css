const htmlStyled = `<!-- 👍 DO THIS -->
<figure class="photo">
  <img class="photo__img" src="https://picsum.photos/400/300">
  <figcaption class="photo__caption">BEM - Block, Element, Modifier</figcaption>
</figure>

<!-- 👎 DON'T DO THIS -->
<figure class="photo">
  <img src="https://picsum.photos/400/300">
  <figcaption>BEM - Block, Element, Modifier</figcaption>
</figure>`;

const cssStyled = `.photo { 
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    margin: 0;
}
.photo img { 
    vertical-align: middle;
} 
.photo figcaption {
    font-size: 1.2rem;
    padding: 0.875rem;
    font-weight: 500;
}`;

const scssStyled = `.photo {    
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    margin: 0; 
    &__img {
        vertical-align: middle;
    } 
    &__caption {
        font-size: 1.2rem;
        padding: 0.875rem;
        font-weight: 500;
    }
} `;

const ExampleStyled = {
    html: htmlStyled,
    css: cssStyled,
    sass: scssStyled,
};

export default ExampleStyled;
