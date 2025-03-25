import { useState } from 'react';
import emailjs from '@emailjs/browser';
import React from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    emailFrom: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.emailFrom.trim() !== '' &&
    formData.message.trim() !== '';

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) return;

    emailjs.sendForm(
      'service_w2d8lst',
      'template_q04ah8g',
      e.target as HTMLFormElement,
      'XTizmEZTWkqGsMZMh'
    );

    setFormData({
      name: '',
      emailFrom: '',
      message: '',
    });
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="gap-4 flex flex-col h-[25rem] sm:h-full">
        <div className="h-[15%] flex gap-4">
          <div className="bg-[rgb(30,30,30)] rounded-lg border-2 border-[rgb(40,40,40)] h-full w-full">
            <input 
              type="text" 
              name="name"
              id="name"
              placeholder="NAME" 
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full h-full bg-transparent outline-none p-2 font-Tech text-[1.5rem] placeholder:text-[rgb(150,150,150)]"
            />
          </div>
          <div className="bg-[rgb(30,30,30)] rounded-lg border-2 border-[rgb(40,40,40)] h-full w-full">
            <input 
              type="email" 
              name="emailFrom"
              id="emailFrom"
              placeholder="EMAIL" 
              required
              value={formData.emailFrom}
              onChange={handleChange}
              className="w-full h-full bg-transparent outline-none p-2 font-Tech text-[1.5rem] placeholder:text-[rgb(150,150,150)]"
            />
          </div>
        </div>

        <div className="h-[70%]">
          <div className="bg-[rgb(30,30,30)] rounded-lg border-2 border-[rgb(40,40,40)] h-full w-full">
            <textarea 
              name="message"
              id="message"
              placeholder="WRITE A MESSAGE" 
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full h-full bg-transparent p-2 outline-none font-Tech text-[1.5rem] placeholder:text-[rgb(150,150,150)]"
            />
          </div>
        </div>

        <div className="h-[15%]">
          <div
            className={`h-full w-full flex items-center justify-center rounded-lg border-2 border-[rgb(40,40,40)] bg-[rgb(30,30,30)] ${
              isFormValid ? 'cursor-pointer hover:bg-transparent' : 'cursor-not-allowed'
            }`}
          >
            <button 
              type="submit"
              disabled={!isFormValid}
              className="font-Tech text-[1.5rem] relative top-[0.1rem] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
