import React from 'react';
const newPost = (props) => {

    return (
        <div className="card bg-light mb-3 justify-content-center" style="max-width: 18rem;">
            <div className="card-header">{this.props.userId}</div>
            <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">{this.props.text}</p>
            </div>
        </div>
    );
}

export default newPost;