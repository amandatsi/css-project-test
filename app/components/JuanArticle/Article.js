import styles from './article.module.css'

const Article = ({data}) => {
	// console.log('Article ::', data)
	
	<div className={styles.root}>
		AQUI
		<div className={styles.wrapper}>
			<div className={styles.left}>
				{data.imageSrc}<br/>
			</div>
			<div className={styles.right}>
				HEADLINE<br/>
				{data.text}<br/>
				LINK<br/>
			</div>
		</div>
	</div>
}

export default Article;