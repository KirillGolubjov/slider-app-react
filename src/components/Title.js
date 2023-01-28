import Person from './Person'

const Title = ({ people, index, setIndex }) => {
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div>
      <Person people={people} index={index} setIndex={setIndex} />
    </section>
  )
}
export default Title
