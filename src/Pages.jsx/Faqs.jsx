import React from "react";
import FaqsOption from "../Components/FaqsOption";
const Faqs = () => {
  return (
    <>
      <div className="">
        <h1 className="font-semibold mt-40 text-center text-lg text-green-800 md:text-4xl">
          Frequently Asked Questions
        </h1>

        <FaqsOption
          title="What Is Viscio?"
          content="Viscio Express Practically Leverages On The Domain Strengths Of Various Logistics Agents And Niche Courier Companies Across Africa. With The Simple Convenience Of A Smartphone, We Have Smartly Eliminated Traditional Logistics Operations Barriers That Make Movement Of Goods From One Point To Another In Africa Seem Like Rocket Science. Our Operational Model, Harmonized With Our Deployed Technology Tools Enables Us To Seamlessly Address Your Logistics Needs Affordably, Reliably And With Utmost Peace Of Mind."
        />

        <FaqsOption
          title="How To Make A Delivery Order"
          content="Simply Download The Viscio Express App And Register, Then Proceed To Select Type Of Transaction (City Or Intercity); Then Provide Required Details And Available Agents Will Be Matched With Your Request In Real Time."
        />

        <FaqsOption
          title="How Do I Make Payment?"
          content="Payment Is Required On The App Before You Are Matched With Any Logistics Agent, However, This Payment Is Captured In Our Escrow System And Logistics Agents Only Get Paid After Successful Completion Of Your Delivery. Our Payment Channels Are Secure And Safe."
        />

        <FaqsOption
          title="How Safe Are My Goods To Be Delivered?"
          content="Viscio Is Fully Committed To Ensuring Seamless And Safe Movement Of Goods From Pickup To Destination. Our Platform Ensures Transparency Of Goods In-Transit By Prescreened Logistics Agents Via Our Mapping Systems And Telematics Framework. In Addition To This, Viscio Ensures End-To-End Operational Efficiency In All Our Logistics Transactions Which Are Fully Insured (By Our NAICOM Licensed Provider) And Smartly Tracked."
        />

        <FaqsOption
          title="How Can I Become A Logistics Agent"
          content="You Can Begin The Amazing Journey Of Becoming Your Own Boss By Earning On The Viscio Platform When You Fulfill Delivery Requests As Our Logistics Agent. All That Is Simply Required Are Your Personal Details And Details Of Your Mobility Asset. Follow The Link And Learn More About Our Criteria And On-Boarding Process."
        />
      </div>
    </>
  );
};

export default Faqs;
