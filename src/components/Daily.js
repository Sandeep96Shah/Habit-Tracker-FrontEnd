import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FaTimes, FaCheck } from 'react-icons/fa';

 const Daily = (props) => {
     console.log("render daily");
     
     const [ status, setStatus ] = useState(true);

     const { each, name, index, handleStatus } = props;

     const handleDoubleClick = () => {
        handleStatus(status, name, index);
        setStatus(!status);
     }

    return (
        <div onDoubleClick={ () => handleDoubleClick() }>
            {each === 0 ? <div><p></p></div> : 
                each === 1 ? <div><p><FaCheck /></p></div> : 
                    <div><p><FaTimes /></p></div>}
            
        </div>
    )
}

function mapStateToProps(state){
    return {
      habits : state.habits,
    }
}

export default connect(mapStateToProps)(Daily);
