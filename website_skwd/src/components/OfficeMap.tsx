'use client';

import { useId } from 'react';

export interface Office {
  name: string;
  address: string;
  href: string;
  /** Position on the map, in viewBox units (620 x 517). */
  x: number;
  y: number;
}

interface OfficeMapProps {
  offices: Office[];
  label: string;
  className?: string;
}

// Outline of Belgium (Natural Earth, simplified), projected to a 620 x 517 viewBox.
const BELGIUM_PATH =
  'M30.0 123.4L38.4 119.4L58.2 104.7L117.7 68.1L150.3 57.7L151.6 66.5L150.8 77.4L152.9 83.2L156.4 87.0L165.5 89.6L172.4 88.5L172.7 80.8L174.3 79.2L188.1 77.0L212.3 85.2L213.1 93.2L217.1 96.5L234.3 96.3L262.1 81.1L269.4 75.6L275.1 67.9L277.1 59.3L279.9 61.9L282.1 68.3L288.9 75.7L289.6 78.6L288.0 82.3L289.7 81.4L292.9 75.7L286.9 72.8L286.0 63.4L282.8 59.0L287.0 59.1L295.1 62.9L301.9 63.3L304.6 61.9L305.4 57.9L300.1 49.8L301.4 44.1L299.7 42.2L307.3 37.8L315.1 35.0L321.2 34.6L322.4 36.5L320.7 45.4L323.4 47.4L336.5 47.8L339.9 46.0L351.1 32.4L358.0 30.2L364.6 34.7L363.4 44.9L364.4 48.9L358.1 46.0L356.5 46.2L355.6 48.9L358.7 50.2L368.9 50.6L377.2 53.8L380.3 53.0L384.0 49.5L389.6 41.3L392.0 35.0L394.2 34.4L399.0 37.8L401.8 43.2L399.7 50.6L400.1 57.8L405.1 63.3L408.1 71.8L410.6 73.2L418.9 72.9L421.4 76.1L421.5 84.3L446.8 84.3L458.8 77.6L461.9 77.9L468.0 83.5L469.5 93.1L472.8 95.9L481.1 98.4L486.0 102.5L496.4 101.4L503.8 108.6L510.7 107.6L512.4 111.7L509.9 116.3L513.2 119.8L507.2 121.3L508.2 124.6L506.3 129.3L505.2 130.8L503.5 129.4L502.3 130.1L501.3 135.4L503.2 138.0L495.2 152.7L501.3 152.7L495.2 163.6L491.2 165.4L480.7 177.1L481.0 182.2L483.3 185.7L492.0 190.1L490.3 198.0L492.9 199.6L496.0 199.6L499.6 195.2L505.5 200.0L534.8 200.5L534.7 202.2L537.1 203.5L537.2 210.0L547.3 208.9L559.0 225.2L557.0 226.4L558.7 229.7L561.7 231.3L571.8 231.5L569.4 237.7L561.6 243.5L558.9 247.7L561.3 250.8L560.4 253.6L563.3 254.2L562.1 256.1L564.5 259.8L567.1 260.8L572.7 258.9L584.5 262.0L582.5 265.4L583.8 269.8L586.6 272.8L584.7 287.8L589.7 296.6L590.0 299.8L588.2 301.8L579.1 301.3L577.1 302.5L574.7 306.4L575.1 310.8L572.4 313.2L563.1 316.4L558.4 321.0L556.9 323.0L558.8 325.2L559.6 330.3L557.6 333.2L553.5 334.2L552.4 338.7L554.4 341.3L552.6 344.4L550.5 343.4L549.7 337.3L547.8 335.5L544.5 337.5L539.5 337.8L537.6 336.8L535.3 331.9L530.0 334.1L527.0 342.6L517.0 349.8L516.2 354.9L512.0 361.1L511.8 367.7L506.9 371.3L506.7 374.5L508.3 377.0L506.7 380.2L501.2 384.1L494.1 398.9L500.4 404.3L496.6 403.9L495.9 407.3L497.3 408.6L494.9 412.0L496.0 417.6L497.5 420.2L503.4 423.8L506.8 430.7L507.3 435.5L513.8 437.3L514.8 440.4L513.1 448.1L518.1 450.1L518.9 453.4L510.8 467.3L513.3 468.6L511.9 472.2L505.1 477.5L498.7 474.9L493.5 479.1L483.9 476.2L480.3 478.0L477.8 483.0L469.8 480.8L459.6 487.3L456.5 486.4L455.7 475.7L448.7 462.8L438.9 457.4L437.0 460.4L433.5 460.3L432.5 457.3L432.9 454.1L434.7 452.5L433.7 449.0L427.9 442.4L418.2 444.4L414.8 443.4L410.0 439.2L402.1 428.4L394.0 425.2L386.0 418.3L373.4 421.2L369.6 420.7L368.3 418.9L368.3 410.4L366.2 405.5L369.8 396.7L369.9 391.7L367.6 387.5L360.7 384.6L358.8 381.4L365.0 363.7L365.1 357.3L367.8 351.2L370.3 352.7L371.6 340.0L370.3 338.2L364.1 338.4L363.4 335.0L359.5 336.9L344.0 352.7L342.7 368.2L340.3 374.4L332.7 376.4L312.4 386.6L308.1 387.4L285.2 381.0L274.1 382.6L264.0 377.6L265.2 377.7L263.5 370.6L264.8 366.2L275.4 358.2L271.1 342.8L269.7 342.1L265.2 343.7L263.1 342.6L267.1 325.2L269.3 321.1L274.1 316.7L273.6 312.8L268.5 309.5L266.7 310.3L265.7 314.4L263.1 313.1L259.1 304.5L245.3 293.3L229.7 297.6L221.6 293.0L209.3 292.8L206.1 294.8L200.8 303.8L195.7 298.9L193.2 270.1L187.9 263.0L181.4 260.7L172.1 260.7L170.3 259.3L171.9 254.9L168.9 253.1L166.8 253.3L161.9 257.2L152.0 260.0L143.1 255.9L138.9 251.5L137.9 241.6L132.9 222.1L134.9 218.3L133.3 212.9L132.1 210.8L127.0 208.5L120.8 196.2L118.3 193.9L114.5 192.7L95.4 198.7L89.4 203.7L83.1 212.7L68.5 206.6L54.7 187.1L44.3 185.3L39.4 178.7L40.9 173.6L38.0 163.6L43.1 156.8L42.6 152.3L35.1 143.1L30.0 123.4Z';

