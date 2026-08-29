import { useEffect,  useState } from 'react';
import './App.css'
import PersonalInfoForm from './components/PersonalInformation';
import { ChevronsUp } from 'lucide-react';

function App() {
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [GPA, setGPA] = useState('');
  const [roll, setRoll] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [reg, setReg] = useState('');
  const [year, setYear] = useState('');
  const [date, setDate] = useState('');
  const [serial, setSerial] = useState('');
  const [dbchc, setDBCHC] = useState('');

  const countHSC = Number(birthYear) + Number(year);
  const registatin = countHSC - 2;
  const nextYear = registatin + 1;

  const finalresnear = `${registatin}-${nextYear.toString().slice(-2)}`;

  const autoPickDate = {
    2001: "2002-09-18",
    2002: "2002-09-18",
    2003: "2003-10-13",
    2004: "2004-09-27",
    2005: "2005-09-26",
    2006: "2006-09-10",
    2007: "2007-08-26",
    2008: "2008-09-09",
    2009: "2009-07-25",
    2010: "2010-07-15",
    2011: "2011-07-27",
    2012: "2012-07-18",
    2013: "2013-08-03",
    2014: "2014-08-13",
    2015: "2015-08-09",
    2016: "2016-08-18",
    2017: "2017-07-23",
    2018: "2018-07-19",
    2019: "2019-07-17",
    2020: "2019-07-17",
    2021: "2021-01-30",
    2022: "2022-05-30",
    2023: "2023-11-26",
    2024: "2024-10-15",
    2025: "2025-10-16",
  };

  const storyear = autoPickDate[countHSC];
  const dateFor = new Date(storyear);

  const day = dateFor.getDate();
  const month = dateFor.toLocaleString("en-US", { month: "long" });
  const years = dateFor.getFullYear();

  const customFormat = `${day} ${month}, ${years}`;

  useEffect(() => {
    const topBtn = document.getElementById("scrollTopBtn");

    // Safety check: element ache kina nishchit hon
    if (topBtn) {
      const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      topBtn.addEventListener("click", handleClick);

      // Cleanup function
      return () => topBtn.removeEventListener("click", handleClick);
    }
  }, []);

  const condi = () => {
    if ((!!(studentName) && !!(fatherName) && !!(motherName) && !!(collegeName) && !!(groupName) && !!(GPA) && !!(roll.length == 6) && !!(birthYear) && !!(reg.length == 10) && !!(year) && !!(serial.length == 7) && !!(dbchc.length == 8))) {
      return 'block';
    } else {
      return 'hidden';
    }
  }

  return (
    // Main relative container to anchor the video overlay
    <div className='relative w-full min-h-screen bg-transparent overflow-hidden'>
      <div className='relative z-10 flex flex-col justify-center items-center w-full min-h-screen p-5'>
        <div className='flex gap-5 flex-col w-full rounded-2xl pb-5'>
          <div>
            <PersonalInfoForm
              studentName={studentName} setStudentName={setStudentName}
              birthYear={birthYear} setBirthYear={setBirthYear}
              fatherName={fatherName} setFatherName={setFatherName}
              motherName={motherName} setMotherName={setMotherName}
              collegeName={collegeName} setCollegeName={setCollegeName}
              groupName={groupName} setGroupName={setGroupName}
              districtName={districtName} setDistrictName={setDistrictName}
              GPA={GPA} setGPA={setGPA}
              roll={roll} setRoll={setRoll}
              reg={reg} setReg={setReg}
              year={year} setYear={setYear}
              date={date} storyear={storyear} setDate={setDate}
              serial={serial} setSerial={setSerial}
              dbchc={dbchc} setDBCHC={setDBCHC}
            />
          </div>
          <div className={`overflow-x-scroll bg-[#f1f5f92f] backdrop-blur-sm py-5 rounded-2xl formTable ${condi()}`}>
            <div className="bg-white">
              <div tabIndex={0} id="certificate-print" className={`relative bg-white mx-auto flex justify-center items-center blurry-text h-210 w-297 bg-set ${condi()}`}>
                <p className='absolute tinos-bold-italic font-bold text-[24px] scale-y-[1.2] underline underline-offset-2 top-35.5 left-212 pl-1'>{reg.length === 0 ? '1411589565 /2014-16' : `${reg} /${finalresnear}`}</p>
                <p className='absolute tinos-bold-italic font-bold text-[24px] scale-y-[1.2] top-34 left-75 pl-1 tracking-[0.5px] custom-shadow'>{serial.length === 0 ? '1245783' : serial}</p>
                <p className='absolute tinos-bold font-bold text-[20px] scale-y-[1] top-[183px] left-[267px] pl-1 tracking-[0.4px] custom-shadow'>{dbchc.length === 0 ? '11245869' : dbchc}</p>
                <p className='absolute tinos-bold font-bold text-[24px] scale-y-[1.2] top-55 left-213 pl-1 tracking-[0.5px]'>{countHSC.length === 0 ? '2015' : countHSC}</p>
                <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-74 left-96.5 pl-2'>{studentName.length === 0 ? 'Md. Joyhanul Islam' : studentName}</p>
                <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-88.5 left-80 pl-2'>{fatherName.length === 0 ? 'Md. Jalal Uddin' : fatherName}</p>
                <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-101 left-39.5 pl-2'>{motherName.length === 0 ? 'Mst. Rabeya Sultana' : motherName}</p>
                <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-114 left-34.5 pl-2'>{collegeName.length === 0 ? 'Dhaka College' : collegeName}</p>
                <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-129.5 left-32.5 w-153 pl-2 text-center'>{districtName.length === 0 ? 'Dhaka' : districtName}</p>
                <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-129 left-155 w-80 pl-2 text-center'>{roll.length === 0 ? '15 42 36' : roll.replace(/(.{2})/g, '$1 ').trim()}</p>
                <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.1] top-143 left-145 w-93.5 pl-2 text-center'>{groupName.length === 0 ? 'Business Studies' : groupName}</p>
                <p className='absolute tinos-bold-italic text-[23px] scale-y-[1.1] top-157 left-42.5 w-18 pl-2 text-center'>{GPA.length === 0 ? '4.00' : GPA}</p>
                <p className='absolute tinos-bold-italic text-[19px] top-187 left-88 pl-2 text-center font-bold'>{customFormat === 'NaN Invalid Date, NaN' ? '7 August, 2026' : customFormat}.</p>
              </div>
            </div>
          </div>
          <div className="pt-4 flex justify-center items-center">
            <a
              href={'https://chromewebstore.google.com/detail/himecbhjbfcpmcaamapopchlbfckdelj?utm_source=item-share-cb'}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Install Extension & Save Certificate
            </a>
          </div>
          <button className="fixed bottom-[20px] right-[20px] p-[10px] rounded-full text-[16px] bg-[#007bff] text-white border-none rounded-[5px] cursor-pointer hover:bg-[#0056b3]" id="scrollTopBtn"><ChevronsUp /></button>
        </div>
      </div>
    </div>
  )
}

export default App
