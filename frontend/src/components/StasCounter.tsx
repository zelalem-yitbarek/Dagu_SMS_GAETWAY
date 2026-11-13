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
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-green-700 py-16 transition-colors duration-300 dark:bg-green-900"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/20">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
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

              <p className="mt-2 text-base font-medium text-green-100">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}