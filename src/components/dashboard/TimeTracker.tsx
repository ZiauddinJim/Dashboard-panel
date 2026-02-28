import { useEffect, useMemo, useState } from 'react';
import { IoStop } from "react-icons/io5";
import { TiMediaPause, TiMediaPlay } from "react-icons/ti";

function pad(n: number) {
    return String(n).padStart(2, "0")
}

const TimeTracker = () => {
    const [running, setRunning] = useState(true)
    const [sec, setSec] = useState(60 * 84 + 8) // 01:24:08 like mock

    useEffect(() => {
        if (!running) return
        const t = setInterval(() => setSec((s) => s + 1), 1000)
        return () => clearInterval(t)
    }, [running])

    const time = useMemo(() => {
        const h = Math.floor(sec / 3600)
        const m = Math.floor((sec % 3600) / 60)
        const s = sec % 60
        return `${pad(h)}:${pad(m)}:${pad(s)}`
    }, [sec])

    return (
        <div className="col-span-12 lg:col-span-3 bg-[#113f28] rounded-2xl p-6 text-white shadow-sm relative overflow-hidden flex flex-col justify-between">
            {/* Decorative Wavy Lines Background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden mix-blend-screen">
                <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
                    <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="#2b7a4b" strokeWidth="8" strokeLinecap="round" className="animate-pulse" />
                    <path d="M0,130 Q100,80 200,130 T400,130" fill="none" stroke="#2b7a4b" strokeWidth="6" strokeLinecap="round" />
                    <path d="M0,160 Q100,110 200,160 T400,160" fill="none" stroke="#1b5232" strokeWidth="12" strokeLinecap="round" />
                    <path d="M0,190 Q100,140 200,190 T400,190" fill="none" stroke="#1b5232" strokeWidth="10" strokeLinecap="round" />
                    <path d="M0,220 Q100,170 200,220 T400,220" fill="none" stroke="#0a2a18" strokeWidth="16" strokeLinecap="round" />
                    <path d="M0,250 Q100,200 200,250 T400,250" fill="none" stroke="#0a2a18" strokeWidth="12" strokeLinecap="round" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-white/80 font-medium text-sm mb-auto">Time Tracker</h3>

                <div className="mt-6 text-4xl font-semibold tracking-tight">{time}</div>

                <div className="mt-5 flex items-center gap-3">
                    <button
                        onClick={() => setRunning((v) => !v)}
                        className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/15"
                        title="Pause/Play"
                    >
                        <div className="text-2xl font-bold m-2">
                            {running ? <TiMediaPause /> : <TiMediaPlay />}
                        </div>
                    </button>
                    <button onClick={() => setSec(0)}
                        className="h-11 w-11 rounded-full bg-red-500/90 hover:bg-red-600"
                        title="Reset" >
                        <IoStop className="text-2xl m-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimeTracker;
