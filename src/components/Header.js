import React from 'react';
import {BsSearch} from 'react-icons/bs';



function Header (props) {
       
        return (
            <div className="Container">
                <div className='row headerBar'>
                    <div className='col-6'style={{fontSize:"2rem"}}>Logo<small style={{fontSize:".8rem"}}>medya</small></div> 
                    <div className="col-6 searchBox" style={{ margin:"auto auto"}}> <div></div><input className='searcBar' placeholder='Search...' onChange={props.inputText}></input><BsSearch/></div>
                </div>
               
                <style>{`
                .Container{
                    background-color:black;
                    color:white;

                }
                .col-6{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    text-align:center;
                }
                .searcBar{
                   
                    width:200px;
                    color:white;
                    background:black;
                    border-bottom:1px solid #eee;
                }
                .searchBox{
                    display:flex;
                    flex-direction:row;
                }

                .searcBar:focus{
                    outline:none;
                }
                `}</style>
            </div>
        );
}

export default Header;