import React from "react";

// const CustomButton = (props)=>{
//     return (
//         <div>
//             <button>{props.text}</button>
//         </div>
//     )
// }
const CustomButton = ({ className, text, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
};

export default CustomButton;