export default function OfficeMap({ offices, label, className = '' }: OfficeMapProps) {
  const dotsId = `office-map-dots-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <div className={`rounded-2xl border border-white/10 bg-skwd-blue/60 shadow-2xl p-3 sm:p-5 ${className}`}>
      <svg viewBox="0 0 620 517" role="group" aria-label={label} className="block w-full h-auto">
        <defs>
          <pattern id={dotsId} width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1.9" fill="#E6E6EB" fillOpacity="0.4" />
          </pattern>
        </defs>

        <path d={BELGIUM_PATH} fill={`url(#${dotsId})`} aria-hidden="true" />

        {offices.map((office, index) => (
          <a
            key={office.name}
            href={office.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${office.name}: ${office.address} (Google Maps)`}
            className="group outline-none"
          >
            <title>{`${office.name}: ${office.address}`}</title>
            {/* Generous, invisible hit area */}
            <rect x={office.x - 22} y={office.y - 22} width={150} height={44} fill="transparent" />
            <circle
              cx={office.x}
              cy={office.y}
              r={9}
              fill="#FE5F55"
              className="animate-ping motion-reduce:hidden"
              style={{
                transformBox: 'fill-box',
                transformOrigin: 'center',
                animationDuration: '2.4s',
                animationDelay: `${index * 0.8}s`,
              }}
              aria-hidden="true"
            />
            <circle
              cx={office.x}
              cy={office.y}
              r={16}
              fill="none"
              stroke="#E6E6EB"
              strokeWidth={2}
              className="opacity-0 group-focus-visible:opacity-100"
              aria-hidden="true"
            />
            <circle
              cx={office.x}
              cy={office.y}
              r={8}
              fill="#FE5F55"
              stroke="#07073D"
              strokeWidth={3}
              className="transition-transform duration-200 group-hover:scale-125"
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
            <text
              x={office.x + 18}
              y={office.y + 8}
              fontSize={26}
              fontWeight={600}
              stroke="#07073D"
              strokeWidth={7}
              strokeLinejoin="round"
              paintOrder="stroke"
              className="fill-skwd-white transition-colors duration-200 group-hover:fill-skwd-text-highlight group-focus-visible:fill-skwd-text-highlight"
            >
              {office.name}
            </text>
          </a>
        ))}
      </svg>
    </div>
  );
}
