import { useEffect, useState } from "react";
import { Article, TextInput, Counter, ToggleButton } from "../components/index"
import { Link } from "react-router-dom";

const Home = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('HigashiHayato')
    const ids = ['HigashiHayato', 'aws', 'google', 'facebook']
    const getRamdomId = () => {
      const _id = ids[Math.floor(Math.random() * ids.length)]
      setId(_id)
    }


    useEffect(() => {
      fetch(`https://api.github.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setName(data.name)
        })
        .catch(error => {
          console.error(error)
        })
    }, [id])


    return (
      <div>
        <Article
          title={'React練習'}
          contents={'東勇斗'}
        />
        <TextInput />
        <Counter />
        <ToggleButton />
        <div>
          <p>{id}のGithub上の名前は{name}です。</p>
          <button onClick={getRamdomId}>IDを変更</button>
        </div>
        <Link to="/about">About</Link>
      </div>
    );
}

export default Home;
