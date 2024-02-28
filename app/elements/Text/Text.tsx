import React from 'react';
import styles from './Text.module.scss';

interface TextProps {
    // text: string;
}

const Text: React.FC<TextProps> = () => {
        return <div className={styles.textModule}>Some Article Text Here</div>;
};

export default Text;
