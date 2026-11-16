import AboutUs from "@/pages/about/about-us";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const links = {
    "Service Offering": "/services/offering",
    "Virtual HR Team": "/services/virtual-hr-team",
    "HR Policy & Audit Design": "/services/policy-audit-design",
    "HR Toolkit & Templates": "/resources/toolkit",
    "Blog": "/resources/blogs"
  };
  return (
    <div>
 
   
    <footer className="bg-card border-t border-border py-16">
          
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">cloudpay</h3>
            <p className="text-muted-foreground mb-6">
              Complete HR solutions designed to help your business grow efficiently and empower your workforce.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'fab fa-instagram', href: 'https://www.instagram.com/cloudpay_support/' , target:'_blank'},
                { icon: 'fab fa-twitter', href: '#', target:'' },
                { icon: 'fab fa-facebook', href: '#', target:'' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.target}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-testid={`social-link-${index}`}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-card-foreground mb-6">Solutions</h4>
            <ul className="space-y-3">
              {[
                { label: 'HRMS System', href: '/products/core-hr' },
                { label: 'Payroll Management', href: '/products/payroll-compliance' },
                { label: 'Employee Tracking', href: '/products/fieldforce-management' },
                { label: 'Compliance Management', href: '/products/compliance-management' },
                { label: 'Leave & Attendance', href: '/products/leave-attendance' }
              ].map((link) => (
                <li key={link.label}>
                  <motion.a
                      href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-card-foreground mb-6">Services & Resources</h4>
            <ul className="space-y-3">
              {[
               { label: 'Service Offering', href: '/services/offering' },
               { label: 'Virtual HR Team', href: '/services/virtual-hr-team' },
               { label: 'HR Policy & Audit Design', href: '/services/policy-audit-design' },
               { label: 'HR Toolkit & Templates', href: '/resources/toolkit' },
               { label: 'Blog', href: '/resources/blogs' },
              ].map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
       
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-card-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', action: () =>  { window.location.href = '/about/about-us'; } },
                { label: 'Careers', action: () => { window.location.href = '/about/careers'; } },
                { label: 'Privacy Policy',  action: () => { window.location.href = '../privacy-policy'; }},
                { label: 'Terms of Service',action: () => { window.location.href = '../termsofservice'; }},
                { label: 'Contact',action: () => { window.location.href = '../contactnew'; }},
              

                
              ].map((item) => (
                <li key={item.label}>
                  <motion.button
                    onClick={item.action}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-company-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            © 2025 Cloudpay Technologies Pvt. Ltd. All rights reserved. Empowering businesses with smart HR solutions.
          </p>
        </motion.div>
      </div>
  
    </footer>
    </div>
  );
}
