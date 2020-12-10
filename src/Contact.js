import React from 'react'

const Contact = ({ contactForm }) => {

  return (
    <>
      {contactForm.map(contact => (
        contact.age > 5 &&
        <div className="ContactForm" key={contact.id}>
          <div>Name: {contact.name}</div>
          <div>Age: {contact.age}</div>
          <div>Sex: {contact.sex}</div>
        </div>
      ))}
    </>
  )
}

export default Contact
