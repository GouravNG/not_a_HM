const ScrollableConatainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`${className} w-full flex items-center justify-start gap-2 overflow-x-auto`}>{children}</div>
}
export default ScrollableConatainer
