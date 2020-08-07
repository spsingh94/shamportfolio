import React from 'react';
import Container from '../components/Container';
import Block from '../components/Block';

function Contact(){
    return (
        <div>
<Block height='150px' backgroundColor='white' >
    <div className='connect-header'>
    <h1>Let's Connect!</h1>
    <p>Allow me to get a firm understanding on what you have in mind and I will take care of the rest.</p>
    </div>
</Block>
<Container>
<Block height='600px' backgroundColor='peachpuff' ></Block>

</Container>
</div>
    );
};

export default Contact;