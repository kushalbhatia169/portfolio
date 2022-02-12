
import { FaReact, FaJs, FaNode, FaDatabase, FaGit, FaSass, FaBitbucket, FaSmile } from "react-icons/fa";


export const showIcon = (section: String) => {
    switch (section) {
        case 'Java Script':
            return <FaJs size={40} />;
        case 'React JS':
            return <FaReact size={40} />;
        case 'Node JS':
            return <FaNode size={40} />;
        case 'Mongo DataBase':
            return <FaDatabase size={40} />;
        case 'Git-BitBucket':
            return (<div className='d-flex flex-wrap'>
                <FaGit size={40} />
                <b>-</b>
                <FaBitbucket size={40} />;
            </div>)
        case 'Sass':
            return <FaSass size={40} />;
        default:
            return <FaSmile size={40} />;
    }
};