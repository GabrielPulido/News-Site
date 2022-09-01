import './Article.css'
import { formatDate } from "../../utils";

const Article = (props) => {
    const { articleInfo } = props;
    return (
        <div className="article_container">
            <img alt='article_background_image' src={articleInfo.image_url} width="348px" height="196px" />
            <div className='article_info'>
                <h3>
                    <a
                        href={articleInfo.link}
                        target="_blank"
                        rel='noreferrer'
                        className='article_link'
                    >
                        {articleInfo.title}
                    </a>
                </h3>
                <p className='article_description'>{formatDate(articleInfo.pubDate)} &#x2022; {articleInfo.description}</p>
            </div>
        </div>
    );
}

export default Article;