import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

const Todo = ({ text, onBtnClick, id }) => {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={onBtnClick}>DEL</button>
        </li>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch(deleteToDo(ownProps.id)),
    };
};

export default connect(null, mapDispatchToProps)(Todo);
