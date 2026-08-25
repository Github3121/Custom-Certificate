import { CircleX } from "lucide-react";

export default function PersonalInfoForm({ studentName, setStudentName, birthYear, setBirthYear, fatherName, setFatherName, motherName, setMotherName, collegeName, setCollegeName, groupName, setGroupName, districtName, setDistrictName, GPA, setGPA, roll, setRoll, reg, setReg, year, setYear, setDate, serial, setSerial, dbchc, setDBCHC, storyear }) {

    return (
        <div className="min-h-screen bg-[#f1f5f92f] backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 rounded-2xl">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">
                    <h2 className="text-2xl font-bold tracking-wide">Certificate Information</h2>
                    <p className="text-blue-100 text-sm mt-1">Please fill in your details to complete your certificate.</p>
                </div>

                <div className="p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">S. First Name</label>
                            <input id="name" value={studentName} onChange={(e) => setStudentName(e.target.value)} type="text" placeholder="Md. Rahat" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <button tabIndex={-1} onClick={() => document.getElementById("name").value = ''} className="absolute left-65 top-[39px] bg-gray-300 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"><CircleX size={16} /></button>
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Father Name</label>
                            <input id="father" value={fatherName} onChange={(e) => setFatherName(e.target.value)} type="text" placeholder="Md. Jabed Hossain" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <button tabIndex={-1} onClick={() => document.getElementById("father").value = ''} className="absolute left-65 top-[39px] bg-gray-300 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"><CircleX size={16} /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Mother Name</label>
                            <input id="mother" value={motherName} onChange={(e) => setMotherName(e.target.value)} type="text" placeholder="Roja Begum" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <button tabIndex={-1} onClick={() => document.getElementById("mother").value = ''} className="absolute left-65 top-[39px] bg-gray-300 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"><CircleX size={16} /></button>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">College Name</label>
                            <input value={collegeName} onChange={(e) => setCollegeName(e.target.value)} list="browsers" type="text" placeholder="Govt. Science College" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <datalist id="browsers">
                                <option value="Dhaka State College"></option>
                                <option value="Dhaka College"></option>
                            </datalist>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Group Name</label>
                            <input value={groupName} onChange={(e) => setGroupName(e.target.value)} list="groups" type="text" placeholder="Choose Anyone" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <datalist id="groups">
                                <option value="Science"></option>
                                <option value="Business Studies"></option>
                                <option value="Arts"></option>
                            </datalist>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">District Name</label>
                            <select defaultValue={districtName} onChange={(e) => setDistrictName(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800">
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
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">GPA</label>
                            <input id="gpa" value={GPA} onChange={(e) => setGPA(e.target.value)} type="text" placeholder="4.50" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <button tabIndex={-1} onClick={() => document.getElementById("gpa").value = ''} className="absolute left-65 top-[39px] bg-gray-300 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"><CircleX size={16} /></button>
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Birth Year</label>
                            <input id="birth" value={birthYear} maxLength={4} onChange={(e) => setBirthYear(e.target.value)} type="text" placeholder="2000" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <button tabIndex={-1} onClick={() => document.getElementById("birth").value = ''} className="absolute left-65 top-[39px] bg-gray-300 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"><CircleX size={16} /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Birth to Exam Year Duration</label>
                            <input id="year" value={year} maxLength={3} onChange={(e) => setYear(e.target.value)} type="number" placeholder="19" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <button tabIndex={-1} onClick={() => document.getElementById("year").value = ''} className="absolute left-65 top-[39px] bg-gray-300 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"><CircleX size={16} /></button>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Results Publish Date</label>
                            <input tabIndex={-1} value={storyear} onChange={(e) => setDate(e.target.value)} type="date" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800" disabled />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Reg. No</label>
                            <input id="reg" value={reg} maxLength={10} onChange={(e) => setReg(e.target.value)} type="text" placeholder="10 disits" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <button tabIndex={-1} onClick={() => document.getElementById("reg").value = ''} className="absolute left-65 top-[39px] bg-gray-300 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"><CircleX size={16} /></button>
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Roll No</label>
                            <input id="roll" value={roll} maxLength={6} onChange={(e) => setRoll(e.target.value)} type="text" placeholder="193596" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <button tabIndex={-1} onClick={() => document.getElementById("roll").value = ''} className="absolute left-65 top-[39px] bg-gray-300 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"><CircleX size={16} /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Serial No.</label>
                            <input id="sl" value={serial} maxLength={7} onChange={(e) => setSerial(e.target.value)} type="text" placeholder="7 disits" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800" />
                            <button tabIndex={-1} onClick={() => document.getElementById("sl").value = ''} className="absolute left-65 top-[39px] bg-gray-300 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"><CircleX size={16} /></button>
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">DBCHC</label>
                            <input id="dbchc" value={dbchc} maxLength={8} onChange={(e) => setDBCHC(e.target.value)} type="text" placeholder="8 disits" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                            <button tabIndex={-1} onClick={() => document.getElementById("dbchc").value = ''} className="absolute left-65 top-[39px] bg-gray-300 p-1 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"><CircleX size={16} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}