import { useState } from 'react';
import './App.css'
import PersonalInfoForm from './components/PersonalInformation';

function App() {

  const [studentName, setStudentName] = useState('');
  const [studentName2, setStudentName2] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [GPA, setGPA] = useState('');
  const [roll, setRoll] = useState('');
  const [reg, setReg] = useState('');
  const [year, setYear] = useState('');
  const [date, setDate] = useState('');
  const [serial, setSerial] = useState('');
  const [dbchc, setDBCHC] = useState('');

  const dateFor = new Date(date);

  const day = dateFor.getDate();
  const month = dateFor.toLocaleString("en-US", { month: "long" }); // "August"
  const years = dateFor.getFullYear();

  const customFormat = `${day} ${month}, ${years}`;

  return (
    <>
      <div className='flex flex-col justify-center items-center w-full min-h-screen bg-gray-300 p-5'>
        <div className='w-full border-b-2 border-gray-400 flex justify-center items-center rounded-2xl bg-white shadow mb-5'>
          <h1 className='text-5xl font-bold uppercase tinos-bold mx-auto my-5 animate-pulse'>Custom Certificate</h1>
        </div>
        <div className='w-full rounded-2xl bg-white pb-5'>
          <div>
            <PersonalInfoForm studentName={studentName} setStudentName={setStudentName} studentName2={studentName2} setStudentName2={setStudentName2} fatherName={fatherName} setFatherName={setFatherName} motherName={motherName} setMotherName={setMotherName} collegeName={collegeName} setCollegeName={setCollegeName} groupName={groupName} setGroupName={setGroupName} districtName={districtName} setDistrictName={setDistrictName} GPA={GPA} setGPA={setGPA} roll={roll} setRoll={setRoll} reg={reg} setReg={setReg} year={year} setYear={setYear} date={date} setDate={setDate} serial={serial} setSerial={setSerial} dbchc={dbchc} setDBCHC={setDBCHC} />
          </div>
          <div className='overflow-x-scroll my-5'>
            <div id="certificate-print" className='relative bg-white shadow mx-auto flex justify-center items-center blurry-text h-210 w-297 bg-set'>
              <p className='absolute tinos-bold-italic font-bold text-[24px] scale-y-[1.2] underline underline-offset-2 top-35.5 left-212 pl-1'>{reg.length === 0 ? '1411589565 /2014-16' : reg}</p>
              <p className='absolute tinos-bold-italic font-bold text-[24px] scale-y-[1.2] top-34 left-75 pl-1 tracking-[0.5px] custom-shadow'>{serial.length === 0 ? '1245783' : serial}</p>
              <p className='absolute tinos-bold font-bold text-[20px] scale-y-[1] top-[183px] left-[267px] pl-1 tracking-[0.4px] custom-shadow'>{dbchc.length === 0 ? '11245869' : dbchc}</p>
              <p className='absolute tinos-bold font-bold text-[24px] scale-y-[1.2] top-55 left-213 pl-1 tracking-[0.5px]'>{year.length === 0 ? '2015' : year}</p>
              <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-74 left-96.5 pl-2'>{studentName.length === 0 ? 'Md. Joyhanul Islam' : studentName} {studentName2}</p>
              <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-88.5 left-80 pl-2'>{fatherName.length === 0 ? 'Md. Jalal Uddin' : fatherName}</p>
              <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-101 left-39.5 pl-2'>{motherName.length === 0 ? 'Mst. Rabeya Sultana' : motherName}</p>
              <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-114 left-34.5 pl-2'>{collegeName.length === 0 ? 'Dhaka College' : collegeName}</p>
              <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-129.5 left-32.5 w-153 pl-2 text-center'>{districtName.length === 0 ? 'Dhaka' : districtName}</p>
              <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.2] top-129 left-155 w-80 pl-2 text-center'>{roll.length === 0 ? '15 42 36' : roll}</p>
              <p className='absolute tinos-bold-italic text-[25px] scale-y-[1.1] top-143 left-145 w-93.5 pl-2 text-center'>{groupName.length === 0 ? 'Business Studies' : groupName}</p>
              <p className='absolute tinos-bold-italic text-[23px] scale-y-[1.1] top-157 left-42.5 w-18 pl-2 text-center'>{GPA.length === 0 ? '4.00' : GPA}</p>
              <p className='absolute tinos-bold-italic text-[19px] top-187 left-88 pl-2 text-center font-bold'>{customFormat === 'NaN Invalid Date, NaN' ? '7 August, 2026' : customFormat }.</p>
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
        </div>
      </div>
    </>
  )
}

export default App