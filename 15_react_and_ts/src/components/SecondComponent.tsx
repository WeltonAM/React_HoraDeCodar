interface Props {
    name: String
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <h3>My second component</h3>
        <p>His name is: {props.name}</p>

    </div>
  )
}

export default SecondComponent