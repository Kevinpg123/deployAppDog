import React from 'react'
import { Link } from 'react-router-dom'
import addTemperamentBD from '../form/addTemperamentBD'
import { useEffect } from 'react'
import { getAllDogs, orderDogs, directionOrderName } from '../../redux/action/action'
import { useDispatch } from 'react-redux'
import style from './Landing.module.css'
import perrito from '../../perritoLanding.png'
import Boton from '../../components/button/button'


function Landing() {
    const dispatch = useDispatch()
    useEffect(() => {
        addTemperamentBD()

        dispatch(getAllDogs())
        window.scrollTo(0, 0)

        dispatch(orderDogs("name"))
        dispatch(directionOrderName("asc"))

    }, [])

    return (
        <div className={style.bigDiv}>
            <div className={style.divImg}>

                <img src={perrito} className={style.dogImg} />
            </div>
            <div className={style.divText}>
                <p className={style.h1}>Welcome to <br /> Dogs App</p>
                {/* <h1 className={style.h1}>Welcome to Dog's app</h1> */}
                <Link to='/home'>
                    <Boton label='Enter' />
                </Link>
            </div>

        </div>
    )
}

export default Landing