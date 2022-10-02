import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'



const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
       setTimeout(() => {
       return setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

const sendEmail = (e) => {

e.preventDefault()

emailjs 
    .sendForm(
        'service_fx8aouc',
        'template_vcj1tf5',
         refForm.current,
         '8iYWGCnw-TIBT-ToG'
    )
    .then(
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },

        ()=> {
            alert('Failed to send the message, please try again')
        }

    )
}



return (

<>

<div className='container contact-page'>
<div className='text-zone'>
<h1>

<AnimatedLetters 
letterClass={letterClass}
strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
idx={15}
/>
</h1>

<p>
I am currently interested in remote job opportunities - especially on ambitious
or large projects. However, if you have any other requests or
questions, don't hesitate to contact me using below form either.
</p>

<div className='contact-form'>
<form ref={refForm} onSubmit={sendEmail}>
<ul>
<li className='half'>
<input type='text' name='from_name' placeholder='Name' required />
</li>
<li className='half'>
<input type='email' name='email' placeholder='Email' required />
</li>
<li>
<input placeholder="Subject" type="text" name="subject" required />
</li>
<li>
<textarea placeholder="Message" name="message" required>
</textarea>

<input type="submit" className='flat-button' value='SEND'/>

</li>

</ul>


</form>

</div>



</div>
{/* <div className="info-map">
          Eric Tilton
          <br />
          Topeka, Kansas
          <br />

          <br />
          <span>tiltoneric@yahoo.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Eric lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
<Loader type="ball-grid-pulse" />
</>
)
}


export default Contact 

