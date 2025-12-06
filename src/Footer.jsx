export default function Footer() {
    return (
        <footer className="text-white mt-12 p-6 w-full">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
                <p>© {new Date().getFullYear()} Nature Nook</p>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/profile.php?id=61560420995181">Facebook</a>
                    <a href="https://www.instagram.com/natureenook/">Instagram</a>
                    <a href="https://t.me/natureenook">Telegram</a>
                </div>
            </div>
        </footer>
    );
}
