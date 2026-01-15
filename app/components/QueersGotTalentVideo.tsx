
export default function QueersGotTalentVideo() {
    return (
        <div className="bg-white py-16 overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A2E]">
                    <span className="font-script text-[#7B2CBF] block sm:inline mr-3">Queers,</span>
                    <span className="font-bold tracking-tight">Got talent</span>
                </h2>
                <p className="font-script text-5xl sm:text-6xl lg:text-4xl italic">We can throw a mean party</p>
            </div>

            {/* Video */}
            <div className="w-full">
                <div className="relative w-full aspect-video sm:aspect-[21/9] max-h-[90vh] overflow-hidden bg-black/5">
                    <video
                        className="w-full h-full object-cover pointer-events-none"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="https://drive.google.com/uc?id=1MV3OP7_QsKjbj1xUyRu35omACxvW2hy4&export=download" type="video/mp4" />
                        Your browser does not support the video element.
                    </video>
                    <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
}
