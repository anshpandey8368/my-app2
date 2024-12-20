import React from 'react';
import Image from 'next/image';
import { IoEye, IoCheckbox } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaComments, FaStar ,FaCheck } from "react-icons/fa6";
import { FaRegComments , FaArrowRight } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";
import { LuClipboardList } from "react-icons/lu";
import { RiArrowRightSLine } from "react-icons/ri";
import '@/app/styles.css'


const CommunityStatItem = ({ icon: Icon, color, title, count, lastWeek }) => (
  <div className='community-stat-item'>
    <div style={{color}}><Icon className="stat-icon" /></div>
    <div className='stat-content'>
      <p className='stat-title'>{title} {count}</p>
      <p className='stat-subtitle'>Last week {lastWeek}</p>
    </div>
  </div>
);

const LanguageItem = ({ lang, count }) => (
  <div className='language-item'>
    <div className='language-tag'>
      {lang}
    </div>
    <div className='language-count'>
      {count} <span className='count-label'>problems solved</span>
    </div>
  </div>
);

const SkillSection = ({ color, level, skills }) => (
  <div className='skill-section'>
    <div className='skill-header'>
      <BsDot style={{color}} className="skill-dot" />
      <h1 className='skill-level'>{level}</h1>
    </div>
    <div className='skill-list'>
      {skills.map(([skill, count]) => (
        <p key={skill} className='skill-item'>
          <span className='skill-tag'>
            {skill}
          </span>
          <span className='skill-count'>x {count}</span>
        </p>
      ))}
    </div>
    <p className='show-more'>Show more</p>
  </div>
);

const getMonthDays = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

function Box() {
  const boxes = [];
  for (let i = 1; i <= 15; i++) {
    boxes.push(
      <div key={i} className="box-item" style={{backgroundColor: i % 2 === 0 ? 'var(--Light-theme-color)' : 'transparent'}}>
        video {i}
      </div>
    );
  }
  return <>{boxes}</>;
}

function Profile() {
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

  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setMonth(startDate.getMonth() - 12);
  
  const months = [];
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = getMonthDays(year, month);
    
    const emptyCells = Array(firstDayOfMonth).fill(null);
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
    <div className='container'>
      <div className='sidebar'>
        <div className='profile-section'>
          <div className='profile-image'>
            <Image 
              className='avatar'
              src='data:image/jpeg;base64,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'
              alt='img'
              width={100}
              height={100}
            />
          </div>
          <div className='profile-info'>
            <h1 className='profile-name'>Ansh Pandey</h1>
            <p className='profile-username'>Ansh15</p>
            <p className='profile-rank'>
              Rank <span className='rank-number'>328,747</span>
            </p>
          </div>
        </div>

        <button className='edit-profile-btn'>
          Edit Profile <FaArrowRight className="btn-icon" />
        </button>
        <p className='location'>India</p>

        <hr />

        <h1 className='section-title'>Community Stats</h1>
        <div className='stats-container'>
          {communityStats.map((stat, index) => (
            <CommunityStatItem key={index} {...stat} />
          ))}
        </div>

        <hr />

        <h1 className='section-title'>Languages</h1>
        <div className='languages-container'>
          {languages.map((lang, index) => (
            <LanguageItem key={index} {...lang} />
          ))}
        </div>

        <hr />

        <div className='skills-container'>
          <h1 className='section-title'>Skills</h1>
          {skillSections.map((section, index) => (
            <SkillSection key={index} {...section} />
          ))}
        </div>
      </div>

      <div className='main-content'>
        <div className='stats-row'>
          <div className='stats-card'>
            <div className='circle-container'>
              <div className="circle-border">
                <div className='inner-circle'>
                </div>
              </div>
              <div className='circle-text'>
              <div className='circle-text-top'><span className='solved'>288</span>/3344</div>
              <div className='solved-text'><FaCheck className='check-icon'/> Solved</div>
              </div>
            </div>
            <div className='difficulty-stats'>
              <div className='difficulty-box easy'>
                <div className='difficulty-label'>Easy</div>
                <div className='difficulty-count'>103/832</div>
              </div>
              <div className='difficulty-box medium'>
                <div className='difficulty-label'>Med.</div>
                <div className='difficulty-count'>156/1751</div>
              </div>
              <div className='difficulty-box hard'>
                <div className='difficulty-label'>Hard</div>
                <div className='difficulty-count'>28/761</div>
              </div>
            </div>
          </div>
          <div className='stats-card empty'></div>
        </div>
        
        <div className='activity-card'>
          <div className='activity-header'>
            <h1 className='activity-title'>
              <span className='submission-count'>514</span> submissions in the past one year 
              <CiCircleInfo className='info-icon' />
            </h1>
            <div className='activity-meta'>
              <p className='meta-item'>Total active days: <span className='meta-value'>218</span></p>
              <p className='meta-item'>Max streak: <span className='meta-value'>21</span></p>
              <select name="year" id="year" defaultValue="Current" className='year-select'>
                <option value="Current">Current</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
          <div className='streak-container'>
            <div className='streak-grid'>
              {months.map((monthData, monthIndex) => (
                <div key={monthIndex} className='align'>
                  {monthData.cells.map((day, index) => {
                    if (day === null) {
                      return <div key={`empty-${index}`} className="cell"></div>;
                    }
                    const currentDate = new Date(monthData.year, monthData.month, day);
                    const isValidDay = currentDate >= startDate && currentDate <= endDate;
                    return (
                      <div key={index} className="ret" style={{ backgroundColor: isValidDay ? 'var(--text-color)' : 'transparent' }}>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className='month-labels'>
            {months.map((monthData, monthIndex) => {
              const currentMonth = new Date().getMonth();
              const currentYear = new Date().getFullYear();
              return monthData.year < currentYear || monthData.month < currentMonth ? (
                <div key={monthIndex} className='month-label'>
                  {monthNames[monthData.month].substring(0,3)}
                </div>
              ) : (
                <div key={monthIndex} className='month-label'></div>
              );
            })}
          </div>
        </div>

        <div className='submissions-card'>
          <div className='submissions-header'>
            <div className='tab-list'>
              <div className='tab-item'>
                <TbChecklist className='tab-icon' />Recent AC
              </div>
              <div className='tab-item'>
                <LuClipboardList className='tab-icon' />List
              </div>
              <div className='tab-item'>
                <IoMdCheckboxOutline className='tab-icon' />Solutions
              </div>
              <div className='tab-item'>
                <FaRegComments className='tab-icon' />Discuss
              </div>
            </div>
            <div className='view-all'>
              <p>View all submissions <RiArrowRightSLine /></p>
            </div>
          </div>
          <div className='submissions-list'>
            {Box()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;