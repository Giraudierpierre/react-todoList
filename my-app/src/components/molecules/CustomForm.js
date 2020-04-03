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
        let id = 0;
        let localStorageItems = getLocalStorageData();

        if (localStorageItems.length > 0) {
            id = localStorageItems.pop().id + 1;
        }

        let data = {
            'id': id,
            'date': date,
            'text': textareaValue
        }

        localStorage.setItem(id, JSON.stringify(data));
        window.location = "/";
    }

    function getLocalStorageData() {
        let items = [];
        for(let i = 0; i < localStorage.length; i++) {
            items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    
        return items;
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