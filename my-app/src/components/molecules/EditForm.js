import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'

function EditForm() {
    let location = useLocation().pathname;
    const [textareaValue, setTextareaValue] = useState(getItemData()['text']);
    
    function getItemData() {
        let explodeLocation = location.split('/');
        let id = parseInt(explodeLocation[2]);
        
        let item = localStorage.getItem(id);

        if (item !== null) {
            let itemData = {
                'id': JSON.parse(item).id,
                'text': JSON.parse(item).text,
            }
            return itemData;
        }

        return null;
    }

    function handleChange(value) {
        setTextareaValue(value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        setLocalStorageData();
    }

    function setLocalStorageData() {
        let id = getItemData()['id'];
        let date = new Date().toLocaleDateString();
        let time = new Date().getTime();

        let data = {
            'id': id,
            'date': date,
            'time': time,
            'text': textareaValue
        }

        localStorage.setItem(id, JSON.stringify(data));
        window.location = "/";
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

export default EditForm;