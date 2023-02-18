import React from "react";
import chart from '../chart.gif';

function Header(){

    return(
        <header>
            <img src={ chart } id="logo" />
			<h1><a href="index.html">Skillsoft Weight Tracker</a></h1>
        </header>
    )

}

export default Header;