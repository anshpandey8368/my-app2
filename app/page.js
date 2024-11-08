import React from 'react';
import Image from 'next/image';
import { IoEye, IoCheckbox } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaComments, FaStar } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";
import { LuClipboardList } from "react-icons/lu";
import { RiArrowRightSLine } from "react-icons/ri";

const CommunityStatItem = ({ icon: Icon, color, title, count, lastWeek }) => (
  <div className='flex gap-2'>
    <div style={{color}}><Icon /></div>
    <div className='flex flex-col gap-1'>
      <p className='text-[14px]'>{title} {count}</p>
      <p className='text-[12px]'>Last week {lastWeek}</p>
    </div>
  </div>
);

const LanguageItem = ({ lang, count }) => (
  <div className='flex justify-between'>
    <div className='py-[8px] px-[1px] w-[38.25px] h-[24px] text-[12px] text-[#eff2f699] rounded-[25px] flex justify-center items-center bg-[#FFFFFF1A]'>
      {lang}
    </div>
    <div className='text-[12px] text-[#fff] font-bold'>
      {count} <span className='text-[#eff2f699] font-thin'>problems solved</span>
    </div>
  </div>
);

const SkillSection = ({ color, level, skills }) => (
  <div>
    <div className='flex items-center mt-3'>
      <BsDot className={`text-[${color}] text-[20px]`} />
      <h1 className='text-[12px] font-bold'>{level}</h1>
    </div>
    <div className='flex flex-col gap-3 mt-2'>
      {skills.map(([skill, count]) => (
        <p key={skill} className='flex gap-2'>
          <span className='py-[8px] px-[8px] w-fit h-[24px] text-[12px] text-[#eff2f699] rounded-[25px] flex justify-center items-center bg-[#FFFFFF1A]'>
            {skill}
          </span>
          <span className='text-[12px] text-[#eff2f699]'>x {count}</span>
        </p>
      ))}
      <p className='text-[#eff2f699] text-[12px] flex justify-center'>Show more</p>
    </div>
  </div>
);

const getMonthDays = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

function Box() {
  const boxes = [];
  for (let i = 1; i <= 15; i++) {
    boxes.push(
      <div 
        key={i}
        className={`h-[56px] w-[100%] px-4 rounded-[8px] flex items-center ${i % 2 === 0 ? 'bg-[#ffffff12]' : 'bg-[#282828]'}`}>video {i}</div>
    );
  }
  return <>{boxes}</>;
}


