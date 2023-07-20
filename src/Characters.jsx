import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCharacters } from './Store/GotSLice';
import axios from 'axios';
function Characters() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters.characters);
    useEffect(() => {
        axios.get("https://thronesapi.com/api/v2/Characters")
            .then((data) => dispatch(setCharacters(data.data)))
    }, [dispatch]);
    const navigate = useNavigate();
    return (
        <div className='bg-got'>
            <div className='container vw-100 vh-100 '>
                <div className='row w-100 h-100'>
                    <div className="col-10 d-flex flex-column align-items-center justify-content-start mx-auto mb-5">
                        <h1 className='text-center text-light my-5 fs-1'>Click character to see details</h1>
                        <ul className='p-0 m-0'>
                            <div className='gridArea gap-2'>
                                {characters &&
                                    characters.map((character, index) => {
                                        if (character.firstName !== "") {
                                            return (
                                                <li className='list-unstyled fs-4 fw-semibold text-light cursor-pointer' key={index} onClick={() => navigate(`/CharactersId/${index}`)}>{character.firstName}</li>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters