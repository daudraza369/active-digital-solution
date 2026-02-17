import CareerForm from "@/components/CareerForm";
import Image from "next/image";

const CAREER_HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920";

const JOBS = [
  {
    title: "Content Writer Intern",
    exp: "Minimum 1-2 Yrs Experience",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
  },
  {
    title: "Junior Network Officer",
    exp: "Minimum 1-2 Yrs Experience",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
  },
  {
    title: "Junior Off-Page SEO",
    exp: "Minimum 1-2 Yrs Experience",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
  },
  {
    title: "BD Manager",
    exp: "Minimum 1-2 Yrs Experience",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
  },
  {
    title: "Telesale Executive",
    exp: "Minimum 1-2 Yrs Experience",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600",
  },
  {
    title: "Customer Success Specialist",
    exp: "Minimum 1-2 Yrs Experience",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
  },
  {
    title: "Amazon Wholesale Specialist",
    exp: "Minimum 1-2 Yrs Experience",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600",
  },
  {
    title: "Amazon Wholesale Expert",
    exp: "Minimum 1-2 Yrs Experience",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600",
  },
  {
    title: "Operation Manager",
    exp: "Minimum 1-2 Yrs Experience",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600",
  },
];

const PERKS = [
  {
    icon: "Sports",
    title: "Sports Activities",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400",
  },
  {
    icon: "Pay",
    title: "Competitive Pay-scale",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
  },
  {
    icon: "Training",
    title: "Professional Training & Certifications",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
  },
  {
    icon: "Medical",
    title: "Medical Allowance",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
  },
  {
    icon: "Awards",
    title: "Employee Recognition Awards",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
  },
  {
    icon: "Bonus",
    title: "Quarterly/Annual Performance Bonus",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400",
  },
  {
    icon: "Env",
    title: "Exciting Working Environment",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
  },
  {
    icon: "Trips",
    title: "Recreational Trips",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400",
  },
];

const HIRING_STEPS = [
  {
    step: "Apply",
    desc: "Through the jobs posted on our official website and social channels, you can send your updated resume mentioning the job role and why you are a fit for us.",
  },
  {
    step: "Application Review",
    desc: "From the dozens of applications we receive, we shortlist the candidates through multiple algorithms that allow us to narrow our list to candidates better aligned with the job role.",
  },
  {
    step: "Interview",
    desc: "We align you with multiple interviewers; each meant to gather insight on you based on different principles and values.",
  },
  {
    step: "Onboard",
    desc: "After you have cleared the last interview set, our HR will align you through the onboarding process and make the transition seamless. Welcome Onboard!",
  },
];

export default function CareerPage() {
  return (
    <div>
      <section className="relative py-16 sm:py-20 overflow-hidden min-h-[240px] sm:min-h-[320px] flex items-center">
        <Image
          src={CAREER_HERO_IMAGE}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#000C14]/80" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready to Be One of <span className="text-accent">Us</span>?
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
            We come together at Active Digital Solution intending to
            normalize workplace diversity and turn jobs into careers. Join
            hands with us to work hard, laugh a lot and learn non-stop.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Job Openings:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {JOBS.map((job) => (
              <div
                key={job.title}
                className="relative overflow-hidden bg-trg-card border border-trg-border rounded-lg hover:border-trg-accent transition group"
              >
                <div className="relative h-24 sm:h-28 md:h-32">
                  <Image
                    src={job.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01141D]/70 via-[#01141D]/20 to-transparent" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-accent mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{job.exp}</p>
                  <a
                    href="#apply"
                    className="text-accent hover:underline text-sm"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-trg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Perks and Benefits</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {PERKS.map((p) => (
              <div
                key={p.title}
                className="relative overflow-hidden rounded-lg h-32 sm:h-36 md:h-40 border border-trg-border"
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#000C14]/75" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="relative z-10 font-semibold text-white text-center text-sm sm:text-base">
                    {p.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">
            Life at Active Digital Solution
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            With an innovative approach to help our employees stay in touch
            with market trends and the existing practices, we offer lifelong
            learning opportunities through shared experiences and individual
            training. Our state-of-the-art facilities provide our team a
            comfortable environment to innovate solutions, thrive on
            challenges, and pursue their ideas for personal growth. We value
            our team as the reason for our success and ensure they are
            treated with respect and celebrated. Just like one family!
          </p>
          <h2 className="text-2xl font-bold mb-6">
            Are You Searching For A Job?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Active Digital Solution is always searching for professionals
            willing to overcome new challenges while having fun. We provide
            our employees a unique opportunity to contribute to our growth
            and help our clients establish a flourishing business. We aim to
            attract spirited individuals with numerous growth opportunities
            and friendly practices at our organization.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-trg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Our Hiring Process</h2>
          <div className="space-y-6 max-w-3xl">
            {HIRING_STEPS.map((item, i) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 font-bold text-accent">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">
                    {item.step}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Ready To Get Started?</h2>
          <div className="bg-trg-card border border-trg-border rounded-lg p-4 sm:p-6">
            <CareerForm />
          </div>
        </div>
      </section>
    </div>
  );
}
