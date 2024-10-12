import React from 'react'

const page = () => {
  return (
    <div className="bg-gradient flex flex-col items-center justify-center py-16 px-6 sm:px-10 lg:px-16">
  <div className="max-w-lg w-full space-y-10">
    <div className="text-center">
      <h2 className="text-4xl font-extrabold text-white">We'd Love to Hear from You!</h2>
      <p className="mt-3 text-lg text-gray-200">
        Got a question, feedback, or just want to say hello? Drop us a message and we’ll get back to you as soon as possible!
      </p>
    </div>

    <form className="bg-gradientSecondary p-8 rounded-xl shadow-lg space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-200">Your Name</label>
        <input
          className="mt-1 w-full px-4 py-3 bg-solid rounded-lg shadow-sm placeholder-gray-200 focus:outline-none sm:text-sm"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-200">Your Email</label>
        <input
          className="mt-1 w-full px-4 py-3 bg-solid rounded-lg shadow-sm placeholder-gray-200 focus:outline-none sm:text-sm"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-200">Subject</label>
        <input
          className="mt-1 w-full px-4 py-3 bg-solid rounded-lg shadow-sm placeholder-gray-200 focus:outline-none sm:text-sm"
          placeholder="What’s this about?"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-200">Your Message</label>
        <textarea
          className="mt-1 w-full px-4 py-3 bg-solid rounded-lg shadow-sm placeholder-gray-200 focus:outline-none sm:text-sm"
          placeholder="Type your message here..."
          rows={4}
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-3 px-6 border border-transparent text-lg font-semibold rounded-lg bg-solid text-white focus:outline-none"
        >
          Send Message
        </button>
      </div>
    </form>

    <div className="mt-12 text-center text-gray-200">
      <h3 className="text-2xl font-bold">Get in Touch</h3>
      <p className="mt-4">Phone: +880 123 456 789</p>
      <p className="mt-1">Email: hello@sportsclub.com</p>
      <p className="mt-1">Address: 123 Sports Avenue, Dhaka, Bangladesh</p>
    </div>
  </div>
</div>

  )
}

export default page