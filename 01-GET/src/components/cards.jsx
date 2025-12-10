

const cards = (props) => {
  return (
     <div className='cards'>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
  )
}

export default cards;