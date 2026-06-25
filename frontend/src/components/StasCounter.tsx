'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    value: 1000,
    label: 'Users',
  },
  {
    value: 1000,
    label: 'Organizations',
  },
  {
    value: 1000,
    label: 'Purchases',
  },
  {
    value: 1000,
    label: 'SMS Sent',
  },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className="bg-white dark:bg-black transition-colors duration-300 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-40 md:grid-cols-4">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <h2 className="text-4xl md:text-3xl font-bold text-black dark:text-white">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    separator=","
                  />
                ) : (
                  0
                )}
              </h2>

              <p className="mt-3 text-md text-gray-700 dark:text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}