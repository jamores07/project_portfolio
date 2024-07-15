"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="text-center py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">
          Hi, I'm John{' '}
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block"
          >
            👋
          </motion.span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Software Engineer turned Entrepreneur
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="/assets/profile-picture.jpeg"
          alt="Dillion"
          width={150}
          height={150}
          className="rounded-full mx-auto border-4 border-gray-300 dark:border-gray-700"
        />
      </motion.div>
    </div>
  );
};

export default Header;