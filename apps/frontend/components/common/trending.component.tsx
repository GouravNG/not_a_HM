const TrendingCategories = () => {
    return (
        <div className="flex flex-col items-center justify-between py-16 w-full">
            <p className="py-2">Trending right now</p>
            <div className="flex items-center justify-center py-1 w-full gap-2 text-nowrap">
                <p className="border border-black p-4 font-semibold text-sm">Red Shirts for Men</p>
                <p className="border border-black p-4 font-semibold text-sm">Red Shirts for Men</p>
                <p className="border border-black p-4 font-semibold text-sm">Red Shirts for Men</p>
            </div>
            <p className="text-sm py-2">Show More (+32)</p>
        </div>
    )
}

export default TrendingCategories
