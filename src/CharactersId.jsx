import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoReturnUpBackOutline } from 'react-icons/io5'
function CharactersId() {
  const [character, setCharacter] = useState({});
  const [load, setLoad] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .finally(() => setLoad(false))
  }, [id])
  return (
    <div className='bg-charactersId'>
      <div className='vw-100 vh-100 d-flex align-items-center justify-content-center'>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-6 mt-5'>
              {
                load === true ? <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div> : <img src={character.imageUrl} width={"500px"} height={"350px"} alt={character.fullName} />
              }
            </div>
            <div className='col-5 d-flex align-items-center justify-content-start ms-5 ps-5'>
              <ul className='pb-5 mb-5'>
                <li className='list-unstyled fs-3'>Full Name: <span className='fw-bold fs-3 '>{character.fullName}</span></li>
                <li className='list-unstyled fs-4'>First Name: <span className='fw-semibold fs-4 '>{character.firstName}</span></li>
                <li className='list-unstyled fs-4'>Last Name: <span className='fw-semibold fs-4 '>{character.lastName}</span></li>
                <li className='list-unstyled fs-4'>Title: <span className='fw-semibold fs-4 '>{character.title}</span></li>
                <li className='list-unstyled fs-4'>Family: <span className='fw-semibold fs-4 '>{character.family}</span></li>
              </ul>
            </div>
            <div className='container position-absolute top-0 left-0 w-25'>
              <a href="/" className='btn btn-transparent align-middle text-center'><IoReturnUpBackOutline className='fs-2'></IoReturnUpBackOutline><span>Go Back</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharactersId