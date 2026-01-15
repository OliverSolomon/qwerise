
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
            <div className="w-full px-4 sm:px-0">
                <div className="relative w-full aspect-video sm:aspect-[21/9] max-h-[80vh] overflow-hidden bg-black/5">
                    {/* 
                        To use Google Drive:
                        1. Share the video 'Anyone with the link can view'
                        2. Open the video in Drive -> Three dots -> 'Open in new window'
                        3. Three dots -> 'Embed item...'
                        4. Copy the URL from the src attribute and paste it below
                    */}
                    <iframe
                        src="https://drive.google.com/file/d/1MV3OP7_QsKjbj1xUyRu35omACxvW2hy4/preview"
                        className="w-full h-full border-0"
                        allow="autoplay"
                        title="Queers Got Talent Highlights"
                    ></iframe>
                    <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
}
