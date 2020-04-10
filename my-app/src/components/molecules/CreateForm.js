import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateForm() {
    const history = useHistory();
    const [textareaValue, setTextareaValue] = useState('');

    function handleChange(value) {
        setTextareaValue(value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        setLocalStorageData();
    }

    function setLocalStorageData() {
        let id = 1;
        let localStorageLength = localStorage.length;
        let date = new Date().toLocaleDateString();
        let time = new Date().getTime();

        if (localStorageLength > 0) {
            id = localStorageLength + 1;
        }

        let data = {
            'id': id,
            'date': date,
            'time': time,
            'text': textareaValue
        }

        localStorage.setItem(id, JSON.stringify(data));
        history.push("/");
    }

    return(
        <form 
            className="custom-form"
            onSubmit={e => handleSubmit(e)}>
            <textarea
                className="custom-textarea" 
                placeholder="Texte..." 
                onChange={e => handleChange(e.target.value)}
                value={textareaValue}>
            </textarea>
            <div className="submit-section">
                <input 
                    className={`submit-button absolute-center${(textareaValue === '') ? " disabled" : "" }`}
                    disabled={(textareaValue === '') ? " disabled" : "" } 
                    type="submit"
                    value="Enregistrer"
                />
            </div>
        </form>
    );
}

export default CreateForm;