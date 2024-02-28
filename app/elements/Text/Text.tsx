import React from 'react';
import styles from './Text.module.scss';

interface TextProps {
    text: string;
}

const Text: React.FC<TextProps> = ({children}) => {
        return <div className={styles.root}>{children}</div>;
};

export default Text;
