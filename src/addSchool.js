import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddSchool.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const AddSchool = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if (key === 'image') {
                formData.append(key, data.image[0]); // Append the first file
            } else {
                formData.append(key, data[key]); // Append other fields
            }
        });
    
        try {
            const response = await axios.post('https://ed-backend-ruby.vercel.app/addSchool', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert(response.data.message);
            reset();
        } catch (error) {
            console.error(error);
            alert('Error adding school');
        }
    };
    
const handleNavigate = () =>{
    navigate('/showSchools');
}
    return (
        <div className="form-container">
            <h2>Add School</h2>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="add-school-form">
                <div className="form-group">
                    <label>School Name</label>
                    <input {...register('name', { required: true })} placeholder="Enter school name" />
                    {errors.name && <p className="error">Name is required</p>}
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input {...register('address', { required: true })} placeholder="Enter address" />
                    {errors.address && <p className="error">Address is required</p>}
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input {...register('city', { required: true })} placeholder="Enter city" />
                    {errors.city && <p className="error">City is required</p>}
                </div>

                <div className="form-group">
                    <label>State</label>
                    <input {...register('state', { required: true })} placeholder="Enter state" />
                    {errors.state && <p className="error">State is required</p>}
                </div>

                <div className="form-group">
                    <label>Contact</label>
                    <input
                        type="number"
                        {...register('contact', { required: true, maxLength: 15 })}
                        placeholder="Enter contact number"
                    />
                    {errors.contact && <p className="error">Contact is required</p>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" {...register('email_id', { required: true })} placeholder="Enter email" />
                    {errors.email_id && <p className="error">Valid email is required</p>}
                </div>

                <div className="form-group">
    <label>Image</label>
    <input type="file" {...register('image', { required: true })} />
    {errors.image && <p className="error">Image is required</p>}
</div>


                <button type="submit" className="submit-btn">Add School</button>
                <p onClick={handleNavigate} className="submit-btn"
                style={{
                    textAlign:"center"
                }}
                >Schools List</p>
            </form>
            
        </div>
    );
};

export default AddSchool;