function Home() {
  const communityStats = [
    { icon: IoEye, color: '#0066CC', title: 'Views', count: 1, lastWeek: 0 },
    { icon: IoCheckbox, color: '#64d2ff', title: 'Solution', count: 2, lastWeek: 0 },
    { icon: FaComments, color: '#00af9b', title: 'Discuss', count: 0, lastWeek: 0 },
    { icon: FaStar, color: '#ffa116', title: 'Reputation', count: 0, lastWeek: 0 }
  ];

  const languages = [
    { lang: 'Java', count: 283 },
    { lang: 'C++', count: 4 }
  ];

  const skillSections = [
    {
      color: '#EF4743',
      level: 'Advanced',
      skills: [
        ['Dynamic Programming', 27],
        ['Backtracking', 12],
        ['Divide and Conquer', 9]
      ]
    },
    {
      color: '#FFC01E',
      level: 'Intermediate',
      skills: [
        ['Hash Table', 61],
        ['Math', 45],
        ['Greedy', 35]
      ]
    },
    {
      color: '#2CBB5D',
      level: 'Fundamental',
      skills: [
        ['Array', 145],
        ['String', 80]
      ]
    }
  ];

  // Calculate streak grid for full year
  const endDate = new Date(); // Today's date
  const startDate = new Date(endDate); // Create a copy of today's date
  startDate.setMonth(startDate.getMonth() - 12); // Go back 12 months
  
  // Generate cells for each month
  const months = [];
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = getMonthDays(year, month);
    
    // Create empty cells for days before the first day of month
    const emptyCells = Array(firstDayOfMonth).fill(null);
    
    // Create cells for actual days
    const dayCells = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    
    months.push({
      year,
      month,
      firstDay: firstDayOfMonth,
      days: daysInMonth,
      cells: [...emptyCells, ...dayCells]
    });
    
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className='flex gap-4 p-[30px] justify-center '>
      <div className='w-[300px] h-[1176px] px-[16px] py-[21px] bg-[#282828] rounded-[8px]'>
        <div className='flex gap-2'>
          <div>
            <Image 
              className='w-[80px] h-[80px] rounded-md'
              alt='img'
              src="data:image/jpeg;base64,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"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1 className='text-[16px] font-semibold'>Ansh Pandey</h1>
            <p className='text-[12px] font-medium'>Ansh15</p>
            <p className='text-[16px] font-medium text-base mt-[20px] text-[#eff2f699]'>
              Rank <span className='text-[#fff] font-semibold'>328,747</span>
            </p>
          </div>
        </div>

        <button className='text-[#2CBB5D] bg-[#2CBB5D1f] w-[100%] h-[35px] rounded-[8px] text-[14px] py-[7px] mt-[16px] font-semibold'>
          Edit Profile
        </button>
        <p className='text-[14px] my-[16px] font-thin'>India</p>

        <hr />

        <h1 className='text-[16px] font-bold leading-6 my-4'>Community Stats</h1>
        <div className='flex flex-col gap-3 my-3'>
          {communityStats.map((stat, index) => (
            <CommunityStatItem key={index} {...stat} />
          ))}
        </div>

        <hr />

        <h1 className='text-[16px] font-bold leading-6 my-4'>Languages</h1>
        <div className='flex flex-col gap-3 my-3'>
          {languages.map((lang, index) => (
            <LanguageItem key={index} {...lang} />
          ))}
        </div>

        <hr />

        <div>
          <h1 className='text-[16px] font-bold leading-6 my-4'>Skills</h1>
          {skillSections.map((section, index) => (
            <SkillSection key={index} {...section} />
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <div className='w-[410px] h-[180px] bg-[#282828] rounded-[8px] flex justify-around items-center'>
            <div className='w-[170px] h-[170px] flex justify-center items-center'>
              <div className="circle-border relative flex justify-center items-center">
                <div className='w-[130px] h-[130px] bg-[#282828] rounded-[50%] flex justify-center items-center absolute z-10'></div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='w-[90px] h-[44px] text-[12px] bg-[#ffffff0f] rounded-[8px] flex flex-col justify-center items-center'>
                  <div className='font-semibold text-[#1CBABA]'>Easy</div>
                  <div className='font-bold'>103/832</div>
                </div>
                <div className='w-[90px] h-[44px] text-[12px] bg-[#ffffff0f] rounded-[8px] flex flex-col justify-center items-center'>
                  <div className='font-semibold text-[#FFB700]'>Med.</div>
                  <div className='font-bold'>156/1751</div>
                </div>
                <div className='w-[90px] h-[44px] text-[12px] bg-[#ffffff0f] rounded-[8px] flex flex-col justify-center items-center'>
                  <div className='font-semibold text-[#FF3737]'>Hard</div>
                  <div className='font-bold'>28/761</div>
                </div>
              </div>
          </div>
          <div className='w-[410px] h-[180px] bg-[#282828] rounded-[8px]'></div>
        </div>
        <div className='w-[836px] h-[182.79px] bg-[#282828] rounded-[8px]'>
          <div className='flex justify-between items-center p-4'>
            <h1 className='text-[16px] text-[#EFFIF6BF] flex  items-center gap-2'><span className='text-[20px] text-[#fff]'>514</span> submissions in the past one year <CiCircleInfo className='text-[#5c5c5c]' /> </h1>
            <div className='flex gap-4'>
              <p className='text-[12px] text-[#EFF2F699] font-light'>Total active days: <span className='text-[#EFFIF6BF] font-semibold'>218</span> </p>
              <p className='text-[12px] text-[#EFF2F699] font-light'>Max streak: <span className='text-[#EFFIF6BF] font-semibold'>21</span> </p>
              <select name="" id="" defaultValue="Current">
                <option value="Current">Current</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col p-3 pt-[0px]'>
            <div className='flex'>
              {months.map((monthData, monthIndex) => (
                <div key={monthIndex} className='grid grid-rows-7 grid-flow-col gap-[3px] mr-[5px]'>
                  {monthData.cells.map((day, index) => {
                    if (day === null) {
                      return <div key={`empty-${index}`} className="w-[9.04px] h-[9.04px] bg-transparent"></div>;
                    }
                    const currentDate = new Date(monthData.year, monthData.month, day);
                    const isValidDay = currentDate >= startDate && currentDate <= endDate;
                    return (
                      <div key={index} className={`w-[9.04px] h-[9.04px] m-[0px] rounded-[2px] ${isValidDay ? 'bg-[#FFFFFF0F]' : 'bg-transparent'}`}>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className='flex mt-1 p-3 pt-[0px] justify-between'>
              {months.map((monthData, monthIndex) => (
                <div key={monthIndex} className='ml-[6px] text-[14px] text-[#EFF2F699]'>
                  {monthData.month === new Date().getMonth() && monthData.year === new Date().getFullYear() ? '' : monthNames[monthData.month]}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-[836px] h-[934px] p-4 bg-[#282828] rounded-[8px]'>
          <div className='flex justify-between p-4 h-[44px]'>
            <div className='flex'>
              <div className='text-[14px] text-[#FFF] px-[20px] py-[10px] flex items-center gap-2 justify-center'><TbChecklist className='text-[24px]' />Recent AC</div>
              <div className='text-[14px] text-[#FFF] px-[20px] py-[10px] flex items-center gap-2 justify-center'><LuClipboardList className='text-[24px]' />List</div>
              <div className='text-[14px] text-[#FFF] px-[20px] py-[10px] flex items-center gap-2 justify-center'><IoMdCheckboxOutline className='text-[24px]' />Solutions</div>
              <div className='text-[14px] text-[#FFF] px-[20px] py-[10px] flex items-center gap-2 justify-center'><FaRegComments className='text-[24px]' />Discuss</div>
            </div>
            <div>
              <p className='text-[12px] text-[#EFF2F699] flex justify-center items-center'>View all submissions < RiArrowRightSLine /></p>
            </div>
          </div>
          <div className='mt-4'>
            {Box()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;