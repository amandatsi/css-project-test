import React from 'react';
import { PropsWithChildren } from 'react'
import styles from './Content.module.scss';

type ContentProps = PropsWithChildren< {
}>


const Content: React.FC<ContentProps> = (props: ContentProps) => {
    return (
        <div className={styles.content}>{props.children}
        </div>
    );
};

export default Content;