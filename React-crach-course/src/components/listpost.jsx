/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import classes from "./listpost.module.css";
import Post from "./post";
import {useLoaderData} from "react-router-dom";

function List() {
    const posts = useLoaderData();
    return (
        <>
            {posts.length == 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h1>There are no posts yet.</h1>
                    <p>Start adding some!</p>
                </div>
            )
            }
            {posts.length > 0 && (
                <ul className={classes.post}>
                    {posts.map((post) => <Post key={post.id} id={post.id} body={post.body} auther={post.auther} />)}
                </ul>
            )}
        </>
    );
}
export default List;
