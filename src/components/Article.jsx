import {Title, Contents} from "./index";

const Article = (props) => {
    return (
        <div>
            <Title title = {props.title} />
            <Contents contents = {props.contents} />
        </div>
    );
};

export default Article;
