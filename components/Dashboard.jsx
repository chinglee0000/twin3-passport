import React from 'react';

const Dashboard = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-screen mx-auto bg-[#0A0A0A] relative">
      {/* Main Container - 1000x2971 positioned at x=220, y=96 */}
      <div className="absolute left-[220px] top-24 w-[1000px] h-[2971px]">
        
        {/* Section 1: Profile Bar - Pixel Perfect */}
        <div className="absolute left-0 top-0 w-[1000px] h-16 bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl flex items-center px-6">

          {/* Left Side: Avatar + Name */}
          <div className="flex items-center gap-6 flex-1">
            {/* Avatar Container - 64x64 */}
            <div className="w-16 h-16 flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="/assets/img/figma/Avatar.png"
                  alt="Avatar"
                  className="w-16 h-16 object-cover"
                />
              </div>
            </div>

            {/* User Name */}
            <h1 className="font-['Kanit'] font-normal text-[36px] leading-[50.4px] text-white">
              Hi, Alex!
            </h1>
          </div>

          {/* Right Side: Reward + Withdraw */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Reward Display Container */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 h-[57px]">
              {/* $twin3 Label */}
              <span className="font-['Kanit'] font-light text-[18px] leading-[28px] text-[#A4A7AE]">
                $twin3
              </span>

              {/* Vertical Divider */}
              <div className="w-px h-[41px] bg-white/10"></div>

              {/* Reward Values Container */}
              <div className="flex items-end gap-0.5">
                {/* Dollar Sign */}
                <span className="font-['Kanit'] font-normal text-[36px] leading-[40px] text-white">
                  $
                </span>

                {/* Amount */}
                <span className="font-['Kanit'] font-normal text-[36px] leading-[40px] text-white">
                  0.274
                </span>

                {/* Increase */}
                <span className="font-['Kanit'] font-light text-[16px] leading-[20px] text-[#32D583] ml-1">
                  +0.01
                </span>
              </div>
            </div>

            {/* Withdraw Button */}
            <button className="bg-white text-black px-3 py-1.5 rounded-lg text-xs font-light font-['Kanit'] hover:bg-gray-100 transition-colors">
              Withdraw
            </button>
          </div>
        </div>

        {/* Section 2: Score Cards - 1000x197 positioned at y=80 */}
        <div className="absolute left-0 top-20 w-[1000px] h-[197px] flex items-center gap-6">
          
          {/* Humanity Index Card - 488x197 */}
          <div className="w-[488px] h-[197px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3">
            {/* Title Section */}
            <div className="w-[440px] h-7 flex items-center justify-between">
              <span className="font-['Kanit'] font-light text-lg leading-7 text-white">
                Humanity Index
              </span>
              {/* Help Icon */}
              <svg width="13.33" height="13.33" viewBox="0 0 13.33 13.33" fill="none">
                <circle cx="6.665" cy="6.665" r="5.665" stroke="#A4A7AE" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.065 5.065a1.6 1.6 0 0 1 3.2 0c0 1.067-1.6 1.6-1.6 1.6" stroke="#A4A7AE" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.665 9.332h.007" stroke="#A4A7AE" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* Score Section - 440x69 */}
            <div className="w-[440px] h-[69px] flex flex-col gap-2">
              {/* Main Score - 440x41 */}
              <div className="w-[440px] h-[41px] flex items-end justify-center pb-px">
                <span className="font-['Kanit'] font-normal text-4xl leading-10 text-white">204</span>
                <span className="font-['Kanit'] font-light text-base leading-5 text-[#A4A7AE]"> / 265</span>
              </div>
              
              {/* Progress Bar - 440x20 */}
              <div className="w-[440px] h-5 flex items-center gap-3">
                <div className="w-[399px] h-2 bg-[#414651] rounded relative">
                  <div className="w-[70%] h-2 bg-[#D6BBFB] rounded"></div>
                </div>
              </div>
            </div>

            {/* Button - 230x28 */}
            <div className="w-[230px] h-7 border border-white rounded-lg flex items-center justify-center px-3 py-1.5">
              <span className="font-['Kanit'] font-light text-xs leading-4 text-white">
                Improve your Humanity Index
              </span>
            </div>
          </div>

          {/* twin3 Airdrop Score Card - 488x197 */}
          <div className="w-[488px] h-[197px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3">
            {/* Title Section */}
            <div className="w-[440px] h-7 flex items-center justify-between">
              <span className="font-['Kanit'] font-light text-lg leading-7 text-white">
                twin3 Airdrop Score
              </span>
              {/* Help Icon */}
              <svg width="13.33" height="13.33" viewBox="0 0 13.33 13.33" fill="none">
                <circle cx="6.665" cy="6.665" r="5.665" stroke="#A4A7AE" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.065 5.065a1.6 1.6 0 0 1 3.2 0c0 1.067-1.6 1.6-1.6 1.6" stroke="#A4A7AE" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.665 9.332h.007" stroke="#A4A7AE" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* Score Section - 440x69 */}
            <div className="w-[440px] h-[69px] flex flex-col gap-2">
              {/* Main Score - 440x41 */}
              <div className="w-[440px] h-[41px] flex items-end justify-center pb-px">
                <span className="font-['Kanit'] font-normal text-4xl leading-10 text-white">187</span>
                <span className="font-['Kanit'] font-light text-base leading-5 text-[#A4A7AE]"> / 265</span>
              </div>
              
              {/* Progress Bar - 440x20 */}
              <div className="w-[440px] h-5 flex items-center gap-3">
                <div className="w-[398px] h-2 bg-[#414651] rounded relative">
                  <div className="w-[73%] h-2 bg-[#D6BBFB] rounded"></div>
                </div>
              </div>
            </div>

            {/* Index Score Grid - 440x16 */}
            <div className="w-[440px] h-4 grid grid-cols-7 gap-0">
              <span className="font-['Kanit'] font-normal text-sm leading-4 text-[#A4A7AE] text-center">Bi: 00</span>
              <span className="font-['Kanit'] font-normal text-sm leading-4 text-[#A4A7AE] text-center">Di: 00</span>
              <span className="font-['Kanit'] font-normal text-sm leading-4 text-[#A4A7AE] text-center">Si: 00</span>
              <span className="font-['Kanit'] font-normal text-sm leading-4 text-[#A4A7AE] text-center">H: 00</span>
              <span className="font-['Kanit'] font-normal text-sm leading-4 text-[#A4A7AE] text-center">H: 00</span>
              <span className="font-['Kanit'] font-normal text-sm leading-4 text-[#A4A7AE] text-center">H: 00</span>
              <span className="font-['Kanit'] font-normal text-sm leading-4 text-[#A4A7AE] text-center">H: 00</span>
            </div>
          </div>
        </div>

        {/* Section 3: Account Connected - 1000x756 positioned at y=301 */}
        <div className="absolute left-0 top-[301px] w-[1000px] h-[756px] flex flex-col gap-4">

          {/* Header Section - 1000x102 */}
          <div className="flex items-start justify-between w-[1000px] h-[102px]">
            {/* Description Section */}
            <div className="flex-1 flex flex-col gap-2">
              {/* Title Section - 959x32 */}
              <div className="w-[959px] h-8 flex items-center gap-1.5">
                <span className="font-['Kanit'] font-light text-2xl leading-8 text-white">Account Connected</span>
                <span className="font-['Kanit'] font-light text-2xl leading-8 text-[#A4A7AE]">(3/13)</span>
              </div>

              {/* Description Text - 807x62 */}
              <div className="w-[807px] h-[62px]">
                <p className="font-['Kanit'] font-normal text-sm leading-5 text-[#A4A7AE] m-0">
                  Connect accounts that match your expertise and interests. Required Accounts adapt to your profession tabs, helping you find relevant connections. Boost your Airdrop Score and unlock Matrix Traits insights to understand your account's value across different specializations.
                </p>
              </div>
            </div>

            {/* Refresh Button - 177x32 */}
            <div className="w-[177px] h-8 border border-white/10 rounded-lg flex items-center justify-center gap-2 px-4 py-2">
              {/* Refresh Icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1.33337 2.66667V6.66667H5.33337" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.6666 13.3333V9.33333H10.6666" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.1133 6C12.7733 4.94 12.1133 4.02 11.2266 3.38C10.34 2.74 9.27331 2.41333 8.19331 2.44667C7.11331 2.48 6.06664 2.87333 5.22664 3.56667C4.38664 4.26 3.79997 5.21333 3.55997 6.28L1.33331 6.66667M14.6666 9.33333L12.44 9.72C12.2 10.7867 11.6133 11.74 10.7733 12.4333C9.93331 13.1267 8.88664 13.52 7.80664 13.5533C6.72664 13.5867 5.65997 13.26 4.77331 12.62C3.88664 11.98 3.22664 11.06 2.88664 10" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['Kanit'] font-normal text-sm leading-4 text-white">Refresh All Accounts</span>
            </div>
          </div>

          {/* Content Section - Account Cards Container - 1000x638 */}
          <div className="w-[1000px] h-[638px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
            {/* Account Cards Grid - Placeholder for actual account connection cards */}
            <div className="w-full h-full grid grid-cols-1 gap-4 content-start">
              <div className="w-full h-[120px] bg-white/2 border border-white/5 rounded-lg flex items-center justify-center">
                <span className="font-['Kanit'] font-light text-sm text-[#A4A7AE]">Account Connection Cards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: twin3 Social Contribution - 1000x560 positioned at y=1081 */}
        <div className="absolute left-0 top-[1081px] w-[1000px] h-[560px] flex flex-col gap-4">

          {/* Header Section - 1000x80 */}
          <div className="w-[1000px] h-20 flex flex-col items-center gap-1">
            <span className="font-['Kanit'] font-light text-2xl leading-8 text-white">twin3 Social Contribution</span>
            <span className="font-['Kanit'] font-light text-2xl leading-8 text-[#A4A7AE]">(1/6)</span>

            {/* Description */}
            <div className="w-[1000px] text-center mt-2">
              <p className="font-['Kanit'] font-normal text-sm leading-5 text-[#A4A7AE] m-0">
                Contribute to the twin3 ecosystem by participating in social activities, sharing content, and engaging with the community to earn rewards and build your reputation.
              </p>
            </div>
          </div>

          {/* Task List Card - 1000x512 */}
          <div className="w-[1000px] h-[512px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col gap-4">

            {/* Task Items Grid */}
            <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">

              {/* Sample Task Item 1 */}
              <div className="w-full h-15 flex items-center gap-4 p-3 rounded-lg bg-white/2 border border-white/5">
                {/* Task Icon */}
                <div className="w-10 h-10 bg-[#414651] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1.66667L12.575 6.88333L18.3333 7.725L14.1667 11.7833L15.15 17.5167L10 14.8083L4.85 17.5167L5.83333 11.7833L1.66667 7.725L7.425 6.88333L10 1.66667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Task Content */}
                <div className="flex-1 flex flex-col gap-1">
                  <span className="font-['Kanit'] font-normal text-base leading-5 text-white">Share twin3 on Social Media</span>
                  <span className="font-['Kanit'] font-light text-xs leading-4 text-[#A4A7AE]">Share twin3 content on your social media platforms</span>
                </div>

                {/* Task Status */}
                <div className="w-20 h-8 bg-[#32D583]/10 border border-[#32D583]/30 rounded-md flex items-center justify-center">
                  <span className="font-['Kanit'] font-normal text-xs leading-4 text-[#32D583]">Complete</span>
                </div>
              </div>

              {/* Sample Task Item 2 */}
              <div className="w-full h-15 flex items-center gap-4 p-3 rounded-lg bg-white/2 border border-white/5">
                {/* Task Icon */}
                <div className="w-10 h-10 bg-[#414651] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18.3333 9.23333V10C18.3317 11.797 17.7498 13.5456 16.6738 14.9849C15.5978 16.4241 14.0854 17.4771 12.3621 17.9866C10.6389 18.4961 8.79707 18.4349 7.11141 17.8122C5.42575 17.1894 3.98656 16.0384 3.00848 14.5309C2.0304 13.0234 1.56584 11.2401 1.68408 9.44693C1.80232 7.6538 2.49702 5.94694 3.66458 4.58089C4.83214 3.21485 6.41 2.26282 8.16284 1.86679C9.91568 1.47076 11.7496 1.65195 13.391 2.38333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.3333 3.33333L10 11.675L7.5 9.175" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Task Content */}
                <div className="flex-1 flex flex-col gap-1">
                  <span className="font-['Kanit'] font-normal text-base leading-5 text-white">Join Community Discord</span>
                  <span className="font-['Kanit'] font-light text-xs leading-4 text-[#A4A7AE]">Join the official twin3 Discord server</span>
                </div>

                {/* Task Status */}
                <div className="w-20 h-8 bg-white/5 border border-white/10 rounded-md flex items-center justify-center">
                  <span className="font-['Kanit'] font-normal text-xs leading-4 text-[#A4A7AE]">Pending</span>
                </div>
              </div>

              {/* Additional placeholder */}
              <div className="w-full h-15 bg-white/1 border border-white/2 rounded-lg flex items-center justify-center">
                <span className="font-['Kanit'] font-light text-sm text-[#A4A7AE]/50">More tasks coming soon...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
