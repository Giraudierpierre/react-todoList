import React, {useState } from 'react';

function CustomForm() {
    const [textareaValue, setTextareaValue] = useState('');

    function handleChange(value) {
        setTextareaValue(value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        let date = new Date().toLocaleDateString();
        setLocalStorageData(textareaValue, date);
    }

    function setLocalStorageData(textareaValue, date) {
        let id = 1;
        let localStorageLength = localStorage.length;
        
        if (localStorageLength > 0) {
            id = localStorageLength + 1;
        }

        let data = {
            'id': id,
            'date': date,
            'text': textareaValue
        }

        localStorage.setItem(id, JSON.stringify(data));
        window.location = "/";
    }

    return(
        <>
            <form 
                className="custom-form"
                onSubmit={e => handleSubmit(e)}
            >
                <textarea
                    className="custom-textarea" 
                    placeholder="Texte..." 
                    onChange={e => handleChange(e.target.value)}
                    value={textareaValue}>
                </textarea>
                <input 
                    className={`submit-button${(textareaValue === '') ? " disabled" : "" }`}
                    disabled={(textareaValue === '') ? " disabled" : "" } 
                    type="submit"
                    value="Enregistrer"
                />
            </form>
       </>
    );
}

export default CustomForm;