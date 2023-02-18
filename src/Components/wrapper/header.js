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
                    <li><a href="enterweight.html">enter weight</a></li>
                    <li><a href="myweights.html">my weight</a></li>
                    <li><a href="teamweights.html">team weights</a></li>
                    {
                     // only adding this last section for a quick link for myself
                    }
                    <li><a href="/customers">customers page</a></li>
                </ul>
		    </nav>
        </header>
    )

}

export default Header;