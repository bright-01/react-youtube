import React from 'react';
import { useParams } from "react-router";

function Videos(props) {
    const { keyword } = useParams();
    return (
        <div>Videos { keyword ?  `🔍${keyword}` : '🔥'}</div>
    );
}

export default Videos;