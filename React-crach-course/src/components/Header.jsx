/* eslint-disable react/prop-types */
import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
    <>
    
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                <Link to='/Newpost' className={classes.button} 
                >
                    <MdPostAdd size={18} />
                    New Post
                </Link>
            </p>
        </header>
    </>
    );
}
export default  Header;