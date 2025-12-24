declare module '@/components/LogoLoop' {
  import { ReactNode } from 'react';

  export interface LogoItem {
    src: string;
    alt?: string;
    title?: string;
    href?: string;
    node?: ReactNode;
    ariaLabel?: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    height?: number;
  }

  export interface LogoLoopProps {
    logos: LogoItem[];
    speed?: number;
    direction?: 'left' | 'right' | 'up' | 'down';
    width?: string | number;
    logoHeight?: number;
    gap?: number;
    pauseOnHover?: boolean;
    hoverSpeed?: number;
    fadeOut?: boolean;
    fadeOutColor?: string;
    scaleOnHover?: boolean;
    renderItem?: (item: LogoItem, key: string) => ReactNode;
    ariaLabel?: string;
    className?: string;
    style?: React.CSSProperties;
  }

  const LogoLoop: React.FC<LogoLoopProps>;
  export default LogoLoop;
}

