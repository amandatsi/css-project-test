import React from 'react';
import styles from './Text.module.scss';

interface TextProps {
    text: string;
}

const Text: React.FC<TextProps> = ({text}) => {
        return <div className={styles.root}><p>{text}</p></div>;
};

export default Text;
