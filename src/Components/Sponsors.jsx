import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import md1 from "../images/md1.svg"
import md2 from "../images/md2.svg";
import md3 from "../images/md3.svg";
import md4 from "../images/md4.svg";
import md5 from "../images/md5.svg";
import md6 from "../images/md6.svg";




export default function Sponsors() {
  return (
    <div className='shop-sponsors'>
      <Link to="/">
        <img src={md1} alt="sponsoring company" />
      </Link>
      <Link to="/">
        <img src={md2} alt="sponsoring company" />
      </Link>
      <Link to="/">
        <img src={md3} alt="sponsoring company" />
      </Link>
      <Link to="/">
        <img src={md4} alt="sponsoring company" />
      </Link>
      <Link to="/">
        <img src={md5} alt="sponsoring company" />
      </Link>
      <Link to="/">
        <img src={md6} alt="sponsoring company" />
      </Link>
    </div>
  );
}
