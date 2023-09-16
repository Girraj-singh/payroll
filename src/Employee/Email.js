import React, { useState } from 'react';


const Email = () => {
    const [subject,setSubject] = useState('')
    const [email,setEmail] = useState('sgirraj66@gmail.com')
    const [massage,setMassage] = useState('')
  return (
    <>
      <h2>Student Contact Form</h2>
      <form target="_blank" action={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${massage}`} method="post" >
         Student Name:<br/><input type="text" name="NAME" required/> <br/>
         Student Subject:<br/><input type="text" value={subject} onChange={(e)=>{setSubject(e.target.value)}} name="SUBJECT" required/><br/>
         Enter Massage:<br/><input type="text" value={massage} onChange={(e)=>{setMassage(e.target.value)}} name="massage" /><br/>
         <input type="submit" value="Send" />
      </form>


    </>
     
  )
}

export default Email