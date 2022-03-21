import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'

export const AddNewFav = () => {

    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(uiOpenModal())
    }

    return (
        <button className='btn btn-primary fab' onClick={handleAdd}>
            <i className='fas fa-plus'></i>
        </button>
    )
}
