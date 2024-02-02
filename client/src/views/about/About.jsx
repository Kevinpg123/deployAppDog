import React from 'react'
import style from './About.module.css'
import image from '../../barco.png'

function About() {
    return (
        <div className={style.bigDiv}>
            <h1 className={style.h1}>About the creator</h1>
            <div className={style.secondDiv}>
                <div>
                    <img className={style.img} src={image} />

                </div>
                <div className={style.textDiv}>
                    <p className={style.textP}>
                        Full Stack Developer | Javascript | CSS | React | Redux | Node.js | Sequelize
                        <br></br>
                        <br></br>
                        My name is Kevin Osmar Pauluk, and I am a Fullstack Web Developer.This app its part of my practice during my studies.

                        This page is designed to view and search dog breeds from all over the world

                        and it allows the addition of new breeds to the database for later viewing.

                        I hope you enjoy the page, and thank you for visiting.



                        <br></br>
                        <br></br>
                        Contact Information:

                        <a className={style.links} target="_blank" href='https://github.com/Kevinpg123'>    GitHub</a>
                        <a className={style.links} target="_blank" href='https://www.linkedin.com/in/kevin-osmar-pauluk-373676261/'>    LinkedIn</a>
                    </p>

                </div>
            </div>

        </div>
    )
}

export default About