import React from "react";
import "../Foother.css";
function Foother() {
    return (
        <div className="foother">
            <div className='box'><span className="Logo">SEKİZKÖŞE</span><small>medya</small></div>
            <div className='box'><p>

                “Günün manşetlerini ve en çok okunan haberlerini her sabah e-postanızdan takip etmek için  bültene üye olun.”
            </p></div>
            <div className='box'>
                <input type={'email'} placeholder="Email..." ></input>
            </div>
        </div>
    );
}

export default Foother;