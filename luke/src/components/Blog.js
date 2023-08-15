import { Fragment, useContext, useState } from 'react';
import NavContext from '../context/navContext';
import BlogPopup from './BlogPopup';
const data = [
  {
    title: 'behind the creation of interview rocket',
    img: 'img/blog/blog-post-1.jpg',
    tag: 'System Design',
    date: { date: '14', month: 'Aug', year: '2023' },
    des: [
      "In the dynamic world of job hunting and career advancement, interviews serve as pivotal crossroads that can make or break a person's professional trajectory. At InterviewRocket, we recognized the significance of these critical interactions and embarked on a mission to reshape the landscape of interview preparation. Our relentless commitment revolves around empowering individuals with the skills, confidence, and strategic prowess required to shine in interviews and embark on their dream careers.",
      'Our journey began with a clear mission statement that resonated deeply within our team: to transform the way people prepare for interviews. We understood the challenges, anxieties, and uncertainties candidates face during these decisive moments. Armed with this insight, we aimed to craft a comprehensive platform that offered personalized, realistic interview practice tailored to diverse industries and roles.',
      'What sets InterviewRocket apart is the groundbreaking integration of artificial intelligence into the interview preparation process. As candidates engage in practice interviews, our AI interviewers meticulously analyze their responses and actions. This real-time analysis yields invaluable insights that empower candidates to fine-tune their strategies, approach, and interview skills. Our AI-driven feedback is the bedrock upon which candidates build their confidence and expertise, turning each practice session into a learning opportunity.',
      "Interview preparation transcends the realm of memorizing scripted answers. It's a holistic journey of self-discovery, a process of identifying and effectively communicating one's unique strengths. InterviewRocket is designed as a conduit for this growth. By fostering self-reflection, the platform guides candidates in honing not only their technical prowess but also their emotional intelligence. We understand that success in interviews hinges on the ability to connect authentically, and our platform supports candidates in nurturing this essential skill.",
      'In a world characterized by rapid change and evolving industries, staying updated is a non-negotiable aspect of success. InterviewRocket is unwavering in its commitment to promoting a culture of continuous learning. Our resources span a wide spectrum of fields, ensuring that candidates remain abreast of industry trends, emerging technologies, and evolving interview methodologies. We believe that by equipping candidates with the latest insights, we contribute to their readiness for the challenges of the modern job market.',
      "At the heart of InterviewRocket's evolution is a team of dedicated professionals who share a common goal: unlocking individual potential and catalyzing professional opportunities. Driven by innovation, our team continuously enhances our AI-powered platform to offer an unparalleled interview preparation experience. Each feature, each algorithm, and each enhancement is a testament to our commitment to supporting candidates on their journey to success.",
      "InterviewRocket isn't just a tool; it's a trusted partner in the voyage towards a fulfilling career. With our AI-powered platform, candidates receive more than just practice; they receive personalized guidance, constructive insights, and a space for growth. Our platform isn't just about mastering interviews; it's about mastering oneself. As we look back on the transformative journey that brought InterviewRocket to life, we are excited for the future, where we will continue to innovate, empower, and redefine interview preparation.",
    ],
  },
  //   {
  //     title: "Effective Marketing Strategy tips",
  //     img: "img/blog/blog-post-2.jpg",
  //     tag: "Design",
  //     date: { date: "23", month: "jun", year: "2021" },
  //     des: [
  //       "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //       "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //       "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //     ],
  //   },
  //   {
  //     title: "free psd and sketch ressouces",
  //     img: "img/blog/blog-post-3.jpg",
  //     tag: "Media",
  //     date: { date: "23", month: "jun", year: "2021" },
  //     des: [
  //       "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //       "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //       "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //     ],
  //   },
  //   {
  //     title: "How to become a successful freelancer",
  //     img: "img/blog/blog-post-4.jpg",
  //     tag: "Technology",
  //     date: { date: "23", month: "jun", year: "2021" },
  //     des: [
  //       "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //       "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //       "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //     ],
  //   },
];

const Blog = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <BlogPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id="blog" className={`${nav === 'blog' ? 'active' : ''}`}>
        <div className="container page-title text-center">
          <h2 className="text-center">
            latest <span>posts</span>
          </h2>
          <span className="title-head-subtitle">
            tips, insights, and best practices about web design and developpment
          </span>
        </div>
        <div className="container">
          <div className="row">
            {data.map((data, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(i)}>
                      <img className="img-fluid" src={data.img} alt="" />
                    </a>
                    <div className="post-date">
                      {' '}
                      <span>{data.date.date}</span>
                      <span>{data.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Blog;
