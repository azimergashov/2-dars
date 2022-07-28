 import './input.scss'



 const Input = ( {array}) =>{



    return(

        <form className='form mb-3 '  onSubmit={ (evt) => {
            evt.preventDefault()
            const inputValue = document.querySelector(".input__input").value

            if(!array.includes(inputValue)){
                array.push(inputValue)
            }

            console.log(array);



        }} >
            <div className='d-flex '>
            <input className="input__input form-control "  type="text" placeholder="todo kiriting" />
            <button className="input__btn "> kiritish </button>
            </div>

        </form>

    )
 }

 export default Input