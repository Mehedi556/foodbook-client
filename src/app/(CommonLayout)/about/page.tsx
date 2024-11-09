import Link from "next/link";
import heroImage from '../../../../public/banner2.jpg'
import { ChefHat, Heart, UtensilsCrossed, Users } from 'lucide-react';
import Testimonials from "../_components/testimonials";


export default function AboutPage() {
  return (
    <div className=" font-sans text-colorPrimary">

    {/* Hero Section */}
    <section className="relative text-center py-32 bg-cover bg-center text-colorPrimary" style={{ backgroundImage: `url('/banner2.jpg')` }}>
      <div className="max-w-[1280px] mx-auto ">
        <div className="px-4 py-4 bg-white opacity-70 mx-auto max-w-[750px] rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to FoodBook</h1>
        <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto">
          FoodBook is your recipe haven – where culinary enthusiasts share, discover, and delight in delicious creations from around the world.
        </p>
        {/* <Link href="/" className="inline-block mt-8 px-6 py-2 bg-gradient-to-r from-orange-400 to-red-600 text-white font-semibold rounded-md transition hover:bg-red-700">
          Explore Recipes
        </Link> */}
        </div>
        
      </div>
    </section>

    {/* About FoodBook Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-colorPrimary mb-6">Our Vision</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          At FoodBook, we believe in connecting people through the joy of cooking. Our mission is to create a thriving community where food lovers can share, explore, and refine their cooking skills. From family recipes to new culinary trends, FoodBook is the place to explore and indulge.
        </p>
      </div>
    </section>

    {/* Stats Section */}
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-16 max-w-[1280px] mx-auto px-4 ">
      <StatItem number="10K+" label="Recipes Shared" icon={<ChefHat size={36} />} />
      <StatItem number="5K+" label="Contributors" icon={<Users size={36} />} />
      <StatItem number="500K+" label="Upvotes Given" icon={<Heart size={36} />} />
      <StatItem number="100+" label="Cuisine Types" icon={<UtensilsCrossed size={36} />} />
    </section>

    {/* Community Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-colorPrimary mb-6">Join the FoodBook Community</h2>
        <p className="text-lg text-colorPrimary max-w-3xl mx-auto mb-12">
          FoodBook isn’t just about recipes. It’s about making connections, inspiring creativity, and fostering a passion for culinary arts. Join our vibrant community and start your own culinary adventure with us today!
        </p>
        <button className="px-6 py-3 bg-colorSecondary text-colorPrimary font-semibold rounded-md transition hover:bg-orange-600">
          Get Started
        </button>
      </div>
    </section>

    {/* Unique Features Section */}
    <section className="py-16 px-4">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose FoodBook?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="Diverse Recipes" description="Explore a world of recipes from cuisines across the globe, curated and shared by food lovers." />
          <FeatureCard title="User-Friendly Platform" description="Our platform is designed to make sharing and discovering recipes as easy as pie." />
          <FeatureCard title="Engaged Community" description="Connect with fellow cooking enthusiasts, exchange ideas, and inspire one another." />
          <FeatureCard title="Premium Content" description="Enjoy exclusive, high-quality recipes and cooking tips with a premium membership." />
          <FeatureCard title="Interactive Feedback" description="Rate and comment on recipes, share your thoughts, and help others improve their creations." />
          <FeatureCard title="Personalized Recommendations" description="Get tailored recipe suggestions based on your taste preferences." />
        </div>
      </div>
    </section>

    {/* Core Values Section */}
    <section className="text-center py-16 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          At FoodBook, our core values are centered around integrity, creativity, inclusivity, and passion for food. We’re committed to providing a platform where everyone feels welcome to share, learn, and enjoy.
        </p>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="">
      <div className="max-w-[1280px] mx-auto">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Users Are Saying</h2> */}
        <Testimonials /> {/* Assuming you have a Testimonials component */}
      </div>
    </section>
  </div>


  );
}


const StatItem = ({ number, label, icon }:{ number:any, label:any, icon:any }) => (
  <div className="p-6 flex flex-col items-center bg-white shadow-md rounded-md">
    <div className="mb-2 text-colorSecondary">{icon}</div>
    <h2 className="text-4xl font-bold text-colorPrimary">{number}</h2>
    <p className="text-colorPrimary">{label}</p>
  </div>
);

const FeatureCard = ({ title, description }:{ title:any, description:any }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl shadow-colorSecondary transition-shadow duration-200">
    <h3 className="text-xl font-semibold text-colorPrimary mb-3">{title}</h3>
    <p className="text-colorPrimary">{description}</p>
  </div>
);