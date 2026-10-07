import type { Doc } from "@/sanity/lib/content";
import { imgUrl } from "@/sanity/lib/image";
import ScrollVideo from "./ScrollVideo";

export default function QueersGotTalentVideo({ data, videoUrl }: { data: Doc; videoUrl: string }) {
    return (
        <div className="bg-white py-16 overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A2E]">
                    <span className="font-script text-[#7B2CBF] block sm:inline mr-3">{data.headingScript}</span>
                    <span className="font-bold tracking-tight">{data.headingMain}</span>
                </h2>
            </div>

            {/* Description Text */}
            <div className="max-w-4xl mx-auto px-6 mb-8">
                <div className="space-y-8">
                    <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed text-center">{data.intro}</p>
                    <div className="relative pt-8">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#EC4899] to-[#FF6B35] rounded-full"></div>
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic text-center font-medium">
                            &ldquo;{data.quote}&rdquo;
                        </p>
                    </div>
                </div>
            </div>

            {/* Video */}
            {videoUrl && (
                <div className="w-full px-4 sm:px-0">
                    <div className="relative w-full aspect-video sm:aspect-[21/9] max-h-[80vh] overflow-hidden">
                        <ScrollVideo
                            src={videoUrl}
                            poster={imgUrl(data.poster, 1200) || undefined}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
