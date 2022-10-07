import React from "react";
const Contactinfo = () => {

    
    return (
        <div>
       <p1>you can reach us by!</p1>
       <form className="form">

    <div className="name">

       <label for="firstName">First name</label>
       <input
            type="text"
            name="firstName"
            className="firstName"
            tabIndex="1"
       />
       <label for="lastName">Last name</label>
       <input
            type="text"
            name="lastName"
            className="lastName"
            tabIndex="2"
       />
    </div>
    </form>
    <label for="email">Email</label>
<input
     type="email"
     name="email"
     id="email"
     className="email"
     placeholder="example@corp.com"
     tabIndex="3"
/>
<label for="message">Message</label>

<textarea
  placeholder="Start typing..."
  className="message"
  name="message"
/>
<button type="submit" className="send"></button>
        
        </div>
        
    );
}

export default Contactinfo;