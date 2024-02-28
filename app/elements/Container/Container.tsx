import React from 'react';
import { PropsWithChildren } from 'react'
import styles from './Container.module.scss';

type ContainerProps = PropsWithChildren< {
}>


const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    return (
        <div className={styles.container}>{props.children}
        </div>
    );
};

export default Container;