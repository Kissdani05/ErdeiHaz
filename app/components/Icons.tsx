import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };
const base = (size?: number) => ({ width: size ?? 24, height: size ?? 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6 });

export const PeopleIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
export const NoWifiIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M1 1l22 22"/><path d="M16.72 11.06A10.94 10.94 0 0 0 12 10C7.03 10 2.73 12.61 1 16"/><path d="M5.68 15.68A6.94 6.94 0 0 1 12 14c1.15 0 2.24.26 3.21.72"/><path d="M8.82 18.82A2.94 2.94 0 0 1 12 18c.52 0 1.01.13 1.45.36"/><circle cx="12" cy="20" r="1"/></svg>
);
export const ParkingIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 1 1 0 6h-4"/></svg>
);
export const ACIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="5" width="18" height="6" rx="2"/><path d="M7 15v2M12 15v2M17 15v2"/></svg>
);
export const FireplaceIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M12 3s-3 2.5-3 6a3 3 0 0 0 6 0c0-3.5-3-6-3-6Z"/><path d="M5 21a7 7 0 0 1 14 0Z"/></svg>
);
export const CoffeeIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M17 8h1a3 3 0 1 1 0 6h-1"/><path d="M3 8h14v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/></svg>
);
export const TerraceIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M3 22h18"/><path d="M6 22V12l6-4 6 4v10"/><path d="M6 16h12"/></svg>
);
export const GrillIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="8" r="5"/><path d="M7 13l-2 7M17 13l2 7"/><path d="M5 16h14"/></svg>
);
export const JacuzziIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="10" width="18" height="8" rx="3"/><path d="M6 10V7c0-1.1.9-2 2-2s2 .9 2 2v3M14 10V7c0-1.1.9-2 2-2s2 .9 2 2v3"/></svg>
);
export const SaunaIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M4 20h16M6 20V9l6-3 6 3v11M9 13h6M9 16h6"/></svg>
);
export const TrailIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M3 20c3-3 6-3 9-3s6 0 9-3"/><path d="M8 5h.01M12 7h.01M16 5h.01"/></svg>
);
export const ViewIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/><circle cx="12" cy="12" r="3"/></svg>
);
export const SpaIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M12 2s2 3 2 6-2 6-2 6-2-3-2-6 2-6 2-6Z"/><path d="M5 22c3-4 11-4 14 0"/></svg>
);
export const FoodIcon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M4 3v7a4 4 0 0 0 4 4V3M8 12v9"/><path d="M16 3v18M16 10h3a3 3 0 0 0 0-6h-3"/></svg>
);
