import { connect } from "react-redux";
import { deleteToDo } from "../store";

const Todo = ({ text, onBtnClick }) => {
    return (
        <li>
            {text} <button onClick={onBtnClick}>DEL</button>
        </li>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch(deleteToDo(ownProps.id)),
    };
};

export default connect(null, mapDispatchToProps)(Todo);
