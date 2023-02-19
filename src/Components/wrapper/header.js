import React from "react";
import chart from './../../chart.gif';

function Header(){

    return(
        <header>
            <img src={ chart } id="logo" alt="weightloss logo"/>
			<h1><a href="/">Skillsoft Weight Tracker</a></h1>
            <nav>
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/register">registration</a></li>
                    <li><a href="/customers">customers</a></li>
                    <li><a href="/login">login</a></li>
                </ul>
		    </nav>
        </header>
    )

}

export default Header;