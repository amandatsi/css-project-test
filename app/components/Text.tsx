import React from 'react';
import styles from './Text.module.scss';

interface TextProps {
    // text: string;
}

const textData = 
    {
        id: 1,
        module_type: "text",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Arcu non sodales neque sodales ut etiam sit. Bibendum ut tristique et egestas quis. Facilisis volutpat est velit egestas dui. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Elit duis tristique sollicitudin nibh sit amet. Venenatis urna cursus eget nunc scelerisque viverra. Dignissim cras tincidunt lobortis feugiat vivamus. Amet nulla facilisi morbi tempus. Augue neque gravida in fermentum et sollicitudin ac orci. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Lectus urna duis convallis convallis tellus id interdum. Vulputate eu scelerisque felis imperdiet proin fermentum leo. In dictum non consectetur a erat nam at lectus urna. A erat nam at lectus urna duis convallis convallis. Egestas integer eget aliquet nibh praesent tristique. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nullam vehicula ipsum a arcu cursus."
    };

const Text: React.FC<TextProps> = () => {
        return <div className={styles.textModule}>{textData.text}</div>;
};

export default Text;
