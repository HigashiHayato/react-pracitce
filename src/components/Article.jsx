import { useState } from "react";
import {Title, Contents, PublishButton} from "./index";

const Article = (props) => {
    const [isPublished, setPublished] = useState(false)
    const publishArticle = () => {
        setPublished(true)
    }
    return (
        <div>
            <Title title = {props.title} />
            <Contents contents = {props.contents} />
            <PublishButton isPublished={isPublished} onClick={publishArticle} />
        </div>
    );
};

export default Article;
