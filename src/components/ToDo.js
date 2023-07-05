import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

const Todo = ({ text, id }) => {
    const dispatch = useDispatch();
    const onBtnClick = () => {
        dispatch(remove(id));
    };
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={onBtnClick}>DEL</button>
        </li>
    );
};

export default Todo;
