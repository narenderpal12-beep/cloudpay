import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";
import Navigation from "@/components/navigation";
export function ContactNew()
{
    return(
        <div className="bg-background min-h-screen">
      <Navigation />
      <section className="relative pt-16 pb-24 overflow-hidden"> 
  
       
          <div className=" mb-16 bg-background cform">
          <ContactForm />
          </div>
     
    </section>
          </div>
    )
}