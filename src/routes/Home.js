import { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/ToDo";
import { addToDo } from "../store";

const Home = ({ toDos, addToDo }) => {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
        addToDo(text);
    };
    return (
        <>
            <h1>Todo</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" value={text} placeholder="edit todo" />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <Todo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        toDos: state,
    };
};

const mapDispathchToProps = (dispatch, ownProps) => {
    return {
        addToDo: (text) => dispatch(addToDo(text)),
    };
};
export default connect(mapStateToProps, mapDispathchToProps)(Home);
