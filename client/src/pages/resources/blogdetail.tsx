import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function BlogDetail() {
    const slug = window.location.pathname.split("/").pop();


    const blogPosts = [
        {
          slug: "best-hrms-features-2024",
          title: "Top HRMS Features Every Growing Company Needs in 2024",
          excerpt: "Understand the essential HRMS features that streamline employee management, payroll, attendance, and compliance.",
          content: `
            Modern HRMS platforms go far beyond simple employee record keeping.
            In 2024, businesses expect automation, insights, and seamless employee
            experiences. Here are the must-have features:
      
            **1. Automated Payroll**
            A powerful HRMS should automatically calculate salaries, deductions, PF/ESI,
            and generate payslips instantly.
      
            **2. Employee Self-Service**
            Employees should easily apply for leaves, download payslips, update profiles,
            and track attendance.
      
            **3. Attendance & Biometric Sync**
            Real-time integration with biometric devices or mobile geofencing ensures
            accurate data without manual entry.
      
            **4. Recruitment & Onboarding Workflows**
            From hiring to joining formalities, automated workflows save HR countless hours.
      
            **5. Performance Management**
            Modern OKRs, goal tracking, and performance reviews help build high-performing teams.
      
            **6. Compliance Automation**
            Automated PF, ESI, PT, challans, and monthly returns reduce HR risk.
      
            These features help organizations reduce manual work and improve accuracy
            across all HR operations.
          `,
          author: "Sarah Johnson",
          date: "April 14, 2024",
          readTime: "7 min read",
          category: "HRMS"
        },
        {
          slug: "why-hrms-is-important",
          title: "Why HRMS Is No Longer Optional for Modern Businesses",
          excerpt: "Discover why HRMS systems are now essential for scaling businesses and managing distributed teams.",
          content: `
            HRMS has transitioned from a “nice-to-have” to a fundamental business requirement.
            Companies now rely on HRMS for:
      
            - Centralized employee data  
            - Process automation  
            - Real-time analytics for decision making  
            - Reducing compliance errors  
            - Managing hybrid/remote teams  
      
            The right HRMS saves time, reduces costs, and improves employee experience.
          `,
          author: "Michael Chen",
          date: "April 2, 2024",
          readTime: "6 min read",
          category: "HRMS"
        },
        {
          slug: "hr-automation-benefits",
          title: "How HR Automation Reduces Costs & Boosts Productivity",
          excerpt: "Learn how automation transforms HR operations, reduces manual workload, and ensures error-free compliance.",
          content: `
            HR automation helps eliminate repetitive tasks like attendance entry, payroll
            processing, and document management.
      
            Key benefits include:
            - 50–70% reduction in manual admin tasks  
            - Error-free payroll  
            - Faster onboarding  
            - Improved employee satisfaction  
      
            Automation frees HR to focus on strategy and employee success.
          `,
          author: "Emily Rodriguez",
          date: "March 20, 2024",
          readTime: "8 min read",
          category: "Automation"
        },
        {
          slug: "employee-self-service-importance",
          title: "Why Employee Self-Service Is a Game Changer",
          excerpt: "See how ESS portals reduce HR dependency and empower employees to manage their own data.",
          content: `
            Employee self-service portals allow employees to:
            - Download payslips  
            - Apply for leave  
            - Update KYC details  
            - Check attendance  
            - Access policies  
      
            This reduces HR workload significantly and increases transparency.
          `,
          author: "David Park",
          date: "March 10, 2024",
          readTime: "5 min read",
          category: "ESS"
        },
        {
          slug: "diversity-inclusion-strategies",
          title: "Diversity & Inclusion Strategies for Modern Workplaces",
          excerpt: "Learn practical strategies to create inclusive workplaces that value diversity and drive engagement.",
          content: `
            Building a diverse and inclusive workplace boosts employee engagement and innovation. Key strategies include:
      
            - Bias-free recruitment  
            - Inclusive training programs  
            - Employee resource groups  
            - Transparent promotion policies  
      
            Organizations that prioritize D&I see better retention and stronger company culture.
          `,
          author: "Jessica Lee",
          date: "March 1, 2024",
          readTime: "6 min read",
          category: "Culture"
        },
        {
          slug: "remote-work-productivity-tips",
          title: "Remote Work Productivity Tips for HR Leaders",
          excerpt: "Best practices to maintain employee productivity and engagement in remote work settings.",
          content: `
            Remote work presents unique challenges. HR leaders can improve productivity by:
      
            - Clear communication protocols  
            - Setting measurable goals  
            - Regular feedback sessions  
            - Leveraging productivity tools  
      
            Properly managed, remote teams can achieve higher efficiency and satisfaction.
          `,
          author: "Kevin Martinez",
          date: "February 20, 2024",
          readTime: "7 min read",
          category: "Remote Work"
        },
        {
          slug: "hr-analytics-trends",
          title: "HR Analytics Trends You Can’t Ignore in 2024",
          excerpt: "Explore the latest HR analytics trends and tools for better workforce decision-making.",
          content: `
            HR analytics helps organizations make data-driven decisions. Key trends:
      
            - Predictive workforce analytics  
            - Employee sentiment analysis  
            - Automated reporting dashboards  
            - Data-driven performance management  
      
            Leveraging analytics improves efficiency, reduces turnover, and optimizes talent strategy.
          `,
          author: "Olivia Bennett",
          date: "February 10, 2024",
          readTime: "8 min read",
          category: "Analytics"
        },
        {
          slug: "modern-performance-management",
          title: "Modern Performance Management Techniques",
          excerpt: "Transform traditional appraisals with modern, continuous performance management methods.",
          content: `
            Traditional annual reviews are outdated. Modern techniques include:
      
            - Continuous feedback loops  
            - OKR alignment  
            - Personalized learning plans  
            - Peer-to-peer recognition  
      
            These approaches help employees grow while driving business outcomes.
          `,
          author: "Nathan Williams",
          date: "January 30, 2024",
          readTime: "7 min read",
          category: "Performance"
        }
      ];
      

  const blog = blogPosts.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="p-10 text-center text-xl">
        <h2>Blog not found</h2>
        <a
          className="mt-4 text-orange-600 hover:text-orange-700 inline-block"
          href="/resources/blogs"
        >
          ← Back to Blogs
        </a>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <section className="relative pt-16 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 opacity-60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {blog.title}
          </motion.h1>

          <div className="flex items-center justify-between text-gray-500 mb-8">
            <span>{blog.author}</span>
            <span>{blog.date}</span>
          </div>

          <motion.div
            className="prose prose-lg max-w-none text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <motion.a
            href="/resources/blogs"
            className="mt-10 inline-block text-orange-600 hover:text-orange-700 font-medium"
            whileHover={{ x: -5 }}
          >
            ← Back to Blogs
          </motion.a>
        </div>
      </section>
    </div>
  );
}
