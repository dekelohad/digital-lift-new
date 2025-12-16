import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    name: 'Cody',
    quote: "If you are looking for someone to get that phone ringing, they're the right fit for you! I'm so happy with them!"
  },
  {
    name: 'Armando',
    quote: "They are the absolute best at what they do. They built me a new website and within 10 day's I got my first unpaid for Lead! Best money spent with Kai and StoneSystems"
  },
  {
    name: 'James',
    quote: "After going through 2-3 other people i finally found someone that told me the truth. Really easy to work with and very respectable. I would recommend them to anyone!"
  },
  {
    name: 'Manny',
    quote: "Ever since he implemented the new website and landing pages, it's been nothing but great and our conversion has gone way up. We started getting calls almost immediately."
  },
  {
    name: 'Wendy',
    quote: "Getting 5 star reviews has always given me anxiety, Kai and his team have taken all that away and I have seen a significant increase in business since I started working with them. I would recommend them to anyone!"
  },
  {
    name: 'Netane',
    quote: "Nothing but professional and awesome in every way, they are absolutely great to work with"
  },
  {
    name: 'Frank',
    quote: "I would highly recommend going with Stone Systems, my business has ramped up, literally overnight and their prices are very affordable. Feel free to reach out to me personally with any questions about them!"
  },
  {
    name: 'David',
    quote: "I've seen a significant improvement in my business. Stone Systems has made my life so much easier!"
  },
  {
    name: 'Rick',
    quote: "Thank you to Kai and Stone Systems , our company finally has the web presence it needs and our sales and profits have grown significantly! We look forward to working with them for many years to come!"
  },
  {
    name: 'Luckie',
    quote: "Their business marketing systems have helped us a lot. Anytime I need anything I can always give them a call. They're super helpful with everything they do, I would recommend them to anybody"
  },
  {
    name: 'Lopaka',
    quote: "Before I started working with Stonesystems I was paying $1500/month with another service that just was not working for me. Stonesystems is super affordable and they do a fantastic Job!"
  },
  {
    name: 'Adam',
    quote: "It's been great and all I needed was one sale a month to pay for the service. Since I signed up i've gotten quite a bit more than that. I would recommend them to anyone!"
  },
  {
    name: 'Mason',
    quote: "They made me a brand new website, super professional and it's been absolutely amazing. I cannot say enough good things about theme. It turned those 100s of viewers into 100s of clients!"
  },
  {
    name: 'Matt',
    quote: "First i thought it was a scam, but then it turns out they're just a really good company at a really good price. I would recommend them to anyone!"
  },
  {
    name: 'Ryan',
    quote: "They've made it so easy with all their automations and the awesome website. I can't thank them enough and you should all definitely check them out"
  },
  {
    name: 'Scott',
    quote: "He really got everything going well. I'm getting organic leads now that don't cost me any money. I would recommend them to anyone!"
  },
  {
    name: 'Zach',
    quote: "Big shoutout to Kai and Stone Systems for helping me with my website and getting me more leads. I would recommend them to anyone!"
  },
  {
    name: 'Dale',
    quote: "I've been working with stonesystems for the last few months and it's been absolutely amazing. If you're out there and you need someone that's gonna be there for you... we love working with stonesystems"
  },
  {
    name: 'George',
    quote: "Shoutout to Kai and Remy for an amazing job that they did doing my website. I've been a pain in the butt every now and then but they did it right. Check them out, you won't be dissapointed."
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              The proof is in the pudding...
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Let's see what our clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to join these happy customers?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Let's schedule a call and see how we can help grow your business.
          </p>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Book A Call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

