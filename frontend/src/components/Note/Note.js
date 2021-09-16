import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../../env.json';
import './Note.css';

function Note() {

    let {noteURL} = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if ( noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({"url": noteURL})
    
            })
            .then( response => response.json())
            .then( response => {
                console.log(response);
                if ( response.result) { 
                    setNoteText(response.note);
                    setLineClass('');
                    setFormClass('hide');
                    setErrorClass('hide');
                }
                else if (!response.result) {
                    setLineClass('hide');
                    setFormClass('hide');
                    setErrorClass('');
        }

            })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
        
    }, []);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if ( url === '' ) {
            alert('Заполните поля');
            return false;
        } 
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    function searchNote() {
        window.location.href = env.url
    }

    return (
      <div className='note-container'>
          <div className={lineClass}>
              <h4>Note:</h4>
              <div className='bg-primary p-2 text-dark bg-opacity-10 note-text'>{noteText}</div>
              <div className='note-btn'>
                <button className="btn btn-primary" onClick={searchNote}>One more note</button>
              </div>
          </div>
          <div className={errorClass}>
              <p>Error</p>
          </div>
          <div  className={formClass}>
              <form className='hash-note' onSubmit={getNote}>
                <label htmlFor="url">enter hash code</label>
                <input  type="text" name="url" id="url" className="form-control hash-input"/>
                <button type='submit' className="btn btn-primary">Search Note</button>
              </form>
          </div>
      </div>
    );
  }
  
  export default Note;
  