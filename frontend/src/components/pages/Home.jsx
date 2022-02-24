import api from '../../utils/api'

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Home.module.css'

export function Home() {
  const [pets, setPets] = useState([])

  useEffect(() => {

    api.get('/pets').then((response) => {
      setPets(response.data.pets)
      console.log(pets)
    })

  }, [])

  return (
    <section>
      <h1>Home</h1>
    </section>
  )
}
