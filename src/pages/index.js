import React from 'react';
import Head from 'next/head';
import { withTranslation } from 'utils/i18n';

const Home = () => {
    return (
        <>
            <Head>Home</Head>
            <div className="example-box">
                <h2 className="example-box__title">BEM</h2>
                <blockquote className="example-box__quote">
                    BEM names intentionally use double underscores and double hyphens instead of single to separate Block-Element-Modifier.
                    The reason is so that single hyphens can be used as word separators. Class names should be very readable, so
                    abbreviation isn’t always desirable unless the abbreviations are universally recognizable.
                </blockquote>
                <div className="bem-css">
                    <div className="bem-css__item">
                        <h2 className="bem-css__title bem-css__title--block">Block</h2>
                        <p className="bem-css__desc">Standalone entity that is meaningful on its own.</p>
                        <div className="bem-css__example">
                            <code>header</code>,<code>container</code>,<code>menu</code>,<code>checkbox</code> ...
                        </div>
                    </div>
                    <div className="bem-css__item">
                        <h2 className="bem-css__title bem-css__title--element">Element</h2>
                        <p className="bem-css__desc">
                            A part of a block that has no standalone meaning and is semantically tied to its block.
                        </p>
                        <div className="bem-css__example">
                            <code>menu item</code>,<code>link item</code> ...
                        </div>
                    </div>
                    <div className="bem-css__item">
                        <h2 className="bem-css__title bem-css__title--modifier">Modifier</h2>
                        <p className="bem-css__desc">A flag on a block or element. Use them to change appearance or behavior.</p>
                        <div className="bem-css__example">
                            <code>disabled</code>,<code>highlighted</code>,<code>checked</code> ...
                        </div>
                    </div>
                </div>
                <h2 className="example-box__title">BEM - Benefit</h2>
                <ul className="benefit">
                    <li className="benefit__item">
                        <h4 className="benefit__title">Modularity</h4>
                        <p className="benefit__desc">
                            Block styles are never dependent on other elements on a page, so you will never experience problems from
                            cascading. You also get the ability to transfer blocks from your finished projects to new ones.
                        </p>
                    </li>
                    <li className="benefit__item">
                        <h4 className="benefit__title">Reusability</h4>
                        <p className="benefit__desc">
                            Composing independent blocks in different ways, and reusing them intelligently, reduces the amount of CSS code
                            that you will have to maintain. With a set of style guidelines in place, you can build a library of blocks,
                            making your CSS super effective.
                        </p>
                    </li>
                    <li className="benefit__item">
                        <h4 className="benefit__title">Structure</h4>
                        <p className="benefit__desc">
                            BEM methodology gives your CSS code a solid structure that remains simple and easy to understand.
                        </p>
                    </li>
                    <li className="benefit__item">
                        <h4 className="benefit__title">Teamwork</h4>
                        <p className="benefit__desc">
                            Designers and developers can consistently name components for easier communication between team members. In
                            other words, BEM gives everyone on a project a declarative syntax that they can share so that they’re on the
                            same page.
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export async function getServerSideProps() {
    return {
        props: { namespacesRequired: ['common'] },
    };
}

Home.propTypes = {};

export default withTranslation('common')(Home);
