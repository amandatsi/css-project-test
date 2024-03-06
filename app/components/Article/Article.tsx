import React from 'react';
import Image from 'next/image'
import Header from '../Header/Header'
import Text from '../../elements/Text/Text'
import Link from 'next/link';
import styles from './Article.module.scss';
// import image from '../../../public/2ASP5507.jpg'


interface ArticleData {
    image?: string;
    headline?: string;
    subheadline?: string;
    text?: string;
}

interface ArticleProps {
    data: ArticleData;
}

const Article: React.FC<ArticleProps> = ({ data }) => {
    return (
        <>
            <div className={styles.root}>
                <div className={styles.wrapper}>

                    <div className={styles.image}>
                        <div className="">
                        {data.image && <Image
                            src={data.image}
                            width={500}
                            height={500}
                            layout="responsive"
                            alt="Picture of the author"
                            className='object-cover'
                        />}
                        </div>
                    </div>

                    <div className={styles.content}>
                        <Header headline={data.headline || ''} subheadline={data.subheadline || ''} />
                        <Text text={data.text || ''} />
                        <Text text={data.text || ''} />
                        <div className="bg-slate-900"><Link href="#">I am a Link</Link></div>
                    </div>


                </div>
            </div>
        </>
    );
};



export default Article;