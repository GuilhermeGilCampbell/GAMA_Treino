import React from 'react';
import { Link } from "react-router-dom"
import { Container } from './style';

const Contact: React.FC = () => {
    return (
        <Container>
            <div className="form-wrapper" >
                <h1>Contact</h1>
                <div className="card">
                    <form action="">
                        <input type="text" placeholder="nome"/>
                        <input type="text" placeholder="nome"/>
                        <input type="text" placeholder="nome"/>
                    </form>
                </div>
                <Link to="/">
                    Retornar à página principal
                </Link>
            </div>
        </Container>
    );
}

export default Contact;