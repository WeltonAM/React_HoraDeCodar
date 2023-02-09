interface Props {
    title: String
    content: String
    commentsQty: Number
    tags: String[]

    category: Category
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <>Quantity: {commentsQty}</>

        <div>
            {tags.map((tag) => (
                <span key={tag + '_tag'}> #{tag}</span>
            ))}
        </div>

        <h4>Category: {category}</h4>

    </div>
  )
}

export default Destructuring