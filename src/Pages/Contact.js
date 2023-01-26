import React, {useState} from 'react'
import "./Contact.css"
// import Axios from 'axios';
const Contact = () => {


  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState('');
  const [message, setmessage] = useState('');
  const [firsterror, setfirsterror] = useState();
  const [lasterror, setlasterror] = useState();
  const [emailerror, setemailerror] = useState();
  const [mobileerror, setmobileerror] = useState();
  const [msgerror, setmsgerror] = useState();

  const first = (e) => {
    setfirstname(e.target.value);
  }

  const last = (e) => {
    setlastname(e.target.value);
  }

  const em = (e) => {
    setemail(e.target.value);
  }

  const mo = (e) => {
    setmobile(e.target.value);
  }

  const msg = (e) => {
    setmessage(e.target.value);
  }

  const formsubmit = () => {
    if (firstname == '' || lastname == '' || email == '' || mobile == '' || message == '') {
      firstname.length == 0 ? setfirsterror('FirstName is Required') : setfirsterror('');
      lastname.length == 0 ? setlasterror('LastName is Required') : setlasterror('');
      email.length == 0 ? setemailerror('Email is Required') : setemailerror('');
      let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      !regEmail.test(email) ? setemailerror('Email is Not Valid') : setemailerror('');
      mobile.length == 0 ? setmobileerror('Mobile Number is Required') : setmobileerror('');
      setmsgerror('Message Is Required')
    } else {
      setmsgerror('')
      const formarray = new FormData();
      formarray.append('firstname', firstname);
      formarray.append('lastname', lastname);
      formarray.append('email', email);
      formarray.append('mobile', mobile);
      formarray.append('message', message);

      // Axios.post('http://localhost/sheer/api/contactform/create', formarray, {
      //   headers: {
      //     'Content-type': 'multipart/form-data',
      //   }
      // }).then(res => {
      //   console.log(res.data);
      //   if (res.data.status=='true') {
      //     setemail('');
      //     setfirstname('');
      //     setlastname('');
      //     setmobile('');
      //     setmessage('');
      //   }
      // }).catch(err => {
        
      // })
    }

  }

  return (
    <div className='contact-page'>
    <div className="contact-heading">
      <p className='heading'>Get In Touch</p>
      <p className='sub-heading'>Questions, feedback, press inquiries? Please fill out the form below, and a member of our team will be in touch shortly.</p>
    </div>
    <div className="row">
      <div className="col-6">
        <form action="#" className='contact-form'>
          <div className="form">
            <label>First Name*</label>
            <input onChange={first} type="text" value={firstname} placeholder='Enter Your First Name' />
            <p className='error'>{firsterror}</p>
          </div>
          <div className="form">
            <label>Last Name*</label>
            <input onChange={last} type="text" value={lastname} placeholder='Enter Your Lastname' />
            <p className='error'>{lasterror}</p>
          </div>
          <div className="form">
            <label>Phone No.*</label>
            <input id='phone' onChange={mo} type="text" value={mobile} placeholder='+91000000000' />
            <p className='error'>{mobileerror}</p>
          </div>
          <div className="form">
            <label>E-mail*</label>
            <input onChange={em} type="email" value={email} placeholder='Enter Your Email Address' />
            <p className='error'>{emailerror}</p>
          </div>
          <div className="form">
            <label>Message</label>
            <textarea onChange={msg} value={message} cols="30" rows="5" placeholder='Enter Your Message For Us'></textarea>
            <p className='error'>{msgerror}</p>
          </div>
          <div style={{ marginTop: '10px' }}>
            <a onClick={formsubmit} className='btn btn-primary'>Submit</a>
          </div>
        </form>
      </div>
      <div className='col-6'>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.4349523785014!2d75.77677266292213!3d23.18918542702648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963743958466fd7%3A0x52941532b3b73f07!2sKanthal%20Chauraha%2C%20Milkipura%2C%20Malipura%2C%20Ujjain%2C%20Madhya%20Pradesh%20456006!5e0!3m2!1sen!2sin!4v1672320773272!5m2!1sen!2sin" width="100%" height='100%' style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
  )
}

export default Contact