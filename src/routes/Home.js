import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/ToDo";
import { add } from "../store";

const Home = () => {
    const [text, setText] = useState("");
    const toDos = useSelector((state) => state);
    const dispatch = useDispatch();
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
        dispatch(add(text));
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

export default Home;
