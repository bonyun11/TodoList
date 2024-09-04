import './Search.css'
import { useState } from 'react'

const Search = ( {getTodos} ) => {
    const [content, setContent] = useState("")

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onSubmit = () => {
        if(!content){
            return;
        }
        getTodos(content)
        setContent("")
    }

    return(
        <div className='Search'>
            <input type="text" value={content} onChange={onChangeContent} placeholder='작성을 해주세요.'/>
            <button onClick={onSubmit}>작성</button>
        </div>
    )
}

export default Search;