import React from 'react';
import './Contact.css';

const Contact = () => {


  return (
    <div id='contact' className='form-container'>

      <h2 className='form-tittle'>Contac <span className='form-span'>Me</span></h2>

      <div className='form-form-container'>
        <div className='form-contact'>
          <form>
            <p>
              <label>Fullname</label>
              <input type="text" name='fullaname' />
            </p>
            <p>
              <label>Email</label>
              <input type="email" name='email'/>
            </p>
            <p>
              <label>Phone</label>
              <input type="text" name='phone'/>
            </p>
            <p>
              <label>Affair</label>
              <input type="text" name="affair"/>
              </p>
            <p className='block'>
              <label>Message</label>
              <textarea name="message" rows="3"></textarea>
            </p>
            <p className='block'>
              <button type='submite'>
                Send
              </button>
            </p>
          </form>
        </div>

        <div className='form-info'>
          <h4>More Info</h4>
          <p>Buenos Aires Argentina.</p>
          <p>I'm still learning and experimenting in the world of web development, I'm looking for jobs to continue developing my technical and soft skills.</p>
          <p>+54 1153754846</p>
          <p>davalosjuanpablo038@gmail.com</p>
        </div>
      </div>

    </div>
  );
}

export default Contact;