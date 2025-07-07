
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import EmailCapture from "@/components/EmailCapture";
import AbstractShapes from "@/components/AbstractShapes";

const Index = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sunflower-50 via-white to-crystal-50 font-raleway relative overflow-hidden">
      <AbstractShapes />
      
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight">
            The Six Systems That Help Product Teams Thrive
          </h1>
          <div className="w-32 h-48 mx-auto mb-8 bg-gradient-to-br from-crystal-400 to-crystal-600 rounded-2xl shadow-lg">
            <div className="w-full h-full flex items-center justify-center text-white font-medium">
              Report Cover Image
            </div>
          </div>
          <EmailCapture />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <section className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Why band-aid solutions fail product teams</h2>
                <div className="w-full h-48 mb-6 bg-gradient-to-r from-rouge-200 to-rouge-300 rounded-xl shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-rouge-800 font-medium">
                    Band-aid Solutions Image
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">"We <a href="https://cutlefish.substack.com/p/tbm-283-just-and-but" className="text-crystal-600 hover:text-crystal-700 font-medium">just</a> need to implement RACI charts," the engineering director insisted. "That will fix our collaboration problems."</p>
                  <p className="mb-4">"Once everyone is trained on using RICE, prioritization will be less of a battle."</p>
                  <p className="mb-4">"Can't we simply establish a stage-gate process to move products from ideation to release with more clarity?"</p>
                  <p className="mb-4">I've heard variations of this countless times. When product teams struggle, the instinct is to reach for ready-made solutions – frameworks, processes, methodologies. These band-aid fixes promise quick results. They're comforting. They're also usually wrong for that company's particular situation.</p>
                  <p className="mb-6">After a decade of transforming product organizations, I've learned that lasting excellence isn't built through frameworks. It comes from understanding the deeper systems that shape how your team actually works.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Six Systems Overview */}
          <section className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-8">Through my work transforming product organizations, I've identified six critical systems that determine a team's success:</p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    { number: "01", title: "Infrastructure", desc: "The foundation that enables effective work", color: "crystal" },
                    { number: "02", title: "Self-Improvement", desc: "The ability to evolve and adapt", color: "moss" },
                    { number: "03", title: "Human Connection", desc: "The relationships that drive innovation", color: "sunflower" },
                    { number: "04", title: "Decision Frameworks", desc: "The structures that enable clear choices", color: "navy" },
                    { number: "05", title: "Strategic Focus", desc: "The capacity to work on what matters most", color: "rouge" },
                    { number: "06", title: "Customer Centricity", desc: "The systems for staying focused on user needs", color: "crystal" },
                  ].map((system, index) => (
                    <div key={index} className={`p-6 rounded-xl bg-gradient-to-br from-${system.color}-100 to-${system.color}-200 border-l-4 border-${system.color}-500`}>
                      <div className={`text-2xl font-bold text-${system.color}-700 mb-2`}>{system.number}</div>
                      <h3 className={`text-xl font-semibold text-${system.color}-900 mb-2`}>{system.title}</h3>
                      <p className="text-gray-700">{system.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-gray-700">Understanding and strengthening these systems – rather than reaching for quick fixes – is what truly transforms product teams. Here's how each system works, why it matters, and how to build it:</p>
              </CardContent>
            </Card>
          </section>

          {/* System 1: Infrastructure */}
          <section className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Build Infrastructure Beyond Tools</h2>
                <div className="w-full h-64 mb-6 bg-gradient-to-r from-crystal-300 to-crystal-400 rounded-xl shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-crystal-900 font-medium">
                    Infrastructure Systems Image
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">"We just need a better roadmapping tool." Sound familiar? Yet I've seen too many teams implement new tools and see no meaningful improvement in their performance (or even use of the tool). It takes more than a tool to change your <a href="https://jennywanger.com/articles/product-culture/" className="text-crystal-600 hover:text-crystal-700 font-medium">product culture</a>.</p>
                  
                  <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">The Hidden Cost of Tool-First Thinking</h3>
                  <p className="mb-4">I would love it if operational challenges could be solved with the right software. But when teams focus too much on tools, they create new problems: low adoption, inconsistent usage, and ultimately, wasted investment. The real transformation happens when tools are just one piece of a larger infrastructure system, building up to a vision of what the <a href="https://jennywanger.com/articles/product-culture-blueprint/" className="text-crystal-600 hover:text-crystal-700 font-medium">ideal culture</a> looks like.</p>

                  <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">The Infrastructure Rule of Threes</h3>
                  <p className="mb-4">Influential product leaders follow a simple but powerful principle to change team behavior: implement at least <a href="https://jennywanger.com/articles/product-infrastructure/" className="text-crystal-600 hover:text-crystal-700 font-medium">three different types of infrastructure</a> for any meaningful change. This could include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Tools (software solutions)</li>
                    <li>Documentation (guides and templates)</li>
                    <li>Training (skill development)</li>
                    <li>Meetings (structured collaboration)</li>
                    <li>Automation (connecting systems)</li>
                  </ul>
                  <p className="mb-6">When I was at SpotHero, we transformed our A/B testing practices not just by implementing a new tool, but by creating templates, establishing weekly review meetings, and documenting best practices. This layered approach made the change stick.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* System 2: Self-Improvement */}
          <section className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Design for Self-Improvement</h2>
                <div className="w-full h-64 mb-6 bg-gradient-to-r from-moss-300 to-moss-400 rounded-xl shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-moss-900 font-medium">
                    Self-Improvement Process Image
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-6">When product teams struggle, leaders often rush to implement solutions. But what if your team already knows what needs to change - they just need the right environment to make it happen?</p>
                  
                  <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">The Three Rituals of Excellence</h3>
                  <p className="mb-4">Collaborative teams consistently practice <a href="https://jennywanger.com/articles/rituals-of-a-self-improving-team/" className="text-moss-600 hover:text-moss-700 font-medium">three key ceremonies</a> that drive continuous improvement:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Retrospectives:</strong> Regular team reflection on processes</li>
                    <li><strong>Premortems:</strong> Anticipating challenges before they occur</li>
                    <li><strong>Business Reviews:</strong> Evaluating real impact on goals</li>
                  </ul>
                  <p className="mb-6">One team I worked with was struggling with documentation. Rather than mandate new processes, we implemented these rituals. Within weeks, the team independently identified their documentation gaps and designed their own solutions - with higher adoption than any top-down approach.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* System 3: Human Connection */}
          <section className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Prioritize Human Connection</h2>
                <div className="w-full h-64 mb-6 bg-gradient-to-r from-sunflower-300 to-sunflower-400 rounded-xl shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-sunflower-900 font-medium">
                    Human Connection Network Image
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-6">I keep seeing teams rush to adopt AI and automation tools, hoping they'll magically solve collaboration problems. But here's what I've learned after a decade of working with product teams: our most powerful advantage isn't in AI usage – it's in our relationships.</p>
                  
                  <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">The Power of Direct Connection</h3>
                  <p className="mb-4">I like to see product teams maintaining strong human connections in three critical areas:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Customer Relationships:</strong> Direct conversations that build true empathy</li>
                    <li><strong><a href="https://jennywanger.com/articles/product-hub/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">Team Collaboration</a>:</strong> Real-time problem-solving that sparks innovation</li>
                    <li><strong><a href="https://jennywanger.com/articles/release-calendar/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">Stakeholder Communication</a>:</strong> Authentic partnerships that drive alignment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* System 4: Decision Frameworks */}
          <section className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Create Clear Decision Frameworks</h2>
                <div className="w-full h-64 mb-6 bg-gradient-to-r from-navy-300 to-navy-400 rounded-xl shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-navy-900 font-medium">
                    Decision Framework Diagram
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">"We need to implement RACI charts," the engineering director insisted. But after a decade of transforming product organizations, I've learned that decision frameworks need to address three key questions:</p>
                  <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>How should we structure our teams to make decisions?</li>
                    <li>What processes will enable those decisions?</li>
                    <li>How do we keep decisions aligned with our strategy?</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* System 5: Strategic Focus */}
          <section className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Enable Strategic Focus</h2>
                <div className="w-full h-64 mb-6 bg-gradient-to-r from-rouge-300 to-rouge-400 rounded-xl shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-rouge-900 font-medium">
                    Strategic Focus Visualization
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-6">Your product managers want to be strategic, but they're stuck in back-to-back meetings and overwhelmed with administrative tasks. "Do it all" product management never really worked. But we can help the product managers on our team get closer to it.</p>
                  
                  <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Creating Space for Strategy</h3>
                  <p className="mb-4">High-performing organizations build three key elements into their operational foundation:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong><a href="https://jennywanger.com/articles/product-ops-strategy-stack/" className="text-rouge-600 hover:text-rouge-700 font-medium">Clear Strategic Support</a>:</strong> Product operations designed to support your product strategy</li>
                    <li><strong><a href="https://jennywanger.com/articles/meeting-audit/" className="text-rouge-600 hover:text-rouge-700 font-medium">Meeting audits</a>:</strong> Systematic reduction of unnecessary meetings</li>
                    <li><strong><a href="https://jennywanger.com/articles/becoming-the-product-manager-they-always-dreamed-of/" className="text-rouge-600 hover:text-rouge-700 font-medium">Operational Support</a>:</strong> AI and systems that handle routine tasks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* System 6: Customer Centricity */}
          <section className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Design for Customer Centricity</h2>
                <div className="w-full h-64 mb-6 bg-gradient-to-r from-crystal-300 to-crystal-500 rounded-xl shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-crystal-900 font-medium">
                    Customer-Centric Design Image
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-6">"Our team is customer-obsessed," leaders often claim. But many companies actually make it harder for product to connect with customers. How can we build a customer-centric company, and what role should AI play in that today?</p>
                  
                  <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Building Customer Connection</h3>
                  <p className="mb-4">At SpotHero, we created multiple pieces of <a href="https://jennywanger.com/articles/product-infrastructure/" className="text-crystal-600 hover:text-crystal-700 font-medium">infrastructure</a> around three key areas that made customer-centricity real:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Easy Access:</strong> Every employee could look up any customer's contact information and reach out directly</li>
                    <li><strong>Shared Experience:</strong> New employees worked customer support during their first few weeks</li>
                    <li><strong>Connected Systems:</strong> Support tickets, analytics, and customer feedback were integrated for a complete view</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <Card className="bg-gradient-to-br from-navy-900 to-navy-800 text-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Build Your High-Performing Product Team</h2>
                <div className="w-full h-48 mb-6 bg-gradient-to-r from-sunflower-400/20 to-crystal-400/20 rounded-xl border border-white/20">
                  <div className="w-full h-full flex items-center justify-center text-white/80 font-medium">
                    High-Performance Team Illustration
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-100 leading-relaxed">
                  <p className="mb-6">Here's what I've learned after working with dozens of product teams: excellence isn't about having the perfect tool or process. It's about <a href="https://jennywanger.com/articles/product-culture/" className="text-crystal-300 hover:text-crystal-200 font-medium">building systems</a> that reinforce each other.</p>
                  <p className="mb-6">Each system we've explored - Infrastructure, Self-Improvement, Human Connection, Decision Frameworks, Strategic Focus, and Customer Centricity - plays a crucial role. But you don't need to tackle them all at once.</p>
                  <p className="mb-8">Remember: struggling teams keep adding processes hoping something will stick. Thriving teams build systems that make excellence the path of least resistance.</p>
                </div>
                <div className="text-center">
                  <EmailCapture variant="dark" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* About Jenny */}
          <section className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">About Jenny Wanger</h2>
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-crystal-400 to-navy-600 rounded-full shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-white font-medium text-sm text-center">
                    Jenny's Photo
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-center">
                  <p className="mb-4">Jenny is an entrepreneur and <a href="https://jennywanger.com/consulting" className="text-crystal-600 hover:text-crystal-700 font-medium">product operations consultant</a> who helps product teams make dramatic changes stick. She brings over a decade of product management experience from venture-backed startups, large enterprises, and nonprofits.</p>
                  <p className="mb-6">Previous roles include leading the consumer product team at <a href="http://www.spothero.com/" className="text-crystal-600 hover:text-crystal-700 font-medium">SpotHero</a>, running developer experience at <a href="http://developer.arity.com/" className="text-crystal-600 hover:text-crystal-700 font-medium">Arity</a>, and co-founding the TCN Coalition. She has degrees from Harvard College and MIT.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Work with Jenny */}
          <section className="mb-16">
            <Card className="bg-gradient-to-br from-sunflower-500 to-sunflower-600 text-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Work with Jenny</h2>
                <div className="prose prose-lg max-w-none text-white/90 leading-relaxed">
                  <p className="mb-6">My services are specifically designed to strengthen these six critical systems within your organization. Through my Product Operations Assessment, we identify which systems are weak or missing. My 1:1 coaching and consulting provides hands-on implementation support to establish the infrastructure, decision frameworks, and strategic focus your team needs to thrive.</p>
                  <p className="mb-8 text-xl font-semibold text-center">Ready to move beyond band-aid solutions and build systems that actually work?</p>
                </div>
                <div className="text-center">
                  <EmailCapture variant="light" />
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Index;
