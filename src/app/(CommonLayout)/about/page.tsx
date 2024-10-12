

export default function AboutPage() {
  return (
    <div className="bg-gradient py-12">
  <div className="max-w-[1280px] mx-auto px-6 sm:px-12 flex flex-col gap-y-14">
    
    {/* Hero Section */}
    <section className="text-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">Discover, Share & Cook Together</h1>
      <p className="text-lg text-gray-200 max-w-3xl mx-auto">
        Welcome to the Recipe Sharing Community! We are passionate about bringing together cooking enthusiasts of all levels. 
        Whether you're a home cook, culinary student, or professional chef, our platform provides a place to share your favorite recipes, 
        discover new dishes, and connect with a vibrant community of food lovers.
      </p>
    </section>

    {/* Mission Section */}
    <section className="text-center">
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Our Mission</h2>
      <p className="text-lg text-gray-200 max-w-2xl mx-auto">
        Our goal is to empower home cooks to explore their culinary creativity and make cooking more accessible and fun. We strive to provide a space 
        where you can find inspiration, share your own kitchen creations, and grow your cooking skills by connecting with like-minded food enthusiasts.
      </p>
    </section>

    {/* Team Section */}
    <section>
      <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-8">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {/* Team Member 1 */}
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-sm transform transition hover:scale-105">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREB7FC1k3nxOMlqRHPWG-j6mXUcysRIgm1GA&s" alt="CEO" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold text-gray-800">Alex Johnson</h3>
          <p className="text-gray-600">CEO & Founder</p>
        </div>
        {/* Team Member 2 */}
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-sm transform transition hover:scale-105">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rfm7ulLh-hULWlR8NBtrIwRCCWql8VQ9zw&s" alt="CTO" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold text-gray-800">Maria Thompson</h3>
          <p className="text-gray-600">CTO</p>
        </div>
        {/* Team Member 3 */}
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-sm transform transition hover:scale-105">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoEq5Rlm_kNtyFHeRiBRdPJRfPtfLaD70wIZU2UaJTOx8UFWGWQXwhgAvJYhiIiPevW4&usqp=CAU" alt="COO" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold text-gray-800">David Brown</h3>
          <p className="text-gray-600">COO</p>
        </div>
      </div>
    </section>

    {/* Our Journey Section */}
    <section className="text-center">
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Our Journey</h2>
      <p className="text-lg text-gray-200 max-w-3xl mx-auto">
        What started as a small community of home cooks has grown into a thriving online platform. Over the years, we've welcomed members from around the world who share their culinary traditions, 
        techniques, and recipes. Our platform has expanded to include interactive features like ingredient checklists, built-in cooking timers, and premium content for our members.
      </p>
    </section>

    {/* Contact Us Section */}
    <section className="text-center">
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-200">
        Have questions or need support? We'd love to hear from you!
      </p>
      <p className="text-white mt-2">Email: support@recipeshare.com</p>
      <p className="text-white mt-2">Phone: +880 123 456 7890</p>
    </section>
  </div>
</div>


  );
}
