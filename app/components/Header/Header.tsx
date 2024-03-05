import React from 'react';
import { PropsWithChildren } from 'react'
import styles from './Header.module.scss';

type HeaderProps = PropsWithChildren< {
    headline: string,
    subheadline: string,
}>


const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { headline, subheadline } = props;
    return (
        <>
            <div className={styles.header}>{props.children}
                <h1>{headline}</h1>
                <h2>{subheadline}</h2>
            </div>
        </>
    );
};

export default Header;