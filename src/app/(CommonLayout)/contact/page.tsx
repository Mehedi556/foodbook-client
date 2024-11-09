import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "@/src/assets/logo.png"
import Image from 'next/image';
import { Button } from '@nextui-org/button';

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-12 px-4 lg:px-0">

      {/* Logo Section */}
      <div className="mb-12 text-center">
        <Image src={logo} alt="FoodBook Logo" className="h-28 w-28 mx-auto" />
        <h1 className="text-3xl font-bold text-colorSolid mt-4">Contact FoodBook</h1>
        <p className="text-colorSolid mt-2">We’re here to help with any questions, feedback, or suggestions!</p>
      </div>

      {/* Contact Information and Form Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Side - Contact Information */}
        <div className="flex flex-col items-center lg:items-start lg:text-left bg-colorSecondary p-10 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-colorSolid">Get in Touch</h2>
          <p className="text-colorSolid">
            We'd love to hear from you! Reach out via any of the methods below, and we’ll respond as soon as possible.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 text-colorSolid">
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt size={20} className="text-orange-600" />
              <span>45 Culinary St, Food City, USA</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaEnvelope size={20} className="text-orange-600" />
              <span>contact@foodbook.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhone size={20} className="text-orange-600" />
              <span>+1 234 567 890</span>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-orange-700 mt-6">
            <a href="#" className="hover:text-orange-800"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-orange-800"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-orange-800"><FaTwitter size={24} /></a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-10 rounded-xl shadow-lg space-y-6 shadow-colorSecondary">
          <h2 className="text-2xl font-semibold text-colorSolid text-center">Send Us a Message</h2>
          <p className="text-colorSolid text-center">Let us know your questions, comments, or suggestions!</p>
          <form className="space-y-4">
            <input type="text"
              className="peer w-full px-4 py-3 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-colorSecondary" placeholder="Your Name" />
            <input type="email"
              className="peer w-full px-4 py-3 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-colorSecondary" placeholder="Your Email" />
            
            <textarea
              placeholder="Your Message"
              className="peer w-full px-4 py-3 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-colorSecondary"
            // rows="5"
            />
            <Button className="w-full bg-colorSecondary text-lg text-colorSolid py-3 rounded-lg font-semibold transition duration-300">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default page