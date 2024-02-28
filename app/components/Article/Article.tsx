import React from 'react';
import Image from 'next/image'
import Container from '../../elements/Container/Container'
import Wrapper from '../../elements/Wrapper/Wrapper'
// import Content from '../../elements/Content/Content'
import Header from '../../elements/Header/Header'
import Text from '../../elements/Text/Text'
import Button from '../../elements/Button/Button'
import styles from './Article.module.scss';
import image from '../../../public/2ASP5507.jpg'


interface ArticleProps {
}

const Article: React.FC<ArticleProps> = ({ }) => {
    return (
        <>
            {/* <div className={styles.articleModule}>
                <img src={imageSrc} alt="Article" className={styles.image} />
                <div>HEADER</div>
                <div className={styles.text}>{text}</div>
                <div>LINK</div>
            </div> */}

            <div className={styles.root}>
                <div className={styles.wrapper}>

                    <div className={styles.image}>
                        {image && <Image
                            src={image}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />}
                    </div>

                    <div className={styles.content}>
                        <Header />
                        <Text>This is the text coming from the main component</Text>
                        <Text>And here I have another text element just for testing</Text>
                        <Button> LINK HERE </Button>
                    </div>


                </div>
            </div>
        </>
    );
};



export default Article;