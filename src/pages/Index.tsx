import React, { useEffect } from 'react';
import AbstractShapes from '@/components/AbstractShapes';
import { FadeIn, GentlePulse } from '@/components/ui/animations';

export default function Index() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add('in-view');
        } else {
          element.classList.remove('in-view');
        }
      });
    };

    const isElementInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on component mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-crystal-50 via-white to-sunflower-50 relative overflow-hidden">
      <AbstractShapes />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Hero Background Image with Organic Integration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-crystal-100/60 via-transparent to-sunflower-100/40 z-10"></div>
          <img
            src="/lovable-uploads/944b9e0e-5b30-4238-b3a3-dde82f04cbe1.png"
            alt="Product team collaboration"
            className="w-full h-full object-cover scale-105"
          />
          {/* Organic gradient mask that flows into the page */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white z-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent z-30"></div>
          {/* Side gradients for organic flow */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/80 to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/80 to-transparent z-20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-40 text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              The Six Systems That Help{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crystal-600 to-sunflower-600">
                Product Teams Thrive
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-navy-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your product team with six critical systems that drive lasting excellence. 
              Get the complete guide that goes beyond band-aid solutions.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GentlePulse>
                <button className="bg-gradient-to-r from-crystal-500 to-crystal-600 hover:from-crystal-600 hover:to-crystal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get the Free Guide
                </button>
              </GentlePulse>
              <button className="border-2 border-navy-300 text-navy-700 hover:bg-navy-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:border-navy-400">
                Learn More
              </button>
            </div>
          </FadeIn>
        </div>
        
        {/* Scroll indicator */}
        <FadeIn delay={1}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-navy-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-navy-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto text-center">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-semibold text-navy-800 mb-8 scroll-animate">
              Why Systems Matter for Product Teams
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-navy-600 leading-relaxed max-w-3xl mx-auto scroll-animate">
              In today's fast-paced product development landscape, isolated tools and fragmented processes lead to inefficiencies,
              missed opportunities, and ultimately, products that don't meet their full potential.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg text-navy-600 leading-relaxed max-w-3xl mx-auto mt-6 scroll-animate">
              Discover how implementing interconnected systems can revolutionize your product team's workflow,
              fostering collaboration, accelerating innovation, and ensuring consistent delivery of exceptional products.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Systems Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-crystal-50 to-sunflower-50 relative">
        <div className="container mx-auto">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-semibold text-center text-navy-800 mb-12 scroll-animate">
              The Six Systems of Thriving Product Teams
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* System Card 1 */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-animate">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-navy-700">Vision & Strategy</div>
                  <p className="text-navy-500 text-base">
                    A clear, shared vision ensures everyone moves in the same direction, maximizing impact.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* System Card 2 */}
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-animate">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-navy-700">Customer Understanding</div>
                  <p className="text-navy-500 text-base">
                    Deep insights into customer needs drive the creation of valuable and relevant products.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* System Card 3 */}
            <FadeIn delay={0.5}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-animate">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-navy-700">Prioritization & Roadmapping</div>
                  <p className="text-navy-500 text-base">
                    Effective prioritization aligns resources with the most impactful initiatives.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* System Card 4 */}
            <FadeIn delay={0.6}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-animate">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-navy-700">Execution & Iteration</div>
                  <p className="text-navy-500 text-base">
                    Agile execution and continuous iteration ensure rapid learning and adaptation.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* System Card 5 */}
            <FadeIn delay={0.7}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-animate">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-navy-700">Team Collaboration</div>
                  <p className="text-navy-500 text-base">
                    Seamless collaboration fosters innovation and accelerates problem-solving.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* System Card 6 */}
            <FadeIn delay={0.8}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-animate">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-navy-700">Measurement & Learning</div>
                  <p className="text-navy-500 text-base">
                    Data-driven insights enable continuous improvement and informed decision-making.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <AbstractShapes />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-semibold mb-8 scroll-animate">
              Ready to Transform Your Product Team?
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12 scroll-animate">
              Download our comprehensive guide to building the six systems that drive product team excellence.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <GentlePulse>
              <button className="bg-gradient-to-r from-crystal-500 to-crystal-600 hover:from-crystal-600 hover:to-crystal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl scroll-animate">
                Get the Free Guide
              </button>
            </GentlePulse>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
