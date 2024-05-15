import React from "react";

const Quizblock = ({ title, description, imageUrl, onClick }) => {
    return (
        <div className="quiz-block" onClick={onClick}>
            <img src={imageUrl} alt={title} className="quiz-block-image" />
            <div className="quiz-block-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Quizblock;