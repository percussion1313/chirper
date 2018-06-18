import React from 'react';

const Submitform = (props) => {

    return (
        <div>
            <div class="col-md-6">
                <input type="text" id="username" placeholder="Username" />
            </div>
            <textarea className="form-control col-sm-6 pagination-centered m-3 position-relative" id="chirp"></textarea>
            <div>
                <button
                    className="btn btn-primary m-3 d-flex justify-content-center"
                    name="cardSubmitButton"
                    onClick={event => props.postChirp(event)}>Chirp
        </button>
            </div>
        </div>


    );
}

export default Submitform;


