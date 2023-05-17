'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { SectionWrapper } from '../hoc';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.email,
      to_name: 'Alexander Mc Lachlan',
      from_email: formData.email,
      to_email: 'alexdjangox@gmail',
      message: formData.message,
      subject: formData.subject,
    };

    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setFormData({
            name: '',
            email: '',
            message: '',
            subject: '',
          });

          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section className="bg-primary">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="m b-4 text-4xl tracking-tight font-extralight text-center text-gray-300 dark:text-white">
          Contact Form
        </h2>
        <span className="h-8"></span>
        <p className="mb-8 lg:mb-16 font-extralight text-center  text-gray-300 dark:text-gray-300 sm:text-xl">
          Get in touch
        </p>
        <form onSubmit={handleFormSubmit} ref={formRef} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="yourEmail@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Subject"
              required
            />
          </div>
          <div></div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 h-40 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your message here..."
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="green-pink-gradient p-[1px]  shadow-card text-gray py-2 px-6 rounded-md hover:bg-primary-darker transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, 'contact');
