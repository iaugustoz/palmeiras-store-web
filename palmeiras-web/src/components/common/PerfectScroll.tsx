import PerfectScrollbar from 'perfect-scrollbar';
import { useRef, useEffect, ReactNode } from 'react';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import '../../style.css'


interface PerfectScrollProps {
  children: ReactNode;
}

const PerfectScroll: React.FC<PerfectScrollProps> = ({ children }) => {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mainRef.current) {
      const perfectScrollRef = new PerfectScrollbar(mainRef.current, {
        wheelPropagation: true,
        minScrollbarLength: 20,
        maxScrollbarLength: 250,
      });

      return () => {
        perfectScrollRef.destroy();
      };
    }
  }, []);

  return (
    <div ref={mainRef} className="z-[99999] relative overflow-hidden h-[100vh]">
      {children}
    </div>
  );
};

export default PerfectScroll;
