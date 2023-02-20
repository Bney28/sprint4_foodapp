import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { auth as authCont } from '../Context'

const UserForm = () => {

    const { user, sendUser } = useContext(authCont.authContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        values: {
            image: user.photoURL,
            name: user.displayName,
            email: user.email
        }
    })

    const navigate = useNavigate()

    const editUser = (userData) => {
        /* sendUser(userData) */
        navigate("/profile")
    }

    return (
        <>

            <div className="divForm">
                <div className="divForm__img">
                    <img src={user.photoURL} alt="profile-pic" />
                </div>

                <form className='divForm__form'>

                    <input
                        placeholder="id"
                        type="text"
                        disabled
                        {...register("id")}
                    />

                    <input
                        placeholder="Name"
                        type="text"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span className='error'>Write a valid Name</span>}


                    <input
                        placeholder="E-mail"
                        type="text"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className='error'>Write a valid email</span>}


                    <input
                        placeholder="Phone Number"
                        type="text"
                        {...register("phone", { required: false })}
                    />
                    {errors.phone && <span className='error'>Write a valid Phone Number</span>}
                    
                    <input
                        placeholder="Birth Date"
                        type="text"
                        {...register("birth", { required: false })}
                    />
                    {errors.phone && <span className='error'>Write a valid Phone Number</span>}

                </form>

                <button
                className='btn buttonSubmit'
                    onClick={handleSubmit(editUser)}
                >
                    Submit
                </button>

            </div>
        </>

    )
}

export default UserForm