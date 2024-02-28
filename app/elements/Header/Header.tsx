import React from 'react';
import { PropsWithChildren } from 'react'
import styles from './Header.module.scss';

type HeaderProps = PropsWithChildren< {
}>


const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <>
            <div className={styles.header}>{props.children}
                <h1>Headine Text</h1>
                <h2>Subheadline Text</h2>
            </div>
        </>
    );
};

export default Header;