/* eslint-disable react/prop-types */
import classes from "./Newpost.module.css"
import  Mode from './Mode';
import { useNavigate, Form, redirect } from "react-router-dom";

function Newpost() {

    const navigate = useNavigate();

    function Cancel() {
        navigate('..');
    }
    return (
        <>
            <Mode>
                <Form method="post"> 
                    <p>
                        <label htmlFor="body">Text</label>
                        <textarea name="body" id="body" cols="30" rows="5"></textarea>
                    </p>
                    <p>
                        <label htmlFor="auther"> Your name</label>
                        <textarea name="auther" id="auther" cols="30" rows="2"></textarea>
                    </p>
                    <div className={classes.actions}>
                        <button type="button" onClick={Cancel}>cancel</button>
                        <button>submit</button>
                    </div>
                </Form>
            </Mode>
        </>
    )
}
export default Newpost;

// eslint-disable-next-line react-refresh/only-export-components
export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return redirect('/');
}