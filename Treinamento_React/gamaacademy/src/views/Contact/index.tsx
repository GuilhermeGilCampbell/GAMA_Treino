import React, { useState, useCallback, FormEvent } from 'react';
import { Link } from "react-router-dom";
import { Container } from './style';
import { api } from '../../services/api';


interface IData {
    name: string;
    email: string;
}

const teste:string = "teste";

const Contact: React.FC = () => {

    const [data, setData] = useState<IData>({} as IData);
    const [submit, setSubmit] = useState(false);

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post('',JSON.stringify(data))
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                setSubmit(true);
            }
        })
    }, [data])


    return (
        <Container>
            <div className="form-wrapper" >
                <h1>Contact</h1>
                Name: {data?.name}
                <br />
                Email: {data?.email}

                <div className="card">
                    {submit ? (
                        <div>
                            <h1>Obrigado pelo envio dos datas</h1>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="nome"
                                onChange={e => setData({ ...data, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="email"
                                onChange={e => setData({ ...data, email: e.target.value })}
                            />
                            <input type="submit" value="cadastrar" />
                        </form>
                    )
                    }

                </div>
                <Link to="/">
                    Retornar à página principal
                </Link>
            </div>
        </Container>
    );
}

export default Contact;