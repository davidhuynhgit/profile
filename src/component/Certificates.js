import React from 'react';
import Image from 'next/image';

const Certificates = () => {
  const certifications = [
    {
      description: 'Quantium - Data Analytics Job Simulation',
      platform: 'Forage',
      image: '/images/cert/CertQuantium.PNG',
      link: 'https://github.com/davidhuynhgit/Certificates/blob/main/ForageQuantium_Certificate.pdf',
    },
    {
      description: 'Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation',
      platform: 'Forage',
      image: '/images/cert/CertTata.PNG',
      link: 'https://github.com/davidhuynhgit/Certificates/blob/main/ForageTata_Certificate.pdf',
    },
    {
      description: 'Google Data Analytics',
      platform: 'Coursera x ACS Scholarship',
      image: '/images/cert/CertGoogleData.PNG',
      link: 'https://github.com/davidhuynhgit/Certificates/blob/main/Google%20Data%20Analytics_Certificate.pdf',
    },
    {
      description: 'AWS Cloud Practitioner Essentials',
      platform: 'AWS Skill Builder',
      image: '/images/cert/CertAWSCloud.PNG',
      link: 'https://github.com/davidhuynhgit/Certificates/blob/main/AWS%20Course%20Completion%20Certificate.pdf',
    },
  ];

  return (
    <div className="my-16">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-8">
        Certificates
      </h2>

      <div className="w-[75%] mx-auto lg:w-[90%] md:w-full 
                    grid grid-cols-3 md:grid-cols-1 2xl:grid-cols-2 gap-8 p-4">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-dark rounded-lg overflow-hidden flex flex-col
                       border border-solid border-dark dark:border-light
                        shadow hover:shadow-[10px_10px_10px_rgba(0,0,0,0.3)] transition-shadow dark:shadow-white"
          >
            <div className="w-full h-64 p-4">
                <div className="relative h-full">
                    <Image
                    src={cert.image}
                    alt={cert.description}
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
            </div>
            <div className="p-4 pt-0 flex flex-col">
              <p className="text-dark dark:text-light font-extrabold">
                {cert.description}
              </p>
              <p className="text-dark dark:text-light font-medium">
                {cert.platform}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
