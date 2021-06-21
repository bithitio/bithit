import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
    <h1 class="h1-header">404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
    <br></br>
    <br></br>
    </div>
    
 
);

export default NotFound;