import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint

  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can replace this with your email service provider
    auth: {
      user: 'support@cloudpay.co.in', // Your email address
      pass: 'fmcmouylwrgmyrux'   // Your email password (or app-specific password)
    }
  });
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
     // const submission = await storage.createContactSubmission(validatedData);
     const mailOptions = {
      from: 'support@cloudpay.co.in',
      to: `${validatedData.email}`,
      subject: 'We’ve Received Your Inquiry – Thank You!',           
      bcc: ['prabhat@cloudpay.com', 'nareninsa1@gmail.com'],
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9fafc; padding: 40px; text-align: center;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
            
            <!-- Header    // <img src="https://cloudpay.in/assets/logocloudpaysvg-Cz4BbYy0.svg" alt="cloudpay Logo" style="height: 50px; margin-bottom: 5px;" onerror="this.style.display='none'">-->
            <div style="background: linear-gradient(135deg, #9333ea, #db2777); padding: 20px 0;">
            
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">cloudpay</h1>
            </div>
    
            <!-- Body -->
            <div style="padding: 30px;">
              <h2 style="color: #333333; margin-bottom: 10px;">Thank You, ${validatedData.name}!</h2>
              <p style="color: #555555; font-size: 16px; line-height: 1.6;">
                We’ve received your inquiry and our team is already on it. One of our experts will get in touch with you shortly to discuss your interest in 
                <strong>${validatedData.interest}</strong>.
              </p>
    
              <div style="background: #f4f7fb; border-left: 4px solid #0078d4; padding: 15px; text-align: left; margin: 20px 0; border-radius: 6px;">
                <p style="margin: 5px 0;"><strong>Email:</strong> ${validatedData.email}</p>
                <p style="margin: 5px 0;"><strong>Message:</strong> ${validatedData.message}</p>
              </div>
    
              <!-- Button -->
              <a href="https://cloudpay.in/contact" 
                 style="display: inline-block; background: #0078d4; color: #ffffff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; margin-top: 10px;">
                 Contact Us
              </a>
    
              <p style="color: #777777; font-size: 15px; margin-top: 25px;">
                Meanwhile, feel free to explore more about us at 
                <a href="https://cloudpay.in" style="color: #0078d4; text-decoration: none;">cloudpay.in</a>.
              </p>
    
              <p style="margin-top: 30px; color: #555555;">Warm Regards,</p>
              <p style="font-weight: bold; color: #333;">The cloudpay Support Team</p>
            </div>
    
            <!-- Footer -->
            <div style="background: #f0f4f8; padding: 15px; font-size: 13px; color: #777;">
              © ${new Date().getFullYear()} cloudpay. All rights reserved.
            </div>
          </div>
        </div>
      `
    };
    
    transporter.sendMail(mailOptions, (error: any, info: { response: any; }) => {
      if (error) {
        console.error('Error sending email:', error);
        // Send back the response even if email fails
        return res.status(500).json({ success: false, message: 'Failed to send email notification' });
      }
      console.log('Email sent:', info.response);
    });
    return res.status(201).json({
      success: true,
      message: "Contact inquiry created successfully, and email sent.",
      data: validatedData
    });
      // res.status(200).json({ 
      //   success: true, 
      //   message: "Thank you for your message! We will get back to you soon.",
      //   id: submission.id 
      // });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again later." 
        });
      }
    }
  });

  // Get contact submissions endpoint (for admin)
  // app.get("/api/contact", async (req, res) => {
  //   try {
  //     const submissions = await storage.getContactSubmissions();
  //     res.json(submissions);
  //   } catch (error) {
  //     console.error("Error fetching submissions:", error);
  //     res.status(500).json({ message: "Failed to fetch submissions" });
  //   }
  // });

  const httpServer = createServer(app);
  return httpServer;
}
