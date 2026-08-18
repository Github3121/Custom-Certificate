export default function PersonalInfoForm({ studentName, setStudentName, studentName2, setStudentName2, fatherName, setFatherName, motherName, setMotherName, collegeName, setCollegeName, groupName, setGroupName, districtName, setDistrictName, GPA, setGPA, roll, setRoll, reg, setReg, year, setYear, date, setDate, serial, setSerial, dbchc, setDBCHC }) {

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 rounded-2xl">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">
                    <h2 className="text-2xl font-bold tracking-wide">Certificate Information</h2>
                    <p className="text-blue-100 text-sm mt-1">Please fill in your details to complete your certificate.</p>
                </div>

                <div className="p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">S. First Name</label>
                            <input value={studentName} onChange={(e) => setStudentName(e.target.value)} type="text" placeholder="Md. Rahat" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">S. Last Name</label>
                            <input value={studentName2} onChange={(e) => setStudentName2(e.target.value)} type="text" placeholder="Chowdhury" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Father Name</label>
                            <input value={fatherName} onChange={(e) => setFatherName(e.target.value)} type="text" placeholder="Md. Jabed Hossain" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Mother Name</label>
                            <input value={motherName} onChange={(e) => setMotherName(e.target.value)} type="text" placeholder="Roja Begum" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">College Name</label>
                            <input value={collegeName} onChange={(e) => setCollegeName(e.target.value)} type="text" placeholder="Govt. Science College" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Group Name</label>
                            <input value={groupName} onChange={(e) => setGroupName(e.target.value)} type="text" placeholder="'Science', 'Business', 'Humanity'" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">District Name</label>
                            <select defaultValue={districtName} onChange={(e) => setDistrictName(e.target.value)} className="select w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800">
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
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">GPA</label>
                            <input value={GPA} onChange={(e) => setGPA(e.target.value)} type="text" placeholder="4.50" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Reg. No /Session Year</label>
                            <input value={reg} onChange={(e) => setReg(e.target.value)} type="text" placeholder="1410698888 /2017-18" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Roll No</label>
                            <input value={roll} onChange={(e) => setRoll(e.target.value)} type="text" placeholder="19 35 96" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Date</label>
                            <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Exam Year</label>
                            <input value={year} onChange={(e) => setYear(e.target.value)} type="text" placeholder="2019" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Serial No.</label>
                            <input value={serial} onChange={(e) => setSerial(e.target.value)} type="text" placeholder="1526483" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">DBCHC</label>
                            <input value={dbchc} onChange={(e) => setDBCHC(e.target.value)} type="text" placeholder="25453678" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-800 placeholder-slate-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}