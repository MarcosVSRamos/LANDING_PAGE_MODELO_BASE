import { DivButton } from './styles'

type Props = {
  onClick?: () => void
  nomeButtom?: string
  icon?: React.ReactNode
  iconPosition: 'left' | 'right'
  className?: string
}

const Button = ({
  onClick,
  nomeButtom,
  icon,
  iconPosition,
  className
}: Props) => {
  return (
    <DivButton className={className}>
      <button onClick={onClick}>
        <div className="button-content">
          {iconPosition === 'left' && <span>{icon}</span>}
          <p>{nomeButtom}</p>
          {iconPosition === 'right' && <span>{icon}</span>}
        </div>
      </button>
    </DivButton>
  )
}

export default Button
