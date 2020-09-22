import React, { useState } from 'react';
import classnames from 'classnames';
import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import BoxTop from 'components/_base/boxTop';
import BoxMid from 'components/_base/boxMid';
import { renderContent } from 'utils';
import { STYLED } from 'consts';
import ExampleStyled from 'components/example5/const';

export default function Example4() {
    const [styled, setStyled] = useState(STYLED.HTML);
    return (
        <>
            <Head>Style Elements Based on the Component Modifier</Head>
            <div className="example-box">
                <h2 className="example-box__title">Style Elements Based on the Component Modifier</h2>
                <blockquote className="example-box__quote">
                    If you find yourself consistently modifying elements of the same component together in the same way, then consider
                    adding the modifier to the base of the component and adjusting styles for each child element based on that one modifier.
                    This will increase specificity, but it makes modifying your component much simpler.
                </blockquote>
                <div className="example-box__content">
                    <div className="box">
                        <BoxTop>
                            <h3 className="box__title">UI</h3>
                            <figure className="photo photo--actived">
                                <img className="photo__img" src="https://picsum.photos/400/300" alt="" />
                                <figcaption className="photo__caption">BEM - Block, Element, Modifier</figcaption>
                            </figure>
                        </BoxTop>
                        <BoxMid>
                            <h3 className="box__title">Source</h3>
                            <button
                                type="button"
                                className={classnames('btn', {
                                    'btn--disabled': styled === STYLED.HTML,
                                    'btn--primary': styled !== STYLED.HTML,
                                })}
                                style={{ marginRight: '10px' }}
                                disabled={styled === STYLED.HTML}
                                title="HTML"
                                onClick={() => setStyled(STYLED.HTML)}>
                                HTML
                            </button>
                            <button
                                type="button"
                                className={classnames('btn', {
                                    'btn--disabled': styled === STYLED.SASS,
                                    'btn--primary': styled !== STYLED.SASS,
                                })}
                                style={{ marginRight: '10px' }}
                                disabled={styled === STYLED.SASS}
                                title="SASS"
                                onClick={() => setStyled(STYLED.SASS)}>
                                SASS
                            </button>
                            <button
                                type="button"
                                className={classnames('btn', {
                                    'btn--disabled': styled === STYLED.CSS,
                                    'btn--primary': styled !== STYLED.CSS,
                                })}
                                disabled={styled === STYLED.CSS}
                                title="CSS"
                                onClick={() => setStyled(STYLED.CSS)}>
                                CSS
                            </button>
                            <SyntaxHighlighter language={styled === STYLED.HTML ? 'html' : 'css'}>
                                {renderContent(ExampleStyled, styled)}
                            </SyntaxHighlighter>
                        </BoxMid>
                    </div>
                </div>
            </div>
        </>
    );
}

Example4.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});
