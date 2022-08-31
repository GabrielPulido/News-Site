import { formatDate } from "../../utils";

const Article = (props) => {
    const { articleInfo } = props;
    return (
        <div>
            <img alt='article_background_image' src={articleInfo.image_url} width="348px" height="196px" />
            <h3><a href={articleInfo.link} target="_blank" rel='noreferrer'>{articleInfo.title}</a></h3>
            <p>{articleInfo.description}</p>
            <span>{formatDate(articleInfo.pubDate)}</span>
        </div>
    );
}

export default Article;