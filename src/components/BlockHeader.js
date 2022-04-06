function BlockHeader(props) {
    return ( 
       <div className="container">
        <div className="row">
            <h3 className="BlockTitle col-12">{props.title}</h3>
        </div>
       
       <style>{`
        h3{
            font-family:monospace;
            font-size:1.5rem;
            color:black;
            font-weight:900;
           
            
        }
        .BlockTitle{
            color:black;
            border-bottom:1px solid rgb(64, 64, 64);
        }
       `}</style>
       
       </div> 
     );
}

export default BlockHeader;