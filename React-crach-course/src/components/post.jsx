/* eslint-disable react/prop-types */
import classes from "./post.module.css";
import { Link } from "react-router-dom";
function Post({auther, body, id}) {
    return (
        <li className={classes.Post}>
            <Link to={id}>
            <p className={classes.auther}>{auther}</p>
            <p className={classes.body}>{body}</p>
            </Link>
        </li>
    );
}
export default Post;
