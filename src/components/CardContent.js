import React from 'react';
import '../CardContent.css'
function CardContent(props) {

    return (
        <div className='CardContent'>
            <img
                className='CardImg'
                src={props.url}
                alt='undefine'>
            </img>
            <div className='TextContent'>
                <p className='textarea'>
                   <strong>{props.title}</strong> <br></br>
                  
                </p>
           
            </div>




        </div>




    );
}

export default CardContent;