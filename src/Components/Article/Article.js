import './Article.css'
import { formatDate } from "../../utils";
import TitleLink from '../TitleLink/TitleLink';

const Article = (props) => {
    const { articleInfo } = props;
    console.log("article is rendered");
    return (
        <div className="article_container">
            <img alt='article_background_image' src={articleInfo.image_url} width="348px" height="196px" />
            <div className='article_info'>
                <TitleLink title={articleInfo.title} link={articleInfo.link} />
                <p className='article_description'>{formatDate(articleInfo.pubDate)} &#x2022; {articleInfo.description}</p>
            </div>
        </div>
    );
}

export default Article;