import type { NextPage } from 'next';
import styles from './MyCV.module.scss';
const ResumeYourName: NextPage = () => {
  return (
    <div className={styles.resumeYourName}>
      <div className={styles.skillsSection}>
        <div className={styles.sectionTitle}>Skills</div>
        <div className={styles.description}>
          <p className={styles.businessAnalysisUx}>
            Business Analysis, UX Research, User Testing and Validation, Customer Journey Mapping, Information
            Architecture, Low- and High- Fidelity Wireframing, Prototyping, Interaction Design, Visual Design, Defining
            Product Specifications, Design System Development, Design Sprints, A/B Testing.
          </p>
          <p className={styles.businessAnalysisUx}>&nbsp;</p>
          <p className={styles.businessAnalysisUx}>{`Experienced with Kanban, Agile & Lean methodologies.`}</p>
          <p className={styles.businessAnalysisUx}>&nbsp;</p>
          <p className={styles.businessAnalysisUx}>Coding fundamentals. HTML, CSS, JavaScript, SQL</p>
        </div>
      </div>
      <div className={styles.educationSection}>
        <div className={styles.sectionTitle1}>{`Education & Learning`}</div>
        <div className={styles.educationContent}>
          <b className={styles.headline}>Master’s in Human-Computer Interaction</b>
          <div className={styles.label}>Copenhagen School of Design and Technology, 2015 – 2016</div>
        </div>
        <div className={styles.educationContent1}>
          <b className={styles.headline}>Bachelor's of Arts</b>
          <div className={styles.label}>Copenhagen School of Design and Technology, 2011 – 2015</div>
        </div>
        <div className={styles.courseContent}>
          <b className={styles.headline}>UX: Interaction Design</b>
          <div className={styles.label}>Trydesignlab.com, Dec 2017</div>
        </div>
        <div className={styles.courseContent1}>
          <b className={styles.headline}>Design Leadership Masterclass</b>
          <div className={styles.label}>Design Lab Inc., Mar 2020</div>
        </div>
        <div className={styles.courseContent2}>
          <b className={styles.headline}>UX Design Specialization</b>
          <div className={styles.label}>
            <p className={styles.businessAnalysisUx}>{`Udacity.com, online course by Google, `}</p>
            <p className={styles.businessAnalysisUx}>Aug 2016</p>
          </div>
        </div>
        <div className={styles.courseContent3}>
          <b className={styles.headline}>Branding fundamentals</b>
          <div className={styles.label}>Design Lab Inc., Nov 2014</div>
        </div>
      </div>
      <div className={styles.workExperienceSection}>
        <div className={styles.sectionTitle2}>Work experience</div>
        <div className={styles.workExperienceContent}>
          <b className={styles.headline}>Product Designer</b>
          <div className={styles.label6}>Fintef, Oct 2019 - Present</div>
          <div
            className={
              styles.description1
            }>{`Designing end-to-end experience for financial products on mobile & web platforms. Working closely with managers, marketing specialists and developers.`}</div>
        </div>
        <div className={styles.workExperienceContent1}>
          <b className={styles.headline}>UX Designer</b>
          <div className={styles.description1}>
            Rewamped website flows and navigation menus, reducing the frequency of misdirected customer service queries
            by 30%. Conducted user testing with 10+ participants using UserTesting.com; designed agains findings which
            reduced bounce rate for primary user flow by 30%.
          </div>
          <div className={styles.label6}>Resume Worded, Sep 2017 – Sep 2019</div>
        </div>
        <div className={styles.workExperienceContent2}>
          <b className={styles.headline}>Associate UX Designer</b>
          <div className={styles.description1}>
            <p className={styles.businessAnalysisUx}>
              Redesigned company’s homepage and lead generation forms using existing design system; reduced bounce rates
              by 40% and increased leads by 15%.
            </p>
            <p className={styles.businessAnalysisUx}>
              Designed online customer support center comprising of a self-service knowledge base and interactive chat
              bot. Coached 15 summer interns.
            </p>
          </div>
          <div className={styles.label6}>Growshi, Dec 2016 – Aug 2017</div>
        </div>
        <div className={styles.workExperienceContent3}>
          <b className={styles.headline}>UX Analyst</b>
          <div className={styles.description1}>
            <p className={styles.businessAnalysisUx}>
              Managed redesign of internal tracking system in use by 125 employees, resulting in 20+ new features and
              25% higher engagement.
            </p>
            <p className={styles.businessAnalysisUx}>
              Worked with product managers to validate design hypothesis by conducting interviews and usability
              sessions.
            </p>
          </div>
          <div className={styles.label6}>Growshi, Mar 2016 – Dec 2016</div>
        </div>
      </div>
      <div className={styles.headerSection}>
        <div className={styles.background} />
        <div className={styles.name}>Kate Bishop</div>
        <div className={styles.position}>Product Designer</div>
        <div className={styles.over5YearsContainer}>
          <p
            className={
              styles.businessAnalysisUx
            }>{`Over 5 years of professional experience conducting UX research and designing interactive end-to-end user flows. `}</p>
          <p className={styles.businessAnalysisUx}>
            I enjoy working in close collaboration with teams across technology, business and design.
          </p>
        </div>
        <div className={styles.contactDetails}>
          <a className={styles.linkedincominkateBishop} href="http://linkedin.com/in/kate-bishop" target="_blank">
            linkedin.com/in/kate-bishop
          </a>
          <div className={styles.email}>Email</div>
          <div className={styles.phone}>Phone</div>
          <a className={styles.linkedin} href="https://www.linkedin.com/in/vamelnyk/" target="_blank">
            LinkedIn
          </a>
          <a className={styles.katebishopkatedesigncom} href="mailto:kate.bishop@katedesign.com" target="_blank">
            kate.bishop@katedesign.com
          </a>
          <a className={styles.a} href="http://+46 98-765 43 21" target="_blank">
            +46 98-765 43 21
          </a>
        </div>
        <img className={styles.photoIcon} alt="" src="/photo@2x.png" />
      </div>
    </div>
  );
};

export default ResumeYourName;
