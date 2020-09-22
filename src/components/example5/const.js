const htmlStyled = `<!-- 👍 DO THIS -->
<figure className="photo photo--actived">
    <img className="photo__img" src="https://picsum.photos/400/300" alt="" />
    <figcaption className="photo__caption">BEM - Block, Element, Modifier</figcaption>
</figure>

<!-- 👎 DON'T DO THIS -->
<figure className="photo">
    <img className="photo__img photo__img--actived" src="https://picsum.photos/400/300" alt="" />
    <figcaption className="photo__caption photo__img--actived">BEM - Block, Element, Modifier</figcaption>
</figure>`;

const cssStyled = `
.photo--actived .photo__img {
    filter: grayscale(100%);
}
.photo--actived photo__caption {
    color: sandybrown;
}`;

const scssStyled = `.photo { 
    &--actived {
        .photo__img { 
            filter: grayscale(100%);
        }
        .photo__caption { 
            color: sandybrown;
        }
    }
} `;

const ExampleStyled = {
    html: htmlStyled,
    css: cssStyled,
    sass: scssStyled,
};

export default ExampleStyled;
