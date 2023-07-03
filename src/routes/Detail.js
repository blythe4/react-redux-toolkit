import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteToDo } from "../store";

const Detail = () => {
    const navigate = useNavigate();
    const id = useParams().id;
    const toDo = useSelector((state) => state.find((toDo) => toDo.id === parseInt(id)));
    const dispatch = useDispatch();
    const onBtnClick = () => {
        dispatch(deleteToDo(id));
        navigate("/", { replace: true });
    };
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Created at: {toDo?.id}</h5>
            <div>
                <button onClick={onBtnClick}>DEL</button>
            </div>
        </>
    );
};

export default Detail;
