const htmlStyled = `<!-- 👍 DO THIS -->
<figure className="photo">
  <img className="photo__img photo__img--framed" src="https://picsum.photos/400/300" alt="" />
  <figcaption className="photo__caption photo__caption--large">BEM - Block, Element, Modifier</figcaption>
</figure>

<!-- 👎 DON'T DO THIS -->
<figure className="photo photo--framed photo--large">
  <img className="photo__img" src="https://picsum.photos/400/300" alt="" />
  <figcaption className="photo__caption">BEM - Block, Element, Modifier</figcaption>
</figure>`;

const cssStyled = `
.photo__img--framed {
    border: 1rem solid #2185d0;
}
.photo__caption--large {
    font-size: 2rem;
    border: 1rem solid transparent;
}`;

const scssStyled = `.photo { 
   &__img { 
      &--framed {
        border: 1rem solid #2185d0;
       }
  }
  &__caption { 
      &--large {
        font-size: 2rem;
        border: 1rem solid transparent;
       }
  }
} `;

const ExampleStyled = {
    html: htmlStyled,
    css: cssStyled,
    sass: scssStyled,
};

export default ExampleStyled;
