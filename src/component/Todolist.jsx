import './Todolist.css'

const Todolist = ({todos}) => {
    return(
        <div className='Todo'>
            <h3>{todos}</h3>
        </div>
    )
}
export default Todolist;