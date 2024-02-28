import React from 'react';
import { PropsWithChildren } from 'react'
import styles from './Wrapper.module.scss';

type WrapperProps = PropsWithChildren< {
}>


const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
    return (
        <div className={styles.wrapper}>{props.children}
        </div>
    );
};

export default Wrapper;