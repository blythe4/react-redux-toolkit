import { useState } from "react";

const Home = () => {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    };
    return (
        <>
            <h1>Todo</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" value={text} placeholder="edit todo" />
            </form>
            <ul></ul>
        </>
    );
};
export default Home;
