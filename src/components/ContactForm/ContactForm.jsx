'use client'
import Button from '../Button/Button'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

    const initialFormData = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Message sent!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setFormData(initialFormData);
            } else {
                toast.error('Something Went Wrong!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <ToastContainer />
            <form className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl" onSubmit={handleSubmit}>
                <div className="flex">
                    <h1 className="font-bold uppercase text-5xl">Send us a <span className='text-blue-900'> message </span> </h1>
                </div>
                <div className="grid grid-cols-1 gap-2 mt-5">
                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        name="name"
                        type="text"
                        placeholder="Enter Your Name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                    />

                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        name='email'
                        type="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        name='subject'
                        type="text"
                        placeholder="Enter Subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                    />
                    <input
                        required
                        name='message'
                        placeholder="Message"
                        type='text'
                        className="w-full h-24 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        value={formData.message}
                        onChange={handleInputChange}
                    />

                </div>
                <div className="my-5 w-1/2 lg:w-1/4">
                    <Button content={'Get In Touch'} onClick={handleSubmit} />
                </div>
            </form>
        </>
    )
}

export default ContactForm
