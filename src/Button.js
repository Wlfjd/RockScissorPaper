import './Button.css'
import reset from './assets/ic-reset.svg'

function Button({ onClick }) {

  return (
    <img onClick={onClick} className="App-reset" src={reset} alt="초기화" />
  )
}

export default Button;
