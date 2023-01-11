const TemplateExpressions = () => {

    const name = 'Juliana'

    const data = {
        age: 31,
        job: "Programmer"
    }

    return (
        <div>
            <p>Hello, {name}!</p>
            <p>You are a {data.job}</p>
        </div>
    )
}

export default TemplateExpressions