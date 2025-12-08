
export default function VideoPlayer({ src }) {
    return (
        <div className="w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg mt-30">
            <video src={src} controls playsInline className="w-full h-auto" />
        </div>
    );
}
