import styles  from './Header.module.css'

export default function Header() {
  return (
    <div className= {styles.container}>
        <h1>React App</h1>
        <p>
            <a href="www.google.com"> My Contact App</a>  | React.js
        </p>
    </div>
  )
}
