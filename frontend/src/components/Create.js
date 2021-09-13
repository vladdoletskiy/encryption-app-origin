import React from "react";
import {useState} from 'react';
import env from '../env.json';
import './Create.css';

function Create() {

    const [ url, setUrl] = useState('');
    const [ lineClass , setlineClass ] = useState('hide');
    const [ formClass , setformClass ] = useState('');
    let form = 'form';

    const sendData = (obj) => {
          setformClass('hide');
         setlineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)

        })
        .then( response => response.json())
        .then( response => {
            console.log(response);
            if ( response.result) { 
                setUrl(env.url + '/' + response.url);
            }
        })
    }
    
    
    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if ( note === '' ) {
            alert('Заполните поля');
            return false;
        } 
       
        sendData({ 'note': note});
    }

    return (
      <div className='form-container'>
          <form  onSubmit={loadDataFromForm} className={formClass}>
              <div className='form'>
                  <label htmlFor="note" className='form-lable'>Введите заметку</label>
                  <textarea className='form-control' name="note" id="note"></textarea>
                  <button className='note-btn btn btn-primary' type='submit'>Click</button>
              </div>
              
          </form>
          <div className={lineClass}> 
          <div className='url-container'>
              <div className='url-link lead bg-primary p-2 text-dark bg-opacity-10'>{url}</div>
            <div>
                <p className='url-text bg-primary p-2 text-dark bg-opacity-10'>Скопируйте URL и передайте адресату.</p>
                <button className='btn btn-primary' onClick={() => window.location.reload()}>создать новую заметку</button>
            </div>
          </div>
            
          </div>
      </div>
    );
  }
  
  export default Create;
  