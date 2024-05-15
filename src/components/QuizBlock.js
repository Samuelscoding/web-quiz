import React from "react";

const Quizblock = ({ title, description, imageUrl, onClick, isDisabled }) => {
    const handleClick = isDisabled ? null : onClick;

    return (
        <div className={`quiz-block ${isDisabled ? 'disabled' : ''}`} onClick={handleClick}>
            <img src={imageUrl} alt={title} className="quiz-block-image" />
            <div className="quiz-block-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Quizblock;
