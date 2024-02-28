import React from 'react';
import Image from 'next/image'
import Container from '../../elements/Container/Container'
import Wrapper from '../../elements/Wrapper/Wrapper'
import Content from '../../elements/Content/Content'
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

            <Container>
                <Wrapper>

                    <div className={styles.image}>
                        <Image
                            src={image}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>

                    <Content>
                        <Header />
                        <Text />
                        <Button> LINK HERE </Button>

                    </Content>


                </Wrapper>
            </Container>
        </>
    );
};



export default Article;