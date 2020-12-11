import React from 'react'

const Contact = ({ contactForm, deleteContact }) => {

  return (
    <>
      {contactForm.map(contact => (
        contact.age > 5 &&
        <div className="ContactForm" key={contact.id}>
          <div>Name: {contact.name}</div>
          <div>Age: {contact.age}</div>
          <div>Sex: {contact.sex}</div>
          <button onClick={() => deleteContact(contact.id)}>删除</button>
        </div>
      ))}
    </>
  )
}

export default Contact
