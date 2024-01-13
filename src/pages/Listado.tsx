import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";

const Listado = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const ObtenerTodos = async () => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });

    const filtrarPokemon = pokemons?.slice(0,151).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    })


    return (
        <>
            <h1>Pokemon - Nathy</h1>

            <header>
                <input type="text" value={query} placeholder="Buscar Pokemon" onChange={(event) => setQuery(event.target.value.trim())} />
            </header>

            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">

                        {filtrarPokemon?.slice(0, 151).map((pokemon) => (
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Header><b>Tipo:</b> {pokemon.type} </Card.Header>
                                <Card.Img variant="top" width='80' height='100' className="d-block mx-auto w-50" src={pokemon.imggif} />
                                <Card.Body>
                                    <Card.Title className="text-center">{pokemon.id} - {pokemon.name}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="pok"
                                                src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                                            /> <b>HP:</b> {pokemon.hp}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="pok"
                                                src="https://cdn-icons-png.flaticon.com/128/297/297837.png"
                                            /> <b>Ataque:</b> {pokemon.attack}</ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="pok"
                                                src="https://cdn-icons-png.flaticon.com/128/1866/1866922.png"
                                            /> <b>Defensa:</b> {pokemon.defense}</ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="pok"
                                                src="https://cdn-icons-png.flaticon.com/128/1671/1671062.png"
                                            /> <b>E. Ataque:</b> {pokemon.sp_atk}</ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="pok"
                                                src="https://cdn-icons-png.flaticon.com/128/3311/3311830.png"
                                            /> <b>E. Defensa:</b> {pokemon.sp_def}</ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="pok"
                                                src="https://cdn-icons-png.flaticon.com/128/1455/1455324.png"
                                            /> <b>Velocidad:</b> {pokemon.speed}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listado;