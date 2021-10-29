import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Container } from './style';


interface IData {
    name: string;
    email: string;
}

const Contact: React.FC = () => {
    const [data, setData] = useState<IData>({} as IData);
    return (
        <Container>
            <div className="form-wrapper" >
                <h1>Contact</h1>
                Name: {data?.name}
                <br/>
                Email: {data?.email}

                <div className="card">
                    <form onSubmit={()=>{}}>
                        <input type="text" placeholder="nome" onChange={e=>setData({...data, name : e.target.value})}/>
                        <input type="text" placeholder="nome"  onChange={e=>setData({...data, email : e.target.value})}/>
                        <input type="Submit" value="cadastrar" />
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