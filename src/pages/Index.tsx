import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { FadeIn, SlideUp, StaggerChildren, GentlePulse } from "@/components/ui/animations";
import EmailCapture from "@/components/EmailCapture";
import AbstractShapes from "@/components/AbstractShapes";
import TableOfContents from "@/components/TableOfContents";
import bannerImage from "@/assets/banner-5.jpg";

const Index = () => {
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sunflower-50 via-white to-crystal-50 font-raleway relative overflow-hidden">
      <AbstractShapes />
      <TableOfContents />
      
      {/* Hero Banner */}
      <header className="relative z-10 h-96 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="absolute inset-0 bg-navy-900/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                The Six Systems That Help Product Teams Thrive
              </h1>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <FadeIn delay={0.1}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">Why band-aid solutions fail product teams</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-4">"We <a href="https://cutlefish.substack.com/p/tbm-283-just-and-but" className="text-crystal-600 hover:text-crystal-700 font-medium">just</a> need to implement RACI charts," the engineering director insisted. "That will fix our collaboration problems."</p>
                    <p className="mb-4">"Once everyone is trained on using RICE, prioritization will be less of a battle."</p>
                    <p className="mb-4">"Can't we simply establish a stage-gate process to move products from ideation to release with more clarity?"</p>
                    <p className="mb-4">I've heard variations of this countless times. When product teams struggle, the instinct is to reach for ready-made solutions – frameworks, processes, methodologies. These band-aid fixes promise quick results. They're comforting. They're also usually wrong for that company's particular situation.</p>
                    <p className="mb-6">After a decade of transforming product organizations, I've learned that lasting excellence isn't built through frameworks. It comes from understanding the deeper systems that shape how your team actually works.</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </section>

          {/* Six Systems Overview */}
          <section id="systems-overview" className="mb-16">
            <FadeIn delay={0.2}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 mb-8">Through my work transforming product organizations, I've identified six critical systems that determine a team's success:</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      { number: "01", title: "Infrastructure", desc: "The foundation that enables effective work", color: "crystal", sectionId: "infrastructure" },
                      { number: "02", title: "Self-Improvement", desc: "The ability to evolve and adapt", color: "moss", sectionId: "self-improvement" },
                      { number: "03", title: "Human Connection", desc: "The relationships that drive innovation", color: "sunflower", sectionId: "human-connection" },
                      { number: "04", title: "Decision Frameworks", desc: "The structures that enable clear choices", color: "navy", sectionId: "decision-frameworks" },
                      { number: "05", title: "Strategic Focus", desc: "The capacity to work on what matters most", color: "rouge", sectionId: "strategic-focus" },
                      { number: "06", title: "Customer Centricity", desc: "The systems for staying focused on user needs", color: "crystal", sectionId: "customer-centricity" },
                    ].map((system, index) => (
                      <FadeIn key={index} delay={0.1 * (index + 1)}>
                        <div className={`p-6 rounded-xl bg-gradient-to-br from-${system.color}-100 to-${system.color}-200 border-l-4 border-${system.color}-500 hover-lift`}>
                          <div className={`text-2xl font-bold text-${system.color}-700 mb-2`}>{system.number}</div>
                          <button 
                            onClick={() => scrollToSection(system.sectionId)}
                            className={`text-xl font-semibold text-${system.color}-900 mb-2 hover:text-${system.color}-700 transition-colors cursor-pointer text-left smooth-link`}
                          >
                            {system.title}
                          </button>
                          <p className="text-gray-700">{system.desc}</p>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                  <p className="text-lg text-gray-700">Understanding and strengthening these systems – rather than reaching for quick fixes – is what truly transforms product teams. Here's how each system works, why it matters, and how to build it:</p>
                </CardContent>
              </Card>
            </FadeIn>
          </section>

          {/* System 1: Infrastructure */}
          <section id="infrastructure" className="mb-16">
            <SlideUp delay={0.1}>
              <Card className="bg-white/80 backdrop-blur-sm border-l-8 border-crystal-500 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">Build Infrastructure Beyond Tools</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                    <p className="mb-4">"We just need a better roadmapping tool." Sound familiar? Yet I've seen too many teams implement new tools and see no meaningful improvement in their performance (or even use of the tool). It takes more than a tool to change your <a href="https://jennywanger.com/articles/product-culture/" className="text-crystal-600 hover:text-crystal-700 font-medium">product culture</a>.</p>
                  </div>
                  <div className="w-full mb-8">
                    <FadeIn delay={0.3} className="scroll-fade-in">
                      <img 
                        src="images/infrastructure.png" 
                        alt="Infrastructure systems illustration showing interconnected tools and processes" 
                        className="w-full h-auto object-contain"
                      />
                    </FadeIn>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">The Hidden Cost of Tool-First Thinking</h3>
                    <p className="mb-4">I would love it if operational challenges could be solved with the right software. But when teams focus too much on tools, they create new problems: low adoption, inconsistent usage, and ultimately, wasted investment. The real transformation happens when tools are just one piece of a larger infrastructure system, building up to a vision of what the <a href="https://jennywanger.com/articles/product-culture-blueprint/" className="text-crystal-600 hover:text-crystal-700 font-medium">ideal culture looks like</a>.</p>

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
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Getting Started</h3>
                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                      <li>Audit your current infrastructure mix - are you over-reliant on tools?</li>
                      <li><a href="https://jennywanger.com/articles/building-business-cases-that-leadership-cant-ignore/" className="text-crystal-600 hover:text-crystal-700 font-medium">Make sure you have a clear objective you're trying to achieve if you decide to use a tool</a></li>
                      <li>For your next initiative, plan three different types of supporting infrastructure</li>
                      <li>Focus on making desired behaviors the easiest path forward</li>
                    </ol>
                    <p className="mb-6">Want to dive deeper into building effective product infrastructure? Read "<a href="https://jennywanger.com/articles/product-infrastructure/" className="text-crystal-600 hover:text-crystal-700 font-medium">It's Hard to Have Too Much Infrastructure</a>" to learn the complete framework for layering solutions that drive lasting change.</p>

                    <h4 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Read More</h4>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><a href="https://jennywanger.com/articles/product-culture/" className="text-crystal-600 hover:text-crystal-700 font-medium">Product culture is driven by product operations, even if you don't think so</a></li>
                      <li><a href="https://jennywanger.com/articles/product-culture-blueprint/" className="text-crystal-600 hover:text-crystal-700 font-medium">The dangers in blind pursuit of better culture</a></li>
                      <li><a href="https://jennywanger.com/articles/building-business-cases-that-leadership-cant-ignore/" className="text-crystal-600 hover:text-crystal-700 font-medium">When the tool gets in the way of the goal</a></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          </section>

          {/* System 2: Self-Improvement */}
          <section id="self-improvement" className="mb-16">
            <SlideUp delay={0.2}>
              <Card className="bg-white/80 backdrop-blur-sm border-l-8 border-moss-500 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">Design for Self-Improvement</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                    <p className="mb-6">When product teams struggle, leaders often rush to implement solutions. But what if your team already knows what needs to change - they just need the right environment to make it happen?</p>
                  </div>
                  <div className="w-full mb-8">
                    <FadeIn delay={0.3} className="scroll-fade-in">
                      <img 
                        src="images/self-improvement.png" 
                        alt="Self-improvement process illustration with feedback loops and team collaboration" 
                        className="w-full h-auto object-contain"
                      />
                    </FadeIn>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Leading from the bottom up</h3>
                    <p className="mb-4">Product leaders don't have time to drive every change themselves. Instead, they create conditions where teams naturally evolve and improve. (Though <a href="https://jennywanger.com/articles/influencing-product-managers/" className="text-moss-600 hover:text-moss-700 font-medium">convincing product managers to change</a> isn't always easy)</p>
                    <p className="mb-6">Giving teams autonomy to choose how they work creates more buy-in and enthusiasm for change than if the change is imposed from the top down.</p>
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">The Three Rituals of Excellence</h3>
                    <p className="mb-4">Collaborative teams consistently practice <a href="https://jennywanger.com/articles/rituals-of-a-self-improving-team/" className="text-moss-600 hover:text-moss-700 font-medium">three key ceremonies</a> that drive continuous improvement:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><strong>Retrospectives:</strong> Regular team reflection on processes</li>
                      <li><strong>Premortems:</strong> Anticipating challenges before they occur</li>
                      <li><strong>Business Reviews:</strong> Evaluating real impact on goals</li>
                    </ul>
                    <p className="mb-6">One team I worked with was struggling with documentation. Rather than mandate new processes, we implemented these rituals. Within weeks, the team independently identified their documentation gaps and designed their own solutions - with higher adoption than any top-down approach.</p>
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Getting Started</h3>
                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                      <li>Schedule your first retrospective - but resist the urge to lead it</li>
                      <li>Choose one upcoming initiative for a <a href="https://jennywanger.com/articles/premortems-guide/" className="text-moss-600 hover:text-moss-700 font-medium">premortem</a> exercise</li>
                      <li>Block time for regular business impact reviews</li>
                    </ol>
                    <p className="mb-6">Want to learn the secrets of self-improving teams? Read "<a href="https://jennywanger.com/articles/rituals-of-a-self-improving-team/" className="text-moss-600 hover:text-moss-700 font-medium">The Three Rituals of a Self-Improving Team</a>" for a framework that puts teams on the path to high performance.</p>

                    <h4 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Read More</h4>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><a href="https://jennywanger.com/articles/premortems-guide/" className="text-moss-600 hover:text-moss-700 font-medium">Everything you need to know to run premortems</a></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          </section>

          {/* System 3: Human Connection */}
          <section id="human-connection" className="mb-16">
            <SlideUp delay={0.3}>
              <Card className="bg-white/80 backdrop-blur-sm border-l-8 border-sunflower-500 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">Prioritize Human Connection</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                    <p className="mb-6">I keep seeing teams rush to adopt AI and automation tools, hoping they'll magically solve collaboration problems. But here's what I've learned after a decade of working with product teams: our most powerful advantage isn't in AI usage – it's in our relationships.</p>
                  </div>
                  <div className="w-full mb-8">
                    <FadeIn delay={0.3} className="scroll-fade-in">
                      <img 
                        src="images/human-connection.png" 
                        alt="Human connection network illustration showing people collaborating and communicating" 
                        className="w-full h-auto object-contain"
                      />
                    </FadeIn>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">The AI-ification Trap</h3>
                    <p className="mb-4">The rush to AI-ify everything creates a dangerous temptation: replacing human connection with synthetic efficiency. When you let AI handle too much of the relationship work, you risk building products that feel technically sound but emotionally hollow.</p>
                    <p className="mb-6">Don't mistake efficiency for effectiveness. Moving faster through user research or stakeholder communication might seem productive, but it often means missing the insights that only come from genuine human interaction.</p>
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">The Power of Direct Connection</h3>
                    <p className="mb-4">I like to see product teams maintaining strong human connections in three critical areas:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><strong>Customer Relationships:</strong> Direct conversations that build true empathy</li>
                      <li><strong><a href="https://jennywanger.com/articles/product-hub/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">Team Collaboration</a>:</strong> Real-time problem-solving that sparks innovation</li>
                      <li><strong><a href="https://jennywanger.com/articles/release-calendar/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">Stakeholder Communication</a>:</strong> Authentic partnerships that drive alignment</li>
                    </ul>
                    <p className="mb-6">One food delivery company <a href="https://jennywanger.com/articles/customer-obsession/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">made this real</a> by requiring every employee - including product managers - to make actual deliveries. This first-hand experience created insights and empathy that no amount of data analysis could replicate. That's a strong example of building <a href="https://jennywanger.com/articles/product-infrastructure/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">infrastructure</a> that goes beyond tools.</p>
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Getting Started</h3>
                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                      <li>Use AI to identify opportunities for meaningful customer conversations, but conduct the conversations yourself</li>
                      <li>Let automation handle meeting scheduling and notes, freeing up energy for deeper customer relationships</li>
                      <li>Create space for "active processing" time where your team can discuss and internalize what they're learning from customers</li>
                    </ol>
                    <p className="mb-6">Want to protect your team from the AI-ification of everything? Read "<a href="https://jennywanger.com/articles/what-ai-shouldntdo/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">What AI Can't—and Shouldn't—Do for Product Managers</a>" to learn how to strike a balance between automation and human connection.</p>

                    <h4 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Read More</h4>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><a href="https://jennywanger.com/articles/customer-obsession/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">How to Build a Customer-Obsessed Culture</a></li>
                      <li><a href="https://jennywanger.com/articles/product-hub/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">The magic of a product hub and radically transparent communication</a></li>
                      <li><a href="https://jennywanger.com/articles/product-infrastructure/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">It's hard to have too much infrastructure</a></li>
                      <li><a href="https://jennywanger.com/articles/release-calendar/" className="text-sunflower-700 hover:text-sunflower-800 font-medium">The Remarkably Simple Release Calendar: Product Operations In Practice</a></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          </section>

          {/* System 4: Decision Frameworks */}
          <section id="decision-frameworks" className="mb-16">
            <SlideUp delay={0.4}>
              <Card className="bg-white/80 backdrop-blur-sm border-l-8 border-navy-500 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">Create Clear Decision Frameworks</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                    <p className="mb-4">"We need to implement RACI charts," the engineering director insisted. But after a decade of transforming product organizations, I've learned that decision frameworks need to address three key questions:</p>
                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                      <li>How should we structure our teams to make decisions?</li>
                      <li>What processes will enable those decisions?</li>
                      <li>How do we keep decisions aligned with our strategy?</li>
                    </ol>
                  </div>
                  <div className="w-full mb-8">
                    <FadeIn delay={0.3} className="scroll-fade-in">
                      <img 
                        src="images/decision-frameworks.png" 
                        alt="Decision framework diagram showing clear decision-making processes and structures" 
                        className="w-full h-auto object-contain"
                      />
                    </FadeIn>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Team Structure Decisions</h3>
                    <p className="mb-4">The first framework every organization needs is how to structure their shared product operations work, especially if they <a href="https://jennywanger.com/articles/product-ops-without-headcount/" className="text-navy-600 hover:text-navy-700 font-medium">don't want to dedicate headcount</a> to it. I've seen three patterns emerge:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><strong>Leadership-owned:</strong> Product leaders maintain decision rights and delegate selectively</li>
                      <li><strong>Rotational system:</strong> Decision ownership rotates among team members to build broader perspective</li>
                      <li><strong>Management training:</strong> Rising leaders are given increasing decision authority as part of growth</li>
                    </ul>
                    <p className="mb-6">Each model has its place. For example, leadership-owned works well in turnaround situations, while rotational systems excel in stable, mature organizations.</p>
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Process-Level Decisions</h3>
                    <p className="mb-4">Once you have your structure, you need frameworks for day-to-day decisions. Traditional tools like RACI charts potentially help with specific projects, but are <a href="https://jennywanger.com/articles/raci-charts-are-stifling-collaboration/" className="text-navy-600 hover:text-navy-700 font-medium">likely to create issues</a> on teams. I prefer more flexible approaches:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><strong>Single Accountable Individual (DRI):</strong> Clear ownership with collaborative input</li>
                      <li><strong>Decision-Focused Frameworks:</strong> Tools like RAPID that focus on choices rather than roles</li>
                      <li><strong>Strategy-Driven Collaboration:</strong> Teams organize around outcomes rather than roles, allowing people to contribute wherever they can add value</li>
                    </ul>
                    <p className="mb-6">The key is matching your framework to the situation. For short-term projects with external stakeholders, traditional frameworks can work. For ongoing product development, you need something that encourages the team to have deeper collaboration.</p>
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Getting Started</h3>
                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                      <li><a href="https://jennywanger.com/articles/process-maps/" className="text-navy-600 hover:text-navy-700 font-medium">Map</a> your current decision points and team structure</li>
                      <li>Choose an <a href="https://jennywanger.com/articles/product-operations-team-model/" className="text-navy-600 hover:text-navy-700 font-medium">operating model</a> that matches your organization's maturity and needs</li>
                      <li>Start small, measure impact, and scale what works</li>
                    </ol>
                    <p className="mb-6">Want to learn how to create real clarity without stifling collaboration? Read <a href="https://jennywanger.com/articles/raci-charts-are-stifling-collaboration/" className="text-navy-600 hover:text-navy-700 font-medium">"RACI Charts Are Stifling Collaboration"</a> to discover why traditional frameworks often backfire and what to do instead.</p>

                    <h4 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Read More</h4>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><a href="https://jennywanger.com/articles/raci-charts-are-stifling-collaboration/" className="text-navy-600 hover:text-navy-700 font-medium">RACI charts are stifling collaboration</a></li>
                      <li><a href="https://jennywanger.com/articles/process-maps/" className="text-navy-600 hover:text-navy-700 font-medium">My all-in-one product operations process improvement tool</a></li>
                      <li><a href="https://jennywanger.com/articles/product-ops-without-headcount/" className="text-navy-600 hover:text-navy-700 font-medium">Beyond headcount: Three proven patterns for investing in product ops</a></li>
                      <li><a href="https://jennywanger.com/articles/product-operations-team-model/" className="text-navy-600 hover:text-navy-700 font-medium">From Chaos to Focus: Product Operations Team Models</a></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          </section>

          {/* System 5: Strategic Focus */}
          <section id="strategic-focus" className="mb-16">
            <SlideUp delay={0.5}>
              <Card className="bg-white/80 backdrop-blur-sm border-l-8 border-rouge-500 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">Enable Strategic Focus</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                    <p className="mb-6">Your product managers want to be strategic, but they're stuck in back-to-back meetings and overwhelmed with administrative tasks. "Do it all" product management never really worked. But we can help the product managers on our team get closer to it.</p>
                  </div>
                  <div className="w-full mb-8">
                    <FadeIn delay={0.3} className="scroll-fade-in">
                      <img 
                        src="images/strategic-focus.jpg" 
                        alt="Strategic focus visualization showing priority setting and goal alignment" 
                        className="w-full h-auto object-contain"
                      />
                    </FadeIn>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">The Meeting Trap</h3>
                    <p className="mb-4">In one enterprise, product managers spent 29% of their time in <a href="https://jennywanger.com/articles/meeting-audit/" className="text-rouge-600 hover:text-rouge-700 font-medium">recurring meetings</a> (and that's lower than some other companies I've seen). Fixing meetings helped product managers focus on the strategic work that mattered. It also opened the door to completely reimagine communication and alignment flows with the go-to-market teams.</p>
                    <p className="mb-6">The improved communications naturally resolved some of the tensions in the org, reducing the amount of stakeholder alignment work PMs had to do.</p>
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Creating Space for Strategy</h3>
                    <p className="mb-4">High-performing organizations build three key elements into their operational foundation:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><strong><a href="https://jennywanger.com/articles/product-ops-strategy-stack/" className="text-rouge-600 hover:text-rouge-700 font-medium">Clear Strategic Support</a>:</strong> Product operations designed to support your product strategy</li>
                      <li><strong><a href="https://jennywanger.com/articles/meeting-audit/" className="text-rouge-600 hover:text-rouge-700 font-medium">Meeting audits</a>:</strong> Systematic reduction of unnecessary meetings</li>
                      <li><strong><a href="https://jennywanger.com/articles/becoming-the-product-manager-they-always-dreamed-of/" className="text-rouge-600 hover:text-rouge-700 font-medium">Operational Support</a>:</strong> AI and systems that handle routine tasks</li>
                    </ul>
                    <p className="mb-6">When that enterprise team conducted a meeting audit, they didn't just free up time – they created space for strategic thinking and stronger collaboration. The key was pairing time savings with clear strategic direction. Nowadays, I encourage product leaders to take that even further with AI tooling support.</p>
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Getting Started</h3>
                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                      <li>Build a baseline by tracking where your product managers' time goes today</li>
                      <li>Identify a few key strategic activities you want them doing more</li>
                      <li>Create infrastructure (tools, processes, automation) that protects time for those activities</li>
                      <li>Measure the impact - are PMs actually spending more time on strategic work?</li>
                    </ol>
                    <p className="mb-6">Want to learn how to transform your PMs into truly strategic leaders? Read "<a href="https://jennywanger.com/articles/building-business-cases-that-leadership-cant-ignore/" className="text-rouge-600 hover:text-rouge-700 font-medium">Building business cases that leadership can't ignore</a>" to discover how to connect strategy and financials together for a more convincing approach to product pitches.</p>

                    <h4 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Read More</h4>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><a href="https://jennywanger.com/articles/becoming-the-product-manager-they-always-dreamed-of/" className="text-rouge-600 hover:text-rouge-700 font-medium">Becoming the product manager they always dreamed of</a></li>
                      <li><a href="https://jennywanger.com/articles/meeting-audit/" className="text-rouge-600 hover:text-rouge-700 font-medium">How running a meeting audit decreased meetings by 27%</a></li>
                      <li><a href="https://jennywanger.com/articles/product-ops-strategy-stack/" className="text-rouge-600 hover:text-rouge-700 font-medium">The Product Ops Strategy Stack: Unlock Your Strategic Partner Potential</a></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          </section>

          {/* System 6: Customer Centricity */}
          <section id="customer-centricity" className="mb-16">
            <SlideUp delay={0.6}>
              <Card className="bg-white/80 backdrop-blur-sm border-l-8 border-crystal-500 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">Design for Customer Centricity</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                    <p className="mb-6">"Our team is customer-obsessed," leaders often claim. But many companies actually make it harder for product to connect with customers. How can we build a customer-centric company, and what role should AI play in that today?</p>
                  </div>
                  <div className="w-full mb-8">
                    <FadeIn delay={0.3} className="scroll-fade-in">
                      <img 
                        src="images/customer-centricity.png" 
                        alt="Customer-centric design illustration showing user feedback loops and customer journey mapping" 
                        className="w-full h-auto object-contain"
                      />
                    </FadeIn>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">The Customer Connection Crisis</h3>
                    <p className="mb-6">Many teams rely on filtered customer feedback – through analytics, support tickets, or sales reports. Others are exploring <a href="https://jennywanger.com/articles/what-ai-shouldntdo/" className="text-crystal-600 hover:text-crystal-700 font-medium">synthetic user research using AI</a>. But great products come from deep customer understanding that only direct connection can provide. Without the right infrastructure to enable this connection, "customer-centric" becomes an empty phrase.</p>
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Building Customer Connection</h3>
                    <p className="mb-4">At SpotHero, we created multiple pieces of <a href="https://jennywanger.com/articles/product-infrastructure/" className="text-crystal-600 hover:text-crystal-700 font-medium">infrastructure</a> around three key areas that made customer-centricity real:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><strong>Easy Access:</strong> Every employee could look up any customer's contact information and reach out directly</li>
                      <li><strong>Shared Experience:</strong> New employees worked customer support during their first few weeks</li>
                      <li><strong>Connected Systems:</strong> Support tickets, analytics, and customer feedback were integrated for a complete view</li>
                    </ul>
                    <p className="mb-6">The result? Product managers regularly reached out to users, understood their challenges deeply, and made better decisions. More importantly, the entire company developed <a href="https://jennywanger.com/articles/customer-obsession/" className="text-crystal-600 hover:text-crystal-700 font-medium">genuine empathy</a> for our customers.</p>
                    
                    <h3 className="text-2xl font-semibold text-navy-800 mt-8 mb-4">Getting Started</h3>
                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                      <li>Audit how easy it is for PMs to contact customers</li>
                      <li>Create a system for sharing customer insights</li>
                      <li>Find ways for teams to experience your product as customers do</li>
                    </ol>
                    <p className="mb-6">Want to learn how to build a genuinely customer-obsessed culture? Read "<a href="https://jennywanger.com/articles/customer-obsession/" className="text-crystal-600 hover:text-crystal-700 font-medium">How to Build a Customer-Obsessed Culture</a>" for stories of how different companies built user-focused cultures.</p>

                    <h4 className="text-xl font-semibold text-navy-800 mt-8 mb-4">Read More</h4>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li><a href="https://jennywanger.com/articles/product-infrastructure/" className="text-crystal-600 hover:text-crystal-700 font-medium">It's hard to have too much infrastructure</a></li>
                      <li><a href="https://jennywanger.com/articles/what-ai-shouldntdo/" className="text-crystal-600 hover:text-crystal-700 font-medium">What AI can't—and shouldn't—do for product managers</a></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-16">
            <FadeIn delay={0.3}>
              <Card className="bg-gradient-to-br from-navy-900 to-navy-800 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Build Your High-Performing Product Team</h2>
                  <div className="prose prose-lg max-w-none text-gray-100 leading-relaxed">
                    <p className="mb-6">Here's what I've learned after working with dozens of product teams: excellence isn't about having the perfect tool or process. It's about <a href="https://jennywanger.com/articles/product-culture/" className="text-crystal-300 hover:text-crystal-200 font-medium">building systems</a> that reinforce each other.</p>
                    <p className="mb-4">Think about the product teams you admire. They don't just have great roadmap tools – they have infrastructure that makes roadmapping easy. They don't just do customer research – they have systems that make customer contact natural. They don't just make good decisions – they have frameworks that enable collaboration.</p>
                    <p className="mb-6">Each system we've explored - Infrastructure, Self-Improvement, Human Connection, Decision Frameworks, Strategic Focus, and Customer Centricity - plays a crucial role. But you don't need to tackle them all at once.</p>
                    <p className="mb-4">Start with your biggest pain point. Then:</p>
                    <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-100">
                      <li>Look for quick wins that could make it better tomorrow</li>
                      <li>Layer in supporting infrastructure beyond just tools</li>
                      <li>Measure whether it's actually helping your team</li>
                      <li>Build on what works, learn from what doesn't</li>
                    </ol>
                    <p className="mb-6">If you'd like to talk about how to approach this, please reach out. I'm always happy to have a complimentary consult to help get you unblocked as quickly as possible.</p>
                    <p className="mb-8">Remember: struggling teams keep adding processes hoping something will stick. Thriving teams build systems that make excellence the path of least resistance.</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </section>

          {/* Newsletter Section */}
          <section className="mb-16">
            <FadeIn delay={0.4}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">Keep Learning</h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-6">Building great product teams is challenging work. Join 1500+ product leaders getting weekly insights from <a href="https://www.jennywanger.com/subscribe" className="text-crystal-600 hover:text-crystal-700 font-medium smooth-link">Jenny Wanger's newsletter</a>. It explores the different sides of product leadership that need to come together to create high-performing product teams.</p>
                  </div>
                  <div className="text-center">
                    <GentlePulse>
                      <Button asChild className="bg-crystal-600 hover:bg-crystal-700 text-white px-8 py-3 text-lg font-semibold btn-animate">
                        <a href="https://www.jennywanger.com/subscribe" target="_blank" rel="noopener noreferrer">
                          Subscribe to unlock your team's potential
                        </a>
                      </Button>
                    </GentlePulse>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </section>

          {/* About Jenny */}
          <section id="about" className="mb-16">
            <FadeIn delay={0.5}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">About Jenny Wanger</h2>
                  <div className="mb-6 flex justify-center">
                    <FadeIn delay={0.2} className="scroll-fade-in">
                      <img 
                        src="images/jenny-headshot.png" 
                        alt="Jenny Wanger - Product Operations Consultant and Entrepreneur" 
                        className="w-40 h-40 rounded-full shadow-lg object-cover"
                      />
                    </FadeIn>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-center">
                    <p className="mb-4">Jenny is an entrepreneur and <a href="https://jennywanger.com/consulting" className="text-crystal-600 hover:text-crystal-700 font-medium">product operations consultant</a> who helps product teams trying to make dramatic changes and make it stick. She helps them through fractional VP of Product services, coaching, and her course, <a href="https://www.reforge.com/courses/product-operations-and-infrastructure/details?course_slug=product-operations-and-infrastructure?utm_id=product_operations_infrastructure_jenny&utm_medium=social&utm_source=linkedin&utm_campaign=courses_creators_Q339" className="text-crystal-600 hover:text-crystal-700 font-medium">Product Operations and Infrastructure</a>. Some past clients include the Linux Foundation, Cisco, CompTIA, and GE.</p>
                    <p className="mb-4">She brings over a decade of product management experience, having worked at and consulted for venture-backed startups, large enterprises, and nonprofits. She co-founded the pandemic-tech focused TCN Coalition and merged it with LF Public Health, as well as led the consumer product team at <a href="http://www.spothero.com/" className="text-crystal-600 hover:text-crystal-700 font-medium">SpotHero</a>, a top-ranking app that relieves the stress of finding a parking spot. Previous to that, she ran the developer experience team at <a href="http://developer.arity.com/" className="text-crystal-600 hover:text-crystal-700 font-medium">Arity</a>, a startup founded by Allstate.</p>
                    <p className="mb-6">When offline, Jenny is usually up in the mountains outside of her home in Colorado hiking and skiing with her family. She has an undergraduate degree from Harvard College and an MBA from MIT.</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </section>

          {/* Work with Jenny */}
          <section className="mb-16">
            <FadeIn delay={0.6}>
              <Card className="bg-gradient-to-br from-sunflower-500 to-sunflower-600 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-center">Work with Jenny</h2>
                  <div className="prose prose-lg max-w-none text-white/90 leading-relaxed">
                    <p className="mb-4">These concepts perfectly illustrate why my approach to product operations consulting goes beyond quick fixes. When product leaders come to me struggling with team performance, they often want to implement the latest framework or methodology – just like the examples you mentioned. But lasting transformation requires a deeper understanding of the systems that actually drive success.</p>
                    <p className="mb-4"><strong>My services are specifically designed to strengthen these six critical systems within your organization.</strong> Through my Product Operations Assessment, we identify which of these systems are weak or missing in your current setup. My 1:1 Product Operations Coaching helps you develop the leadership skills to build and maintain these systems effectively. And my Product Operations Consulting provides hands-on implementation support to establish the infrastructure, decision frameworks, and strategic focus your team needs to thrive.</p>
                    <p className="mb-6">Rather than applying generic solutions, I work with you to understand your team's unique challenges and build customized systems that address your specific context. This is why my clients see lasting change – we're not just implementing another framework, we're transforming the underlying systems that determine whether your product team operates at their full potential or continues to struggle with the same recurring problems.</p>
                    <p className="mb-8 text-xl font-semibold text-center"><strong>Ready to move beyond band-aid solutions and build systems that actually work? Let's unlock your team's potential.</strong></p>
                  </div>
                  <div className="text-center">
                    <GentlePulse>
                      <Button asChild className="bg-white text-sunflower-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold btn-animate">
                        <a href="https://www.jennywanger.com/subscribe" target="_blank" rel="noopener noreferrer">
                          Subscribe to Newsletter
                        </a>
                      </Button>
                    </GentlePulse>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Index;
