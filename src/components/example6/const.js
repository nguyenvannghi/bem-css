const htmlStyled = `<!-- 👍 DO THIS -->
<div class="some-thesis some-thesis--fast-read">
  <div class="some-thesis__some-element"></div>
</div>

<!-- 👎 DON'T DO THIS -->
<div class="somethesis somethesis--fastread">
  <div class="somethesis__someelement"></div>
</div>`;

const cssStyled = `.some-thesis { }
.some-thesis--fast-read { }
.some-thesis__some-element { }`;

const scssStyled = `.some-thesis { 
    &--fast-read {

    }
    &__some-element {

    }
} `;

const ExampleStyled = {
    html: htmlStyled,
    css: cssStyled,
    sass: scssStyled,
};

export default ExampleStyled;
