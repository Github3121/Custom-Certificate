import { CircleX } from "lucide-react";

export default function PersonalInfoForm({
    studentName, setStudentName, birthYear, setBirthYear, fatherName, setFatherName,
    motherName, setMotherName, collegeName, setCollegeName, groupName, setGroupName,
    districtName, setDistrictName, GPA, setGPA, roll, setRoll, reg, setReg,
    year, setYear, setDate, serial, setSerial, dbchc, setDBCHC, storyear
}) {

    // Helper function: State clear korbe ebong oi input-e focus niye ashbe
    const handleClearAndFocus = (setter, elementId) => {
        setter(""); // React State clear
        const targetInput = document.getElementById(elementId);
        if (targetInput) {
            targetInput.focus(); // Clear hoyar por auto-focus
        }
    };

    return (
        <div className="min-h-screen bg-transparent flex items-center justify-center p-4 sm:p-6 lg:p-8 rounded-2xl">
            <div className="w-full max-w-2xl bg-[#ffffff5c] backdrop-blur-2xl border-2 border-white rounded-2xl shadow-xl overflow-hidden formTable">
                <div className="bg-gradient-to-r border-b border-white text-center px-8 py-6 text-white">
                    <h2 className="text-4xl font-bold tracking-wide">Certificate Information</h2>
                    <p className="text-blue-100 text-lg mt-1">Please fill in your details to complete your certificate.</p>
                </div>

                <div className="p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Student Name */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">S. First Name</label>
                            <input id="name" value={studentName} onChange={(e) => setStudentName(e.target.value)} type="text" placeholder="Md. Rahat" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400 pr-10" />
                            {studentName && (
                                <button type="button" tabIndex={-1} onClick={() => handleClearAndFocus(setStudentName, "name")} className="absolute right-3 top-[39px] bg-gray-200 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer transition">
                                    <CircleX size={16} />
                                </button>
                            )}
                        </div>

                        {/* Father Name */}
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">Father Name</label>
                            <input id="father" value={fatherName} onChange={(e) => setFatherName(e.target.value)} type="text" placeholder="Md. Jabed Hossain" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400 pr-10" />
                            {fatherName && (
                                <button type="button" tabIndex={-1} onClick={() => handleClearAndFocus(setFatherName, "father")} className="absolute right-3 top-[39px] bg-gray-200 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer transition">
                                    <CircleX size={16} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Mother Name */}
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">Mother Name</label>
                            <input id="mother" value={motherName} onChange={(e) => setMotherName(e.target.value)} type="text" placeholder="Roja Begum" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400 pr-10" />
                            {motherName && (
                                <button type="button" tabIndex={-1} onClick={() => handleClearAndFocus(setMotherName, "mother")} className="absolute right-3 top-[39px] bg-gray-200 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer transition">
                                    <CircleX size={16} />
                                </button>
                            )}
                        </div>

                        {/* College Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2">College Name</label>
                            <input value={collegeName} onChange={(e) => setCollegeName(e.target.value)} list="browsers" type="text" placeholder="Govt. Science College" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400" />
                            <datalist id="browsers">
                                <option value="Dhaka State College"></option>
                                <option value="Dhaka College"></option>
                            </datalist>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Group Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Group Name</label>
                            <input value={groupName} onChange={(e) => setGroupName(e.target.value)} list="groups" type="text" placeholder="Choose Anyone" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400" />
                            <datalist id="groups">
                                <option value="Science"></option>
                                <option value="Business Studies"></option>
                                <option value="Arts"></option>
                            </datalist>
                        </div>

                        {/* District Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2">District Name</label>
                            <select defaultValue={districtName} onChange={(e) => setDistrictName(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition">
                                <option disabled={true}>Pick a District</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Faridpur">Faridpur</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Gopalganj">Gopalganj</option>
                                <option value="Kishoreganj">Kishoreganj</option>
                                <option value="Madaripur">Madaripur</option>
                                <option value="Manikganj">Manikganj</option>
                                <option value="Munshiganj">Munshiganj</option>
                                <option value="Narayanganj">Narayanganj</option>
                                <option value="Narsingdi">Narsingdi</option>
                                <option value="Rajbari">Rajbari</option>
                                <option value="Shariatpur">Shariatpur</option>
                                <option value="Tangail">Tangail</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* GPA */}
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">GPA</label>
                            <input id="gpa" value={GPA} onChange={(e) => setGPA(e.target.value)} type="text" placeholder="4.50" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400 pr-10" />
                            {GPA && (
                                <button type="button" tabIndex={-1} onClick={() => handleClearAndFocus(setGPA, "gpa")} className="absolute right-3 top-[39px] bg-gray-200 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer transition">
                                    <CircleX size={16} />
                                </button>
                            )}
                        </div>

                        {/* Birth Year */}
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">Birth Year</label>
                            <input id="birth" value={birthYear} maxLength={4} onChange={(e) => setBirthYear(e.target.value)} type="text" placeholder="2000" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400 pr-10" />
                            {birthYear && (
                                <button type="button" tabIndex={-1} onClick={() => handleClearAndFocus(setBirthYear, "birth")} className="absolute right-3 top-[39px] bg-gray-200 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer transition">
                                    <CircleX size={16} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Exam Duration */}
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">Birth to Exam Year Duration</label>
                            <input id="year" value={year} maxLength={3} onChange={(e) => setYear(e.target.value)} type="number" placeholder="19" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400 pr-10" />
                            {year && (
                                <button type="button" tabIndex={-1} onClick={() => handleClearAndFocus(setYear, "year")} className="absolute right-3 top-[39px] bg-gray-200 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer transition">
                                    <CircleX size={16} />
                                </button>
                            )}
                        </div>

                        {/* Results Publish Date */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Results Publish Date</label>
                            <input tabIndex={-1} value={storyear} onChange={(e) => setDate(e.target.value)} type="date" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800" disabled />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Reg No */}
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">Reg. No <span className={`${reg.length === 10 ? 'text-green-700' : 'text-red-400'} ${reg.length === 0 && 'hidden'}`}>{reg.length}</span></label>
                            <input id="reg" value={reg} maxLength={10} onChange={(e) => setReg(e.target.value)} type="text" placeholder="10 digits" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400 pr-10" />
                            {reg && (
                                <button type="button" tabIndex={-1} onClick={() => handleClearAndFocus(setReg, "reg")} className="absolute right-3 top-[39px] bg-gray-200 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer transition">
                                    <CircleX size={16} />
                                </button>
                            )}
                        </div>

                        {/* Roll No */}
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">Roll No. <span className={`${roll.length === 6 ? 'text-green-700' : 'text-red-400'} ${roll.length === 0 && 'hidden'}`}>{roll.length}</span></label>
                            <input id="roll" value={roll} maxLength={6} onChange={(e) => setRoll(e.target.value)} type="text" placeholder="193596" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400 pr-10" />
                            {roll && (
                                <button type="button" tabIndex={-1} onClick={() => handleClearAndFocus(setRoll, "roll")} className="absolute right-3 top-[39px] bg-gray-200 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer transition">
                                    <CircleX size={16} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Serial No */}
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">Serial No. <span className={`${serial.length === 7 ? 'text-green-700' : 'text-red-400'} ${serial.length === 0 && 'hidden'}`}>{serial.length}</span></label>
                            <input id="sl" value={serial} maxLength={7} onChange={(e) => setSerial(e.target.value)} type="text" placeholder="7 digits" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 pr-10" />
                            {serial && (
                                <button type="button" tabIndex={-1} onClick={() => handleClearAndFocus(setSerial, "sl")} className="absolute right-3 top-[39px] bg-gray-200 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer transition">
                                    <CircleX size={16} />
                                </button>
                            )}
                        </div>

                        {/* DBCHC */}
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">DBCHC <span className={`${dbchc.length === 8 ? 'text-green-700' : 'text-red-400'} ${dbchc.length === 0 && 'hidden'}`}>{dbchc.length}</span></label>
                            <input id="dbchc" value={dbchc} maxLength={8} onChange={(e) => setDBCHC(e.target.value)} type="text" placeholder="8 digits" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-white focus:border-white outline-none transition text-slate-800 placeholder-slate-400 pr-10" />
                            {dbchc && (
                                <button type="button" tabIndex={-1} onClick={() => handleClearAndFocus(setDBCHC, "dbchc")} className="absolute right-3 top-[39px] bg-gray-200 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer transition">
                                    <CircleX size={16} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}