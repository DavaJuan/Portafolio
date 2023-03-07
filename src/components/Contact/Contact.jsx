import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {

  const { register, handleSubmit, formState: {errors} } = useForm();

  const customSubmit = (data) =>{
    console.log(data);
  }

  return (
    <div id='contact' className='form-container'>

      <h2 className='form-tittle'>Contac <span className='form-span'>Me</span></h2>

      <div className='form-form-container'>
        <div className='form-contact'>
          <form onSubmit={handleSubmit(customSubmit)} >
            <p>
              <label>Fullname</label>
              <input type="text" name='fullaname' { ...register('fullname',
                { 
                  required: true,
                  minLength: 4,
                  maxLength: 20,
                }) 
              } />
              {errors.fullname?.type === 'required' && <small className='fail'>Please provide a name.</small>}
              {errors.fullname?.type === 'minLength' && <small className='fail'>Mix characters is 4.</small>}
              {errors.fullname?.type === 'maxLength' && <small className='fail'>Max characters is 20.</small>}
            </p>
            <p>
              <label>Email</label>
              <input type="email" name='email' {...register('email',
                {
                  required:true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  maxLength: 40,
                  minLength: 10,
                }
              )}/>
              {errors.email?.type === 'required' && <small className='fail'>Please provide a email.</small>}
              {errors.email?.type === 'pattern' && <small className='fail'>Please write a email.</small>}
            </p>
            <p>
              <label>Phone</label>
              <input type="text" name='phone' {...register('phone',
                { 
                  required:true,
                  maxLength: 20,
                  minLength: 10,
                 }
              )}/>
              {errors.phone?.type === 'required' && <small className='fail'>Please provide a phone number.</small>}
              {errors.phone?.type === 'maxLength' && <small className='fail'>Max characters is 20.</small>}
              {errors.phone?.type === 'minLength' && <small className='fail'>Min characters is 10.</small>}
            </p>
            <p>
              <label>Affair</label>
              <input type="text" name="affair" {...register('affair',
                {
                  required: true,
                  maxLength: 20,
                  minLength: 4,
                }
              )}/>
              {errors.affair?.type === 'required' && <small className='fail'>Please provide a affair between 4 and 20 characters</small>}
            </p>
            <p className='block'>
              <label>Message</label>
              <textarea name="message" rows="3" {...register('message',
                {
                  required:true,
                  minLength: 10,
                  maxLength: 200,
                }
              )}></textarea>
              {errors.message?.type === 'required' && <small className='fail'>Please provide a massage.</small>}
              {errors.message?.type === 'minLength' && <small className='fail'>Min characters is 10.</small>}
              {errors.message?.type === 'maxLength' && <small className='fail'>Mix characters is 200.</small>}
            </p>
            <p className='block'>
              <button type='submite'>
                Send
              </button>
            </p>

            {/* <input type='hidden' name='_next' value='https://portafolio-kohl-phi.vercel.app/'/>
            <input type='hidden' name='_captcha' value='false'/> */}
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