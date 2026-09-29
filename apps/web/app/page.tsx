import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WebflowHeader, WebflowFooter } from '@donutland/ui';

export default function MainPage() {
  return (
    <>
      <WebflowHeader activePath="/" />
      <div className="page-wrapper">
        <section className="section hot-pink">
          <div className="w-layout-blockcontainer container main-index-hero w-container">
            <div className="w-layout-grid heading-grid one-column _100-width">
              <div id="w-node-b2b49fdd-0b4c-aa27-f5f8-64f6d097593a-ae0d9e9c" className="grid-block">
                <h1 className="h1-heading contact-us-h1 white">Meet Donutland.</h1>
                <div className="text-box _33rem center-aligned">
                  <p className="paragraph white">
                    A unique, modern, and stylish Webflow template designed specifically for donut shops and other food-oriented enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-wrapper white-background-drip-divider reverse">
            <div className="svg-drip hot-pink w-embed">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="2560" zoomAndPan="magnify" viewBox="0 0 1920 187.499995" height="250" preserveAspectRatio="xMidYMid meet" version="1.0">
                <defs>
                  <clipPath id="drip-p1"><path d="M 2.554688 0 L 1024.515625 0 L 1024.515625 187 L 2.554688 187 Z M 2.554688 0" clipRule="nonzero"></path></clipPath>
                  <clipPath id="drip-p2"><path d="M 1020 2 L 1917.445312 2 L 1917.445312 187 L 1020 187 Z M 1020 2" clipRule="nonzero"></path></clipPath>
                </defs>
                <g clipPath="url(#drip-p1)">
                  <path fill="currentColor" d="M 392.128906 189.796875 C 392.128906 189.796875 -30.832031 191.046875 -30.265625 189.238281 C -25.214844 175.542969 -25.433594 161.625 -27.335938 147.546875 C -28.28125 141.367188 -29.359375 135.1875 -28.796875 128.921875 C -27.9375 120.109375 -21.5 112.417969 -13.28125 110.695312 C -4.773438 108.917969 2.269531 112.597656 7.0625 121.1875 C 8.960938 124.554688 10.480469 128.105469 13.242188 130.992188 C 16.785156 134.621094 21.410156 135.613281 26.070312 133.714844 C 28.84375 132.679688 31.085938 131.082031 33.328125 129.222656 C 46.160156 118.675781 53.808594 104.902344 58.429688 89.433594 C 60.671875 82.046875 64.347656 69.773438 69.703125 58.023438 C 77.996094 40.007812 90.226562 23.203125 107.03125 26.398438 C 127.945312 30.460938 129.707031 55.734375 131.09375 72.363281 C 132.910156 93.75 136.671875 115 142.929688 135.652344 C 145.609375 144.683594 149.542969 153.238281 156.40625 160.023438 C 163.671875 167.066406 171.226562 167.972656 179.78125 162.871094 C 189.496094 157.125 195.941406 148.617188 199.828125 138.378906 C 208.164062 116.558594 209.417969 93.875 206.527344 70.886719 C 205.875 65.445312 204.410156 60.085938 203.976562 54.648438 C 203.542969 47.085938 208.558594 40.78125 215.300781 39.613281 C 222.867188 38.269531 230.074219 42.675781 232.585938 50.019531 C 233.703125 53.347656 233.578125 56.804688 233.058594 60.132812 C 230.941406 73.269531 231.289062 86.484375 231.71875 99.621094 C 232.539062 129.46875 253.445312 148.089844 278.898438 159.96875 C 286.023438 163.210938 291.8125 160.835938 296.089844 154.402344 C 299.117188 149.820312 300.582031 144.683594 301.535156 139.449219 C 307.019531 110.632812 304.558594 81.859375 300.0625 53.128906 C 298.511719 43.234375 295.011719 33.601562 294.882812 23.449219 C 294.710938 9.449219 304.605469 -0.140625 318.425781 0.511719 C 331.253906 1.070312 340.9375 12.5625 339.722656 25.566406 C 339.339844 29.109375 338.433594 32.515625 337.046875 35.757812 C 330.914062 50.40625 326.855469 65.527344 325.554688 81.292969 C 324.265625 97.882812 320.9375 115.214844 324.21875 131.710938 C 330.78125 165.148438 349.925781 136.945312 370.410156 146.792969 C 380.605469 151.585938 386.910156 162.480469 397.582031 161.960938 C 412.054688 161.179688 430.71875 144.769531 445.96875 141.09375 C 458.15625 138.289062 471.375 137.550781 482.734375 143.644531 C 487.742188 146.328125 491.9375 150.035156 495.699219 154.183594 C 505.332031 164.640625 513.933594 176.386719 531.039062 170.773438 C 542.921875 167.019531 545.8125 151.554688 548.96875 141.09375 C 551.429688 132.882812 553.25 124.457031 555.097656 116.035156 C 557.515625 105.539062 566.464844 91.324219 577.609375 88.429688 C 596.398438 83.421875 599.386719 106.3125 600.035156 119.1875 C 600.851562 134.574219 605.597656 148.269531 618.003906 158.417969 C 630.917969 168.875 645.699219 173.324219 661.859375 168.011719 C 677.671875 162.910156 683.761719 149.609375 686.613281 134.703125 C 688.644531 124.074219 688.429688 113.316406 688.382812 102.511719 C 688.296875 94.78125 687.949219 87 688.816406 79.441406 C 689.460938 73.222656 691.539062 66.566406 699.316406 66.007812 C 706.398438 65.488281 709.03125 71.660156 711.757812 76.804688 C 712.578125 78.457031 712.964844 80.355469 713.144531 82.117188 C 714.4375 91.019531 715.609375 99.828125 716.425781 108.738281 C 718.0625 127.65625 728.4375 141.007812 744.941406 149.429688 C 815.402344 185.414062 791.945312 69.589844 800.148438 41.378906 C 807.144531 17.65625 820.367188 28.503906 823.691406 47.210938 C 827.152344 67.210938 814.144531 137.160156 853.464844 140.660156 C 872.640625 142.265625 869.277344 121.394531 868.671875 108.902344 C 868.152344 99.0625 874.378906 81.859375 887.082031 86.839844 C 901.507812 92.496094 897.878906 127.050781 899.609375 138.15625 C 901.34375 148.398438 906.867188 162.996094 918.792969 165.335938 C 936.074219 168.664062 952.921875 152.457031 972.621094 156.046875 C 981.695312 157.691406 990.246094 161.359375 998.105469 165.980469 C 1003.640625 169.308594 1019.886719 187.84375 1024.378906 187.84375 Z" fillOpacity="1" fillRule="nonzero"></path>
                </g>
                <g clipPath="url(#drip-p2)">
                  <path fill="currentColor" d="M 1434.511719 187.984375 C 1434.511719 187.984375 1019.691406 189.210938 1020.246094 187.433594 C 1025.203125 174.003906 1024.988281 160.355469 1023.121094 146.546875 C 1022.191406 140.484375 1021.136719 134.425781 1021.691406 128.28125 C 1022.53125 119.636719 1028.847656 112.09375 1036.90625 110.402344 C 1045.25 108.660156 1052.15625 112.269531 1056.859375 120.695312 C 1058.71875 124 1060.207031 127.480469 1062.917969 130.3125 C 1066.394531 133.871094 1070.929688 134.84375 1075.5 132.984375 C 1078.21875 131.964844 1080.417969 130.398438 1082.617188 128.574219 C 1095.203125 118.234375 1102.703125 104.722656 1107.234375 89.554688 C 1109.4375 82.304688 1113.039062 70.273438 1118.289062 58.746094 C 1126.425781 41.078125 1138.421875 24.597656 1154.902344 27.730469 C 1175.414062 31.714844 1177.144531 56.5 1178.5 72.8125 C 1180.285156 93.785156 1183.972656 114.628906 1190.109375 134.882812 C 1192.734375 143.738281 1196.59375 152.128906 1203.328125 158.78125 C 1210.449219 165.691406 1217.863281 166.578125 1226.253906 161.578125 C 1235.78125 155.941406 1242.101562 147.597656 1245.914062 137.554688 C 1254.089844 116.15625 1255.316406 93.910156 1252.484375 71.363281 C 1251.84375 66.027344 1250.40625 60.773438 1249.980469 55.4375 C 1249.558594 48.019531 1254.472656 41.835938 1261.089844 40.691406 C 1268.507812 39.375 1275.578125 43.695312 1278.039062 50.898438 C 1279.136719 54.164062 1279.011719 57.550781 1278.503906 60.816406 C 1276.425781 73.699219 1276.765625 86.660156 1277.191406 99.546875 C 1277.996094 128.816406 1298.496094 147.082031 1323.460938 158.730469 C 1330.449219 161.910156 1336.128906 159.578125 1340.320312 153.269531 C 1343.292969 148.777344 1344.726562 143.738281 1345.660156 138.605469 C 1351.042969 110.34375 1348.625 82.125 1344.21875 53.949219 C 1342.695312 44.246094 1339.261719 34.796875 1339.136719 24.839844 C 1338.96875 11.105469 1348.671875 1.703125 1362.226562 2.34375 C 1374.808594 2.890625 1384.304688 14.164062 1383.117188 26.914062 C 1382.738281 30.390625 1381.847656 33.730469 1380.492188 36.910156 C 1374.476562 51.277344 1370.496094 66.105469 1369.222656 81.570312 C 1367.953125 97.839844 1364.6875 114.835938 1367.910156 131.019531 C 1374.347656 163.808594 1393.121094 136.152344 1413.210938 145.808594 C 1423.207031 150.507812 1429.390625 161.191406 1439.859375 160.683594 C 1454.054688 159.917969 1472.359375 143.824219 1487.316406 140.21875 C 1499.265625 137.46875 1512.234375 136.746094 1523.375 142.71875 C 1528.285156 145.351562 1532.398438 148.988281 1536.085938 153.054688 C 1545.535156 163.3125 1553.972656 174.832031 1570.746094 169.328125 C 1582.402344 165.644531 1585.238281 150.476562 1588.332031 140.21875 C 1590.746094 132.167969 1592.53125 123.902344 1594.34375 115.640625 C 1596.714844 105.351562 1605.492188 91.410156 1616.421875 88.570312 C 1634.847656 83.65625 1637.78125 106.105469 1638.414062 118.734375 C 1639.21875 133.824219 1643.875 147.257812 1656.039062 157.207031 C 1668.707031 167.46875 1683.203125 171.828125 1699.050781 166.617188 C 1714.558594 161.617188 1720.53125 148.570312 1723.328125 133.949219 C 1725.320312 123.527344 1725.109375 112.976562 1725.0625 102.378906 C 1724.980469 94.796875 1724.640625 87.164062 1725.488281 79.753906 C 1726.121094 73.65625 1728.160156 67.125 1735.785156 66.578125 C 1742.734375 66.066406 1745.3125 72.121094 1747.988281 77.167969 C 1748.792969 78.785156 1749.171875 80.648438 1749.347656 82.378906 C 1750.613281 91.109375 1751.765625 99.746094 1752.566406 108.484375 C 1754.171875 127.042969 1764.347656 140.132812 1780.535156 148.394531 C 1849.636719 183.6875 1826.632812 70.089844 1834.679688 42.421875 C 1841.539062 19.15625 1854.507812 29.792969 1857.765625 48.144531 C 1861.164062 67.757812 1848.402344 136.359375 1886.96875 139.792969 C 1905.773438 141.367188 1902.476562 120.898438 1901.882812 108.648438 C 1901.371094 98.996094 1907.476562 82.125 1919.9375 87.007812 C 1934.085938 92.558594 1930.527344 126.449219 1932.226562 137.339844 C 1933.921875 147.382812 1939.34375 161.703125 1951.039062 163.992188 C 1967.988281 167.257812 1984.507812 151.363281 2003.832031 154.882812 C 2012.730469 156.496094 2021.113281 160.09375 2028.824219 164.625 C 2034.253906 167.890625 2050.183594 186.070312 2054.59375 186.070312 Z" fillOpacity="1" fillRule="nonzero"></path>
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section className="section main-index-body">
          <div className="container main-index w-container">
            <div className="text-box main-index-display-heading">
              <h2 className="h2-heading main-index-intro">
                What you recieve with Donutland:<span className="heading-span-break homepage-why"></span>
              </h2>
              <div className="w-layout-grid display-stat-grid">
                <div id="w-node-_480a0b1b-2b8d-d8f5-863e-0cdbad32e1b4-ae0d9e9c" className="card-index display-text">
                  <div className="display-text-box">
                    <div className="display-text"><span className="black-display-text-color-span">33+</span> Pages</div>
                  </div>
                </div>
                <div id="w-node-_480a0b1b-2b8d-d8f5-863e-0cdbad32e1ba-ae0d9e9c" className="card-index display-text">
                  <div className="display-text-box">
                    <div className="display-text"><span className="black-display-text-color-span">50+</span> Sections</div>
                  </div>
                </div>
                <div id="w-node-_480a0b1b-2b8d-d8f5-863e-0cdbad32e1c0-ae0d9e9c" className="card-index display-text">
                  <div className="display-text-box">
                    <div className="display-text">Unique layouts and content</div>
                  </div>
                </div>
              </div>
            </div>

            {/* HOME PAGES */}
            <div className="w-layout-grid main-index-templates-grid">
              <h2 id="w-node-_480a0b1b-2b8d-d8f5-863e-0cdbad32e1c5-ae0d9e9c" className="main-index-grid-title">Home Pages</h2>
              <Link href="/homepages/home-02" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp" loading="lazy" alt="Home 02" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Home 02</div></div>
              </Link>
              <Link href="/homepages/home-03" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp" loading="lazy" alt="Home 03" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Home 03</div></div>
              </Link>
              <Link href="/homepages/home-04" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf8e807ceb0ff1741c_donutland.webflow.io_homepages_home-04.webp" loading="lazy" alt="Home 04" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Home 04</div></div>
              </Link>
              <Link href="/homepages/home-05" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ee337174edf3361dbf8e_donutland.webflow.io_homepages_home-05.webp" loading="lazy" alt="Home 05" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Home 05</div></div>
              </Link>
              <Link href="/homepages/home-01" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccff016603cc2cae49d_home-01.webp" loading="lazy" alt="Home 01" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Home 01</div></div>
              </Link>
            </div>

            {/* ABOUT US */}
            <div className="w-layout-grid main-index-templates-grid">
              <h2 id="w-node-_48f01891-5e4b-0fb7-3bc5-cb29da01dc3e-ae0d9e9c" className="main-index-grid-title">About Us</h2>
              <Link href="/about-us/about-us-02" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd0ee6e67042831c204_donutland.webflow.io_about-us_about-us-02.webp" loading="lazy" alt="About 02" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">About 02</div></div>
              </Link>
              <Link href="/about-us/about-us-03" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd0ae32179864d2d8d5_donutland.webflow.io_about-us_about-us-03.webp" loading="lazy" alt="About 03" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">About 03</div></div>
              </Link>
              <Link href="/about-us/about-us-04" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd1367eb5e23919f5ab_donutland.webflow.io_about-us_about-us-04.webp" loading="lazy" alt="About 04" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">About 04</div></div>
              </Link>
              <Link href="/about-us/about-us-05" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd18555120a471fa0b4_donutland.webflow.io_about-us_about-us-05.webp" loading="lazy" alt="About 05" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">About 05</div></div>
              </Link>
              <Link href="/about-us/about-us-01" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd14a7e176781b87005_donutland.webflow.io_about-us_about-us-01.webp" loading="lazy" alt="About 01" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">About 01</div></div>
              </Link>
            </div>

            {/* WHY DONUTLAND */}
            <div className="w-layout-grid main-index-templates-grid">
              <h2 id="w-node-_570b2a00-2340-b5b4-d9d3-ee0f9270f584-ae0d9e9c" className="main-index-grid-title">Why Donutland</h2>
              <Link href="/why-donutland/why-donutland-02" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585efcb634c83fd9998481f_donutland.webflow.io_why-donutland_why-donutland-02%20(1).webp" loading="lazy" alt="Why Donutland 02" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Why&nbsp;Donutland 02</div></div>
              </Link>
              <Link href="/why-donutland/why-donutland-03" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eff81fc2512dc33d3f29_donutland.webflow.io_why-donutland_why-donutland-03%20(1).webp" loading="lazy" alt="Why Donutland 03" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Why&nbsp;Donutland 03</div></div>
              </Link>
              <Link href="/why-donutland/why-donutland-04" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccfaa198a67bd0c39e7_donutland.webflow.io_why-donutland_why-donutland-04.webp" loading="lazy" alt="Why Donutland 04" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Why&nbsp;Donutland 04</div></div>
              </Link>
              <Link href="/why-donutland/why-donutland-05" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf85728bc4bb9accd9_donutland.webflow.io_why-donutland_why-donutland-05.webp" loading="lazy" alt="Why Donutland 05" className="content-image _100-width-height main-index-gray-border" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">About 05</div></div>
              </Link>
              <Link href="/why-donutland/why-donutland-01" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ef75241ed769aae9cd33_donutland.webflow.io_why-donutland_why-donutland-01%20(1).webp" loading="lazy" alt="Why Donutland 01" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Why&nbsp;Donutland 01</div></div>
              </Link>
            </div>

            {/* SUBSCRIBE & SAVE */}
            <div className="w-layout-grid main-index-templates-grid">
              <h2 id="w-node-_91532022-251e-d339-9eea-4fa299fa1c70-ae0d9e9c" className="main-index-grid-title">Subscribe &amp;&nbsp;Save</h2>
              <Link href="/subscribe-save/subscribe-save-02" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecce8e807ceb0ff17363_donutland.webflow.io_subscribe-save_subscribe-save-02.webp" loading="lazy" alt="Subscribe & Save 02" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Subscribe &amp;&nbsp;Save 02</div></div>
              </Link>
              <Link href="/subscribe-save/subscribe-save-03" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf6f32ebaece7266c6_donutland.webflow.io_subscribe-save_subscribe-save-03.webp" loading="lazy" alt="Subscribe & Save 03" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Subscribe &amp;&nbsp;Save 03</div></div>
              </Link>
              <Link href="/subscribe-save/subscribe-save-04" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585f264df0cafcd98294cdb_subscribe-save-04-updated.webp" loading="lazy" alt="Subscribe & Save 04" className="content-image _100-width-height main-index-gray-border" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Subscribe &amp;&nbsp;Save 04</div></div>
              </Link>
              <Link href="/subscribe-save/subscribe-save-05" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf9ae2be693f361cc2_donutland.webflow.io_subscribe-save_subscribe-save-05.webp" loading="lazy" alt="Subscribe & Save 05" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Subscribe &amp;&nbsp;Save 05</div></div>
              </Link>
              <Link href="/subscribe-save/subscribe-save-01" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf754d72ca2691acab_donutland.webflow.io_subscribe-save_subscribe-save-01.webp" loading="lazy" alt="Subscribe & Save 01" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Subscribe &amp;&nbsp;Save 01</div></div>
              </Link>
            </div>

            {/* CONTACT US */}
            <div className="w-layout-grid main-index-templates-grid">
              <h2 id="w-node-_0e9e414b-4207-ea60-2780-04d51ff138b8-ae0d9e9c" className="main-index-grid-title">Contact Us</h2>
              <Link href="/contact-us/contact-us-02" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd07f30cc62fef778af_donutland.webflow.io_contact-us_contact-us-02.webp" loading="lazy" alt="Contact Us 02" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Contact Us 02</div></div>
              </Link>
              <Link href="/contact-us/contact-us-03" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd085728bc4bb9acdcf_donutland.webflow.io_contact-us_contact-us-03.webp" loading="lazy" alt="Contact Us 03" className="content-image _100-width-height main-index-gray-border" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Contact Us 03</div></div>
              </Link>
              <Link href="/contact-us/contact-us-04" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd18b17802c3adc9e67_donutland.webflow.io_contact-us_contact-us-04.webp" loading="lazy" alt="Contact Us 04" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Contact Us 04</div></div>
              </Link>
              <Link href="/contact-us/contact-us-05" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd01fc2512dc33b6e9d_donutland.webflow.io_contact-us_contact-us-05.webp" loading="lazy" alt="Contact Us 05" className="content-image _100-width-height main-index-gray-border" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Contact Us 05</div></div>
              </Link>
              <Link href="/contact-us/contact-us-01" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd117c12763f84d4a1d_donutland.webflow.io_contact-us_contact-us-01.webp" loading="lazy" alt="Contact Us 01" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Contact Us 01</div></div>
              </Link>
            </div>

            {/* CMS */}
            <div className="w-layout-grid main-index-templates-grid">
              <h2 id="w-node-be5d5a3d-a829-7b98-1bde-2baa718ef7c4-ae0d9e9c" className="main-index-grid-title">CMS</h2>
              <Link href="/category/special" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6966776a99d28bb604b5d792_donutland.webflow.io_category_special(Large%20Desktop).avif" loading="lazy" alt="Product Category" className="content-image _100-width-height main-index-gray-border" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Product Category</div></div>
              </Link>
              <Link href="/blog-article/our-top-five-best-selling-donuts" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd1729d999271c05576_donutland.webflow.io_blog-articles_our-top-five-best-selling-donuts.webp" loading="lazy" alt="Blog Article" className="content-image _100-width-height main-index-gray-border" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Blog Article</div></div>
              </Link>
              <Link href="/blog-category/event" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd1a25972f5c3d13e58_donutland.webflow.io_blog-categories_press.webp" loading="lazy" alt="Blog Category" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Blog Category</div></div>
              </Link>
              <Link href="/all-donuts" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/69667727518292a34a4b5585_donutland.webflow.io_all-donuts(Large%20Desktop).png" loading="lazy" alt="All Donuts" className="content-image _100-width-height main-index-gray-border" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">All&nbsp;Donuts</div></div>
              </Link>
              <Link href="/all-blogs" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf0f2adb9ed5c63c6e_donutland.webflow.io_all-blogs.webp" loading="lazy" alt="All Blogs" className="content-image _100-width-height main-index-gray-border" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">All&nbsp;Blog</div></div>
              </Link>
              <Link href="/product/peanut-mcrunch" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585ecd1b5ce8ebf439cf5eb_donutland.webflow.io_product_peanut-mcrunch.webp" loading="lazy" alt="Product Page" className="content-image _100-width-height" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Product Page</div></div>
              </Link>
            </div>

            {/* OTHER */}
            <div className="w-layout-grid main-index-templates-grid other">
              <h2 id="w-node-c02e2460-7374-1a24-969f-eb8a5123c420-ae0d9e9c" className="main-index-grid-title">Other</h2>
              <Link href="/404" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/69667728f67177d4446a74a4_donutland.webflow.io_404(Large%20Desktop).png" loading="lazy" alt="404" className="content-image _100-width-height main-index-gray-border" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">404</div></div>
              </Link>
              <Link href="/401" className="main-index-link-block w-inline-block">
                <div className="template-image-wrapper">
                  <img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/696677276937ed0fb42f0990_donutland.webflow.io_401(Large%20Desktop).png" loading="lazy" alt="Password" className="content-image _100-width-height main-index-gray-border" />
                </div>
                <div className="template-name-wrapper"><div className="template-title">Password</div></div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <WebflowFooter />
    </>
  );
}
