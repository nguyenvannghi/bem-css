import React, { useState } from 'react';
import classnames from 'classnames';
import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import BoxTop from 'components/_base/boxTop';
import BoxMid from 'components/_base/boxMid';
import { renderContent } from 'utils';
import { STYLED } from 'consts';
import ExampleStyled from 'components/example1/const';

export default function Example1() {
    const [styled, setStyled] = useState(STYLED.HTML);
    return (
        <>
            <Head>Component With No Elements or Modifiers</Head>
            <div className="example-box">
                <h2 className="example-box__title">Component With No Elements or Modifiers</h2>
                <blockquote className="example-box__quote">
                    Simple components may only employ a single element and thus a single class which would be the block.
                </blockquote>
                <div className="example-box__content">
                    <div className="box">
                        <BoxTop>
                            <h3 className="box__title">UI</h3>
                            <button className="button">Button</button>
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

Example1.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});
