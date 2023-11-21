import './button.css';

const Button = ({ text, callback, classes }) => {
    return (
        <button className={`button ${classes}`} onClick={callback}>
            {text}
        </button>
    );
}

export default Button;
