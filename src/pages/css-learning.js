import React, { useState } from 'react';
import classnames from 'classnames';
import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import BoxTop from 'components/_base/boxTop';
import BoxMid from 'components/_base/boxMid';
import { renderContent } from 'utils';
import { STYLED1 } from 'consts';
import ExampleStyled from 'components/css-learning/const';

export default function CssLearning() {
    const [styled, setStyled] = useState(STYLED1.example1);

    return (
        <>
            <Head>CSS Learning</Head>
            <div className="example-box">
                <h2 className="example-box__title">HTML and CSS: How We Learned Them</h2>
                <div className="example-box__content">
                    <div className="box">
                        <BoxTop>
                            <h3 className="box__title">UI</h3>
                            <nav className="main-nav">
                                <ul className="main-nav__list">
                                    <li className="main-nav__item">
                                        <a className="main-nav__link">Home</a>
                                    </li>
                                    <li className="main-nav__item">
                                        <a className="main-nav__link">About</a>
                                    </li>
                                    <li className="main-nav__item">
                                        <a className="main-nav__link">Blog</a>
                                    </li>
                                </ul>
                            </nav>
                        </BoxTop>
                        <BoxMid>
                            <h3 className="box__title">Source</h3>
                            <button
                                type="button"
                                className={classnames('btn', {
                                    'btn--disabled': styled === STYLED1.example1,
                                    'btn--primary': styled !== STYLED1.example1,
                                })}
                                style={{ marginRight: '10px' }}
                                disabled={styled === STYLED1.example1}
                                title="Example1"
                                onClick={() => setStyled(STYLED1.example1)}>
                                Example 1
                            </button>
                            <button
                                type="button"
                                className={classnames('btn', {
                                    'btn--disabled': styled === STYLED1.example2,
                                    'btn--primary': styled !== STYLED1.example2,
                                })}
                                style={{ marginRight: '10px' }}
                                disabled={styled === STYLED1.example2}
                                title="example2"
                                onClick={() => setStyled(STYLED1.example2)}>
                                Example 2
                            </button>
                            <button
                                type="button"
                                className={classnames('btn', {
                                    'btn--disabled': styled === STYLED1.bem,
                                    'btn--primary': styled !== STYLED1.bem,
                                })}
                                disabled={styled === STYLED1.CSS}
                                title="BEM"
                                onClick={() => setStyled(STYLED1.bem)}>
                                BEM
                            </button>
                            <SyntaxHighlighter language="css">{renderContent(ExampleStyled, styled)}</SyntaxHighlighter>
                        </BoxMid>
                    </div>
                </div>
            </div>
        </>
    );
}
