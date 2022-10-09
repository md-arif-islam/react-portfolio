import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [latterClass, setLetterClass] = useState('text-animate')
  const hiArray = ['H', 'i,']
  const iamArray = ['I', "'m"]
  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={latterClass}
              strArray={hiArray}
              idx={10}
            />{' '}
            <br />
            <AnimatedLetters
              letterClass={latterClass}
              strArray={iamArray}
              idx={12}
            />{' '}
            <img src={LogoTitle} alt="developer" />{' '}
            <AnimatedLetters
              letterClass={latterClass}
              strArray={nameArray}
              idx={15}
            />{' '}
            <br />
            <AnimatedLetters
              letterClass={latterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Full Stack Web Developer / React Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Home
