import React, { useState } from 'react';
import classnames from 'classnames';
import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import BoxTop from 'components/_base/boxTop';
import BoxMid from 'components/_base/boxMid';
import { renderContent } from 'utils';
import { STYLED } from 'consts';
import ExampleStyled from 'components/example6/const';

export default function Example4() {
    const [styled, setStyled] = useState(STYLED.HTML);
    return (
        <>
            <Head>Multi-word Names</Head>
            <div className="example-box">
                <h2 className="example-box__title">Multi-word Names</h2>
                <blockquote className="example-box__quote">
                    BEM names intentionally use double underscores and double hyphens instead of single to separate Block-Element-Modifier.
                    The reason is so that single hyphens can be used as word separators. Class names should be very readable, so
                    abbreviation isn’t always desirable unless the abbreviations are universally recognizable.
                </blockquote>
                <div className="example-box__content">
                    <div className="box">
                        <BoxTop>
                            <h3 className="box__title">UI</h3>
                            <div className="some-thesis some-thesis--fast-read">
                                <div className="some-thesis__some-element">TO DO SOMETHING!</div>
                            </div>
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
