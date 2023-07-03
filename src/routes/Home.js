import { useState } from "react";
import { connect, useSelector } from "react-redux";

const Home = ({ toDos }) => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state);
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
            <ul>{JSON.stringify(todos)}</ul>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        toDos: state,
    };
};
export default connect(mapStateToProps)(Home);
