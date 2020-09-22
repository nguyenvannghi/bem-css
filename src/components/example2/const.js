const htmlStyled = `<button className="button button-primary">Button</button>`;

const cssStyled = `.button {    
    border-radius: .4rem;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 700;
    height: 3.8rem;
    letter-spacing: .1rem;
    line-height: 3.8rem;
    padding: 0 3.0rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    &--primary{
        background-color: #9b4dca;
        border: 0.1rem solid #9b4dca;
    }
}`;

const scssStyled = `.button {    
    background-color: #9b4dca;
    border: 0.1rem solid #9b4dca;
    border-radius: .4rem;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 700;
    height: 3.8rem;
    letter-spacing: .1rem;
    line-height: 3.8rem;
    padding: 0 3.0rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
}
.button--primary{
    background-color: #9b4dca;
    border: 0.1rem solid #9b4dca;
}
`;

const ExampleStyled = {
    html: htmlStyled,
    css: cssStyled,
    sass: scssStyled,
};

export default ExampleStyled;
