import HandIcon from './HandIcon';
import './HandButton.css'

// CSS 파일로 스타일을 적용해 주세요
function HandButton({ value, onClick, className = '' }) {
  const classNames = className
  const handleClick = () => onClick(value);
  return (
    <button className="HandButtons" onClick={handleClick}>
      <HandIcon className={classNames} value={value} />
    </button>
  );
}

export default HandButton;
