import React, { memo } from 'react';
import Link from 'next/link';

const MENU = [
    {
        key: '/',
        title: 'BEM',
        description: 'About',
    },
    {
        key: 'example1',
        title: 'Example 1',
        description: 'Component With No Elements or Modifiers',
    },
    {
        key: 'example2',
        title: 'Example 2',
        description: 'Component With A Modifier',
    },
    {
        key: 'example3',
        title: 'Example 3',
        description: 'Component With Elements',
    },
    {
        key: 'example4',
        title: 'Example 4',
        description: 'Element With Modifier',
    },
    {
        key: 'example5',
        title: 'Example 5',
        description: 'Style Elements Based on the Component Modifier',
    },
    {
        key: 'example6',
        title: 'Example 6',
        description: 'Multi-word Names',
    },
];

const Header = () => {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                {MENU.map((item) => (
                    <li className="main-nav__item" key={item?.key}>
                        <Link href={item?.key}>
                            <a className="main-nav__link">{item?.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default memo(Header);
